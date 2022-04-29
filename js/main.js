// FORM Part
let elForm = document.querySelector(".js-form");
let elSelectType = document.querySelector(".js-select");
let elSizeField = document.querySelector(".js-form-radios");
let elTopList = document.querySelector(".js-form-checkboxes");
let elExtraList = document.querySelector(".js-form-checkboxes-extra");
let resultTypeBread = document.querySelector(".js-bread-type");
let resultSizePizza = document.querySelector(".js-pizza-size");
let resultTopList = document.querySelector(".js-result__top-list");
let resultExtraList = document.querySelector(".js-result__extra-list");


// ARRAYS Part
let typeArr = [["Yupqa", "thin"], ["O'rta", "medium"], ["Qalin", "thick"]];
let sizeArr = [["25 sm", "small"], ["30 sm", "medium"], ["35 sm", "big"]];
let topArr = [["Pomidor", "tomato"], ["Tuzlangan bodring", "pickle"], ["Kurka go'shti", "turkey"], ["Qo'ziqorn", "mushrooms"], ["Zaytun", "olive"], ["Qazi", "qazi"]];
let extraArr = [["Achchiq", "spicy"], ["Sosiskali", "sausage"]];
let resultTopArr = [];
let resultExtraArr = [];


// FUNCTIONS Parts 
function fillForm(){
  for (let i = 0; i < typeArr.length; i++) {
    let newOption = document.createElement("option");

    newOption.textContent = typeArr[i][0];
    newOption.value = typeArr[i][1];
    
    elSelectType.appendChild(newOption);
    resultTypeBread.textContent = typeArr[0][0]
  }

  for (let i = 0; i < sizeArr.length; i++) {
    let newBox = document.createElement("div");
    let newInput = document.createElement("input");
    let newLabel = document.createElement("label");

    newInput.type ="radio";
    newInput.name = "pizza_size";
    newInput.value = sizeArr[i][1];
    newLabel.textContent = sizeArr[i][0];

    newBox.classList.add("radio-group");
    newLabel.classList.add("form__radio-label");
    newInput.classList.add("form__radio");

    newInput.setAttribute("id", sizeArr[i][1]);
    newLabel.setAttribute("for", sizeArr[i][1]);
    newInput.setAttribute("checked", "on");

    elSizeField.appendChild(newBox);
    newBox.appendChild(newInput);
    newBox.appendChild(newLabel);
    resultSizePizza.textContent = newLabel.textContent;

  }

  for (let i = 0; i < topArr.length; i++) {
    let newCheck = document.createElement("input");
    let checkLabel = document.createElement("label");
    let newLi = document.createElement("li");

    newCheck.type ="checkbox";
    newCheck.name = topArr[i][1];
    checkLabel.textContent = topArr[i][0];

    newCheck.classList.add("form-check-input");
    checkLabel.classList.add("fw-bold","fs-5", "ms-3");
    newLi.classList.add("list-item", "d-flex", "align-items-center", "mb-2");

    newCheck.setAttribute("id", topArr[i][1]);
    checkLabel.setAttribute("for", topArr[i][1]);

    elTopList.appendChild(newLi)
    newLi.appendChild(newCheck);
    newLi.appendChild(checkLabel)
  }

  for (let i = 0; i < extraArr.length; i++) {
    let newCheck = document.createElement("input");
    let checkLabel = document.createElement("label");
    let newLi = document.createElement("li");
    newCheck.type ="checkbox";
    newCheck.name = extraArr[i][1];
    checkLabel.textContent = extraArr[i][0];

    newCheck.classList.add("form-check-input");
    checkLabel.classList.add("fw-bold","fs-5", "ms-3");
    newLi.classList.add("list-item", "d-flex", "align-items-center", "mb-2");

    newCheck.setAttribute("id", extraArr[i][1]);
    checkLabel.setAttribute("for", extraArr[i][1]);

    elExtraList.appendChild(newLi)
    newLi.appendChild(newCheck);
    newLi.appendChild(checkLabel)
  }
}
fillForm()

elSelectType.addEventListener("change", function(e) {
  for (let i = 0; i < typeArr.length; i++) {
    if (e.target.value === typeArr[i][1]){
      resultTypeBread.textContent = typeArr[i][0]
    }    
  }
})


elSizeField.addEventListener("change", function(e) {
  for (let i = 0; i < sizeArr.length; i++) {
    if (e.target.value === sizeArr[i][1]){
      resultSizePizza.textContent = sizeArr[i][0];
    } 
  }
})


// checkboxes == result

elTopList.addEventListener("change", function(e){
  resultTopList.innerHTML = "";
  

  if (e.target.checked === true){
    for (let i = 0; i < topArr.length; i++) {
      if (e.target.name === topArr[i][1]){
        resultTopArr.push(topArr[i][0])
      } 
    }
  } else if (e.target.checked == false){
    let targetIndex = resultTopArr.indexOf(e.target.parentNode.childNodes[1].textContent)
    resultTopArr.splice(targetIndex, 1);
  }


  for (let i = 0; i < resultTopArr.length; i++) {
      let newLi = document.createElement("li");
      newLi.textContent = resultTopArr[i];
      resultTopList.appendChild(newLi);
  }

})

elExtraList.addEventListener("change", function(e){
  resultExtraList.innerHTML = "";

  if (e.target.checked === true){
    for (let i = 0; i < extraArr.length; i++) {
      if (e.target.name === extraArr[i][1]){
        resultExtraArr.push(extraArr[i][0])
      } 
    }
  } else if (e.target.checked == false){
    let targetIndex = resultExtraArr.indexOf(e.target.parentNode.childNodes[1].textContent)
    resultExtraArr.splice(targetIndex, 1);
  }

  for (let i = 0; i < resultExtraArr.length; i++) {
    let newLi = document.createElement("li");
    newLi.textContent = resultExtraArr[i];
    resultExtraList.appendChild(newLi);
  }
  if (elFormBtn.clicked){
    e.target.checked === false;
  }
})
