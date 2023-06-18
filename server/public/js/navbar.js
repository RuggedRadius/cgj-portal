const NAV_WIDTH_CLOSED = '50px';
const NAV_WIDTH_OPEN = '400px';

function hideNavBar()
{
    var navbar = document.getElementById("navigation");
    var toggleBtnHide = document.getElementById("nav-toggle-hide");
    var toggleBtnShow = document.getElementById("nav-toggle-show");
    var navItems = document.getElementById('nav-items');

    navbar.style.width = NAV_WIDTH_CLOSED;
    navbar.style.minWidth = NAV_WIDTH_CLOSED;
    toggleBtnHide.style.display = 'none';
    toggleBtnShow.style.display = 'block';
    navItems.style.display = 'none';
}

function showNavBar()
{
    var navbar = document.getElementById("navigation");
    var toggleBtnHide = document.getElementById("nav-toggle-hide");
    var toggleBtnShow = document.getElementById("nav-toggle-show");
    var navItems = document.getElementById('nav-items');

    navbar.style.width = NAV_WIDTH_OPEN;
    navbar.style.minWidth = NAV_WIDTH_OPEN;
    toggleBtnHide.style.display = 'block';
    toggleBtnShow.style.display = 'none';
    navItems.style.display = 'flex';
}
