/* ------------------------------ TASK 2 ----------------------------
Parašykite JS kodą, kuris skaičiuos kiek kartų buvo paspaustas mygtukas
su tekstu "CLICK ME". Paspaudimų rezultatas turi būti matomas dešinėje
pusėje esančiame "state" skaičiavimo bloke (<div id="btn__state">0</div>)
------------------------------------------------------------------- */
const btn__element = document.getElementById("btn__element");
const btn__state = document.getElementById("btn__state");


btn__element.onclick = function() {
    btn__state.innerText = parseInt(btn__state.innerText) + 1;
};