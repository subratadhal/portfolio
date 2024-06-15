
# Getting Started with Create React App deployment in gitlab


Run code local
```python
npm start
```
Runs the app in the development mode.\
Open [http://localhost:3000/portfolio](http://localhost:3000/portfolio) to view it in your browser.

# `Deploy Code`

There are two branch: master[Master], live[Dev].

## `Process 1:`

After all development will be done in live branch.
```python
git add .
git commit -m 'message'
git push origin live
```
Now all local changes are pushed in live branch.

## `Process: 2`
Checkout to master branch. Take pull from live branch and run deployment script.
```python
git checkout master
git pull origin live
```
Now master branch also updated with all chagnes in live branch


### `Deployment`
01| Create a new branch from "live" branch like "master02"
```python
git checkout master02
```
02| Take pull from "live"
```python
git pull origin live
npm i
```
03| Update live branch "master" with new branch "master02"
```python
"deploy": "gh-pages -b master -d build",
```
to
```python
"deploy": "gh-pages -b master02 -d build",
```

05| Set default branch in gitHub Page
Change "buid and deployment" sourse to "master02" branch and press SAVE

06| run deployment script
```python
npm run deploy
```



Check the [https://subratadhal.github.io/portfolio](https://subratadhal.github.io/portfolio) for updated


# `Setup`

How to deploy react code as GitHub Pages.
Open your package.json and add a homepage field for your project:
"homepage": "https://subratadhal.github.io/portfolio",

Add the following scripts in your package.json:

```python
"scripts": {
+   "predeploy": "npm run build",
+   "deploy": "gh-pages -b main -d build",
    "start": "react-scripts start",
    "build": "react-scripts build",
```

Install gh-pages and add deploy to scripts in package.json
```python
npm install --save gh-pages
```

# `Reference`

[https://github.com/gitname/react-gh-pages](https://github.com/gitname/react-gh-pages)

[https://create-react-app.dev/docs/deployment/#github-pages](https://create-react-app.dev/docs/deployment/#github-pages)
