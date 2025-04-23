const registeredUsers = [];

document.getElementById("regForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const event = document.getElementById("event").value;
  const msg = document.getElementById("msg");
  const age = document.getElementById("age").value.trim();


  if (!name || !email || !phone || !age) {
    msg.style.color = "red";
    msg.textContent = "All fields are required.";
    return;
  }
  

  let duplicate = false;
  for (let i = 0; i < registeredUsers.length; i++) {
    if (registeredUsers[i].email === email) {
      duplicate = true;
      break;
    }
  }

  if (duplicate) {
    msg.style.color = "red";
    msg.textContent = "Email already registered.";
  } else {
    const user = { name, email, phone, age, event };
    registeredUsers.push(user);

    msg.style.color = "green";
    msg.textContent = "Registration successful!";
    console.log("All Registered Users:", registeredUsers);

    displayUsers();
    document.getElementById("regForm").reset();
  }
});

function displayUsers() {
    const list = document.getElementById("userList");
    list.innerHTML = "";
  
    registeredUsers.forEach(user => {
      const li = document.createElement("li");
      li.textContent = `${user.name} (Age: ${user.age}) - ${user.email} - ${user.event}`;
      list.appendChild(li);
    });
  }
  
document.getElementById("clearBtn").addEventListener("click", () => {
  document.getElementById("regForm").reset();
  document.getElementById("msg").textContent = "";
});
