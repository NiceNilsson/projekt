

/*function toggleNav(){
    navSize = document.getElementById("TheSidebar").style.width;
    if (navSize == 180) {
        return closeNav();
    }
    return openNav();
}*/


function openNav() {
    var e = document.getElementById("TheSidebar");
    if (e.style.width == "180px")   
    {
            e.style.width = "0px";
    } 
    else
    {
        e.style.width = "180px";
    }
}

function closeNav() {
    document.getElementById("TheSidebar").style.width ="0";
}