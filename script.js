const mainContainer = document.querySelector('#main-container');
const changeGridButton = document.querySelector('#change-grid-button');

function changeColor (e) {
  const red = Math.floor(Math.random() * (255 + 1));
  const green = Math.floor(Math.random() * (255 + 1));
  const blue = Math.floor(Math.random() * (255 + 1));

  e.target.style.backgroundColor = `rgb(${red} ${green} ${blue})`;
  if (!e.target.style.opacity) {
    e.target.style.opacity = 1;
  } else if (e.target.style.opacity === 0) {
    return;
  } else {
    e.target.style.opacity -= 0.1;
  }
}

changeGridButton.addEventListener('click', changeGridSize);

function changeGridSize () {
  const squaresPerSide = Number(prompt('How many squares per side?'));

  if (!squaresPerSide || squaresPerSide > 100) {
    alert('Please enter a valid number, up to 100.');
    return;
  }

  removeGrid();

  generateGrid(squaresPerSide);
}

function removeGrid () {
  while (mainContainer.firstChild) {
    mainContainer.removeChild(mainContainer.firstChild);
  }
}

function generateGrid (squaresPerSide = 16) {
  for (let i = 0; i < squaresPerSide; i++) {
  const divParent = document.createElement('div');
  divParent.classList.add('div-parent');
  mainContainer.appendChild(divParent);

    for (let j = 0; j < squaresPerSide; j++) {
      const divChild = document.createElement('div');
      divChild.classList.add('div-child');
      divParent.appendChild(divChild);

      divChild.addEventListener('mouseover', changeColor);

    }

  }
}

generateGrid();