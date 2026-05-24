const users = [
    {
        "id": 1,
        "email": "zaarza03@gmail.com",
        "password": "demo"
    },
    {
        "id": 1,
        "email": "admin@demo.com",
        "password": "demo"
    }
];

document.addEventListener('DOMContentLoaded', () => {
    checkUserSession();
});

const checkUserSession = () => {
    // Check user session
    const currentUser = sessionStorage.getItem('user_id') || localStorage.getItem('user_id');
    if (currentUser) {
        window.location.href = '/index.html'
    }
}


const onSubmitLogin = (event) => {
    event.preventDefault();

    // Reset alert
    hideInlineAlert();

    const { target } = event;

    const form = {
        email: target.email.value,
        password: target.password.value,
        remember: target.remember.checked,
    };

    // Validate email or password is required
    if (!form.email | !form.password) {
        showInlineAlert({
            title: 'Terjadi Kesalahan!',
            message: 'Email dan password wajib diisi!'
        });

        return;
    }

    // Validate user valid
    const existingEmail = users.find((user) => user.email === form.email);

    if (!existingEmail) {
        showInlineAlert({
            title: 'Terjadi Kesalahan!',
            message: 'Email tidak terdaftar!'
        });

        return;
    }

    const isPasswordCorrect = existingEmail.password === form.password;

    if (!isPasswordCorrect) {
        showInlineAlert({
            title: 'Terjadi Kesalahan!',
            message: 'Password salah!'
        });

        return;
    }

    if (form.remember) {
        localStorage.setItem('user_id', existingEmail.id)
    } else {
        // Preserve session
        sessionStorage.setItem('user_id', existingEmail.id);
    }

    window.location.href = '/index.html';
}

const showInlineAlert = ({ title, message }) => {
    const alert = document.getElementById('inline-alert');
    const alertTitle = document.getElementById('inline-alert-title');
    const alertMessage = document.getElementById('inline-alert-message');

    alert.style.display = 'flex';
    alertTitle.innerText = title;
    alertMessage.innerText = message;
}

const hideInlineAlert = () => {
    const alert = document.getElementById('inline-alert');

    alert.style.display = 'none';
}