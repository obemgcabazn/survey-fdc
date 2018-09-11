<?php

echo "Ответ от mail.php";

// Получение переменных
if(isset($_POST['duration'])){$pavilion = htmlspecialchars($_POST['duration']);}
if(isset($_POST['email'])){$email = htmlspecialchars($_POST['email']);}
if(isset($_POST['name'])){$email = htmlspecialchars($_POST['name']);}

// $email = htmlspecialchars($_POST['email']);
// if(isset($_POST['pavilion'])){$pavilion = htmlspecialchars($_POST['pavilion']);}
// if(isset($_POST['name'])){$name = htmlspecialchars($_POST['name']);}
// if(isset($_POST['phone'])){$phone = htmlspecialchars($_POST['phone']);}


// $username = htmlspecialchars($_POST['name']);
// $email = htmlspecialchars($_POST['email']);

// if ($email) {

//   $to = 'office@spaceweb.studio'; 
//   $from='site@spaceweb.studio'; 

//   mail($to, $username, $phone, 'From:'.$from);

//   echo "письмо отправлено";

// }


  /*
   * SendPulse REST API Usage Example
   *
   * Documentation
   * https://login.sendpulse.com/manual/rest-api/
   * https://sendpulse.com/api
   *
   * Settings
   * https://login.sendpulse.com/settings/#api
   */

require("src/ApiInterface.php");
require("src/ApiClient.php");
require("src/Storage/TokenStorageInterface.php");
require("src/Storage/FileStorage.php");
require("src/Storage/SessionStorage.php");
require("src/Storage/MemcachedStorage.php");
require("src/Storage/MemcacheStorage.php");

use Sendpulse\RestApi\ApiClient;
use Sendpulse\RestApi\Storage\FileStorage;

define('API_USER_ID', '');
define('API_SECRET', '');
define('PATH_TO_ATTACH_FILE', __FILE__);

$SPApiClient = new ApiClient(API_USER_ID, API_SECRET, new FileStorage());

  $bookID = 1785508; // test
  //  $emails = array(
  //     array(
  //         'email' => $email,
  //         'variables' => array(
  //             'name' => $name,
  //             'Телефон' => $phone,
  //             'pavilion' => $pavilion,
  //         )
  //     )
  // );



  //var_dump($SPApiClient->addEmails($bookID, $emails));
 ?>