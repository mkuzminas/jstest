/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Pateikiamas informacijos atvaizdavimas <div id="output"></div> bloke
1.1. Infrmacija, kuri pateikiama: "login" ir "avatar_url" (paveikslėlis) reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;
"
Pastaba: Informacija apie user'į (jo kortelė) bei turi turėti bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = 'https://api.github.com/users';

const button = document.getElementById("btn");

const output = document.getElementById("output");
output.style.display = "flex";
output.style.flexWrap = "wrap";
output.style.justifyContent = "space-evenly";

const message = document.getElementById("message");


const run = () => {
    fetch(ENDPOINT)
        .then(response => response.json())
        .then(users => {
            for (let i = 0; i < users.length; i++)
                addUserCard(users[i]);
            message.parentNode.removeChild(message);
        });
}

const addUserCard = (users) => {
    const card = document.createElement("div");
    card.style.backgroundColor = "lightgreen";
    card.style.width = "30vh";
    card.style.margin = "10px";
    card.style.display = "flex";
    card.style.justifyContent = "space-between";
    card.style.borderRadius = "10px";

    const login = document.createElement("h3");
    login.textContent = users.login;
    login.style.margin = "20px";


    const avatar_url = document.createElement("img");
    avatar_url.setAttribute('src', users.avatar_url);
    avatar_url.style.maxHeight = "10vh";
    avatar_url.style.maxWidth = "100%";


    output.appendChild(card);
    card.appendChild(login);
    card.appendChild(avatar_url);
}

button.addEventListener('click', run);