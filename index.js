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
<nav class="navbar navbar-dark bg-primary">
    My Team
  </nav>
<nav class="navbar navbar-red bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">My Team</a>
  </div>
</nav>

<div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${answers.name}</h5>
    <h6 class="card-title">${answers.title}</h6>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">ID:${answers.id}</li>
    <li><a href="mailto:" class="card-link">Email:${answers.email}</a></li>
    <li><a href="https://github.com/sgc1992" class="card-link">Github Username:${answers.github}</a></li>
  </ul>
</div>
</body>
</html>`;

inquirer
  .prompt([
    {
      type: "input",
      name: "name",
      message: "What is the team member name",
    },
    {
      type: "list",
      name: "title",
      message: "Choose the title of the team members",
      choices: [
        "Software Engineer",
        "Project Manager",
        "Account Manager",
        "Data Scientist",
      ]
    },
    {
      type: "input",
      name: "id",
      message: "What is the id ",
    },
  

    {
      type: "input",
      name: "github",
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
