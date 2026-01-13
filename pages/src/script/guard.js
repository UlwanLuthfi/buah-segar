const currentUser = JSON.parse(localStorage.getItem("currentUser"));

if (!currentUser) {
  alert("Silakan login terlebih dahulu");
  window.location.href = "/pages/login.html";
}

// Khusus halaman admin
if (location.pathname.includes("/admin")) {
  if (currentUser.role !== "admin") {
    alert("Anda tidak memiliki akses admin");
    window.location.href = "/pages/index.html";
  }
}
