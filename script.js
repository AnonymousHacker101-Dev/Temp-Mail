function generateEmail() {
    const randomString = Math.random().toString(36).substring(2, 10);
    const email = randomString + "@tempmail.dev";
    document.getElementById("email").textContent = email;
}
