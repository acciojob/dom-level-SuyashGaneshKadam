//your JS code here. If required.
var node = document.getElementById("level");
let count = -1;
while (node != null) { 
	count++;
	node = node.parentNode;
}
alert("The level of the element is: " + count);