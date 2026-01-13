const currentUser = JSON.parse(localStorage.getItem("currentUser"));

// ===== ADMIN PAGE =====
if (location.pathname.includes("/admin/")) {
  if (!currentUser || currentUser.role !== "admin") {
    alert("Anda tidak memiliki akses admin");
    window.location.href = "../login.html";
  }
}
// ===== USER PAGE =====
else {
  if (!currentUser) {
    alert("Silakan login terlebih dahulu");
    window.location.href = "login.html";
  }
}
