
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");

//   Modal open function
function openModal1() {
  console.log("Modal is Open");
  modal.classList.add("active");
  overlay.classList.add("overlayactive");
};

// Modal close function
function closeModal1() {
  modal.classList.remove("active");
  overlay.classList.remove("overlayactive");
};


function openModal2() {
  console.log("Modal is Open");
  modal.classList.add("active");
  overlay.classList.add("overlayactive");
};

function closeModal2() {
  modal.classList.remove("active");
  overlay.classList.remove("overlayactive");
};