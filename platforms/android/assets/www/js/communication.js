function Communication() {

}

var Comm = new Communication();

Communication.prototype.Post = function(data, url, success, fail){
   
    $.post(url, data, success, fail);
   
}