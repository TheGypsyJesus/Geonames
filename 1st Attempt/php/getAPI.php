<?php

  ini_set('display_errors', 'On');
  error_reporting(E_ALL);

  $executionStartTime = microtime(true) / 1000;

  $url = 'http://api.geonames.org/earthquakesJSON?north=' . $_REQUEST['north'] . '&south=' . $_REQUEST['south'] . '&east=' . $_REQUEST['east'] . '&west=' . $_REQUEST['west'] . '&username=thegypsyjesus'; //constructs the URL with custom parameters.

  //cURL setup
  $ch = curl_init();
  curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false); //(false): to stop cURL from verifying the peers certificate.
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, true); //(true) to return the transfer as a string of the return value of curl_exec() instead of outputting it directly.
	curl_setopt($ch, CURLOPT_URL, $url); //URL to fetch.

  $result = curl_exec($ch); //execute the given cURL session.

  curl_close($ch); //closes the cURL session & frees all resources. Handle is also deleted.

  $decode = json_decode($result, true); // when true, will return json object as an associative array, rather than an object.

  $output['status']['code'] = '200'; //status code displayed in the console.
  $output['status']['name'] = 'ok';
  $output['status']['description'] = 'info fetched!';
  $output['status']['returnedIn'] = (microtime(true) - $executionStartTime) / 1000 . " ms";
  $output['data'] = $decode['earthquakes'];

  header('Content-Type: application/json; charset=UTF-8'); //Will be outputting a json file.

  echo json_encode($output); //displays our status in the console.

?>
