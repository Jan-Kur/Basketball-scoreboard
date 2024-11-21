let onePointHomeButton = document.querySelector(".onepointHome");
let twoPointsHomeButton = document.querySelector(".twopointsHome");
let threePointsHomeButton = document.querySelector(".threepointsHome");

let homeScore = 0;

let displayedHomeScore = document.querySelector(".score-home");

function add1PointHome () {
    homeScore += 1;
    displayedHomeScore.innerText = homeScore;
}

function add2PointsHome () {
    homeScore += 2;
    displayedHomeScore.innerText = homeScore;
}

function add3PointsHome () {
    homeScore += 3;
    displayedHomeScore.innerText = homeScore;
}


let onePointGuestButton = document.querySelector(".onepointGuest");
let twoPointsGuestButton = document.querySelector(".twopointsGuest");
let threePointsGuestButton = document.querySelector(".threepointsGuest");

let guestScore = 0;

let displayedGuestScore = document.querySelector(".score-guest");

function add1PointGuest () {
    guestScore += 1;
    displayedGuestScore.innerText = guestScore;
}

function add2PointsGuest () {
    guestScore += 2;
    displayedGuestScore.innerText = guestScore;
}

function add3PointsGuest () {
    guestScore += 3;
    displayedGuestScore.innerText = guestScore;
}

onePointHomeButton.addEventListener("click", add1PointHome);
twoPointsHomeButton.addEventListener("click", add2PointsHome);
threePointsHomeButton.addEventListener("click", add3PointsHome);

onePointGuestButton.addEventListener("click", add1PointGuest);
twoPointsGuestButton.addEventListener("click", add2PointsGuest);
threePointsGuestButton.addEventListener("click", add3PointsGuest);