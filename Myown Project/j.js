// Select Elements
const toggle = document.querySelector(".toggle");
const menu = document.querySelector(".list");
const shut = document.querySelector(".cross-toggle");
const search = document.querySelector(".fa-search");
const searchInner = document.querySelector(".search-inner");
const crossInput = document.querySelector(".cross-input");
const showPop = document.querySelector(".call-me");

const foodSection = document.querySelector(".food");
const footer = document.querySelector(".footer");
const time = document.querySelector(".time");
const arrowImg = document.querySelector(".arrow-img");
const arrowChange = document.querySelector(".img-change");
const searchInput = document.querySelector(".search .gl-input");

const toDobutton = document.querySelector(".pluse-input");
const executeTodo = document.querySelector(".execute-todo");
const emptyTodo = document.querySelector(".empty-todo");
const allImg = document.querySelectorAll(".center-images img");
const centralImg = document.querySelector(".center-images");
const spanChange = document.querySelectorAll(".img-change span");
const header = document.querySelector(".header");
const scrollTo = document.querySelector(".scroll-up i");
const centerImg = document.querySelector(".center-images");
const counter = document.querySelector(".count");
const complish = document.querySelector(".complete");

// Slider
let x = 0;
const forword = function (e) {
  if (e.target.classList.contains("arrow-2")) {
    spanChange.forEach((number, i) => {
      number.classList.remove("active-img");
      if (e.target.dataset.img === "6") {
        console.log("that is true");
      }
      //  else {
      //   console.log("that is faluse");
      // }
    });
    x = x + 640;
    allImg.forEach((number, i) => {
      number.style.setProperty(
        "transform",
        `translateX(-${x <= 3200 ? x : (x = 0)}px)`
      );
    });
  }
};

const bakword = function (e) {
  if (e.target.classList.contains("arrow-1")) {
    x = x - 640;
    allImg.forEach((number, i) => {
      number.style.setProperty(
        "transform",
        `translateX(-${x >= 0 ? x : (x = 3200)}px)`
      );
    });
  }
};

arrowImg.addEventListener("click", (e) => {
  forword(e);
  bakword(e);
});

arrowChange.addEventListener("click", (e) => {
  spanChange.forEach((number, i) => {
    number.classList.remove("active-img");
  });
  allImg.forEach((number, i) => {
    if (e.target.innerHTML === "1") {
      e.target.classList.add("active-img");
      number.style.setProperty("transform", `translateX(${0}px)`);
    } else if (e.target.innerHTML === "2") {
      e.target.classList.add("active-img");
      number.style.setProperty("transform", `translateX(-${640}px)`);
    } else if (e.target.innerHTML === "3") {
      e.target.classList.add("active-img");
      number.style.setProperty("transform", `translateX(-${1280}px)`);
    } else if (e.target.innerHTML === "4") {
      e.target.classList.add("active-img");
      number.style.setProperty("transform", `translateX(-${1920}px)`);
    } else if (e.target.innerHTML === "5") {
      e.target.classList.add("active-img");
      number.style.setProperty("transform", `translateX(-${2560}px)`);
    } else if (e.target.innerHTML === "6") {
      e.target.classList.add("active-img");
      number.style.setProperty("transform", `translateX(-${3200}px)`);
    }
  });
});

// Add and Remove Toggle Menu
toggle.addEventListener("click", function () {
  menu.classList.toggle("action");
});
shut.addEventListener("click", function () {
  menu.classList.toggle("action");
});

// Add and Remove search
search.addEventListener("click", function () {
  searchInner.classList.toggle("show-inner");
});
crossInput.addEventListener("click", function () {
  searchInner.classList.toggle("show-inner");
});

// Social media Pop Up
const scrollAnywayer = function (section, scroll, funName, threshold) {
  const scName = new IntersectionObserver(funName, {
    root: null,
    threshold: threshold,
  });
  scName.observe(section);
};

