/// <reference types="cypress" />

describe('Funcionalidade Página de produtos', () => {
    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/produtos/')
    });

    it('Deve selecionar um produto da lista', () => {

        cy.get('[class="product-block grid"]')
            .last()
            .click()

    });

    it.only('Deve adicionar um produto ao carrinho', () => {
       var quantidade = 5
       
        cy.get('[class="product-block grid"]')
        .eq(0).click()
        cy.get('.button-variable-item-M').click()
        cy.get('.button-variable-item-Blue').click()
        cy.get('.input-text').clear().type(quantidade)
        cy.get('.single_add_to_cart_button').click()

        cy.get('.dropdown-toggle > .mini-cart-items').should('contain' , quantidade)
        
        


   
       



    });
});

