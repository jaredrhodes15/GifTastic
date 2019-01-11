$(document).ready(function () {


var panel = $("#moviesArr");
var topics = ["The Departed", "Batman", "Badboys", "Primal Fear"]


panel.append('<h6>' + topics + '</h6>');
$("#moviesArr").prepend(topics);

});