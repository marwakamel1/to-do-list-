$("ul").on("click","li",function(){
 $(this).toggleClass("checked")

})
$("ul").on("click","span",function(x){
 $(this).parent().fadeOut("10",function(){
  $(this).remove();
  

 })

  x.stopPropagation()
})
$("input").keypress(function(e){
  if( e.which === 13){
  	$("ul").append("<li><span><i class=\"fas fa-trash-alt\"></i> </span>"+$("input").val()+"</li>");
  	$("input").val("");
  }

})
$("#ficon").click(function(){
 $("input").toggleClass("dd");

})
