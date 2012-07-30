<?php 

// create a new cURL resource
$ch = curl_init();

// set URL and other appropriate options
curl_setopt($ch, CURLOPT_URL, "http://mikemccully.com/teams/team/grid/?ConferenceId=1");
curl_setopt($ch, CURLOPT_HEADER, 0);

$headers = array('Range: items=0-25');
curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);

// grab URL and pass it to the browser
curl_exec($ch);

// close cURL resource, and free up system resources
curl_close($ch);

?>