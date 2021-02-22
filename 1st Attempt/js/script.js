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
    url: "php/earthquakeAPI.php",
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
        /*Inject HTML*/
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

$('.api-2').click(function() {
  /*Weather*/

  $.ajax({
    url: 'php/weatherAPI.php',
    type: 'POST',
    dataType: 'json',
    data: {
      icao: $('#icao').val()
    },
    success: function(result) {
      console.log(result);

      if (result.status.name == "ok") {
        /*Inject HTML*/
        $('#w-dateTime').html(result['data']['datetime']);
        $('#w-elev').html(result['data']['elevation']);
        $('#w-station').html(result['data']['stationName']);
        $('#w-clouds').html(result['data']['clouds']);
        $('#w-temp').html(result['data']['temperature']);
        $('#w-hum').html(result['data']['humidity']);
        $('#w-icao').html(result['data']['ICAO']);
      }
    },
    error: function(jqXHR, textStatus, errorThrown) {}
  });
});

$('.api-3').click(function() {

  $.ajax({
    url: 'php/nearbyAPI.php',
    type: 'POST',
    dataType: 'json',
    data: {
      long: $('#n-lng').val(),
      lat: $('#n-lat').val()
    },
    success: function(result) {
      console.log(result);

      if (result.status.name == "ok") {
        /*Inject HTML*/
        $('#n-country').html(result['data'][0]['countryName']);
        $('#n-name').html(result['data'][0]['name']);
        $('#n-pop').html(result['data'][0]['population']);
        $('#n-dist').html(result['data'][0]['distance']);
        $('#n-type').html(result['data'][0]['fclName']);
        $('#n-longi').html(result['data'][0]['lng']);
        $('#n-lati').html(result['data'][0]['lat']);
      }
    },
    error: function(jqXHR, textStatus, errorThrown) {}
  });
});
