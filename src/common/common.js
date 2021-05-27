export const writePageHTML = (html) =>
    (document.getElementById("app").innerHTML += html);

export const writeMainHTML = (html) => 
    document.getElementById('main').innerHTML = html;
