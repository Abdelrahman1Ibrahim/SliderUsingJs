let indexActive = 1;
let imgs = Array.from(document.querySelectorAll("img"));
let length = imgs.length;
let buttonPrev = document.querySelector(".prev");
let buttonNext = document.querySelector(".next");
handelList();
window.onload = function () {
  if (indexActive == 1) {
    adddisabeld("prev");
  } else if (indexActive == length) {
    adddisabeld("next");
  }
  imgs[indexActive - 1].classList.add("active");

  handelActiveImg(indexActive);
};

// make ul and make li in it next push in document
function handelList() {
  let ul = document.createElement("ul");
  ul.className = "list";
  buttonPrev.after(ul);

  for (let i = 0; i < length; i++) {
    let li = document.createElement("li");
    if (i == 0) li.classList.add("active");
    li.innerHTML = i + 1;
    ul.appendChild(li);
  }
}

// handel next and prev

buttonNext.addEventListener("click", handelnext);
buttonPrev.addEventListener("click", handelprev);
function handelnext() {
  if (indexActive != length) {
    indexActive++;
    updateActive(indexActive);
    updateActiveImg(indexActive);
    handelActiveImg(indexActive);
  }
  if (indexActive == length) {
    adddisabeld("next");
    // console.log("next");
  } else {
    cleardisabeld("next");
  }
  if (indexActive == 1) {
    adddisabeld("prev");
  } else {
    cleardisabeld("prev");
  }
}
function handelprev() {
  if (indexActive != 1) {
    indexActive--;
    updateActive(indexActive);
    updateActiveImg(indexActive);
    handelActiveImg(indexActive);
  }

  if (indexActive == length) {
    adddisabeld("next");
  } else {
    cleardisabeld("next");
  }
  if (indexActive == 1) {
    adddisabeld("prev");
  } else {
    cleardisabeld("prev");
  }
}
function updateActive(indexActive) {
  let lists = Array.from(document.querySelectorAll(".list li"));
  //   console.log(lists);
  for (let i = 0; i < lists.length; i++) {
    if (i + 1 == indexActive) {
      lists[i].classList.add("active");
    } else {
      lists[i].classList.remove("active");
    }
  }
}
function updateActiveImg(indexActive) {
  let imgs = Array.from(document.querySelectorAll("img"));
  imgs.forEach((img) => {
    img.classList.remove("active");
  });
  imgs[indexActive - 1].classList.add("active");
}
function handelActiveImg(indexActive) {
  let indeximg = document.querySelector(".indeximg");
  indeximg.innerHTML = " # " + indexActive + " of " + length;
}

function adddisabeld(state) {
  if (state == "next") {
    buttonNext.classList.add("disabled");
  } else {
    buttonPrev.classList.add("disabled");
  }
}
function cleardisabeld(state) {
  if (state == "next") {
    buttonNext.classList.remove("disabled");
  } else {
    buttonPrev.classList.remove("disabled");
  }
}


// when click on li


  let lists = Array.from(document.querySelectorAll(".list li"));
  // console.log(lists);

  lists.forEach((list) => {
    list.onclick = function () {
      // console.log(list.innerHTML);
      let indexActive = Number(list.innerHTML);
      updateActive(indexActive);
      updateActiveImg(indexActive);
      handelActiveImg(indexActive);
      if (indexActive == length) {
        adddisabeld("next");
      } else {
        cleardisabeld("next");
      }
      if (indexActive == 1) {
        adddisabeld("prev");
      } else {
        cleardisabeld("prev");
      }
    };
  });

