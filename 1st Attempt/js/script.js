$(window).on('load', function () {
  if ($('#preloader').length) {
    $('#preloader').delay(100).fadeOut('slow', function () {
      $(this).remove();
    });
  }
});


$('.api-1').click(function() {
  /* Earthquakes */

  $.ajax({
    url: "php/getAPI.php",
    type: 'POST',
    dataType: 'json',
    data: {
      north: $('#n-co-ord').val(),
      east: $('#e-co-ord').val(),
      south: $('#s-co-ord').val(),
      west: $('#w-co-ord').val()
    },
    success: function(result) {
      console.log(result);

      if (result.status.name == "ok") {

        $('#e-dateTime').html(result['data'][0]['datetime']);
        $('#e-depth').html(result['data'][0]['depth']);
        $('#e-src').html(result['data'][0]['src']);
        $('#e-lng').html(result['data'][0]['lng']);
        $('#e-lat').html(result['data'][0]['lat']);
        $('#e-eqid').html(result['data'][0]['eqid']);
        $('#e-magnitude').html(result['data'][0]['magnitude']);

      }
    },
    error: function(jqXHR, textStatus, errorThrown) {}
  });


});
