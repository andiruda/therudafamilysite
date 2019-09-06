<?php include "includes/stdHeaderStart.inc"; ?>
<?php include "includes/stdHeaderEnd.inc"; ?>
<?php include "includes/header.inc"; ?>

<?php
	$pgContent = $_GET["content"];
	$n = $_GET["n"];
?>

<!-- The Layout -->
<div id="Content">
<span style="height:1px;display:block;margin-top:-1px;"></span>
	<div class="container3">
		<div class="container2">
			<div class="container1">
				<div class="col1"><?php include "includes/leftContent.inc"; ?></div>
				<div class="col2">
					<?php
						if($n == ""){
							if($pgContent != ""){
								include "content/pages/".$pgContent.".php";
							}else{
								include "home.php";
							}
						}else{
							include "content/".$pgContent."/".$n.".php";
						}
					?>
				</div>
				<div class="col3"><?php include "includes/rightContent.inc"; ?></div>
			</div>
		</div>
	</div>
</div>

<div id="ContentMed">
	<span style="height:1px;display:block;margin-top:-1px;"></span>
	<div class="container2">
		<div class="container1">
			<div class="col1"><?php include "includes/leftContent.inc"; ?></div>
			<div class="col2">
				<?php
					if($n == ""){
						if($pgContent != ""){
							include "content/pages/".$pgContent.".php";
						}else{
							include "index.php";
						}
					}else{
						include "content/".$pgContent."/".$n.".php";
					}
				?>
			</div>
		</div>
	</div>
	<div id="medWidthFooter"><!--include "includes/bottomContent.inc" --> </div>
</div>

<div id="ContentMobile">
	<span style="height:1px;display:block;margin-top:-1px;"></span>
	<div class="container2">
		<div class="col2">
			<?php
				if($n == ""){
					if($pgContent != ""){
						include "content/pages/".$pgContent.".php";
					}else{
						include "index.php";
					}
				}else{
					include "content/".$pgContent."/".$n.".php";
				}
			?>
		</div>
	</div>
	<div id="mobileWidthFooter">

<?php include "includes/leftContent.inc"; ?> </div>
</div>



<!-- php include "includes/footer.inc"; -->
