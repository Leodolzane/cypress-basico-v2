/// <reference types="Cypress" />

describe('Central de Atendimento ao Cliente TAT', function() {

    beforeEach (() => {
        cy.visit('./src/index.html')
    })
    it('verifica o título da aplicação', function() {
        cy.title() .should ('be.equal', 'Central de Atendimento ao Cliente TAT')
    })

    it('preenche os campos obrigatórios e envia o formulário', function() {
        const longtext= 'Teste Teste de comentário de como podemos ajudarTeste de comentário de como podemos ajudarTeste de comentário de como podemos ajudarTeste de comentário de como podemos ajudarTeste de comentário de como podemos ajudar'
        cy.get('#firstName') .type('Leonardo')
        cy.get('#lastName') .type('Silva')
        cy.get('#email') .type('teste@email.com')
        cy.get('#open-text-area') .type(longtext, {delay:0})
        cy.contains('.button', 'Enviar').click()
        cy.get('.success').should('be.visible') 

    })

    it('exibe mensagem de erro ao submeter o formulário com um email com formatação inválida', function() {
        cy.get('#firstName') .type('Leonardo')
        cy.get('#lastName') .type('Silva')
        cy.get('#email') .type('testeemail.com')
        cy.get('#open-text-area') .type('Teste')
        cy.contains('.button', 'Enviar').click()
        cy.get('.error').should('be.visible')
    
    })
    
    it('campo telefone continua vazio quando preenchido com valor não-númerico', function() {
        cy.get('#phone')
        .type('abcdefj')
        .should('have.value','')
    })

    it('exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário', function() {
        cy.get('#firstName') .type('Leonardo')
        cy.get('#lastName') .type('Silva')
        cy.get('#email') .type('teste@email.com')
        cy.get('#phone-checkbox').click()
        cy.get('#open-text-area') .type('Teste')
        cy.contains('.button', 'Enviar').click()
        cy.get('.error').should('be.visible')
    })

    it('exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário', function() {
        cy.get('#firstName') 
        .type('valor-aqui') 
        .should('have.value', 'valor-aqui')
        .clear() 
        .should('have.value','')
        cy.get('#lastName') 
        .type('valor-aqui') 
        .should('have.value', 'valor-aqui')
        .clear() 
        .should('have.value','')
        cy.get('#email') 
        .type('valor-aqui') 
        .should('have.value', 'valor-aqui')
        .clear() 
        .should('have.value','')
        cy.get('#phone')
        .type('12345') 
        .should('have.value', '12345')
        .clear() 
        .should('have.value','')
    })

    it('exibe mensagem de erro ao submeter o formulário sem preencher os campos obrigatórios', function() {
        cy.contains('.button', 'Enviar').click()
        cy.get('.error').should('be.visible')
    })    

    it.only('envia o formuário com sucesso usando um comando customizado', function() {
       cy.fillMandatoryFieldsAndSubmit()
       cy.get('.success').should('be.visible')
    }) 


    

  })
  