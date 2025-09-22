const grid = document.querySelectorAll("div");
const section = document.querySelector("section");

let cont = 0;
function verificar() {
  cont++;
  let vermelho = false;
  let azul = false;
  //   vermelho
  for (let i = 0; i < 9; i = i + 3) {
    if (
      grid[i].style.background == "red" &&
      grid[i + 1].style.background == "red" &&
      grid[i + 2].style.background == "red"
    ) {
      vermelho = true;
      section.classList.add("before" + i);
    }
  }

  for (let j = 0; j < 3; j++) {
    if (
      grid[j].style.background == "red" &&
      grid[j + 3].style.background == "red" &&
      grid[j + 6].style.background == "red"
    ) {
      vermelho = true;
      section.classList.add("before" + j + "vertical");
    }
  }

  if (
    grid[0].style.background == "red" &&
    grid[4].style.background == "red" &&
    grid[8].style.background == "red"
  ) {
    vermelho = true;
    section.classList.add("before" + 1 + "diagonal");
  }
  if (
    grid[2].style.background == "red" &&
    grid[4].style.background == "red" &&
    grid[6].style.background == "red"
  ) {
    vermelho = true;
    section.classList.add("before" + 2 + "diagonal");
  }

  // azul
  for (let i = 0; i < 9; i = i + 3) {
    if (
      grid[i].style.background == "blue" &&
      grid[i + 1].style.background == "blue" &&
      grid[i + 2].style.background == "blue"
    ) {
      azul = true;
      section.classList.add("before" + i);
    }
  }

  for (let j = 0; j < 3; j++) {
    if (
      grid[j].style.background == "blue" &&
      grid[j + 3].style.background == "blue" &&
      grid[j + 6].style.background == "blue"
    ) {
      azul = true;
      section.classList.add("before" + j + "vertical");
    }
  }

  if (
    grid[0].style.background == "blue" &&
    grid[4].style.background == "blue" &&
    grid[8].style.background == "blue"
  ) {
    azul = true;
    section.classList.add("before" + 1 + "diagonal");
  }
  if (
    grid[2].style.background == "blue" &&
    grid[4].style.background == "blue" &&
    grid[6].style.background == "blue"
  ) {
    azul = true;
    section.classList.add("before" + 2 + "diagonal");
  }

  if (vermelho) {
    setTimeout(() => {
      alert("vermelho venceu!");
      window.location.reload();
    }, 10);
  }
  if (azul) {
    setTimeout(() => {
      alert("azul venceu!");
      window.location.reload();
    }, 10);
  }

  if (cont == 9 && !azul && !vermelho) {
    setTimeout(() => {
      alert("EMPATE!");
      window.location.reload();
    }, 10);
  }
}
let cor = "x";
function handleClick(event) {
  if (cor == "x") {
    event.target.style.background = "red";
    cor = "b";
  } else {
    event.target.style.background = "blue";
    cor = "x";
  }

  event.target.style.pointerEvents = "none";
  verificar();
}
grid.forEach((e) => {
  e.addEventListener("click", handleClick);
});
