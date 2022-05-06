
const notespace = document.querySelector(".notespace")
let hoverspace = document.querySelector(".hoverspace")

let text = []
let noteid = 0
let buttonid=0

let clickedid=0

function addNote(){
getText()
createNote()
noteid +=1
buttonid +=1
}

function getText(){
text.push(document.querySelector(".textspace").value)
}

function createNote(){
    let note = document.createElement("div")
    note.innerHTML+=text [noteid]
    note.setAttribute("class","notes")
    note.setAttribute("id","note"+noteid)
    let button = document.createElement("button")
    button.setAttribute("class","button1")
    button.setAttribute("onclick","clickedid = this.id;View()")
    button.setAttribute("id",buttonid)
    button.innerHTML = "View Detail"
    notespace.appendChild(note)
    notespace.appendChild(button)
}

let hover
let buttonn

function View(){
    hover = document.createElement("div")
    hover.setAttribute("class","hover")
    hover.innerHTML = document.getElementById("note"+clickedid).innerHTML
    document.getElementById("body").classList.add("body")
    buttonn = document.createElement("button")
    buttonn.setAttribute("class","button2")
    buttonn.setAttribute("onclick","Viewcancel()")
    buttonn.innerHTML = "x"
    hoverspace.appendChild(hover)
    hoverspace.appendChild(buttonn)
}

function Viewcancel(){
hoverspace.removeChild(buttonn)
hoverspace.removeChild(hover)
document.getElementById("body").classList.remove("body")
}