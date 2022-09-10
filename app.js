const createReactCode = () => {
    const userName = document.querySelector('.url.fn').textContent
    const repName = document.querySelector('.mr-2.flex-self-stretch').textContent.trim()
    const folderName = repName

    const textGit = `git init && git remote add origin https://github.com/${userName}/${repName}.git && git add . &&  git commit -m "init" && git push origin master`
    const textReact = `
npx create-react-app ${folderName}
&& cd ${folderName} && npm i bootstrap@5.1.0
&& git init && git remote add origin https://github.com/${userName}/${repName}.git
&& git add .
&& git commit -m "init"
&& git push origin master
&& npm install gh-pages --save-dev
&& sed -i 's/"name"/"homepage": "https:\\/\\/${userName}.github.io\\/${repName}","name"/g' package.json
&& sed -i 's/"react-scripts eject"/"react-scripts eject","predeploy": "npm run build", "deploy": "gh-pages -d build"/g' package.json
&& sed -i 's/https:\\/\\/reactjs.org/https:\\/\\/${userName}.github.io\\/${repName}/g' ./src/App.js
&& sed -i 's/Learn React/Go to my website/g' ./src/App.js
&& npm run deploy
&& npm start`

    const a = document.querySelector('.Box-header.Box-header--blue')
    const b = document.createElement('div')
    b.innerHTML = '<br><br><h3>Copy the text below to initialize git in your project</h3>' + textGit
        + '<br><br><h3>Copy the text below to initialize the React project</h3>' + textReact
    a.append(b)
}

createReactCode()

// document.addEventListener("keydown", (event) => {
//     const key = event.key;
//     if (key === 'Tab') {
//         createReactCode()
//     }
// })