<?php
// Получение переменных

/* 
duration:

0 - не удален
1 - менее 2х месяцев назад
2 - более 2х месяцев назад */

if(isset($_POST['duration'])){$duration = htmlspecialchars($_POST['duration']);}
if(isset($_POST['email'])){$email = htmlspecialchars($_POST['email']);}
if(isset($_POST['name'])){$name = htmlspecialchars($_POST['name']);}
if(isset($_POST['tooth'])){$tooth = $_POST['tooth'];}

$addressBooks = [
  1931851, // 0 Классическая, но нужно ждать
  1931847, // 1 Классическая
  1931843, // 2 Одномоментная, классическая
  1931840, // 3 С немедленной нагрузкой, классическая, может понадобиться костная пластика, но нужно ждать
  1931833, // 4 С немедленной нагрузкой, классическая, но может понадобиться костная пластика
  1931830, // 5 Одномоментная, с немедленной нагрузкой, классическая, но может понадобиться костная пластика
  1931829, // 6 С немедленной нагрузкой, классическая, нужно ждать
  1931828, // 7 С немедленной нагрузкой, классическая
  1931826, // 8 Одномоментная, с немедленной нагрузкой, классическая
];

$cond_first = array(11, 12, 13, 21, 22, 23, 31, 32, 33, 34, 35, 41, 42, 43, 44, 45);
$cond_second = array(14, 15, 24, 25);
$cond_third = array(16, 17, 26, 27, 36,  37, 46, 47);

if( count( array_intersect( $tooth, $cond_second ) ) > 0 ) {
  if($duration == 0) {
    // Зуб не удален
    $bookID = $addressBooks[5];
    echo "5 Одномоментная, с немедленной нагрузкой, классическая, но может понадобиться костная пластика";
  } elseif ( $duration == 1 ) {
    $bookID = $addressBooks[3];
    echo "3 С немедленной нагрузкой, классическая, может понадобиться костная пластика, но нужно ждать";
  }else{
    $bookID = $addressBooks[4];
    echo "4 С немедленной нагрузкой, классическая, но может понадобиться костная пластика";
  }
}elseif( count( array_intersect( $tooth, $cond_first ) ) > 0 ){
  if ($duration == 0){
    $bookID = $addressBooks[8];
    echo "8 Одномоментная, с немедленной нагрузкой, классическая";
  } elseif ($duration == 1) {
    $bookID = $addressBooks[6];
    echo "6 С немедленной нагрузкой, классическая, нужно ждать";
  } else {
    $bookID = $addressBooks[7];
    echo "7 С немедленной нагрузкой, классическая";
  }
}else {
  if ($duration == 0){
    $bookID = $addressBooks[2];
    echo "2 Одномоментная, классическая";
  } elseif ($duration == 1) {
    $bookID = $addressBooks[0];
    echo "0 Классическая, но нужно ждать";
  } else {
    $bookID = $addressBooks[1];
    echo "1 Классическая";
  }
}

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

// $bookID = 1944735; // test
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

var_dump($SPApiClient->addEmails($bookID, $emails));
?>