"use strict";
/*
 Aufgabe:<L03_Einkaufsliste_Formular>
 Name: <Leonid Gerasimov>
 Matrikel: <273123>
 Datum: <30.10.2022>
 Quellen: <Henning Reck, Daniel Meier>
*/
var Einkaufsliste;
(function (Einkaufsliste) {
    window.addEventListener("load", handleLoad);
    let addButton = document.querySelector("#addItem");
    let checkbox = document.querySelector(".checkbox");
    let deleteButton = document.querySelector("#deleteButton");
    let editButton = document.querySelector("#editButton");
    function handleLoad() {
        addButton.addEventListener("click", addNewItem);
        checkbox.addEventListener("click", itemCheck);
        deleteButton.addEventListener("click", itemDelete);
        editButton.addEventListener("click", itemEdit);
    }
    function addNewItem() {
        console.log("New product has been added to the list");
    }
    function itemCheck() {
        console.log("Checkbox checked! Product has been bought");
    }
    function itemDelete() {
        console.log("Item deleted");
    }
    function itemEdit() {
        console.log("Item editeds");
    }
})(Einkaufsliste || (Einkaufsliste = {}));
//# sourceMappingURL=script.js.map