function myalert_b()
{
var modal = document.getElementById("ferPU1");
var btn = document.getElementsByClassName("popUPBtn")[0];
btn.onclick = function() {
  modal.style.display = "block";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
}

