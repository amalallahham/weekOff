var place=
{SportCity:"Danger",TlaaAlAli:"Safe",Rabieh:'Safe',AbuNseer:'Be carefull',Khalda:'Danger',JabalAlHussein:'Safe' ,JabalAmman:'Be carefull' ,UmmUthaina:"Safe",
UmAlSumac:'Be carefull',DeirGhbar:'Safe',Sweifieh:'Safe',Shmeisani:'Safe',Sweileh:'Be carefull',ShafaBadran:'Danger',Jubaiha:'Safe',
DaheatAlRashid:'Safe',Marka:'Be carefull',DownTown:'Safe',JabalAlNuzhah:'Safe', HaiAlNazzal:'Safe'}


$('#choose').click(function() {
	if ($('.custom-select').val()==="2"){
		alert("I'm sorry but we can't help you in this website ,Please stay tuned we'll update our website so that it will include all Jordan")
	
  }})
	var array=[]
function store(){
array.push($('#first').val() + " " + $('#last').val() )
}

$('#choose2').click(function() {
	
	if(($('#first').val() + " " + $('#last').val() ).length === 1){
		alert('Please enter your first and last name')
	}
	for(var key in place){
		if(key === $('#inputGroupSelect041').val() && place[key] === "Danger"){
			$('#para').append(
'<div class="p-3 mb-2 bg-danger text-white" id = "dan">Unfortunately, this area is considered a dangerous area so you have to be careful here is some thing you need to do : <ul id ="ul">',
'<li>If you are a resident of the area, it is better to<b> stay</b> in your home</li>',
'<li>Take care of yourself. Get rest and stay hydrated. Take over-the-counter medicines, such as acetaminophen, to help you feel better</li>',
'<li><a href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019/question-and-answers-hub/q-a-detail/q-a-coronaviruses#:~:text=symptoms"  target="_blank">click me </a> to see if you have any of the symptoms of Corona virus</li>',
'<li>Stay in touch with your doctor</li>',
'<li>Avoid public transportation, ride-sharing, or taxis</li>',
'<li>Separate yourself from other people</li>',
'<li><b>Always</b> wear your mask and gloves</li>',
'<li>If you have some anxiety about this global pandemic please click this<a href="url"  target="_blank"> link</a> it will take you to a local online support group where everyone can share your feelings </li>',


'</ul></div>'

)}else if(key === $('#inputGroupSelect041').val() && place[key] === "Safe"){
	$('#para').append(
		'<div class="p-3 mb-2 bg-success text-white">We thank God, this region is considered one of the areas where there is no Corona virus, but there are some precautions that we must take :<ul id ="ul">',
		'<li>Take care of yourself. Get rest and stay hydrated. Take over-the-counter medicines, such as acetaminophen, to help you feel better</li>',
		'<li><a href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019/question-and-answers-hub/q-a-detail/q-a-coronaviruses#:~:text=symptoms"  target="_blank">click me </a> to see if you have any of the symptoms of Corona virus</li>',
		'<li>Stay in touch with your doctor</li>',
		'<li>Avoid public transportation, ride-sharing, or taxis</li>',
		'<li><b>Always</b> wear your mask and gloves</li>',
		'<li>If you have some anxiety about this global pandemic please click this<a href="url"  target="_blank"> link</a> it will take you to a local online support group where everyone can share your feelings </li>',

		'</ul></div>'
)}else if(key === $('#inputGroupSelect041').val() && place[key] === "Be carefull"){
		$('#para').append(
		'<div class="p-3 mb-2 bg-warning text-dark">Unfortunately, this area is one of the areas that contain some cases of Coronavirus<ul id ="ul">',
		'<li>Take care of yourself. Get rest and stay hydrated. Take over-the-counter medicines, such as acetaminophen, to help you feel better</li>',
		'<li>If you are a resident of the area, it is better to<b> stay</b> in your home</li>',
		'<li><a href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019/question-and-answers-hub/q-a-detail/q-a-coronaviruses#:~:text=symptoms"  target="_blank">click me </a> to see if you have any of the symptoms of Corona virus</li>',
		'<li>Stay in touch with your doctor</li>',
		'<li>Avoid public transportation, ride-sharing, or taxis</li>',
		'<li><b>Always</b> wear your mask and gloves</li>',
		'<li>If you have some anxiety about this global pandemic please click this<a href="url"  target="_blank"> link</a> it will take you to a local online support group where everyone can share your feelings </li>',
'</ul></div>'
)
	} 
	}
	})