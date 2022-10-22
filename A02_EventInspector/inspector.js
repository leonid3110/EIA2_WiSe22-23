"use strict";
var EventInspector;
(function (EventInspector) {
    window.addEventListener("load", handleLoad);
    function handleLoad(_event) {
        document.addEventListener("mousemove", setInfoBox);
        document.addEventListener("click", logInfo);
        document.addEventListener("keyup", logInfo);
        let body = document.querySelector("body");
        body.addEventListener("click", logInfo);
        body.addEventListener("keyup", logInfo);
        let div0 = document.querySelector("#div0");
        div0.addEventListener("click", logInfo);
        div0.addEventListener("keyup", logInfo);
        let div1 = document.querySelector("#div1");
        div1.addEventListener("click", logInfo);
        div1.addEventListener("keyup", logInfo);
        let button = document.querySelector("#button");
        button.addEventListener("click", customEvent);
        document.addEventListener("BZZZT!", logInfo);
    }
    function setInfoBox(_event) {
        let positionX = _event.clientX;
        let positionY = _event.clientY;
        let targetObject = _event.target;
        let PosX = document.querySelector("span#fixedSpan");
        PosX.style.left = (positionX + 20) + "px";
        let PosY = document.querySelector("span#fixedSpan");
        PosY.style.top = (positionY + 20) + "px";
        document.querySelector("span#fixedSpan").innerHTML = "X-Pos.:" + positionX + "  " + "Y-Pos.:" + positionY + " Target: " + targetObject.tagName;
    }
    function logInfo(_event) {
        console.log("Event " + _event);
        console.log("Event Type " + _event.type);
        console.log("Event Target " + _event.target);
        console.log("Current Event Target " + _event.currentTarget);
    }
    function customEvent(_event) {
        let button = document.querySelector("button#button");
        let thunderEvent = new CustomEvent("BZZZT!", { bubbles: true });
        button.dispatchEvent(thunderEvent);
    }
})(EventInspector || (EventInspector = {}));
//# sourceMappingURL=inspector.js.map