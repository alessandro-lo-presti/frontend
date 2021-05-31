import { writePageHTML } from "../../common/common";
import { signIn } from "../../services/loginApiService";
import { TokenService } from "../../services/tokenService";
import { loadWebApp } from "../header/header";

const loginTemplate = `
    <form class='login' id="login-form">
        <h1>Login</h1>
        <label for="username">Username</label>
        <input type="text" name="username" id="username" placeholder="Username">
        <label for="password">Password</label>
        <input type="password" name="password" id="password" placeholder="Password">
        <button id="submit">Invia</button>
    </form>
`;

const tryToLogin = () => {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    signIn(username, password)
        .then((response) => response.json())
        .then((data) => {
            TokenService.setToken(data.response);
            loadWebApp();
        })
        .catch((error) => console.log(error));
};

export const loadLogin = () => {
    writePageHTML(loginTemplate);
    document.getElementById("login-form").addEventListener("submit", (event) => {
        event.preventDefault();
        tryToLogin();
    });
};
