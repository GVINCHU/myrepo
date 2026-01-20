const API_URL = "fetch('http://host.docker.internal:8088/api/users')";

const form = document.getElementById("userForm");
const usersList = document.getElementById("users");

async function loadUsers() {
    const response = await fetch(API_URL);
    const users = await response.json();

    usersList.innerHTML = "";
    users.forEach(user => {
        const li = document.createElement("li");
        li.textContent = `${user.name} (${user.email})`;
        usersList.appendChild(li);
    });
}

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            name: document.getElementById("name").value,
            email: document.getElementById("email").value
        })
    });

    form.reset();
    loadUsers();
});

loadUsers();
