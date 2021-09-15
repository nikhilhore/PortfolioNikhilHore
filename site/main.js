var sectionids = ["sectionh", "sectiona", "sectionw", "sectionr", "sectionc"];

function dropdowntoggle() {
    document.getElementById("mydropdown").classList.toggle("show");
}

function addHideClass(sectionid) {
    let n = sectionids.length;
    for (let i = 0; i < n; i++) {
        let sec = document.getElementById(sectionids[i]);
        if (!sec.classList.contains('hidden')){
            sec.classList.add("hidden");
        }
    }
    let sect = document.getElementById(sectionid);
    sect.classList.remove("hidden");
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