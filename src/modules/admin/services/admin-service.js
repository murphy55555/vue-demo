const correctUsername = 'dungeonguru'
const correctPassword = 'Killth3goblins'

export function attemptLogin(username, password) {
    const credentialsCorrect = username.toLowerCase() === correctUsername && password === correctPassword;
    if (credentialsCorrect) {
        sessionStorage.setItem('loggedIn', 'true');
        return { success: true };
    } else {
        return { success: false, message: 'Username or password is incorrect' };
    }
}

export function isLoggedIn() {
    return sessionStorage.getItem('loggedIn') === 'true';
}