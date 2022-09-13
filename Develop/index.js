// TODO: Include packages needed for this application
var inquirer = require('inquirer');
const fs = require('fs');
// const { default: Choices } = require('inquirer/lib/objects/choices');
// TODO: Create an array of questions for user input

inquirer.prompt ([
    {
        type: "input",
        name: "title",
        message: "Project name?"

    },
    {
        type: "input",
        name: "Description",
        message: "Describe your project!"
    },
    {
        type: "input",
        name: "Github",
        message: "What is your Github username?"
    },
    {
        type: "input",
        name: "Use",
        message: "How do you use this?"
    },
    {
        type: "list",
        name: "License",
        message: "Add your licenses! If not applicable then select 'none'.",
        choices: [
            "n/a",
            "zLib License",
            "University of Illinois/NCSA Open Source License",
            "SIL Open Font License 1.1",
            "PostgreSQL License",
            "Open Software License 3.0",
            "Mozilla Public License 2.0",
            "MIT",
            "Microsoft Public License",
            "LaTeX Project Public License v1.3c",
            "ISC",
            "GNU Lesser General Public License v3.0",
            "GNU Lesser General Public License v2.1",
            "GNU General Public License family",
            "European Union Public License 1.1",
            "Eclipse Public License 2.0",
            "Educational Community License v2.0",
            "Creative Commons Attribution 4.0",
            "Creative Commons license family",
            "BSD 2-claus license",
            "Boost Software License 1.0",
            "Apache license 2.0",
            "Academic Free License v3.0",
            
        ],
    },
    {
        type: "input",
        name: "contributation",
        message: "How can one contribute, if applicable."
    },
    {
        type: "input",
        name: "Test",
        message: "How can one test this?"
    },
    {
        type: "input",
        name: "contact",
        message: "Best email to reach you!SS"
    },

]);

// TODO: Create a function to write README file
function writeToFile(fileName, data) { 
    fs.writeFile("README.md",  err => {
        if (err) {
            console.log(err);
            return console.log('Oops, something happened!');
        } else {
        console.log("README.md file has been created!")
        }s
    })
};

// TODO: Create a function to initialize app
function init() {
}

// Function call to initialize app
init(); 