const inquirer = require('inquirer');
const fs = require('fs');

const generateHTML = (answers) =>
  `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
  <title>Document</title>
</head>
<body>
<div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">An item</li>
    <li class="list-group-item">A second item</li>
    <li class="list-group-item">A third item</li>
  </ul>
  <div class="card-body">
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
  </div>
</div>

  <div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-4">Hi! My n${answers.name}</h1>
    <p class="lead">I am from ${answers.location}.</p>
    <h3>Example heading <span class="badge badge-secondary">Contact Me</span></h3>
    <ul class="list-group">
      <li class="list-group-item">My GitHub username is ${answers.github}</li>
      <li class="list-group-item">LinkedIn: ${answers.linkedin}</li>
    </ul>
  </div>
</div>
</body>
</html>`;

inquirer
  .prompt([
    {
      type: "input",
      name: "name",
      message: "What is the team manager's name",
  },
  {
      type: "input",
      name: "location",
      message: "Write a summary of the project: "
  },
  {
      type: "input",
      name: "github",
      message: "What command should be run to install dependencies: ",
  },
  {
      type: "list",
      name: "license",
      message: "Choose the appropriate license for this project: ",
      choices: [
          "Apache",
          "Academic",
          "GNU",
          "ISC",
          "MIT",
          "Mozilla",
          "Open"
      ]
  },

  {
      type: "input",
      name: "tests",
      message: "What command should be run to run tests?"
  },
 
  {
      type: "input",
      name: "username",
      message: "Please enter your GitHub username: "
  },
  {
      type: "input",
      name: "email",
      message: "Please enter your email: "
  }
  ])
  .then((answers) => {
    console.log(answers)
    const htmlPageContent = generateHTML(answers);

    fs.writeFile('index.html', htmlPageContent, (err) =>
      err ? console.log(err) : console.log('Successfully created index.html!')
    );
  });
