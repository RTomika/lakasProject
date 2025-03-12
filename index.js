const showName = document.getElementById("username");
const nameInput = document.getElementById("nameInput");
const submitBtn = document.getElementById("submitBtn");

console.log(nameInput);

submitBtn.addEventListener("click", () => {
    let username = nameInput.value;
    showName.innerHTML = username;
})