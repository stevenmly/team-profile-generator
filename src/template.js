const fs = require('fs');

function completeTeam(team) {
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

            for (let i = 0; i < team.length; i++) {
                let object = `
                <div class="member-card">
                    <div class="card-top">
                        <h2>${team[i].name}</h2>`
                        if (team[i].getRole() === "Manager") {
                            object += `<h2><i class="fas fa-user-tie"></i>`
                        }
                        if (team[i].getRole() === "Engineer") {
                            object += `<h2><i class="fas fa-code-branch"></i>`
                        }
                        if (team[i].getRole() === "Intern") {
                            object += `<h2><i class="fas fa-graduation-cap"></i>`
                        }
                        object += ` ${team[i].getRole()}</h2>
                    </div>
                    <div class="card-bottom list-group">
                        <li>Employee ID: ${team[i].id}</li>
                        <li>Email: <a href="mailto:${team[i].email}">${team[i].email}</a></li>`
                if (team[i].officeNumber) {
                    object += `
                    <li>Office Number: ${team[i].officeNumber}</li>
                    `
                }
                if (team[i].github) {
                    object += `
                    <li class="list-group-item">GitHub: <a href="https://github.com/${team[i].github}" target="_blank">${team[i].github}</a></li>
                    `
                }
                if (team[i].school) {
                    object += `
                    <li class="list-group-item">School: ${team[i].school}</li>
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