var completes = document.querySelectorAll(".complete");
var toggleButton = document.getElementById("toggleButton");

function toggleComplete() {
  var lastComplete = completes[completes.length - 1];
  lastComplete.classList.toggle("complete");
}

toggleButton.onclick = toggleComplete;

var div1 = document.getElementsByClassName("intro")[0];

$(".intro").click(function() {
  div1.classList.toggle("complete");
});

var div2 = document.getElementsByClassName("devnews")[0];

$(".devnews").click(function() {
  div2.classList.toggle("complete");
});

toggleButton.onclick = toggleComplete;
var div3 = document.getElementsByClassName("topic1")[0];

$(".topic1").click(function() {
  div3.classList.toggle("complete");
});

toggleButton.onclick = toggleComplete;
var div4 = document.getElementsByClassName("topic2")[0];

$(".topic2").click(function() {
  div4.classList.toggle("complete");
});

toggleButton.onclick = toggleComplete;
var div5 = document.getElementsByClassName("wrapup")[0];

$(".wrapup").click(function() {
  div5.classList.toggle("complete");
});

$("#edit").click(function() {
  $(".status").attr("contentEditable", "true");
});
