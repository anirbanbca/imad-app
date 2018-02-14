"use strict"



$(document).ready(function(){
var resultList =$("#resultList");
resultList.append(" ");

var resultListadmin =$("#resultListadmin");
resultList.append(" ");

var toggleButton= $("#toggleButton");
toggleButton.on("click",function(){
   console.log("button clicked..");
  resultList.toggle(1000);
  if(toggleButton.text()==="Hide"){
  	toggleButton.text("Show");

  }
  else{

  	toggleButton.text("Hide");
  }


});
//toogele botton for admin

   var toggleButtonadmin= $("#toggleButtonadmin");
toggleButtonadmin.on("click",function(){
   console.log("button clicked..");
  resultList.toggle(1000);
  if(toggleButtonadmin.text()==="Hide"){
    toggleButtonadmin.text("Show");

  }
  else{

    toggleButtonadmin.text("Hide");
  }


});


//end of toogle button

 //admin section
   var resultListadmin =$("#resultListadmin");
 resultListadmin.append(" This is the Admin Section");

var toggleButtonadmin= $("#toggleButtonadmin");
toggleButtonadmin.on("click",function(){
   console.log("button clicked..");
  resultListadmin.toggle(1000);
  if(toggleButton.text()==="Hide"){
    toggleButton.text("Show");

  }
  else{

    toggleButton.text("Hide");
  }


});

     











 //end of admin section

 





	var results=[];

 function displayResults(results){
    
  resultList.empty();
  
  $.each(results,function(i,item){
  	var newResult =$("<div class='resultview' style=' margin:10px; padding:10px;'>" +
  	"<div class='title'><b><u>" +item.title +"</b></u></div>" +
  	"<div>" + "Level :" +item.level +"</div>" +
  	"<div>" + "Total_videos :" +item.total_videos +"</div>" +
  	"<div>" + "Instructor :" +item.instructor + "</div>" +
  	"</div>");
   resultList.append(newResult);
  	

  	

  	newResult.hover(function(){
      	$(this).css("background-color","white");
      	$(this).css("color","blue");
      	
       

  	},function(){
      $(this).css("background-color","white");
       $(this).css("color","black");
       
  	}
  	)

  });

 }


  $("#loginForm").on("submit",function(){
     var username =$("#username").val();
     var password =$("#password").val();

     if(username && password){
      if (username == 'anirban' && password =='admin') {
                        
                    $.post("/api/login",{},function(data){
                      console.log("success::"+data);
                      displayResults(data);
                      $("#loginForm").hide();
                      $("#logoutSection").show();
                      $("#welcome_msg").append(username);

                   


                     $("#error_Msg").empty();

                    	
                    })
                  .fail(function(data){
                   console.log("Something bad happened!");
                  })
                  .done(function(data){
                   
                  })
                     
                   
                 
                   }
                   else{
                    alert("Please Enter correct credential");
                   	
                   	


                   }
                 }else{
                 
                    $("#error_Msg").text("Username and password required...");
                 }



      return false;
  })






 $("#logoutButton").on('click',function(){
   $("#loginForm").show();
     $("#logoutSection").hide();

     resultList.empty();

     resultList.text("Please login to show all the course");
     $("#welcome_msg").empty();

 })



});

















/*var msg="I LOVE YOU SUSAMA";
console.log(msg);
var resultDiv=document.getElementById('result');
//resultDiv.innerHTML ="THIS IS THE TEST MESSAGE FOR TEST ";
//console.log(resultDiv);
 //x=100;
//console.log(x);
function test(){
	var y="HI";
	console.log("vlue of Y:" +y);
}
test();



*/