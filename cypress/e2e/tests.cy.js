
import {BASE_URL, INGREDIENTS_URL, ORDERS_URL} from "../../src/utils/constants";

describe('home page tests', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000');
        cy.intercept('GET', INGREDIENTS_URL, {fixture: 'ingredients.json'})
        cy.intercept('POST', ORDERS_URL, {fixture: 'order.json'})
        cy.intercept('GET', `${BASE_URL}/auth/user`, {fixture: 'user.json'})

        window.localStorage.setItem(
            'refreshToken',
            JSON.stringify('test-refreshToken')
        )

        window.localStorage.setItem(
            'accessToken',
            JSON.stringify('test-accessToken')
        )
    });

    it('ingredients should drag to constructor', () => {
        cy.get('[data-ingredient-id=ingredient-id]').should('exist').as('ingredient');
        cy.get('[data-constructor-id=constructor-id]').should('exist').as('constructor');

        cy.get('@ingredient')
            .eq(1)
            .drag('@constructor')

        cy.get('@ingredient')
            .eq(3)
            .drag('@constructor')

        cy.get('@constructor').should('contain', 'Ингредиент')
        cy.get('[data-upper-bun=upper-bun]').should('contain', 'Булка (верх)')
        cy.get('[data-lower-bun=lower-bun]').should('contain', 'Булка (низ)')
    });

    it ('ingredients modal should open/close', () => {
        cy.get('[data-ingredient-id=ingredient-id]').should('exist').as('ingredient');
        cy.get('@ingredient').eq(1).click()
        cy.get('[data-modal=modal]').should('exist').as('modal')
        cy.get('@modal').find('button').click()
        cy.get('@modal').should('not.exist')
    })

    it ('ingredients modal should contains information about ingredient', () => {
        cy.get('[data-ingredient-id=ingredient-id]').should('exist').as('ingredient');
        cy.get('@ingredient').eq(1).click()
        cy.get('[data-modal=modal]').should('contain', 'Булка').as('modal');
        cy.get('@modal').find('button').click()
        cy.get('@ingredient').eq(3).click()
        cy.get('[data-modal=modal]').should('contain', 'Ингредиент')
    })

    it('open/close order modal', () => {
        //без перетаскивания элементов не будет создан заказ
        cy.get('[data-ingredient-id=ingredient-id]').should('exist').as('ingredient');
        cy.get('[data-constructor-id=constructor-id]').should('exist').as('constructor');

        cy.get('@ingredient')
            .eq(1)
            .drag('@constructor')

        cy.get('@ingredient')
            .eq(3)
            .drag('@constructor')

        cy.get('[data-button-div=button-div]').find('button').click()

        cy.get('[data-modal=modal]').should('exist').as('modal');

        cy.get('@modal').should('contain', '1000')

        cy.get('@modal').find('button').click()
        cy.get('[data-modal=modal]').should('not.exist')
    })
});
