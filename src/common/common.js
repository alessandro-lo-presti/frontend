export const writePageHTML = (html) =>
    (document.getElementById("app").innerHTML += html);

export const writeMain = (html) => 
    document.getElementById('main').innerHTML = html;
