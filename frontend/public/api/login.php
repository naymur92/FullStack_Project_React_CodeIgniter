<?php
include 'dbconfig.php';

if (
  isset($_GET['email']) &&
  !empty(trim($_GET['email'])) &&
  isset($_GET['password']) &&
  !empty(trim($_GET['password']))
) {

  $email = mysqli_escape_string($db_conn, trim($_GET['email']));
  $password = mysqli_escape_string($db_conn, trim($_GET['password']));
  // echo json_encode($email);
  // echo json_encode($password);
  if ($email != '' && $password != '') {
    $result = $db_conn->query("SELECT * FROM users WHERE email='$email'");

    $data = $result->fetch_assoc();
    // print_r($data);

    if ($result->num_rows === 1) {
      $pass = $data['password'];
      $authenticatePassword = password_verify($password, $pass);

      if ($authenticatePassword) {
        if ($data['role'] === 'user') {
          echo json_encode(['success' => true, 'msg' => 'Login Success', 'logininfo' => $data]);
          return;
        } else {
          echo json_encode(['success' => false, 'msg' => 'Please Login as user!']);
          return;
        }
      } else {
        echo json_encode(['success' => false, 'msg' => 'Please enter correct password!']);
        return;
      }
    } else {
      echo json_encode(['success' => false, 'msg' => 'Email does not exists']);
      return;
    }
  } else {
    echo json_encode(['success' => false, 'msg' => 'Please Fill out the form']);
    return;
  }
} else {
  echo json_encode(['success' => false, 'msg' => 'Unauthorised Access']);
  return;
}
