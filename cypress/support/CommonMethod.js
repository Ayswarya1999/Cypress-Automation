 const myEnv = Cypress.env("Enviroment")

class CommonMethod{
    static beforeTest()
     {
        
        cy.fixture(myEnv).then(function (data) {
            this.data = data
       })
        cy.fixture('Locators').then(function (locator) {
            this.locator = locator
        })
     }
     static CurrentDate()
     {
        var newDate = new Date().toDateString();
        newDate = newDate.split(" ")
        newDate = newDate[1] + " " + newDate[2] + ", " + newDate[3]
        return newDate
    }
    }
export default CommonMethod;