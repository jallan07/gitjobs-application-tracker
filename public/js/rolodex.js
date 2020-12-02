$(document).ready(() => {
  // Adding event listeners to the form to create a new object, and the button to delete
  // an Author
  // $(document).on('submit', '#contact-form', handleContactFormSubmit);
  $(document).on('click', '.delete', function (e) {});
  // Function for retrieving the contacts

  $('#addContactForm').on('submit', function (e) {
    e.preventDefault();
    $.post('/api/rolodex', $('#addContactForm').serialize(), function (data) {
      console.log(data);
    });
  });

  // const getContacts = () => {
  //   $.get('/api/rolodex');
  // };

  // getContacts();
});
