const fs = require('fs');
const inquirer = require('inquirer');

const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const { completeTeam } = require("./src/template.js")

let teamArray = [];

const managerQuestions = [
    {
        type: "input",
        name: "managerName",
        message: "What is the Manager's name?" + "(Required)"
    },
    {
        type: "input",
        name: "managerId",
        message: "What is the Manager's employee ID?" + "(Required)"
    },
    {
        type: "input",
        name: "managerEmail",
        message: "What is the Manager's email address?" + "(Required)"
    },
    {
        type: "input",
        name: "officeNumber",
        message: "What is the Manager's office number?" + "(Required)"
    }
];

const engineerQuestions = [
    {
        type: "input",
        name: "engineerName",
        message: "What is the Engineer's name?" + "(Required)"
    },
    {
        type: "input",
        name: "engineerId",
        message: "What is the Engineer's employee ID?" + "(Required)"
    },
    {
        type: "input",
        name: "engineerEmail",
        message: "What is the Engineer's email address?" + "(Required)"
    },
    {
        type: "input",
        name: "github",
        message: "What is the Engineer's GitHub username?" + "(Required)"
    }
];

const internQuestions = [
    {
        type: "input",
        name: "internName",
        message: "What is the Intern's name?" + "(Required)"
    },
    {
        type: "input",
        name: "internId",
        message: "What is the Intern's employee ID?" + "(Required)"
    },
    {
        type: "input",
        name: "internEmail",
        message: "What is the Intern's email address?" + "(Required)"
    },
    {
        type: "input",
        name: "school",
        message: "What is the Intern's school?" + "(Required)"
    }
];

//functions for adding roles
function addManager() {
    inquirer.prompt(managerQuestions)
    .then(function(data) {
        const name = data.managerName
        const id = data.managerId
        const email = data.managerEmail
        const officeNumber = data.officeNumber
        const manager = new Manager(name, id, email, officeNumber)
        teamArray.push(manager)
        console.log(teamArray)
        addTeamMembers();
    })
}

function addTeamMembers() {
    inquirer.prompt([
        {
            type: "list",
            message: "Do you want to add another team member?",
            name: "addMember",
            choices: ["Add an Engineer", "Add an Intern", "Finish building the team" ]
        }
    ])
    .then(function(data) {
        switch (data.addMember) {
            case "Add an Engineer":
                addEngineer();
                break;

            case "Add an Intern":
                addIntern();
                break;

            case "Finish building the team":
                completeTeam(teamArray);
                break;
        }
    })
}

function addEngineer() {
    inquirer.prompt(engineerQuestions)
    .then(function(data) {
        const name = data.engineerName
        const id = data.engineerId
        const email = data.engineerEmail
        const github = data.github
        const engineer = new Engineer(name, id, email, github)
        teamArray.push(engineer)
        console.log(teamArray)
        addTeamMembers()
    })
}

function addIntern() {
    inquirer.prompt(internQuestions)
    .then(function(data) {
        const name = data.internName
        const id = data.internId
        const email = data.internEmail
        const school = data.school
        const intern = new Intern(name, id, email, school)
        teamArray.push(intern)
        console.log(teamArray)
        addTeamMembers()
    })
}



addManager();

