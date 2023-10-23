const passInput = document.body.querySelector("form input:nth-of-type(1)");
const result = document.body.querySelector("section");

function check() {
    event.preventDefault()
    result.innerHTML = passInput.value.length < 8 ? "<p>The password is too short!</p>" : "<h2>Welcome to your Account!"
}