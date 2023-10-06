class appointmentPage {
    elements = {
        deleteButton: () => cy.get('[data-testid="btn-delete"]'),
    }

    clickDelete() {
        this.elements.deleteButton().click()
    }
}

module.exports = new appointmentPage();