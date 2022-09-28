const wat = document.querySelector("#wat");
const whatsappBox = document.querySelector(".chatbox-cont");
const whatsappCancel = document.querySelector(".cancel-icon");


wat.addEventListener("click", () => {
	whatsappBox.style.display = "block";
});

whatsappCancel.addEventListener("click", () => {
	whatsappBox.style.display = "none";
});