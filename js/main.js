let parents=document.querySelector("#ul")
function createEl(parentEl,nameEl,attEl,valeuEl){
    let el = document.createElement(nameEl)
    let att = document.createAttribute(attEl)
    att.value=valeuEl
    el.setAttributeNode(att)
    parentEl.appendChild(el)
    return el;
}

function validateCreation(path){
    let val=0
    path.childNodes.forEach(e=>{
        val++
    })
    return val>=6?false:true
}
function listener(tag){
    if(tag){
        tag.forEach(el => {
            el.addEventListener("click",e=>{
            validateCreation(e.target)?new Ball(createEl(parents,"div","class","circulo"),e.target,5,.2,"circle"):0
            })
        });
    }
}
listener(document.querySelectorAll(".lis"))