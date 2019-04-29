<?php
	error_reporting(E_ALL ^ E_NOTICE);
	$name=$_POST['name'];
	$email=$_POST['email'];
	$msg=$_POST['message'];

	$from = 'Goimpression contact'; 
	$to = 'info@goimpressions.com'; 
	$subject = 'Message from Goimpression';
	
	// To send HTML mail, the Content-type header must be set
	$headers  = 'MIME-Version: 1.0' . "\r\n";
	$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
	
	// Create email headers
	$headers .= 'From: '.$from."\r\n".
		'Reply-To: '.$email."\r\n" .
		'X-Mailer: PHP/' . phpversion();
	
	// Compose a simple HTML email message
	$message = '<html><body>';
	$message .= '<h3 style="color:#f40;">Message from Goimpressions:</h3>';
	$message .= '<p >Name: '.$name.'<br>';
	$message .= 'Email: '.$email.'<br>';
	$message .=  $msg.'</p>';
	$message .= '</body></html>';				
					

	if(mail($to, $subject, $message, $headers)){ 
		print "Mail Sent, Thanks for the opportunity to let us handle your most important project for your business, your image!";
	} else {
		print "Problem in Sending Mail.";
	}
  
?>

