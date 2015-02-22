var accelerationArray = [];

var recordingandStoringAcc =  function(){
    function onSuccess(acceleration) {
    alert('Acceleration X: ' + acceleration.x + '\n' +
          'Acceleration Y: ' + acceleration.y + '\n' +
          'Acceleration Z: ' + acceleration.z + '\n' +
          'Timestamp: '      + acceleration.timestamp + '\n');
};

function onError() {
    alert('onError!');
};
    alert("record acc");

navigator.accelerometer.getCurrentAcceleration(onSuccess, onError);
    /*
    alert("record acc");
    function onSuccess(acceleration) {
        alert('Acceleration X: ' + acceleration.x + '\n' +
              'Acceleration Y: ' + acceleration.y + '\n' +
              'Acceleration Z: ' + acceleration.z + '\n' +
              'Timestamp: '      + acceleration.timestamp + '\n');
        
        if(settings.status === "recording"){
            var accData = {                    
                x:  acceleration.x,
                y: acceleration.y,
                z: acceleration.z,
                Timestamp: acceleration.timestamp/1000
            };                                     

           var _data = {
                userId: "0",
                sensortype: "acceleration",
                data: accData
            };
            $("#user-feedback-acc").text(JSON.stringify(accData));
            accelerationArray.push(_data);
                    
        }else{
          $("#user-feedback-acc").text("not recording...");
        }
    };

    function onError() {
        alert('onError!');
    };
    var options = { frequency: 3000 };
    navigator.accelerometer.watchAcceleration(onSuccess, onError, options);*/
};