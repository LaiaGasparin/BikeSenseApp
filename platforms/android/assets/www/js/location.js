var positionDataArray = [];

var recordingandStoringPosition = function(){    
    navigator.geolocation.watchPosition(function (p) {      
        if(settings.status === "recording"){
            var positionData = {                    
                Latitude: p.coords.latitude,
                Longitude: p.coords.longitude,
                timestamp: Date.now()/1000
            };                                     

           var _data = {
                userId: "0",
                sensortype: "position",
                data: positionData
            };
            $("#user-feedback-position").text(JSON.stringify(positionData));
            positionDataArray.push(_data);
                    
        }else{
          $("#user-feedback-position").text("not recording...");
        }
    }
    , function () {
        $("#user-feedback-position").append("<br \>no Location data available");
    }, { enableHighAccuracy: true });
}



