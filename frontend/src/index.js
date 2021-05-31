import { loadWebApp } from "./page/header/header";
import { loadLogin } from "./page/login/login";
import { TokenService } from "./services/tokenService";
import "./style/index.scss";

if (TokenService.isLogged()) loadWebApp();
else loadLogin();
