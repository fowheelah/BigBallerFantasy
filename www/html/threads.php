<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Threads</title>

    <meta name="description" content="Source code generated using layoutit.com">
    <meta name="author" content="LayoutIt!">

    <link href="css/bootstrap.min.css" rel="stylesheet">
    <link href="css/style.css" rel="stylesheet">

  </head>
  
  <script>
  
  function addthreadcomment(cthreadid, cuserid) {
	const url = 'http://192.168.50.58:8000/rpc/addcomment';
	const data={
		threadid:cthreadid,
		userid:1,
		commenttext:cuserid
	}
	
	$.post(url, data, function(data, status){
		console.log(data);
		
	})
	.fail(function() {
		console.log("error adding comment");
	});
}

  	function addthread() {
		const url = 'http://192.168.50.58:8000/rpc/addthread';
		const data={
			inthreadname:document.getElementById("newthread").value
		}
		$.post(url, data, function(data, status){
			addthreadcomment(data[0].threadid, "Welcome to the new thread! Please be respectful of others!");
			
			location.reload();
		})
		.fail(function() {
			console.log("error adding thread");
		});
	}
  </script>
  
  <body>

    <div class="container-fluid">
	<div class="row">
		<div class="col-md-12">
			<ul class="nav nav-tabs">
				<li class="nav-item">
					<a class="nav-link" href="index.php">Home</a>
				</li>
				<li class="nav-item">
					<a class="nav-link active" href="threads.php">Threads</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" href="search.php">Search</a>
				</li>
				<li class="nav-item" id="logout">
					<a class="nav-link" href="login.html">Logout</a>
				</li>
				
			</ul>
			<div class="row">
				<div class="col-md-4">
					<img alt="Bootstrap Image Preview" src="/images/logo.png">
				</div>
				<div class="col-md-8">
					<h2 class="text-left">
						Thread Dashboard
					</h2>
					
					<p id="userinfo">
						
					</p>
					
				</div>
			</div>
			<div class="row">
				<div class="col-md-12" id="threads">
					
				</div>
			</div>
			<form>
				<label for="newthread">New Thread:</lable><br>
				<input type="text" id="newthread"><br>
				<input type="button" value="Create" onclick="addthread()">
			</form><br>
		</div>
	</div>
</div>

    <script src="js/jquery.min.js"></script>
    <script src="js/bootstrap.min.js"></script>
    <script src="js/scripts.js"></script>
    <script>getthreads()</script>
  </body>
</html>