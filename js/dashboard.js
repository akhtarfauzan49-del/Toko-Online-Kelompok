document.addEventListener("DOMContentLoaded", function () {
    const loginUserData = localStorage.getItem("loginUser");
    if (!loginUserData) {
        alert("Anda belum login! Silakan login terlebih dahulu.");
        window.location.href = "login.html";
        return;
    }
    const loginUser = JSON.parse(loginUserData);
    if (loginUser.role !== "admin") {
        alert("Akses ditolak! Halaman ini khusus Admin.");
        window.location.href = "index.html";
        return;
    }
    const adminName = "Admin";
    const adminRole = "Administrator";
    const nameElement = document.querySelector("h2.text-sm.font-semibold");
    const roleElement = document.querySelector("p.text-\\[11px\\]");
    
    if (nameElement) nameElement.textContent = adminName;
    if (roleElement) roleElement.textContent = adminRole;
    const avatarElement = document.querySelector(".w-9.h-9.rounded-full");
    if (avatarElement && adminName) {
        avatarElement.textContent = adminName.charAt(0).toUpperCase();
    }
    const logoutButton = document.getElementById("logoutButton") || document.getElementById("logoutBtn");
    if (logoutButton) {
        logoutButton.addEventListener("click", function (event) {
            event.preventDefault();
            localStorage.removeItem("loginUser");
            alert("Anda telah berhasil logout.");
            window.location.href = "login.html";
        });
    }
});