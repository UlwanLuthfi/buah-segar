// ===== ADMIN HARDCODE =====
const ADMIN = {
  email: "admin@rayuan.com",
  password: "admin123",
  role: "admin",
};

// ===== USER STORAGE =====
function getUsers() {
  return JSON.parse(localStorage.getItem("users")) || [];
}

function saveUsers(users) {
  localStorage.setItem("users", JSON.stringify(users));
}

// ===== REGISTER USER =====
function register(email, password) {
  if (!email || !password) {
    alert("Semua field wajib diisi");
    return;
  }

  const users = getUsers();
  const exists = users.find((u) => u.email === email);

  if (exists || email === ADMIN.email) {
    alert("Email sudah terdaftar");
    return;
  }

  users.push({
    email,
    password,
    role: "user",
  });

  saveUsers(users);
  alert("Registrasi berhasil");
  window.location.href = "/pages/login.html";
}

// ===== LOGIN =====
function login(email, password) {
  if (!email || !password) {
    alert("Email dan password wajib diisi");
    return;
  }

  // ADMIN LOGIN
  if (email === ADMIN.email && password === ADMIN.password) {
    localStorage.setItem("currentUser", JSON.stringify(ADMIN));
    window.location.href = "/pages/admin/index.html";
    return;
  }

  // USER LOGIN
  const users = getUsers();
  const user = users.find((u) => u.email === email && u.password === password);

  if (!user) {
    alert("Email atau password salah");
    return;
  }

  localStorage.setItem("currentUser", JSON.stringify(user));
  window.location.href = "/pages/index.html";
}

// ===== LOGOUT =====
function logout() {
  localStorage.removeItem("currentUser");
  window.location.href = "/pages/login.html";
}
