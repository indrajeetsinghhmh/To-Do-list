const swipe1 = document.querySelector(".main");
const btn1 = document.querySelector(".startingbtn");

btn1.addEventListener("click", () => {
  swipe1.classList.add("active1");
});

const btn2 = document.querySelector(".startingbtn2");
btn2.addEventListener("click", () => {
  swipe1.classList.add("active2");
});
/////df

const inputbtn = document.querySelector(".icon");
const inputEnter = document.querySelector("#userInput");

function makingList() {
  const input = document.getElementById("userInput").value;
  const listItem = document.createElement("li");

  // If page is page3, create checkbox and label
  if (document.querySelector(".page3")) {
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    const label = document.createElement("label");
    label.textContent = input;

    listItem.appendChild(checkbox);
    listItem.appendChild(label);
    const listItem2 = listItem.cloneNode(true);
    document.getElementById("listdata2").appendChild(listItem2);
  }
  // For page 2, just add the text
  listItem.textContent = input;
  document.getElementById("listdata").appendChild(listItem);
  document.getElementById("userInput").value = "";
}

inputbtn.addEventListener("click", () => {
  makingList();
});

inputEnter.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    makingList();
  }
});

// adding more task in pending list of page3
const addBtn = document.querySelector(".addmoreBtn");
const addMore = document.querySelector(".addmore");
addBtn.addEventListener("dblclick", () => {
  addMore.classList.toggle("addtask");
});

/////moving from pendinglist to completed list
const currentList = document.getElementById("listdata2");
const finalList = document.getElementById("finalList");

currentList.addEventListener("change", function (e) {
  if (e.target.tagName === "INPUT" && e.target.type === "checkbox") {
    const listItem = e.target.parentNode; //i.e li
    if (e.target.checked) {
      // Move the checked item to finalList
      finalList.appendChild(listItem);
    } else {
      // Move the unchecked item back to listdata2
      currentList.appendChild(listItem);
    }
  }
});

const addmoreBtn = document.querySelector(".addmoreBtn");
const addmoreTask = document.getElementById("addmoreTask");

function addMoreItemsToList() {
  const taskName = addmoreTask.value;
  if (taskName !== "") {
    // Create new list item
    const listItem = document.createElement("li");
    listItem.innerHTML = `<input type="checkbox">${taskName}`;

    // Append the new list item to listdata2
    currentList.appendChild(listItem);

    // Clear the input field
    addmoreTask.value = "";
  }
}
addmoreBtn.addEventListener("click", function () {
  addMoreItemsToList();
});
addmoreTask.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    addMoreItemsToList();
  }
});


// moving to page4 

const btn3 = document.querySelector(".startingbtn3");
btn3.addEventListener("click", () => {
  swipe1.classList.add("active3");
});


// exiting the window
document.querySelector(".lastBtn").addEventListener("click", function () {
  window.location.href = "exit.html"; 
});