import { writePageHTML } from "./common";

const mainTemplate = `
    <main class="main" id="main"></main>
`;

export const main = ()=> {
    writePageHTML(mainTemplate);
};