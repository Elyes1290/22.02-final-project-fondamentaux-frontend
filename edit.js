let index = 0;

function newTache(input, nonediv, tachesUl) {

  let buttonMb = document.createElement("button")
  buttonMb.textContent = "Modifier";
  buttonMb.id = "thor"
  buttonMb.value = index++;
  buttonMb.addEventListener("click",  () => {
    nonediv.classList.remove("d-none");
  })

  let inpB = document.createElement("div");
  inpB.id = "inp"+index++;
  console.log(inpB.id);
  inpB.textContent = input.value;
  inpB.appendChild(buttonMb);
  tachesUl.appendChild(inpB)

  return tachesUl;
};

export { newTache };