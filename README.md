# Getting Started with Create React App deployment in gitlab


Run code local
### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000/portfolio] to view it in your browser.


# `Deploy Code`

There are two branch: main[Master], live[Dev].

## `Process 1:`
After all development will be done in live branch.
use: 
git add .
git commit -m 'message'
git push origin live
Now all local changes are pushed in live branch.

## `Process: 2`
checkout to main branch. Take pull from live branch and run deployment script.

git checkout main
git pull origin live

now main branch also updated with all chagnes in live branch

### `Deployment`

npm run deploy

check the [https://subratadhal.github.io/portfolio] for updated


# `Setup`

How to deploy react code as GitHub Pages.
Open your package.json and add a homepage field for your project:
"homepage": "https://subratadhal.github.io/portfolio",

Add the following scripts in your package.json:

"scripts": {
+   "predeploy": "npm run build",
+   "deploy": "gh-pages -b main -d build",
    "start": "react-scripts start",
    "build": "react-scripts build",


Step 2: Install gh-pages and add deploy to scripts in package.json

npm install --save gh-pages




# `Reference`

https://github.com/gitname/react-gh-pages
https://create-react-app.dev/docs/deployment/#github-pages