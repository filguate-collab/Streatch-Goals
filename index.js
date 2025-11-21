const homeScoreEl = document.getElementById("home-score");
const guestScoreEl = document.getElementById("guest-score");
const plusOneHomeEl = document.getElementById("plus-one-home");
const plusTwoHomeEl = document.getElementById("plus-two-home");
const plusThreeHomeEl = document.getElementById("plus-three-home");
const plusOneGuestEl = document.getElementById("plus-one-guest");
const plusTwoGuestEl = document.getElementById("plus-two-guest");
const plusThreeGuestEl = document.getElementById("plus-three-guest");
var homeScore = 0;
var guestScore = 0;

plusOneHomeEl.addEventListener("click", () => {
  homeScore += 1;
  update(homeScore, homeScoreEl);
  removeClassTo(homeScoreEl, guestScoreEl);
  compare(homeScore, guestScore);
});

plusTwoHomeEl.addEventListener("click", () => {
  homeScore += 2;
  update(homeScore, homeScoreEl);
  removeClassTo(homeScoreEl, guestScoreEl);
  compare(homeScore, guestScore);
});

plusThreeHomeEl.addEventListener("click", () => {
  homeScore += 3;
  update(homeScore, homeScoreEl);
  removeClassTo(homeScoreEl, guestScoreEl);
  compare(homeScore, guestScore);
});

plusOneGuestEl.addEventListener("click", () => {
  guestScore += 1;
  update(guestScore, guestScoreEl);
  removeClassTo(homeScoreEl, guestScoreEl);
  compare(homeScore, guestScore);
});

plusTwoGuestEl.addEventListener("click", () => {
  guestScore += 2;
  update(guestScore, guestScoreEl);
  removeClassTo(homeScoreEl, guestScoreEl);
  compare(homeScore, guestScore);
});

plusThreeGuestEl.addEventListener("click", () => {
  guestScore += 3;
  update(guestScore, guestScoreEl);
  removeClassTo(homeScoreEl, guestScoreEl);
  compare(homeScore, guestScore);
});

function compare(homeScore, guestScore) {
  if (homeScore > guestScore) {
    addClassTo(homeScoreEl);
  } else if (homeScore < guestScore) {
    addClassTo(guestScoreEl);
  }
}

function update(score, fromeScoreEl) {
  if (score < 10) {
    fromeScoreEl.textContent = "0" + score;
  } else {
    fromeScoreEl.textContent = score;
  }
}

function addClassTo(element) {
  element.classList.add("highlight");
}

function removeClassTo(element1, element2) {
  element1.classList.remove("highlight");
  element2.classList.remove("highlight");
}

function resetScore() {
  homeScore = 0;
  guestScore = 0;
  removeClassTo(homeScoreEl, guestScoreEl);
  update(homeScore, homeScoreEl);
  update(guestScore, guestScoreEl);
}
