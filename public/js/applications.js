$(document).ready(() => {
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
