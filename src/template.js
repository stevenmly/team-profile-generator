const fs = require('fs');

function completeTeam() {
    console.log("Team Completed")
    const htmlArray = []
    const htmlBeginning = `
    <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <title>My Team</title>

            <link rel="stylesheet" href="./styles.css">
        </head>
        <body>
            <div class="banner-bar">
                <h1>My Team</h1>
            </div>
            <div class="card-container">
            `
            htmlArray.push(htmlBeginning);

            for (let i = 0; i < teamArray.length; i++) {
                let object = `
                <div class="member-card">
                    <div class="card-top">
                        <h2>${teamArray[i].name}</h2>
                        <h2>${teamArray[i].getRole()}</h2>
                    </div>
                    <div class="card-bottom list-group">
                    <li>Employee ID: ${teamArray[i].id}</li>
                    <li>Email: <a href="mailto:${teamArray[i].email}">${teamArray[i].email}</a></li>
                `
                if (teamArray[i].officeNumber) {
                    object += `
                    <li>Office Number: ${teamArray[i].officeNumber}</li>
                    `
                }
                if (teamArray[i].github) {
                    object += `
                    <li class="list-group-item">GitHub: <a href="https://github.com/${teamArray[i].github}">${teamArray[i].github}</a></li>
                    `
                }
                if (teamArray[i].school) {
                    object += `
                    <li class="list-group-item">School: ${teamArray[i].school}</li>
                    `
                }
                object += `
                </div>
                </div>
                `
                htmlArray.push(object)
            }

    const htmlEnd = `
            </div>
            </body>
            </html>
            `
    htmlArray.push(htmlEnd);

    fs.writeFile(`./dist/myteam.html`, htmlArray.join(""), function (err) {

    })
}

module.exports = { completeTeam };