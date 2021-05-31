import { loadHeader } from "./page/header/header";
import { loadLogin } from "./page/login/login";
import "./style/index.scss";

const token = localStorage.getItem('token');

if(token == 'logged')
    loadHeader(token);
else
    loadLogin();

