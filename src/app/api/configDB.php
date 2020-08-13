<?


$dsn = 'mysql:host=localhost;dbname=todo';
$connect = new PDO($dsn, 'root', '');

//$sql_test_creat_tables = 'CREATE TABLE `todo`.`tasks` ( `id` INT(11) UNSIGNED NOT NULL AUTO_INCREMENT , `task` VARCHAR(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL , UNIQUE `id` (`id`)) ENGINE = InnoDB CHARSET=utf8 COLLATE utf8_general_ci;';

//$sql_2 = 'INSERT INTO `tasks` (`id`, `task`) VALUES (NULL, \'new task\'), (NULL, \'old task\');';

?>
