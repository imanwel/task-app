let taskForm = document.querySelector("form"),
  ul = document.querySelector("ul"),
  taskInput = document.querySelector(".task-input"),
  caution = document.querySelector(".message"),
  clearBtn = document.querySelector(".clear-button"),
  searchBtn = document.querySelector(".search"),
  searchInput = document.querySelector("#search");

searchBtn.addEventListener("click", () => {
  if (searchInput.style.visibility === "hidden") {
    searchInput.style.visibility = "visible";
  } else {
    searchInput.style.visibility = "hidden";
  }
});

taskForm.addEventListener("submit", submitform);

function submitform(e) {
  e.preventDefault();
  let inputValue = taskInput.value;
  let li = document.createElement("li");
  li.className = "listItem";
  li.textContent = inputValue;
  let clr = document.createElement("button");
  clr.className = "clearItem";
  clr.textContent = "x";
  clr.style.border = "none";
  clr.style.backgroundColor = "transparent";
  clr.style.color = "red";
  clr.style.cursor = "pointer";
  li.appendChild(clr);

  if (inputValue === "") {
    check("input a task", "rgb(188, 57, 57)", "2px solid red");
    timeout(5000);
  } else {
    ul.appendChild(li);
    check("Task added", "green", "2px solid green");
    timeout(1000);
    console.log(inputValue);
  }
  if (ul.children.length < 2) {
    clearBtn.style.visibility = "hidden";
  } else {
    clearBtn.style.visibility = "visible";
  }

  taskInput.value = "";
}

check = (message, backcolor, border) => {
  caution.textContent = message;
  caution.style.visibility = "visible";
  caution.style.backgroundColor = backcolor;
  taskInput.style.borderBottom = border;
};

timeout = (time) => {
  setTimeout(() => {
    caution.style.visibility = "hidden";
    taskInput.style.borderBottom = "1px solid black";
  }, time);
};

ul.addEventListener("click", (e) => {
  if (e.target.parentElement.classList.contains("listItem")) {
    e.target.parentElement.remove();
  }
});

clearBtn.addEventListener("click", () => {
  while (ul.firstElementChild) {
    ul.removeChild(ul.lastElementChild);
    clearBtn.style.visibility = "hidden";
  }
});
