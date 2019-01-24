// Author: Matt Pennington


const contacts = [];
const createContact = ( contact ) => {
  const $contactContainer = $( '#contact-list-container' );
  contact.id = contacts.length;
  contacts.push( contact );
  const button = '<button class="contact-button" id="contact-' + contact.id + '">' + contact.name + '</button>';
  $contactContainer.append( button );
  $( '#contact-' + contact.id ).click( () => {
  	console.log('contact push')
  	$( '#dialer-nav' ).click();
  	$( '#dialer-textbox' ).attr( 'value', contact.phone );
  } ); 
};

$( document ).ready( () => {
	const tabNames = [ 'dialer', 'contact-list', 'add-contact' ];
	for ( let tabName of tabNames ) {
		$( '#' + tabName + '-nav' ).click( () => {
			$( '.content' ).hide();
			$( '#' + tabName ).show();
		} );
	}

	const standardContacts = [
		{
			name: "Jean-luc Picard",
			phone: "123-456-7890"
		},
		{
			name: "Luke Skywalker",
			phone: "555-123-4321"
		},
		{
			name: "Easter Bunny",
			phone: "314-159-2653"
		}
	];
	for ( let contact of standardContacts ) {
		createContact( contact );
	}

	$( '#')
} );


