import { writePageHTML } from "./common";

const mainTemplate = `
    <main class="main">
        <div class="container" id="main-container"></div>
    </main>
`;

export const main = ()=> {
    writePageHTML(mainTemplate);
};