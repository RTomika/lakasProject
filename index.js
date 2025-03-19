const showName = document.getElementById("username");
const nameInput = document.getElementById("nameInput");


const submitIcon = document.getElementById("submitIcon");
const submitBtn = document.getElementById("submitBtn");

submitBtn.addEventListener("mouseover", () => {
    submitIcon.classList.add("active");
})

submitBtn.addEventListener("mouseleave", () => {
    submitIcon.classList.remove("active");
}) 