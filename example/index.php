<?php

if (isset($_GET['m_do'])) {
	echo 'Test content';
	die;
}

?>

<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset='utf-8'>

	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
</head>
<body>

	<div class="container">
		<br><br><br>

		<div class="modal fade" tabindex="-1" role="dialog" data-mesour-modal="mesourApp-testModal" data-show="false" data-mesour-show="true" data-keyboard="true" data-backdrop="true"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button><h4 class="modal-title">Test modal</h4></div><div class="modal-body" mesour-modal-body="true" data-ajax-loading="mesourApp-testModal-modalBody" data-is-cached="true"></div><div class="modal-footer"><button class="btn btn-default" role="button" data-dismiss="modal">Close</button><a class="btn btn-primary" role="button">Save</a></div></div></div></div>
		<div class="container">

			<hr>

			<a href="#" class="btn btn-primary btn-lg" data-modal-show="mesourApp-testModal">
				Launch modal
			</a>

		<br><br><br><br><br><br>
	</div>

	<script src="http://code.jquery.com/jquery-2.2.4.min.js"></script>
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
	<script src="../dist/mesour.modal.min.js"></script>

	<script>
		$(function () {
			$(document).on('click', '[data-modal-show]', function (e) {
				e.preventDefault();

				var name = $(this).attr('data-modal-show');

				mesour.modal.show(name);
			});
		});
	</script>

</body>
</html>