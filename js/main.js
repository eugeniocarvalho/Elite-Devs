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

let jogador = 0
function toggle(){
    let vetor1 =["circulo"]
    let vetor2 =["circulo-two"]
    if (jogador==0){
        jogador++;
        return vetor1
    }
    else if(jogador==1){
        jogador--;
        return vetor2
    }
}

function listener(tag){
    if(tag){
        tag.forEach(el => {
            el.addEventListener("click",e=>{
            validateCreation(e.target)?new Ball(createEl(parents,"div","class",toggle()),e.target,5,.2,"circle"):0
            })
        });
    }
}
listener(document.querySelectorAll(".lis"))