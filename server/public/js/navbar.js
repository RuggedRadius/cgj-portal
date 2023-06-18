const NAV_WIDTH_CLOSED = '50px';
const NAV_WIDTH_OPEN = '400px';

var SCORING_SUBMENU_SHOWN = false;
var PARTICIPANTS_SUBMENU_SHOWN = false;
var THEMES_SUBMENU_SHOWN = false;

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

function toggleScoringMenu() 
{
    SCORING_SUBMENU_SHOWN = !SCORING_SUBMENU_SHOWN;

    var parent = document.getElementById('menu-parent-scoring');
    var folder = document.getElementById('menu-folder-scoring');

    if (SCORING_SUBMENU_SHOWN) 
    {
        var menuItem1 = document.createElement('li');
        menuItem1.innerText = "Information";
        menuItem1.className = "clickable-link";
        menuItem1.onclick = function() {
            showPageContents('scoring');
        };

        var menuItem2 = document.createElement('li');
        menuItem2.innerText = "Submit a Score";
        menuItem2.className = "clickable-link";
        menuItem2.onclick = function() 
        {
            showPageContents('submitScore');
        };

        parent.appendChild(menuItem1);
        parent.appendChild(menuItem2);

        // folder.innerText = "▼ SCORING"
    } 
    else 
    {
        parent.innerHTML = '';
        // folder.innerText = "► SCORING"
    }

    showNavBar();
}

function toggleParticipantsMenu() 
{
    PARTICIPANTS_SUBMENU_SHOWN = !PARTICIPANTS_SUBMENU_SHOWN;

    var parent = document.getElementById('menu-parent-participants');
    var folder = document.getElementById('menu-folder-participants');

    if (PARTICIPANTS_SUBMENU_SHOWN) 
    {
        var menuItem1 = document.createElement('li');
        menuItem1.innerText = "Register";
        menuItem1.className = "clickable-link";
        menuItem1.onclick = function() 
        {
            showPageContents('register');
        };

        var menuItem2 = document.createElement('li');
        menuItem2.innerText = "View Participants";
        menuItem2.className = "clickable-link";
        menuItem2.onclick = function() {
            showPageContents('participants');
        };

        parent.appendChild(menuItem1);
        parent.appendChild(menuItem2);

        // folder.innerText = "▼ PARTICIPANTS"
    } 
    else 
    {        
        parent.innerHTML = '';
        // folder.innerText = "► PARTICIPANTS"
    }

    showNavBar();
}

function toggleThemesMenu() 
{
    THEMES_SUBMENU_SHOWN = !THEMES_SUBMENU_SHOWN;

    var parent = document.getElementById('menu-parent-themes');
    var folder = document.getElementById('menu-folder-participants');

    if (THEMES_SUBMENU_SHOWN) 
    {
        var menuItem1 = document.createElement('li');
        menuItem1.innerText = "View Themes";
        menuItem1.className = "clickable-link";
        menuItem1.onclick = function() {
            showPageContents('themes');
        };

        var menuItem2 = document.createElement('li');
        menuItem2.innerText = "Submit a Theme";
        menuItem2.className = "clickable-link";
        menuItem2.onclick = function() 
        {
            showPageContents('submitTheme');
        };

        parent.appendChild(menuItem1);
        parent.appendChild(menuItem2);

        // folder.innerText = "▼ THEMES"
    } 
    else 
    {
        parent.innerHTML = '';
        // folder.innerText = "► THEMES"
    }

    showNavBar();
}
