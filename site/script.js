
var dropBtn = document.getElementById('dropbutton');
var closeBtn = document.getElementById('close-dropdown');

dropBtn.addEventListener('click', dropdonwtoggle);
closeBtn.addEventListener('click', dropdonwtoggle);

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