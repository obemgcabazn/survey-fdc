<?php
$username = htmlspecialchars($_POST['name']);
$email = htmlspecialchars($_POST['email']);

if ($email) {

	$to = 'office@spaceweb.studio'; 
	$from='site@spaceweb.studio'; 

	mail($to, $username, $phone, 'From:'.$from);

	echo "письмо отправлено";

}
?>