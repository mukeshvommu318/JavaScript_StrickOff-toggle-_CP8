
function ontoggle(){
    let toggEle = document.getElementById("inId")
    let labelToggEle = document.getElementById("labelId")
    // if (toggEle.checked === true){
    //     labelToggEle.classList.add("checked")
    // }
    // else{
    //     labelToggEle.classList.remove("checked")
    // }
    labelToggEle.classList.toggle("checked")
}

let container = document.createElement("div")
container.classList.add("containerClass")
document.body.appendChild(container)

let inputElement = document.createElement("input")
inputElement.type="checkbox"
inputElement.id="inId"
inputElement.classList.add("inClass")

inputElement.onclick = function(){
    ontoggle()
}
container.appendChild(inputElement)

let labelElement = document.createElement("label")
labelElement.textContent="Learn Java"
labelElement.htmlFor="inId"
labelElement.setAttribute("id","labelId")
container.appendChild(labelElement)



console.log(container)