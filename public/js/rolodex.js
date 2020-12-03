$(document).ready(() => {
  // Adding event listeners to the form to create a new object, and the button to delete
  // an Author
  // $(document).on('submit', '#contact-form', handleContactFormSubmit);
  $(document).on('click', '.delete', function (e) {});
  // Function for retrieving the contacts

  $('#addContactBtn').on('click', function (e) {
    e.preventDefault();
    $.post('/api/rolodex', $('#addContactForm').serialize(), function (data) {
      console.log(data);
    });
  });
});
