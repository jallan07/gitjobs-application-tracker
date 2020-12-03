$(document).ready(() => {
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
});
