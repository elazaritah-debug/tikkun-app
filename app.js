let count = parseInt(localStorage.getItem("tikkun_count")) || 0;
let goal = parseInt(localStorage.getItem("tikkun_goal")) || 40;
let lastDate = localStorage.getItem("tikkun_lastDate") || "";

// אתחול התצוגה
document.getElementById("goalSelect").value = goal;
updateUI();

function updateUI() {
    document.getElementById("count").innerText = count;
    document.getElementById("days-left").innerText = Math.max(0, goal - count);
    
    let percent = Math.floor((count / goal) * 100);
    if (percent > 100) percent = 100;
    
    document.getElementById("percent").innerText = percent + "%";
    document.getElementById("bar").style.width = percent + "%";
    document.getElementById("sub-title").innerText = "אתגר " + goal + " יום";

    if (lastDate) {
        document.getElementById("last-mark-text").innerText = "סימון אחרון: " + lastDate;
    }
}

function mark() {
    let today = new Date().toLocaleDateString('he-IL');

    if (lastDate === today) {
        alert("כבר סימנת להיום. כל הכבוד! נתראה מחר.");
        return;
    }

    count++;
    lastDate = today;

    localStorage.setItem("tikkun_count", count);
    localStorage.setItem("tikkun_lastDate", lastDate);
    
    // אפקט הצלחה קטן
    document.getElementById("count").style.transform = "scale(1.2)";
    setTimeout(() => { document.getElementById("count").style.transform = "scale(1)"; }, 200);

    updateUI();
}

function changeGoal() {
    goal = parseInt(document.getElementById("goalSelect").value);
    localStorage.setItem("tikkun_goal", goal);
    updateUI();
}

function resetAll() {
    if (confirm("האם אתה בטוח שברצונך לאפס את כל ההתקדמות?")) {
        count = 0;
        lastDate = "";
        localStorage.removeItem("tikkun_count");
        localStorage.removeItem("tikkun_lastDate");
        updateUI();
    }
}
