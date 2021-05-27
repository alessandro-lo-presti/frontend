import "./header.scss";

export const initializeHeader = () => {
    document.querySelectorAll(".nav-link").forEach((item) => {
        item.addEventListener("click", (event) => {
            console.log("evento cambio sezione", event.target);
            //per ogni click -> renderizza la sezione giusta!

            //leggere data-section

            //caricare il loadXXX giusto loadHome loadRanking etc etc
        });
    });
};
