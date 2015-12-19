<?php

  //exec("git pull https://andiruda:rmr2056IAR!13@github.com/andiruda/therudafamilysite master",$response,$response2);
  exec("git pull 2>&1",$response);
  //print_r($response);
  //exec("whoami 2>&1",$response);

?>
  <h2><?php echo join('<br>', $response) ?></h2>
