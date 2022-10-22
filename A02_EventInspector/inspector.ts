namespace EventInspector {
    window.addEventListener("load", handleLoad);

    function handleLoad(_event: Event){
        document.addEventListener("mousemove", setInfoBox);
        document.addEventListener("click" , logInfo);
        document.addEventListener("keyup" , logInfo);
        let body: HTMLElement =<HTMLBodyElement>document.querySelector("body");
        body.addEventListener("click", logInfo);
        body.addEventListener("keyup", logInfo);
        let div0 : HTMLDivElement = <HTMLDivElement >document.querySelector("#div0");
        div0.addEventListener("click" ,logInfo);
        div0.addEventListener("keyup", logInfo);
        let div1 : HTMLDivElement = <HTMLDivElement>document.querySelector("#div1");
        div1.addEventListener("click", logInfo);
        div1.addEventListener("keyup", logInfo);
        let button : HTMLButtonElement = <HTMLButtonElement>document.querySelector("#button");
        button.addEventListener("click", customEvent);
        document.addEventListener("BZZZT!", logInfo);
        
    }

    function setInfoBox(_event : MouseEvent){
        let positionX=_event.clientX;
        let positionY=_event.clientY;
        let targetObject=<HTMLElement>_event.target;

        let PosX:HTMLSpanElement=<HTMLSpanElement>document.querySelector("span#fixedSpan");
        PosX.style.left=(positionX+20)+"px"; 
        let PosY:HTMLSpanElement=<HTMLSpanElement>document.querySelector("span#fixedSpan");
        PosY.style.top=(positionY+20)+"px";
        
        document.querySelector("span#fixedSpan").innerHTML="X-Pos.:"+positionX+ "  " +"Y-Pos.:"+positionY + " Target: " + targetObject.tagName;
    }

    function logInfo(_event: Event){
        console.log("Event " + _event);
        console.log("Event Type " + _event.type);
        console.log("Event Target " + _event.target);
        console.log("Current Event Target " + _event.currentTarget)
    }

    function customEvent(_event: Event){
        let button: HTMLButtonElement = <HTMLButtonElement> document.querySelector("button#button");

        let thunderEvent: CustomEvent = new CustomEvent("BZZZT!", { bubbles:true});
        button.dispatchEvent(thunderEvent);
    }
}