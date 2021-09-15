function dropdowntoggle() {
    document.getElementById("mydropdown").classList.toggle("show");
}

function addHideClass(sectionid) {
    let sectionids = ["sectionh", "sectiona", "sectionw", "sectionr", "sectionc"];
    let n = sectionids.length;
    for (let i = 0; i < n; i++) {
        let sec = document.getElementById(sectionids[i]);
        sec.classList.add("hidden");
    }
    let sect = document.getElementById(sectionid);
    sect.classList.remove("hidden");
}

window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}