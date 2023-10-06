class formPage {
    elements = {
        petnameInput: () => cy.get('[data-testid="pet"]'),
        ownernameInput: () => cy.get('[data-testid="owner"]'),
        dateInput: () => cy.get('[data-testid="date"]'),
        timeInput: () => cy.get('[data-testid="time"]'),
        symptomsInput: () => cy.get('[data-testid="symptoms"]'),
        submitButton: () => cy.get('[data-testid="btn-submit"]'),
    };

    typePetName(petname) {
        this.elements.petnameInput().type(petname)
    }

    typeOwnerName(ownername) {
        this.elements.ownernameInput().type(ownername)
    }

    typeDate(date) {
        this.elements.dateInput().type(date)
    }

    typeTime(time) {
        this.elements.timeInput().type(time)
    }

    typeSymptoms(symptoms) {
        this.elements.symptomsInput().type(symptoms)
    }

    clickSubmit() {
        this.elements.submitButton().click()
    }

}

module.exports = new formPage();