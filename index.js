const sidebar = document.getElementById("sidebar");
const menuBtn = document.getElementById("menuBtn");
const closeBtn = document.getElementById("closeBtn");
const content = document.getElementById("content");

// Open sidebar
menuBtn.addEventListener("click", () => {
  sidebar.classList.add("active");
  content.classList.add("shifted");
});

// Close sidebar
closeBtn.addEventListener("click", () => {
  sidebar.classList.remove("active");
  content.classList.remove("shifted");
});
