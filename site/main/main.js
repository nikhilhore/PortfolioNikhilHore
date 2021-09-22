function dropdowntoggle() {
    document.getElementById("mydropdown").classList.toggle("show");
}

var sectionids = ["sectionh", "sectiona", "sectionw", "sectionr", "sectionc"];

var buttonids = ["buttonh", "buttona", "buttonw", "buttonr", "buttonc"];

function addHideClass(sectionid) {
    let n = sectionids.length;
    for (let i = 0; i < n; i++) {
        document.getElementById(sectionids[i]).classList.add("hidden");
        document.getElementById(buttonids[i]).classList.remove("active");
    }
    document.getElementById(sectionid).classList.remove("hidden");
    document.getElementById(buttonids[sectionids.indexOf(sectionid)]).classList.add("active");
}

window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            dropdowns[i].classList.remove('show');
        }
    }
}