$(document).ready(function() {
   

 	var time = 30;
  var counter = 0;
 	var correctA = 0;
 	var wrongA = 0;
 	var unansweredQ =0;
    
       
 $(".btn").on("click", function() {
   
    $("#section").css("display", "none");
    $("#quiz").css("visibility", "visible");
       counter = setInterval(count, 1000);

       function count() {

    	time--;
    	
        var converted = timeConverter(time);
        $("#timer").html(converted);

        if(time === 0) {
        	$("#timer").html("TIME'S UP!");
        	clearInterval(counter);
         document.getElementById("q1a").disabled = true;
         document.getElementById("q1b").disabled = true;
         document.getElementById("q1c").disabled = true;
         document.getElementById("q1d").disabled = true;

         document.getElementById("q2a").disabled = true;
         document.getElementById("q2b").disabled = true;
         document.getElementById("q2c").disabled = true;
         document.getElementById("q2d").disabled = true;

         document.getElementById("q3a").disabled = true;
         document.getElementById("q3b").disabled = true;
         document.getElementById("q3c").disabled = true;
         document.getElementById("q3d").disabled = true;

         document.getElementById("q4a").disabled = true;
         document.getElementById("q4b").disabled = true;
         document.getElementById("q4c").disabled = true;
         document.getElementById("q4d").disabled = true;

         document.getElementById("q5a").disabled = true;
         document.getElementById("q5b").disabled = true;
         document.getElementById("q5c").disabled = true;
         document.getElementById("q5d").disabled = true;
        
        }
    }

    function timeConverter(t) {
    	var minutes = Math.floor(t / 60);
    	var seconds = t - (minutes * 60);

    	if (seconds < 10) {
    		seconds = "0" + seconds;
    	}
    	return seconds;
    }

    
});

    $(".btnDone").on("click", function() {
       $("#quiz").css("display", "none");
       $(".btnDone").css("display", "none");
       $("#endGame").css("visibility", "visible");
       

       var radioInput = $('input[name="q1"]:checked').val();
       if(radioInput === "q1a") {
       	correctA++;
       	console.log("YES");
       
       }
       else if(!$('input[name="q1"]').is(':checked')) {
       	unansweredQ++;
      
       }
       else {
       	wrongA++;
       	console.log("NO");
      
       }

       var radioInput2 = $('input[name="q2"]:checked').val();
       if(radioInput2 === "q2b") {
       	correctA++;
       	console.log("YES");
       
       }
       else if(!$('input[name="q2"]').is(':checked')) {
       	unansweredQ++;
       }
       else {
       	wrongA++;
       	console.log("NO");
      
       }

       var radioInput3 = $('input[name="q3"]:checked').val();
       if(radioInput3 === "q3d") {
       	correctA++;
       	console.log("YES");
       
       }
       else if(!$('input[name="q3"]').is(':checked')) {
       	unansweredQ++;
       }
       else {
       	wrongA++;
       	console.log("NO");
      
       }

       var radioInput4 = $('input[name="q4"]:checked').val();
       if(radioInput4 === "q4c") {
       	correctA++;
       	console.log("YES");
       
       }
       else if(!$('input[name="q4"]').is(':checked')) {
       	unansweredQ++;
       }
       else {
       	wrongA++;
       	console.log("NO");
      
       }


      var radioInput5 = $('input[name="q5"]:checked').val();
       if(radioInput5 === "q5d") {
       	correctA++;
       	console.log("YES");
       
       }
       else if(!$('input[name="q5"]').is(':checked')) {
       	unansweredQ++;
       }
       else {
       	wrongA++;
       	console.log("NO");
      
       }
       $("#correctA").text(correctA);
       $("#wrongA").text(wrongA);
       $("#unansweredQ").text(unansweredQ);
    });
    
 });




