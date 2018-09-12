<?php
// Получение переменных
if(isset($_POST['duration'])){$duration = htmlspecialchars($_POST['duration']);}
if(isset($_POST['email'])){$email = htmlspecialchars($_POST['email']);}
if(isset($_POST['name'])){$name = htmlspecialchars($_POST['name']);}
if(isset($_POST['tooth'])){$tooth = $_POST['tooth'];}

$addressBooks = [
  1931851, // Классическая, но нужно ждать
  1931847, // Классическая
  1931843, // Одномоментная, классическая
  1931840, // С немедленной нагрузкой, классическая, может понадобиться костная пластика, но нужно ждать
  1931830, // С немедленной нагрузкой, классическая, но может понадобиться костная пластика
  1931830, // Одномоментная, с немедленной нагрузкой, классическая, но может понадобиться костная пластика
  1931829, // С немедленной нагрузкой, классическая, нужно ждать
  1931828, // С немедленной нагрузкой, классическая
  1931826, // Одномоментная, с немедленной нагрузкой, классическая
];

$cond_first = array(11, 12, 13, 21, 22, 23, 31, 32, 33, 34, 35, 41, 42, 43, 44, 45);
$cond_second = array(14, 15, 24, 25);
$cond_third = array(16, 17, 26, 27, 36,  37, 46, 47);

if($duration == 0 && count(array_intersect($tooth, $cond_first)) > 0){
  echo 'Одномоментная, с немедленной нагрузкой, классическая';
} else {
  echo "нет";
}

// var_dump($addressBooks);

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

  require_once 'access.php';

  $SPApiClient = new ApiClient(API_USER_ID, API_SECRET, new FileStorage());

$bookID = 1944735; // test
// $emails = array(
//   array(
//     'email' => $email,
//     'variables' => array(
//       'name' => $name,
// //             'Телефон' => $phone,
// //             'pavilion' => $pavilion,
//     )
//   )
// );

$emails = array(
  array(
    'email' => $email,
    'variables' => array(
      'name' => $name,
    )
  )
);

//var_dump($SPApiClient->addEmails($bookID, $emails));
?>