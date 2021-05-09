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
<div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${answers.name2}</h5>
    <h6 class="card-title">${answers.title2}</h6>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">ID:${answers.id2}</li>
    <li><a href="mailto:" class="card-link">Email:${answers.email2}</a></li>
    <li><a href="https://github.com/sgc1992" class="card-link">Github Username:${answers.github2}</a></li>
  </ul>
</div>
<div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${answers.name3}</h5>
    <h6 class="card-title">${answers.title3}</h6>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">ID:${answers.id3}</li>
    <li><a href="mailto:" class="card-link">Email:${answers.email3}</a></li>
    <li><a href="https://github.com/sgc1992" class="card-link">Github Username:${answers.github3}</a></li>
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
    },
    {
      type: "input",
      name: "name2",
      message: "What is your second team member name",
    },
    {
      type: "list",
      name: "title2",
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
      name: "id2",
      message: "What is the id ",
    },

    {
      type: "input",
      name: "github2",
      message: "Please enter your GitHub username: "
    },
    {
      type: "input",
      name: "email2",
      message: "Please enter your email: "
    },
    {
      type: "input",
      name: "name3",
      message: "What is your third team member name",
    },
    {
      type: "list",
      name: "title3",
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
      name: "id3",
      message: "What is the id ",
    },

    {
      type: "input",
      name: "github3",
      message: "Please enter your GitHub username: "
    },
    {
      type: "input",
      name: "email3",
      message: "Please enter your email: "
    },
  ])
  .then((answers) => {
    console.log(answers)
    const htmlPageContent = generateHTML(answers);

    fs.writeFile('index.html', htmlPageContent, (err) =>
      err ? console.log(err) : console.log('Successfully created index.html!')
    );
  });
