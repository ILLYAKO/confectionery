const { Router } = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");
const { check, validationResult } = require("express-validator");

const User = require("../models/User");

const router = Router();

// "/api/auth/register"
router.post(
  "/register",
  [
    check("email", "Enter correct email").normalizeEmail().isEmail(),
    check("password", "Enter password").exists(),
  ],
  async (req, res) => {
    try {
      const inputErrors = validationResult(req);
      if (!inputErrors.isEmpty()) {
        return res.status(400).json({
          errors: inputErrors.array(),
          message: "Input is not correct.",
        });
      }

      const { email, password } = req.body;

      const user = await User.findOne({ email });

      if (!user) {
        return res.status(400).json({ message: "User is not found." });
      }

      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).json({ message: "Wrong password, try again." });
      }

      const token = jwt.sign({ userId: user.id }, config.get("jwtSecret"), {
        expiresIn: "1h",
      });
      res.json({ token, userID: user.id });
    } catch (e) {
      res.status(500).json({ message: "Oops! Try again." });
    }
  }
);

//"/api/auth/login"
router.post(
  "/login",
  [
    check("email", "Email is not valid.").isEmail(),
    check("password", "Min password length is 6 symbols.").isLength({ min: 6 }),
  ],
  async (req, res) => {
    try {
      const inputErrors = validationResult(req);
      if (!inputErrors.isEmpty()) {
        return res.status(400).json({
          errors: inputErrors.array(),
          message: "Input is not correct.",
        });
      }

      const { email, password } = req.body;

      const candidate = await User.findOne({ email });

      if (candidate) {
        return res.status(400).json({ message: "User exist." });
      }

      const hashedPassword = await bcrypt.hash(password, 12);
      const user = new User({ email, password: hashedPassword });
      const iscreatedUser = await user.save();
      console.log(iscreatedUser);
      res.status(201).json({ message: "User created." });
    } catch (e) {
      res.status(500).json({ message: "Oops! Try again." });
    }
  }
);

module.exports = router;
