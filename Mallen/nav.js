document.getElementById("open").addEventListener("click", toggleNav);

function toggleNav(){
    navSize = document.getElementById("TheSidebar").style.width;
    if (navSize == 180) {
        return closeNav();
    }
    return openNav();
}
function openNav() {
    document.getElementById("TheSidebar").style.width ="180px";
}

function closeNav() {
    document.getElementById("TheSidebar").style.width ="0";
}


