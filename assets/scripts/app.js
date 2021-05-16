const grid = document.querySelector(".grid");
let currentShooterIndex = 202;
let width = 15;

for (let i = 0; i < 225; i++) {
  const square = document.createElement("div");
  grid.appendChild(square);
}

// create an array from from an array like object
const squares = Array.from(document.querySelectorAll(".grid div"));

const alienInvaders = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 30, 31,
  32, 33, 34, 35, 36, 37, 38, 39,
];

const draw = function () {
  for (let i = 0; i < alienInvaders.length; i++) {
    squares[alienInvaders[i]].classList.add("invader");
  }
};

draw();

const remove = function () {
  for (let i = 0; i < alienInvaders.length; i++) {
    squares[alienInvaders[i]].classList.add("invader");
  }
};

squares[currentShooterIndex].classList.add("shooter");

const moveShooter = function (event) {
  squares[currentShooterIndex].classList.remove("shooter");

  switch (event.key) {
    case "ArrowLeft":
      if (currentShooterIndex % width !== 0) currentShooterIndex -= 1;
      break;
    case "ArrowRight":
      if (currentShooterIndex % width < width - 1) currentShooterIndex += 1;
      break;
  }

  squares[currentShooterIndex].classList.add("shooter");
};

document.addEventListener("keydown", moveShooter);

const moveInvaders = function () {
  const leftEdge = alienInvaders[0] % width === 0;
  const rightEdge =
    alienInvaders[alienInvaders.length - 1] % width === width - 1;

  remove();

  for (let i = 0; i < alienInvaders.length; i++) {
    alienInvaders[i] += 1;
  }

  draw();
};

// setInterval(moveInvaders, 500);
