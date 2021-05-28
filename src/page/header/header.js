import { loadRanking } from "../ranking/ranking";
import { loadHome } from "../home/home";

let currentSection = null; //id sezione
let currentSectionCleanUp = null; //callback cleanup

export const initializeHeader = () => {
    document.querySelectorAll(".nav-link").forEach((item) => {
        item.addEventListener("click", (event) => {
            document.querySelector(".active").classList.remove("active");
            event.target.classList.add("active");

            //leggere data-section
            const section = event.target.getAttribute("data-section");
            console.log("cambio pagina", section);

            //caricare il loadXXX giusto loadHome loadRanking etc etc

            if (currentSectionCleanUp) currentSectionCleanUp();
            currentSection = section;
            currentSectionCleanUp =
                section == "HOME" ? loadHome() : loadRanking();
        });
    });

    currentSection = "HOME";
    currentSectionCleanUp = loadHome();
};
