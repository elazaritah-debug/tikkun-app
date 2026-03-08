let count = parseInt(localStorage.getItem("count")) || 0
let goal = parseInt(localStorage.getItem("goal")) || 40
let last = localStorage.getItem("last") || ""

document.getElementById("goalSelect").value = goal

function today(){
let d = new Date()
return d.getFullYear()+"-"+(d.getMonth()+1)+"-"+d.getDate()
}

function update(){
document.getElementById("count").innerText = count
let percent = Math.floor((count/goal)*100)
document.getElementById("bar").style.width = percent+"%"
document.getElementById("percent").innerText = percent+"%"
if(last)
document.getElementById("last").innerText = "סומן: "+last
}

function mark(){
let t = today()
if(t === last){
alert("כבר סימנת היום")
return
}
count++
last = t
localStorage.setItem("count",count)
localStorage.setItem("last",last)
update()
}

function resetAll(){
if(confirm("לאפס?")){
count = 0
last = ""
localStorage.clear()
update()
}
}

update()
