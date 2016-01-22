$(function()
{     
    $("#wo").on("load", "#attribution", function()
   {
       alert("sadf");
      $(this).html("好了吗"); 
   });
   
   $("#MySignature").on("DOMNodeInserted", function(e)
   {
       //alert("sadf");
      $(this).html("好了吗"); 
   });
   
   //document.addEventListener('DOMNodeInserted',function(){alert(1)},false);
   
   $("#MySignature").html("<br><hr><br><p id=\"SIGN\" >签名来了：<span id=\"test\"></span></p><script>$(\"#test\").html(\"<a href=\" + location.href + \">\" + location.href + \"</a>\")</script>");
});

