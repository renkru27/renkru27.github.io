// JavaScript Document
$( function() {
   $("map area").click( function(){

      if ($(this).attr("id") == "North America") {
         $("#feedback").css("color","green");
         $("#feedback").html("Yes, the Salesforce global headquarters are in San Francisco, many offices in North America!");
      }

      if ($(this).attr("id") == "South America") {
         $("#feedback").css("color","red");
         $("#feedback").html("No, however has offices in Argentina and Brazil.");
      }

      if ($(this).attr("id") == "Asia") {
         $("#feedback").css("color","red");
         $("#feedback").html("No, the second largest global office is in Singapore, many offices in Asia-Pacific!");
      }
	       if ($(this).attr("id") == "Europe") {
         $("#feedback").css("color","red");
         $("#feedback").html("No, however has many offices across Europe.");
      }
       if ($(this).attr("id") == "Australia") {
         $("#feedback").css("color","red");
         $("#feedback").html("No, however has an office in Australia.");
      }
	      if ($(this).attr("id") == "Africa") {
         $("#feedback").css("color","red");
         $("#feedback").html("No, however has an office in Morocco!");
      }
  $("#feedback").css("backgroundColor","yellow");
	   $('#myModal').modal("show");



   });
}); //end main jQuery function


