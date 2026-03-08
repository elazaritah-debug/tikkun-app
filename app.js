document.getElementById("goalSelect").addEventListener("change", function() {
    goal = parseInt(this.value);
    localStorage.setItem("goal", goal);
    update();
});

// עדכון ראשוני של הטקסט
function update() {
    document.getElementById("count").innerText = count;
    let percent = Math.floor((count / goal) * 100);
    document.getElementById("bar").style.width = percent + "%";
    document.getElementById("percent").innerText = percent + "%";
    document.getElementById("goalText").innerText = "יעד: " + goal + " ימים"; // הוספת שורת יעד
    if (last) document.getElementById("last").innerText = "סומן לאחרונה: " + last;
}
