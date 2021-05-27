import { writePageHTML } from "../../common/common";
import "./header.scss";

const headerTemplate = `
    <header class="header">

        <div class="container">

            <div class="logo">
                Brandname
            </div>

            <nav class="nav">
                <ul class="nav-list">

                    <li class="nav-link">
                        Home
                    </li>

                    <li class="nav-link">
                        Classifica
                    </li>
                    
                </ul>
            </nav>

        </div>

    </header>
`;

export const header = ()=> {
    writePageHTML(headerTemplate);
};