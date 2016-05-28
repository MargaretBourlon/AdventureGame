function showNext (nextScene) {
  document.getElementById(nextScene).style.display = "block";
};
function switchScene (currentScene, alternateScene) {
    document.getElementById(currentScene).style.display = "none";
    document.getElementById(alternateScene).style.display = "block";
};
