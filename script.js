var completes = document.querySelectorAll(".complete");
var toggleButton = document.getElementById("toggleButton");

function toggleComplete() {
  var lastComplete = completes[completes.length - 1];
  lastComplete.classList.toggle("complete");
}

toggleButton.onclick = toggleComplete;

var div1 = document.getElementsByClassName("intro")[0];
if (localStorage.getItem("intro") === "complete") {
  div1.classList.toggle("complete");
}
$(".intro").click(function() {
  div1.classList.toggle("complete");
  if (localStorage.getItem("intro") === "complete") {
    localStorage.setItem("intro", " ");
  } else {
    localStorage.setItem("intro", "complete");
  }
});

var div2 = document.getElementsByClassName("devnews")[0];
if (localStorage.getItem("devnews") === "complete") {
  div2.classList.toggle("complete");
}
$(".devnews").click(function() {
  div2.classList.toggle("complete");
  if (localStorage.getItem("devnews") === "complete") {
    localStorage.setItem("devnews", " ");
  } else {
    localStorage.setItem("devnews", "complete");
  }
});

var div3 = document.getElementsByClassName("topic1")[0];
if (localStorage.getItem("topic1") === "complete") {
  div3.classList.toggle("complete");
}
$(".topic1").click(function() {
  div3.classList.toggle("complete");
  if (localStorage.getItem("topic1") === "complete") {
    localStorage.setItem("topic1", " ");
  } else {
    localStorage.setItem("topic1", "complete");
  }
});

var div4 = document.getElementsByClassName("topic2")[0];
if (localStorage.getItem("topic2") === "complete") {
  div4.classList.toggle("complete");
}
$(".topic2").click(function() {
  div4.classList.toggle("complete");
  if (localStorage.getItem("topic2") === "complete") {
    localStorage.setItem("topic2", " ");
  } else {
    localStorage.setItem("topic2", "complete");
  }
});

var div5 = document.getElementsByClassName("wrapup")[0];
if (localStorage.getItem("wrapup") === "complete") {
  div5.classList.toggle("complete");
}
$(".wrapup").click(function() {
  div5.classList.toggle("complete");
  if (localStorage.getItem("wrapup") === "complete") {
    localStorage.setItem("wrapup", " ");
  } else {
    localStorage.setItem("wrapup", "complete");
  }
});

$("#edit").click(function() {
  $(".status").attr("contentEditable", "true");
});
