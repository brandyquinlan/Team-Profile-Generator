# 10 Object-Oriented Programming: Team Profile Generator

## Table of Contents

- [Description](#program-description)
- [Installation](#installation-instructions)
- [Usage](#usage-information) 
- [License](#licenses) 
- [Contributing](#contributing)
- [Tests](#tests)
- [DEMO VIDEO](#DEMO-click-link-to-view)
- [Screenshots](#screenshots)
- [Questions](#questions)

## Program Description
A Node.js command-line application that takes in information about employees on a software engineering team, then generates an HTML webpage that displays summaries for each person. Inquirer and Jest packages are used.

## URL and Repo Location
The url for the site is: (https://brandyquinlan.github.io/Team_Profile_Generator/)<br>
The repo is located here: (https://github.com/brandyquinlan/Team_Profile_Generator/)

## Installation Instructions
  Run the command "npm i" to install dependencies

### Usage information
  To use the application, run the command "node index.js"

### Licenses
  none

### Contributing
  none

## Tests
```
Employee.test.js
Engineer.test.js
Intern.test.js
Manager.test.js
```
 
## DEMO
* [Link to demo (https://drive.google.com/file/d/1gAw_Z9mYlSkxO-PZpA-X3sgWMqO1pMaK/view?usp=sharing)](https://drive.google.com/file/d/1gAw_Z9mYlSkxO-PZpA-X3sgWMqO1pMaK/view?usp=sharing)

## Screenshots

### User Story
```
AS A manager
I WANT to generate a webpage that displays my team's basic info
SO THAT I have quick access to their emails and GitHub profiles
```
### HTML file dynamically generated with NodeJS CLI
![output HTML](src/Team_Profile_HTML_Output.png)
#### Responsive Design
![output HTML responsive](src/Team_Profile_HTML_Output_res.png)

### Acceptance Criteria
```
WHEN I start the application
  THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
WHEN I enter the team manager’s name, employee ID, email address, and office number
  THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
WHEN I select the engineer option
  THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
WHEN I select the intern option
  THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
WHEN I decide to finish building my team
  THEN I exit the application, and the HTML is generated
```
### CLI-Meets all Acceptance Criteria
![cli](src/cli.png)

## Questions
Please contact me with questions:
```
Brandy Quinlan
Email: brandyquinlan@gmail.com
Github link: brandyquinlan
```
