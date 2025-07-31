
import {
    CONSTRUCTOR_SELECTOR,
    INGREDIENT_SELECTOR,
    MODAL_SELECTOR,
} from "../../src/utils/constants";

describe('home page tests', () => {

    beforeEach(() => {
        cy.prepare()
    })


    it('ingredients should drag to constructor', () => {
        cy.dragAndDrop()

        cy.get(CONSTRUCTOR_SELECTOR).should('contain', 'Ингредиент')
        cy.get('[data-upper-bun=upper-bun]').should('contain', 'Булка (верх)')
        cy.get('[data-lower-bun=lower-bun]').should('contain', 'Булка (низ)')
    });

    it ('ingredients modal should open/close', () => {
        cy.get(INGREDIENT_SELECTOR).should('exist').as('ingredient');
        cy.get('@ingredient').eq(1).click()
        cy.get(MODAL_SELECTOR).should('exist').as('modal')
        cy.get('@modal').find('button').click()
        cy.get('@modal').should('not.exist')
    })

    it ('ingredients modal should contains information about ingredient', () => {
        cy.get(INGREDIENT_SELECTOR).should('exist').as('ingredient');
        cy.get('@ingredient').eq(1).click()
        cy.get(MODAL_SELECTOR).should('contain', 'Булка').as('modal');
        cy.get('@modal').find('button').click()
        cy.get('@ingredient').eq(3).click()
        cy.get(MODAL_SELECTOR).should('contain', 'Ингредиент')
    })

    it('open/close order modal', () => {
        cy.dragAndDrop()

        cy.get('[data-button-div=button-div]').find('button').click()
        cy.get(MODAL_SELECTOR).should('exist').as('modal');
        cy.get('@modal').should('contain', '1000')
        cy.get('@modal').find('button').click()
        cy.get(MODAL_SELECTOR).should('not.exist')
    })
});
