describe('activities page', () => {
  it('loads the default activity', () => {
    cy.visit('http://localhost:8080')
    cy.get('.v-carousel').should('exist')
    cy.get('button.v-app-bar-nav-icon').should('exist').click()  
    cy.get('a.v-list-item[href*="activity/manage"]').click()
    cy.get('#activity_list').should('exist')
    cy.get('div#default').should('exist')
    cy.get('div#default i.mdi-star').should('exist')
    cy.get('div#default .v-list-item-title').should('have.text', 'default')
    cy.get('div#default a[href*="activity/edit/default"]').should('exist')
    cy.get('#app').click()
    cy.get('div#default a[href*="activity/edit/default"]').click()
  })

  it('creates a new activity', () => {
    cy.visit('http://localhost:8080')
    cy.get('.v-carousel').should('exist')
    cy.get('button.v-app-bar-nav-icon').should('exist')
    cy.get('button.v-app-bar-nav-icon').click()  
    cy.get('a.v-list-item[href*="activity/manage"]').click()
    cy.get('#app').click()
    cy.get('a.v-btn[href*="activity/new"]').should('exist')
    cy.get('a.v-btn[href*="activity/new"]').click()
    cy.get('input#name').should('exist')
    cy.get('input#desc').should('exist')
    cy.get('input#name').type("test-activity-name")
    cy.get('input#desc').type("Test activity description")
    cy.get('button#toolbox').should('exist')
    cy.get('button#toolbox').click()
    cy.get('button#add_category').should('exist')
    cy.get('button#add_category_all').should('exist')
    cy.get('button#add_category_all').click()
    cy.get('button#save').should('exist')
    cy.get('button#save').click()
    /*
    cy.get('input#input-317').should('exist')
    cy.get('input#input-317').type("Test Category")
    cy.get('button#category_ok').should('exist')
    cy.get('button#category_ok').click()
    */
  })
  it('deletes an existing activity', () => {
    cy.visit('http://localhost:8080')
    cy.get('.v-carousel').should('exist')
    cy.get('button.v-app-bar-nav-icon').should('exist')
    cy.get('button.v-app-bar-nav-icon').click()  
    cy.get('a[href*="activity/manage"]').click()
    cy.get('#app').click()
    cy.get('div#test-activity-name').find('i.mdi-delete').should("exist")
    cy.get('div#test-activity-name').find('i.mdi-delete').click()
    cy.get('button#confirmDeleteDlg_ok').should("exist")
    cy.get('button#confirmDeleteDlg_ok').click()
  })
})