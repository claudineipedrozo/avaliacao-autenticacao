const token = localStorage.getItem('token')

// Se token não tiver valor...
if(!token) {
    window.location.href = 'login.html'
}