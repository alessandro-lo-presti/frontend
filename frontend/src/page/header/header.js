import { loadRanking } from "../ranking/ranking";
import { loadHome } from "../home/home";
import { writePageHTML } from "../../common/common";

const headerTemplate = `
    <header class="header">
        <nav class="navbar navbar-expand navbar-dark bg-dark">
            <div class="container">
                <a class="navbar-brand">Navbar</a>
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link active" data-section="HOME">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" data-section="RANKING">Classifica</a>
                    </li>
                    <i class="fas fa-bars"></i>
                </ul>
            </div>
        </nav>
    </header>

    <main class="main">
        <div class="container" id="main-container"></div>
    </main>
`;

let currentSection = null; //id sezione
let currentSectionCleanUp = null; //callback cleanup

export const loadHeader = () => {
    writePageHTML(headerTemplate);

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
