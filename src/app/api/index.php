<?
  header("Access-Control-Allow-Origin: localhost");

  $folder = 'all';
  $user_id = 0;
  require 'configDB.php';
  $sql = 'SELECT * from tasks WHERE user_id = ? ORDER BY date DESC' ;
  $query = $connect->prepare($sql);
  $query->execute([$user_id]);
  $rows = $query->fetchall(PDO::FETCH_OBJ);
  foreach($rows AS $row) {
    $user_id = $row->user_id ?$row->user_id : '0';
    $listTasks[] = ['task'=> $row->task,'text'=> $row->text,'date'=> date('d.m.y (H:i)',$row->date),'folder'=> $row->folder,'user_id'=> $user_id];
  }

  $obj = (object) ['tracks' => $listTasks];
  echo  json_encode($obj);
?>
