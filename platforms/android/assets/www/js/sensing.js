function SensingClass(){

}

var sensing = new SensingClass();

SensingClass.prototype.Send = function (data, success, fail) {
    
     
    $.ajax({
      type: "POST",
      url:  "http://bikesenseapi.mybluemix.net/measurements",
      data: JSON.stringify(data),
        success: success, 
        fail:fail
    })
  .done(function( msg ) {
    $("#user-feedback-position").html("Data Saved: " + msg );
  });
};