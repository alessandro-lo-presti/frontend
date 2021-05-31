import { writePageHTML } from "../../common/common";
import { signIn } from "../../services/loginApiService";
import { loadHeader } from "../header/header";

const loginTemplate = `
    <div class='login'>
        <label for="username">Username</label>
        <input type="text" name"username" id="username">
        <label for="password">Password</label>
        <input type="password" name"password" id="password">
        <button id="submit">Invia</button>
    </div>
`;

const tryToLogin = () => {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
        signIn(username, password)
            .then(response => response.json())
            .then(data => data.response == 'logged' ? loadHeader() : null)
            .catch(error => console.log(error));
}

export const loadLogin = () => {
    writePageHTML(loginTemplate);
    document.getElementById('submit').addEventListener('click', event => {
        tryToLogin();
    });
};