/// <reference types="Cypress" />

import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
const formPage = require("../pages/formPage");
const appointmentPage = require("../pages/appointmentPage");

Given("The client navigates to the appointment page", function () {
    cy.visit('http://localhost:3000/')
})

When("The client fills all the fields in the form and clicks add appointment", function () {
    formPage.typePetName('Ivy')
    formPage.typeOwnerName('Thiago')
    formPage.typeDate('2022-12-30')
    formPage.typeTime('14:00')
    formPage.typeSymptoms('Coughing')
    formPage.clickSubmit()
})

Then("The appointment should be created", function () {
    cy.get('[data-testid="appointment"]').should('be.visible')
})


Given("The client created an appointment", function () {
    cy.get('[data-testid="appointment"]').should('be.visible')
})

When("The client clicks the button delete", function () {
    appointmentPage.clickDelete()
})

Then("The appointment should be deleted", function () {
    cy.get('[data-testid="appointment"]').should('not.exist')
})

When("The client clicks add appointment without filling the form", function () {
    formPage.clickSubmit()
})

When("The client inputs a date in the past and clicks add appointment", function () {
    formPage.typePetName('Ivy')
    formPage.typeOwnerName('Thiago')
    formPage.typeDate('2000-12-30')
    formPage.typeTime('14:00')
    formPage.typeSymptoms('Coughing')
    formPage.clickSubmit()
})

Then("The page should display an error message", function () {
    cy.get('[data-testid="alert"]').should('be.visible')
})