/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotjui atėjus į tinkaį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius.
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Informacija apie automobilį (brand) (jo kortelė) bei turi turėti
bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = './cars.json';
const output = document.getElementById('output');
output.style.display = "flex";
output.style.flexWrap = "wrap";
output.style.justifyContent = "space-evenly";

fetch(ENDPOINT)
    .then(response => response.json())
    .then(cars => {
        showCars(cars);
    });

const showCars = (cars) => {
    cars.forEach((car) => {
        output.append(createCarCard(car));
    });
}

const createCarCard = (car) => {
    const carCard = document.createElement('div');
    carCard.style.backgroundColor = "lightblue";
    carCard.style.width = "30vh";
    carCard.style.margin = "10px";
    carCard.style.padding = "10px";
    carCard.style.borderRadius = "10px";
    const brand = document.createElement('h3');
    brand.innerText = car.brand;
    brand.style.marginBottom = "10px";
    const modelList = document.createElement('ul');
    modelList.style.listStyleType = "none";
    car.models.forEach((model) => {
        const li = document.createElement('li');
        li.innerText = model;
        modelList.append(li);
    });
    carCard.append(brand, modelList);
    return carCard;

}