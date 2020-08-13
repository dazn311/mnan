<?php
             header("Access-Control-Allow-Origin: *");
$dir  = '../../../upload/zeland/projector/';

  $img_src = './music-icon-transparent-11.jpg';
            $files = array_diff( scandir( $dir), array('..', '.'));
            $listTrack = array();
            foreach($files AS $i => $filename) {
                if(strpos($filename, 'mp3')){
                  $file_src = $dir . $filename;
                  $listTrack[] = ['img'=> $img_src,'desc'=> 'zeland','name'=> $filename,'src'=> $file_src];

                }


            }

            $obj = (object) ['tracks' => $listTrack];
            echo  json_encode($obj);



?>
