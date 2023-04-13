document.getElementById('login-form').addEventListener('submit', async (event) => {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const response = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
    });

    if (response.ok) {
        const { token } = await response.json();
        // Token saqlanadi va boshqa sahifalarga o'tkazadi
    } else {
        // Xatolikni ko'rsatish
    }
});