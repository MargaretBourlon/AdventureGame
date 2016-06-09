function showNext (nextScene) {
  document.getElementById(nextScene).style.display = "block";
  document.getElementById('reset').style.display = "inline-block";
  document.getElementById(nextScene).scrollIntoView();
};
function startOver () {
  window.location.reload();
};
