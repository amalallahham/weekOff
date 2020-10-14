$('#choose').click(function() {
	if ($('.custom-select').val()==="2"){
		alert("I'm sorry but we can't help you in this website ,Please stay tuned we'll update our website so that it will include all Amman")
	
  }})
	var array=[]
	var name =	$('#first').val() + " " + $('#last').val() 
function store(){

array.push($('#first').val() + " " + $('#last').val() )
}

$('#choose2').click(function() {
	if(($('#first').val() + " " + $('#last').val() ).length === 1){
		alert('Please enter your first and last name')
	}else{
	$('#para').append(
		"<h2 id = 'well'> Wellcome  </h2>")}})