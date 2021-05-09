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
    <h5 class="card-title">${answers.name}</h5>
    <h6 class="card-title">${answers.title}</h6>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">ID:${answers.id}</li>
    <li class="list-group-item" href="#" class="card-link">Email:${answers.email}</li>
    <li class="list-group-item"href="#" class="card-link">${answers.github}</li>
  </ul>
  <div class="card-body">
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
  </div>
</div>

${answers.name}
${answers.title}
${answers.id}
${answers.email}
${answers.github}

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
      type: "input",
      name: "title",
      message: "What is the title? "
  },
  {
      type: "input",
      name: "id",
      message: "What is the id ",
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
