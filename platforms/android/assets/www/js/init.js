$(document).ready(function(){
  $(document).on("click", "#sendData", function(evt){
      settings.status ="storing";
      
      sensing.Send(positionDataArray, 
            function(){
             $("#user-feedback-position").text("DATA SENT TO SERVER");
          positionDataArray= [];
          
        }, 
            function(){
            $("#user-feedback-position").text("fail sending to server");
        });
      
      $("#sendData").attr("disabled", true);
      $("#record").attr("disabled", false);
  });
    
    
    $(document).on("click", "#record", function(evt){
      settings.status ="recording";
      
       $("#sendData").attr("disabled", false);
      $("#record").attr("disabled", true);
      
  });
  
  recordingandStoringPosition();

});

  