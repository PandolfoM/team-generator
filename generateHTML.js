const Manager = require("./lib/Manager");

function generateHTML(data) {
  console.log(data)
  return `
  <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css">
      <link rel="stylesheet" href="./style.css">
      <title>Team Generator</title>
    </head>
    <body>
      ${data}
    </body>
    </html>
  `
}

module.exports = generateHTML;