const popReach = function (entry) {
  const [ent] = entry;

  if (ent.isIntersecting) {
    ent.target = showPop.style.opacity = 1;
    ent.target = showPop.classList.add("call-me2");
    // grow.unobserve(foodSection);
  } else {
    ent.target = showPop.style.opacity = 0;
    ent.target = showPop.classList.remove("call-me2");
  }
  console.log(ent);
};
scrollAnywayer(foodSection, "grow2", popReach, 0.7);

// Change header color
const colorChange = function (entry) {
  const [ent] = entry;
  if (!ent.isIntersecting) {
    header.style.backgroundColor = "#009688c4";
    header.style.boxShadow = "black 0px 0px 5px";
    header.style.position = "fixed";
    console.log(ent);
  } else {
    header.style.backgroundColor = "var(--main-color)";
    header.style.boxShadow = "none";
    header.style.position = "static";
  }
};
scrollAnywayer(centerImg, "grow4", colorChange, 0);

// footer Pop up
const footerPop = function (entry) {
  const [ent] = entry;
  if (ent.isIntersecting) {
    ent.targetr = footer.classList.add("footer2");
    ent.target = footer.style.opacity = 1;
  } else {
    ent.target = footer.style.opacity = 0;
    ent.targetr = footer.classList.remove("footer2");
  }
  console.log(ent);
};
scrollAnywayer(footer, "grow3", footerPop, 0);

// ----- To Do List ----
const toDolistLogic = function () {
  // Creat new task
  searchInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      creatList();
    }
  });
  toDobutton.addEventListener("click", () => {
    creatList();
  });

  const empty = function (style) {
    emptyTodo.style.display = style;
  };

  let inc = 0;
  const creatList = function () {
    if (searchInput.value !== "") {
      const elTo = `<div class="parent-el">
                    <div class="gl-input">${searchInput.value}</div>
                    <div class="cyrcle"></div>
                    <i class="fas fa-times cross-todo"></i>
                  </div>
              `;
      const result = executeTodo.insertAdjacentHTML("beforeend", elTo);
      searchInput.value = "";
      empty("none");
      inc++;
      counter.innerHTML = inc;
    } else {
      empty("block");
    }
  };

  const remove = function (e) {
    if (e.target.classList.contains("cross-todo")) {
      e.target.parentElement.remove();
      inc--;
      counter.innerHTML = inc;
    }
    // const parent = document.querySelectorAll(".parent-el");
    // parent.forEach((n, i) => {
    //   if (n.children[0].classList.contains("gl-finished")) {
    //     remove(e);
    //     com--;
    //     complish.innerHTML = com;
    //   }
    // });
  };

  let com = 0;
  executeTodo.addEventListener("click", (e) => {
    // Remover task
    remove(e);

    // if you finished task
    if (e.target.classList.contains("gl-finished")) {
      e.target.classList.remove("gl-finished");
      if (com > 0) {
        com--;
        complish.innerHTML = com;
      }
    } else if (e.target.classList.contains("gl-input")) {
      e.target.classList.add("gl-finished");
      com++;
      complish.innerHTML = com;
    }
  });
};
toDolistLogic();

// Scoll To Top
const scrollTop = function () {
  scrollTo.addEventListener("click", () => {
    centerImg.scrollIntoView({ behavior: "smooth" });
  });

  const scrollUp = function (entry) {
    const [ent] = entry;
    if (!ent.isIntersecting) {
      scrollTo.classList.add("arrow-show");
    } else {
      scrollTo.classList.remove("arrow-show");
    }
  };

  scrollAnywayer(centralImg, "grow1", scrollUp, 0);
};
scrollTop();

// Display time
const timeShow = function () {
  const date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  let direction = "Am";

  if (hours >= 12) {
    direction = "Pm";
  }
  if (hours > 12) {
    hours = hours - 12;
  }
  if (hours < 10) {
    hours = "0" + hours;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  time.innerHTML = `<span class="clock">${hours}</span><span class="dote">:</span><span class="clock">${minutes}</span><span class="dote">:</span><span class="clock">${seconds}</span><span class="dote">:</span><span class="clock">${direction}</span>`;
};
setInterval(function () {
  timeShow();
}, 1000);
