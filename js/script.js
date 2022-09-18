//javascript

//text change
function textChange() {
	 document.getElementById('h2').innerHTML=
	"Hello world";
}









//jquery
$(document).ready(function(){
  $('button').dblclick(function(){
    alert("hello world");
  })
//hide

$('#hide').mouseover(function(){
  $('.hs').hide();

});
//show
$('#show').mouseover(function(){
  $('.hs').show();
});
//toggle
$('#toggle').mouseover(function(){
  $('.hs').toggle();
});
//slide
$('.box2').click(function(){
  $('.box3').slideToggle();
});
//draggable
$( "#draggable" ).draggable();

//accordion
$( "#accordion" ).accordion({
  collapsible:true
});



//counter-plugin
$('.counter').counterUp({
    delay: 10,
    time: 1000
});

});






