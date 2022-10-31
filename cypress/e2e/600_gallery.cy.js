describe('load homepage', () => {
  it('checks sidebar contents', () => {
    cy.visit('http://localhost:8080')
    cy.get('.v-carousel').should('exist')
    cy.get('button.v-app-bar-nav-icon').should('exist').click()
    cy.get('a.v-list-item[href*="/gallery"]').should('exist')
    cy.get('a.v-list-item[href*="/gallery"]').click()
    cy.get('h3').should('exist')
  })

  it('takes a picture, verify gallery and details, delete', () => {
    cy.visit('http://localhost:8080')
    cy.get('.v-carousel').should('exist')
    cy.get('button.v-app-bar-nav-icon').should('exist').click()  
    cy.get('a.v-list-item[href*="control"]').click()
    cy.get('#app').click()
    cy.get('button.photo').click()
    cy.visit('http://localhost:8080')
    cy.get('.v-carousel').should('exist')
    cy.get('button.v-app-bar-nav-icon').should('exist').click()  
    cy.get('a.v-list-item[href*="gallery"]').click()
    cy.get('#app').click()
    cy.get('.gallery').contains('DSC1').should('exist')
    cy.get('.v-main').contains('DSC1').click()
    cy.get('.v-card-title.details').contains('DSC1').should('exist')
    cy.get('.v-card-title.details').contains('DSC1').parents('.v-card').find('button.ok').click()
    cy.get('.v-main').contains('DSC1').parents('.v-card').find('.mdi-delete').click()
    cy.get('#gallery_photo_confirm_card').find('.ok').click()
  })

  it('takes a video, deletes is', () => {
    cy.visit('http://localhost:8080')
    cy.get('.v-carousel').should('exist')
    cy.get('button.v-app-bar-nav-icon').should('exist').click()  
    cy.get('a.v-list-item[href*="control"]').click()
    cy.get('#app').click()
    cy.get('button.video').click()
    cy.wait(1000)
    cy.get('button.video').click()
    cy.visit('http://localhost:8080')
    cy.get('.v-carousel').should('exist')
    cy.get('button.v-app-bar-nav-icon').should('exist').click()  
    cy.get('a.v-list-item[href*="gallery"]').click()
    cy.get('#app').click()
    /*
    cy.get('.gallery').contains('VID1').should('exist')
    cy.get('.v-main').contains('VID1').click()
    cy.get('.v-card-title.details').contains('VID1').should('exist')
    cy.get('.v-card-title.details').contains('VID1').parents('.v-card').find('button.ok').click()
    cy.get('.v-main').contains('VID1').parents('.v-card').find('.mdi-delete').click()
    cy.get('#gallery_photo_confirm_card').find('.ok').click()
    */
  })
})