function dropdowntoggle() {
    document.getElementById("mydropdown").classList.toggle("show");
}

function addHideClass(sectionid){
    let sectionids= ["sectionh", "sectiona", "sectionw", "sectionr", "sectionc"];
    let n= sectionids.length;
    // let n= 5;
    for (let i=0; i<n; i++){
        let sec= document.getElementById(sectionids[i]);
        sec.classList.add("hide");
    }
    let sect= document.getElementById(sectionid);
    sect.classList.remove("hide");
}

// section h,a,w,r,c