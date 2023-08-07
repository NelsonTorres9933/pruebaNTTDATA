# Test for NTT Data

To run the tests you must first install the dependencies with the command:

```
npm install
```

## Automation of a web site

The automation of the web site is located in the Cypress folder.

To run the Cypress tests use the following command:

```
npx cypress run
```

The test performs the screenshot found in the path [cypress/screenshots/spec.cy.js/](cypress/screenshots/spec.cy.js/)

Two screenshots are created:

1. Screenshot of the text fragment where it says which was the first automated process
2. Screenshot of the complete Wikipedia.org website

## Data processing in APIs

The files created for the API treatment tests are located in the [test folder](test/)

The apiScript.js file contains all the tests made for the APIs treatment.

To execute them the Mocha dependency was implemented, the following command has been created to be able to execute them:

```
npm run test
```

The file petsNumber.js contains the class implemented to know which pets were obtained from the pets sold service, it has the same name

The tests create json files with the outputs of each specific test.

The created files are located in the [fixtures folder](fixtures)

1. userInfoToCreate.json: user information to use in the user creation service
2. userInfoCreated.json: response from the user creation service
3. petsSold.json: list of pets sold with the structure {id, name}
4. numberOfPets.json: list of pet names sold with the number of times they are repeated
