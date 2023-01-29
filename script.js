const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const h1 = (document.querySelector("h1").onmouseover = (event) => {
  let iteration = 0;

  const interval = setInterval(() => {
    event.target.innerText = event.target.innerText
      .split("")
      .map((letter, index) => {
        if (index < iteration) {
          // console.log(event.target.dataset.value);
          return event.target.dataset.value[index];
        }
        return letters[Math.floor(Math.random() * 26)];
      })
      .join("");
    iteration += 1 / 3;
    if (iteration >= event.target.dataset.value.length + 1) {
      clearInterval(interval);
    }
  }, 55);
});
