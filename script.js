let points = 0;
const cookieButton = document.getElementById('cookie');
const pointsDisplay = document.getElementById('points');

function updatePoints() {
    points++;
    pointsDisplay.textContent = points;
}

cookieButton.addEventListener('click', function() {
    updatePoints();
});

function setPoints(points) {
  const date = new Date();
  date.setTime(date.getTime() + (365 * 24 * 60 * 60 * 1000));
  const expires = "expires=" + date.toUTCString();
  document.cookie = "points=" + points + ";" + expires + ";path=/";
}

function getPoints() {
  const cookieName = "points=";
  const cookies = document.cookie.split(';');
  for (let i = 0; i < cookies.length; i++) {
      let cookie = cookies[i];
      while (cookie.charAt(0) === ' ') {
          cookie = cookie.substring(1);
      }
      if (cookie.indexOf(cookieName) === 0) {
          return parseInt(cookie.substring(cookieName.length, cookie.length));
      }
  }
  return 0;
}

function addPoints() {
  const currentPoints = getPoints();
  const newPoints = currentPoints + 1;
  document.getElementById("points").textContent = newPoints;
  setPoints(newPoints); 
  document.getElementById("cookie").classList.add("clicked");
  setTimeout(function() {
    document.getElementById("cookie").classList.remove("clicked");
}, 200);
}

function resetPoints() {
  const currentPoints = getPoints();
  const newPoints = 0;
  document.getElementById("points").textContent = newPoints;
  setPoints(newPoints); 
  document.getElementById("cookie").classList.add("clicked");
  setTimeout(function() {
    document.getElementById("cookie").classList.remove("clicked");
}, 200);
}

document.getElementById("reset").addEventListener("click", resetPoints);
document.getElementById("points").textContent = getPoints();
document.getElementById("cookie").addEventListener("click", addPoints);