export const writePageHTML = (html) =>
    (document.getElementById("app").innerHTML += html);

export const writeMainHTML = (html) => {
    console.log(html);
    (document.getElementById('main-container').innerHTML = html)
};
