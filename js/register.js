const registerForm = document.getElementById("registerForm");
const regError = document.getElementById("regError");
if (registerForm) {
    registerForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const name = document.getElementById("regName").value;
        const email = document.getElementById("regEmail").value;
        const password = document.getElementById("regPassword").value;
        const confirmPassword = document.getElementById("regConfirmPassword").value;
        // Validasi Password
        if (password !== confirmPassword) {
            regError.textContent = "Konfirmasi password tidak cocok!";
            return;
        }
        // Cek Email Terdaftar
        const existingUser = users.find(u => u.email === email);
        if (existingUser) {
            regError.textContent = "Email sudah terdaftar!";
            return;
        }
        // Tambah User Baru ke Array Database Static
        const newUser = {
            id: users.length + 1,
            name: name,
            email: email,
            password: password,
            role: "user"
        };
        users.push(newUser);
        alert("Pendaftaran berhasil! Silakan login.");
        window.location.href = "login.html";
    });
};
