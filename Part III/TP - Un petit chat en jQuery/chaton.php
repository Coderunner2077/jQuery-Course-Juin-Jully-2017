<?php 
	if(isset($_POST['pseudo'])) {
		$pseudo = htmlspecialchars($_POST['pseudo']);
		$contenu = nl2br(htmlspecialchars($_POST['message']));
		$ligne = $pseudo . ' &gt; '. $contenu .'<br />';
		$lines = file('ac.htm');
		$first = array_shift($lines);
		array_unshift($lines, $ligne);
		array_unshift($lines, $first);
		file_put_contents('ac.htm', $lines);
	}
?>