function msg(){  
 alert("Hello Javatpoint");  
}  




function myFunction() {
  var y = document.getElementById("txt1").value;
  var z = document.getElementById("txt2").value;
  var x = y + z;
  document.getElementById("demo").innerHTML = x;
}


function myNumber() {
const myNumber = () => {
	let i=2;
	console.log(i);
	for (let i=0; i<10; i++) {
		console.log(i);
	}
}
}

var result = '';
var i = 0;
do {
   i += 1;
   result += i + ' ';
} while (i < 5);
document.getElementById('example').innerHTML = result;