$(document).ready(function () {
  //* ==========================
  //* Event listeners
  //* ==========================

  //* ==========================
  //* Rolodex
  //* ==========================

  $(document).on('click', '.deleteContact', function (e) {
    e.preventDefault();
    const id = $(this).data('id');
    $.ajax({
      url: `/api/rolodex/${id}`,
      method: 'DELETE'
    }).then(() => {
      window.location.reload();
    });
  });

  // $(document).on('click', '#contactSearchForm', function (e) {
  //   e.preventDefault();
  //   const searchTerm = $('#rolodexSearch').val();
  //   searchTerm.filter(function() {
  //   })
  //   console.log(searchTerm);
  // });

  // $('#rolodexSearch').on('keyup', function () {
  //   const value = $(this).val().toLowerCase();
  //   $('#contactData').filter(function () {
  //     $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
  //   });
  // });
  // $.ajax({
  //   url: '/api/rolodex/search',
  //   method: 'GET'
  // }).then(() => {
  //   console.log('success!');
  // });
  // });

  //* ==========================
  //* Job Board
  //* ==========================
  $(document).on('click', '.deleteApp', function (e) {
    e.preventDefault();
    const id = $(this).data('id');
    $.ajax({
      url: `/api/applications/${id}`,
      method: 'DELETE'
    }).then(() => {
      window.location.reload();
    });
  });

//   $(document).on('click', '.appSearch', function (e) {
//     e.preventDefault();
//     $.ajax({
//       url: '/api/applications/search',
//       method: 'GET'
//     }).then(() => {
//       res.status(200).end();
//     });
//   });
// });
