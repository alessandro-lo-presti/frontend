import { loadRanking } from "../ranking/ranking";
import { loadHome } from "../home/home";
import "./header.scss";

export const initializeHeader = () => {
    document.querySelectorAll(".nav-link").forEach((item) => {
        item.addEventListener("click", (event) => {

            //leggere data-section
            const section = event.target.getAttribute('data-section');

            //caricare il loadXXX giusto loadHome loadRanking etc etc
            section == 'HOME' ? loadHome() : loadRanking();
        });
    });
};
