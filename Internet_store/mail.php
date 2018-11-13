<?php

$recepient = "goth7mog@mail";
$sitename = "Internet_store";

$mail = trim($_GET["mail"]);
$message = "Почта клиента: $mail \nТелефон";

$pagetitle = "Новая заявка с сайта \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");
?>﻿