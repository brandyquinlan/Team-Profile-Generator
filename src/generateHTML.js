function generateHTML(team) {
    return `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
    <title>Document</title>
  </head>
  <body>
    <div class="jumbotron jumbotron-fluid">
    <div class="container">
      <h1 class="display-4">${team[0].name}</h1>
      <p class="lead">${team[0].role}</p>
      <ul class="list-group">
        <li class="list-group-item">id: ${team[0].id}</li>
        <li class="list-group-item">email: ${team[0].email}</li>
        <li class="list-group-item">office: ${team[0].office}</li>
      </ul>
    </div>
  </div>
  </body>
  </html>`

}

module.exports = generateHTML;