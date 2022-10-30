/*
 Aufgabe:<L03_Einkaufsliste_Formular>
 Name: <Leonid Gerasimov>
 Matrikel: <273123>
 Datum: <30.10.2022>
 Quellen: <Henning Reck, Daniel Meier>
*/

namespace Einkaufsliste{

    window.addEventListener("load", handleLoad);

    let addButton: HTMLButtonElement = <HTMLButtonElement>document.querySelector("#addItem");
    let checkbox: HTMLButtonElement = <HTMLButtonElement>document.querySelector(".checkbox");
    let deleteButton: HTMLButtonElement = <HTMLButtonElement>document.querySelector("#deleteButton");
    let editButton: HTMLButtonElement = <HTMLButtonElement>document.querySelector("#editButton");
    

    
    function handleLoad(): void {
    
        addButton.addEventListener("click", addNewItem); 
        checkbox.addEventListener("click", itemCheck);
        deleteButton.addEventListener("click", itemDelete);
        editButton.addEventListener("click", itemEdit);
               
    }
    function addNewItem(): void {
        console.log("New product has been added to the list");
    }
    function itemCheck(): void {
        console.log("Checkbox checked! Product has been bought");
    }
    function itemDelete(): void {
        console.log("Item deleted");
    }
    function itemEdit(): void {
        console.log("Item editeds");
    }
    }