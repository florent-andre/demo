describe('inscriptions', () => {
  it('can add an inscription', () => {
    cy.visit('/admin');
    cy.contains('Inscriptions').click();
    cy.contains('Create').click();
    cy.get('input[name="information"]').type('Foo');
    cy.contains('Save').click();
    // @TODO Change message when fixed
    cy.contains('Server communication error');
  });
});
