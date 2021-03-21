<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Search</title>

    <meta name="description" content="Source code generated using layoutit.com">
    <meta name="author" content="LayoutIt!">

    <link href="css/bootstrap.min.css" rel="stylesheet">
    <link href="css/style.css" rel="stylesheet">

  </head>
  <body>

    <div class="container-fluid">
	<div class="row">
		<div class="col-md-12">
			<ul class="nav nav-tabs">
				<li class="nav-item">
					<a class="nav-link" href="index.php">Home</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" href="threads.php">Threads</a>
				</li>
				<li class="nav-item">
					<a class="nav-link active" href="search.php">Search</a>
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
						Search Players
					</h2>
					
					<p id="userinfo">
						
					</p>
					
				</div>
			</div>
			<div class="row">
				<div class="col-md-12" id="search">
					
					<form>
						<label for="firstname">Search:</lable><br>
						<input type="text" id="keyword"><br>
						<input type="button" value="Search" onclick="findathlete()">
					</form><br>
					
				<div>
					<table id="searchTable" style="width:100%">
						<tr>
							<th>Firstname</th>
							<th>Lastname</th>
							<th>Team</th>
							<th>PPG</th>
							<th>APG</th>
							<th>RPG</th>
							<th>BPG</th>
							<th>SPG</th>
							<th>Follow</th>
						</tr>
					</table>
				</div>
				</div>
			</div>
		</div>
	</div>
</div>

    <script src="js/jquery.min.js"></script>
    <script src="js/bootstrap.min.js"></script>
    <script src="js/scripts.js"></script>
  </body>
</html>