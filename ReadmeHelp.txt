Reference:
REACT + NODEJS Сайт за 3 часа с нуля
https://www.youtube.com/watch?v=ivDjWYcKDZI&list=PLqKQF2ojwm3l6OE4-tjLBhUNtJXLebHXP&index=1&ab_channel=%D0%92%D0%BB%D0%B0%D0%B4%D0%B8%D0%BB%D0%B5%D0%BD%D0%9C%D0%B8%D0%BD%D0%B8%D0%BD

1. Create folder with project name(lowercase)

2. Project inicialization
npm init 

3. GitHub
git init
3.1 Create .gitignore and add ignored folder/files to .gitignore
3.2 To remove folder/directory only from git repository and not from the local 
git rm -r --cached myFolder

3.3 Add to GitHub
git add .
git commit -m "first commit"
git remote add origin https://github.com/ILLYAKO/confectionery.git
git push -u origin master

3. Install express node, mongo DB
npm install express mongoose

4. Install nodemon concurrently in Developent stage
npm install -D nodemon concurrently

5. package.json
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node app.js",
    "server": "nodemon app.js"
  },

6. Run server
npm run server

7. Server exit
Ctrl+C

8. Config 9:31
npm i config
8.1 Create folder /config

8.2 Create file /config/default.json
{
  "port": 5000
}

9.Conection to mongoose
const mongose = require("mongoose");

9.1 Sign In mongodb.com
context->New Project-> Project name-> confectionery -> Create Project -> 
-> Build Cluster -> Create a cluster FREE -> Cloud "Azure" -> Toronto ->
-> Create Cluster -> CONNECT ->Add Your Current IP Adress -> Add IP Address
Username: IllyaAdmin
Password: Test123
-> Create Database User -> Choose a connection method
-> Connect Your Application -> Add your connection striing into your application code -> Copy -> Close
mongodb+srv://IllyaAdmin:<password>@cluster0.uiyyc.mongodb.net/<dbname>?retryWrites=true&w=majority
"mongoUri":"mongodb+srv://IllyaAdmin:Test123@cluster0.uiyyc.mongodb.net/app?retryWrites=true&w=majority"

10. Routes 20:48
Create new folder /routes

11. Models 26:30
Create /model/User.js

12. bcrypt.js
npm i bcryptjs

13 Validator
npm i express-validator

14. Json Web Token
npm i jsonwebtoken

15. Create React Application
npx create-react-app client
cd client
rm node_modules

16. Install in /client
npm i

17. package.json
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node app.js",
    "server": "nodemon app.js",
    "client": "npm run start --prefix client",
    "dev": "concurrently \"npm run server\" \"npm run client\""
  },

18 Start client-side and server from server folder.
cd.. // go up
npm run dev

19. Bootstrap
npm install react-bootstrap bootstrap

20. React Router
cd client
npm i react-router-dom

21 Forms

22. Hook 1:18:44

23. Proxy in client/package.json
"proxy": "http://localhost:5000",

1:33:06

24. Toast 1:38;24

1:44:21



