$(document).ready(function () {
  //* ==========================
  //* Profile
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
});
