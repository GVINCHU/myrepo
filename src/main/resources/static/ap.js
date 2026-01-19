/*const form = document.getElementById("userForm");
const usersList = document.getElementById("users");

async function loadUsers() {
    const res = await fetch("/users");
    const users = await res.json();

    usersList.innerHTML = "";
    users.forEach(u => {
        const li = document.createElement("li");
        li.textContent = `${u.name} (${u.email})`;
        usersList.appendChild(li);
    });
}

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    await fetch("/users", {
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
*/