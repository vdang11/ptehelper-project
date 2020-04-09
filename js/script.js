/*Javascript for Navigation*/
$(document).ready(function() {
	console.log("Ready!");
	var mybodyid = 
$('.main_nav').attr('id');
	console.log(mybodyid);
	var mynavid = '#nav' + mybodyid;
	console.log("mynavid is " + mynavid);
$(mynavid).attr('id','iamhere');
});
