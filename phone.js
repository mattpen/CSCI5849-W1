// Author: Matt Pennington


const contacts = [];
const createContact = ( contact ) => {
  const $contactContainer = $( '#contact-list-container' );
  contact.id = contacts.length;
  contacts.push( contact );
  const button = '<button class="contact-button" id="contact-' + contact.id + '">' + contact.name + '</button>';
  $contactContainer.append( button );
  $( '#contact-' + contact.id ).click( () => {
  	$( '#dialer-nav' ).click();
  	$( 'input[name=dialer-textbox]' ).val( contact.phone  );
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

	$( '#add-contact-form' ).submit( ( event ) =>{
		$('.error').removeClass('error');
		if ( !!$('input[name=name-input]').val() && !!$('input[name=phone-input]').val() && !!$('input[name=email-input]').val() ) {
			createContact({
				name: $('input[name=name-input]').val(),
				phone: $('input[name=phone-input]').val(),
				email: $('input[name=email-input]').val() 
			} );
			$( '#contact-list-nav' ).click()
		}
		else {
			if ( !$('input[name=name-input]').val() ) {
				$('input[name=name-input]').addClass( 'error' );
			}
			if ( !$('input[name=phone-input]').val() ) {
				$('input[name=phone-input]').addClass( 'error' );
			}
			if ( !$('input[name=email-input]').val() ) {
				$('input[name=email-input]').addClass( 'error' );
			}
		}

		// Prevent reload since no server is present
		return false;
	} );

	$( '#clear-add-contact-form-button' ).click( ( event ) => {
		event.preventDefault();
		$('.error').removeClass('error');
		$('input[name=name-input]').val( '' )
		$('input[name=phone-input]').val( '' )
		$('input[name=email-input]').val( '' )
	} );

	$( '.dialer-pad-button' ).click( ( event ) => {
		const originalVal = $( 'input[name=dialer-textbox]' ).val();
		$( 'input[name=dialer-textbox]' ).val( originalVal + '' + event.target.id );
	} );

	$( '#clear-dialer-button' ).click( () => {
		$('.error').removeClass('error');
		$( 'input[name=dialer-textbox]' ).val( '' );
	} );

	$( '#dial-button' ).click( () => {
		$('.error').removeClass('error');
		if ( !$( 'input[name=dialer-textbox]' ).val() ) {
			$( 'input[name=dialer-textbox]' ).addClass( 'error' );
		}
		else {
			alert( 'Dialing ' + $( 'input[name=dialer-textbox]' ).val() );
		}
	} );
} );


