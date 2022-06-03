<?php include_once("home.html"); ?>

RewriteRule ^ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]