"use strict";

const carSelect = document.getElementById("carSelect");

const insertOptions = (data) => {
  data.forEach((item, i) => {
    let newOption = document.createElement("option");
    newOption.value = i;
    newOption.textContent = item.brand + " " + item.model;
    carSelect.append(newOption);
  });
};

const dataProcessing = (data, index) => {
  if (typeof index !== "number") {
    if (carSelect.length == 1) {
      insertOptions(data.cars);
    }
    document.getElementById("divResult").classList.add("d-none");
    document.getElementById("divCarSelect").classList.remove("d-none");
  } else if (typeof index === "number") {
    document.getElementById("carName").value =
      data.cars[index].brand + " " + data.cars[index].model;
    document.getElementById("carPrice").value = data.cars[index].price;
    document.getElementById("divCarSelect").classList.add("d-none");
    document.getElementById("divResult").classList.remove("d-none");
  }
};

const getData = (index) => {
  fetch("cars.json")
    .then((response) => response.json())
    .then((data) => {
      dataProcessing(data, index);
    })
    .catch((error) => {
      console.log(error.message);
    });
};

carSelect.addEventListener("change", () => {
  if (carSelect.value !== "selectCar") {
    getData(+carSelect.value);
  } else {
    getData("selectCar");
  }
});

getData("selectCar");
