

function login() {
		const url = 'http://192.168.50.58:8000/rpc/login'
		const data={
			username:document.getElementById("username").value,
			password:document.getElementById("password").value
		}
		
		$.post(url, data, function(data, status){
			console.log(data);
			document.getElementById("error").innerHTML = "Login successful";
			localStorage.setItem("un", document.getElementById("username").value);
			window.location.href = 'http://192.168.50.58/index.php?um=' + document.getElementById("username").value;
		})
		.fail(function() {
			document.getElementById("error").innerHTML = "Login failed. Please Try again";
		});
		
	}
	
function signup() {
	const url = 'http://192.168.50.58:8000/rpc/signup'
	const data={
		firstname:document.getElementById("firstname").value,
		lastname:document.getElementById("lastname").value,
		username:document.getElementById("susername").value,
		password:document.getElementById("spassword").value
	}
	
	$.post(url, data, function(data, status){
		console.log(data);
		document.getElementById("serror").innerHTML = "Signup successful";
		localStorage.setItem("un", document.getElementById("susername").value);
		window.location.href = 'http://192.168.50.58/index.php?um=' + document.getElementById("username").value;
	})
	.fail(function() {
		document.getElementById("serror").innerHTML = "Signup failed. Please Try again";
	});
	
}

function addathlete() {
		var stored = JSON.parse(localStorage.getItem('follows'));
		const url = 'http://192.168.50.58:8000/rpc/getathlete';
		if(stored != null){
			for(x = 0; x < stored.length; x++){
				const data={
					id:stored[x]
				}
				
				
				$.post(url, data, function(data, status){
					
					for(i = 0; i < data.length; i++){
						
						var newEntry = document.createElement("TR");
						
						var name = document.createElement("TD");
						name.innerText = data[i].firstname;
						newEntry.appendChild(name);
						
						var lname = document.createElement("TD");
						lname.innerText = data[i].lastname;
						newEntry.appendChild(lname);
						
						var tname = document.createElement("TD");
						tname.innerText = data[i].teamname;
						newEntry.appendChild(tname);
						
						var ppg = document.createElement("TD");
						ppg.innerText = data[i].ppg;
						newEntry.appendChild(ppg);
						
						var apg = document.createElement("TD");
						apg.innerText = data[i].apg;
						newEntry.appendChild(apg);
						
						var rpg = document.createElement("TD");
						rpg.innerText = data[i].rpg;
						newEntry.appendChild(rpg);
						
						var bpg = document.createElement("TD");
						bpg.innerText = data[i].bpg;
						newEntry.appendChild(bpg);
						
						var spg = document.createElement("TD");
						spg.innerText = data[i].spg;
						newEntry.appendChild(spg);
						
						var unfollow = document.createElement("TD");
						unfollow.innerHTML = '<input type="button" value="Unfollow" id="' + data[i].athleteid + '" onclick="removefollow(' + data[i].athleteid + ')">';
						newEntry.appendChild(unfollow);
						
						document.getElementById("playerTable").appendChild(newEntry);
						
					}
				})
				.fail(function() {
					console.log("error loading athlete");
				});
			}
		}
	}
	
function clearTable(table) {
  var rows = table.rows;
  var i = rows.length;
  while (--i) {
    rows[i].parentNode.removeChild(rows[i]);
    // or
    // table.deleteRow(i);
  }
}
	
