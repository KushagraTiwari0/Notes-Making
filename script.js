const notesC = document.querySelector(
  ".notes-container",
);
const create = document.querySelector(".btn");

function show() {
  notesC.innerHTML =
    localStorage.getItem("notes");
}
show();

function update() {
  localStorage.setItem("notes", notesC.innerHTML);
}

create.addEventListener("click", () => {
  let inputB = document.createElement("p");
  let img = document.createElement("img");
  inputB.className = "input-box";
  inputB.setAttribute("contenteditable", "true");
  img.src = "images/delete.png";
  notesC.appendChild(inputB).appendChild(img);
  update();
});

notesC.addEventListener("click", function (e) {
  if (e.target.tagName === "IMG") {
    e.target.parentNode.remove();
    update();
  }
});

notesC.addEventListener("input", function () {
  update();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    document.execCommand("insertLineBreak");
    event.preventDefault();
  }
});
