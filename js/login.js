
    const loginForm = document.getElementById("loginForm");
    const loginError = document.getElementById("loginError");
    if (loginForm) {
        loginForm.addEventListener("submit", function (event) {
            event.preventDefault();
            const email = document.getElementById("loginEmail").value;
            const password = document.getElementById("loginPassword").value;
            // Pencarian data user
            const user = users.find(u => u.email === email && u.password === password);
            if (user) {
                // Simpan data login ke localStorage (Session)
                localStorage.setItem("loginUser", JSON.stringify(user));
                // Cek Role Akses
                if (user.role === "admin") {
                    window.location.href = "dashboard.html";
                } else {
                    window.location.href = "index.html";
                }
            } else {
                loginError.textContent = "Email atau password salah!";
            }
        });
    };
