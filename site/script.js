
var dropBtn = document.getElementById('dropbutton');

dropBtn.addEventListener('click', dropdonwtoggle);

function dropdonwtoggle() {
    document.getElementById("mydropdown").classList.toggle("dropdown-hide");
}

var sectionids = ["sectionh", "sectiona", "sectionw", "sectionr", "sectionc"];

var buttonids = ["buttonh", "buttona", "buttonw", "buttonr", "buttonc"];

let n = sectionids.length;

for (let i = 0; i < n; i++) {
    document.getElementById(buttonids[i]).addEventListener('click', function () {
        let sectionid = sectionids[i];
        for (let j = 0; j < n; j++) {
            document.getElementById(sectionids[j]).classList.add("hidden");
            document.getElementById(buttonids[j]).classList.remove("active");
        }
        document.getElementById(sectionid).classList.remove("hidden");
        document.getElementById(buttonids[i]).classList.add("active");
        dropdonwtoggle();
    });
}

window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            dropdowns[i].classList.add('dropdown-hide');
        }
    }
}