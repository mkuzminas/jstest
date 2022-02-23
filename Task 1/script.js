/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formul4: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */
const form = document.querySelector('form')
const output = document.querySelector('#output')


form.addEventListener("submit", calculate);

function calculate(e) {
    e.preventDefault();
    const weigthKg = document.querySelector("#search").value;
    console.log(weigthKg);
    const weigthLb = weigthKg * 2.2046;
    const weigthG = weigthKg / 0.0010000;
    const weigthOz = weigthKg * 35.274;
    let list = document.createElement('ul');
    let liLb = document.createElement('li');
    liLb.innerText = `Weigth in lb is: ${weigthLb}`
    let liG = document.createElement('li');
    liG.innerText = `Weigth in g is: ${weigthG}`
    let liOz = document.createElement('li');
    liOz.innerText = `Weigth in oz is: ${weigthOz}`


    output.innerText = "";
    output.appendChild(list);
    list.appendChild(liLb);
    list.appendChild(liG);
    list.appendChild(liOz);


    output.style.cssText = "color: blue; font-weight: bold; text-align: center; font-size: 3em"
    form.reset();

}