function findathlete() {
	clearTable(document.getElementById("searchTable"));
	const url = 'http://192.168.50.58:8000/rpc/findathlete';
	const data={
		keyword:document.getElementById("keyword").value
	}
	
	$.post(url, data, function(data, status){
		console.log(data);
		for(i = 0; i < data.length; i++){
			console.log(data[i].athfirstname);
			var newEntry = document.createElement("TR");
			
			var name = document.createElement("TD");
			name.innerText = data[i].athfirstname;
			newEntry.appendChild(name);
			
			var lname = document.createElement("TD");
			lname.innerText = data[i].athlastname;
			newEntry.appendChild(lname);
			
			var tname = document.createElement("TD");
			tname.innerText = data[i].teamname;
			newEntry.appendChild(tname);
			
			var ppg = document.createElement("TD");
			ppg.innerText = data[i].ppg;
			newEntry.appendChild(ppg);
			
			var apg = document.createElement("TD");
			apg.innerText = data[i].apg;
			newEntry.appendChild(apg);
			
			var rpg = document.createElement("TD");
			rpg.innerText = data[i].rpg;
			newEntry.appendChild(rpg);
			
			var bpg = document.createElement("TD");
			bpg.innerText = data[i].bpg;
			newEntry.appendChild(bpg);
			
			var spg = document.createElement("TD");
			spg.innerText = data[i].spg;
			newEntry.appendChild(spg);
			
			var follow = document.createElement("TD");
			
			if(!checkFollow(data[i].athleteid)){
				follow.innerHTML = '<input type="button" value="Follow" id="' + data[i].athleteid + '" onclick="addfollow(' + data[i].athleteid + ')">';
			}else{
				follow.innerText = 'Followed';
			}
			newEntry.appendChild(follow);
			
			document.getElementById("searchTable").appendChild(newEntry);
		}
		})
		.fail(function() {
			console.log("error searching athlete");
		});
}

function checkFollow(id){
	var stored = JSON.parse(localStorage.getItem('follows'));
	if(stored != null){
		for(x = 0; x < stored.length; x++){
			if(stored[x] == id){
				return true;
			}
		}
	}
	return false;
}

function getuser() {
		const url = 'http://192.168.50.58:8000/rpc/getuser';
		const user = localStorage.getItem('un');
		const data={
			usernamefollow:user
		}
		
		$.post(url, data, function(data, status){
			localStorage.setItem('firstname', data[0].firstname);
			localStorage.setItem('lastname', data[0].lastname);
			localStorage.setItem('follows', JSON.stringify(data[0].follow));
			addathlete();
		})
		.fail(function() {
			console.log("error loading user");
		});
}
	
function addfollow(id) {
	const url = 'http://192.168.50.58:8000/rpc/addathlete';
	
	const data={
		followarray:id,
		updateid:localStorage.getItem('un')
	}
	
	$.post(url, data, function(data, status){
		window.location.href = 'http://192.168.50.58/index.php';
	})
	.fail(function() {
		console.log("error adding follow");
	});
}
	
function removefollow(id) {
	const url = 'http://192.168.50.58:8000/rpc/removeathlete';
	const data={
		followarray:id,
		updateid:localStorage.getItem('un')
	}
	
	$.post(url, data, function(data, status){
		location.reload();
	})
	.fail(function() {
		console.log("error adding follow");
	});
}

function addcomment(cthreadid, cuserid) {
	const url = 'http://192.168.50.58:8000/rpc/addcomment';
	const data={
		threadid:cthreadid,
		userid:cuserid,
		commenttext:document.getElementById(cthreadid).value
	}
	
	$.post(url, data, function(data, status){
		console.log(data);
		location.reload();
	})
	.fail(function() {
		console.log("error adding comment");
	});
}

function getthreads() {
	const url = 'http://192.168.50.58:8000/rpc/getthreads';
	const data={
	}
	
	$.post(url, data, function(data, status){
		console.log(data);
		for(i = 0; i < data.length; i++){
			if(document.getElementById(data[i].threadname) == null){
				var newThread = document.createElement("table");
				newThread.id = data[i].threadname;
				newThread.style = "width: 80%";
				var header = document.createElement("TH");
				header.innerText = data[i].threadname;
				newThread.appendChild(header);
				document.getElementById("threads").appendChild(newThread);

				var form = document.createElement("form");
				var textbox = document.createElement("input");
				var btn = document.createElement("div");
				form.style = "margin: 15px";
				textbox.placeholder = "New comment";
				textbox.id = data[i].threadid;
				btn.innerHTML = '<input type="button" value="Submit" onclick="addcomment(' + data[i].threadid + ', ' + data[i].userid + ')">';
				form.appendChild(textbox);
				form.appendChild(btn);
				
				document.getElementById("threads").appendChild(form);
				
				
			}
			var newCommentInner = document.createElement("TR");
			newCommentInner.style = "border: 1px solid black";
			newCommentInner.innerText = data[i].commenttime + " |  " + data[i].commenttext;

			document.getElementById(data[i].threadname).appendChild(newCommentInner);
		}
	})
	.fail(function() {
		console.log("error retrieving threads");
	});
}



