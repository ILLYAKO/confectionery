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
npm install express mongose

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
