function submitNewUser()
{
    console.log("SUBMITTING NEW USER FORM...");
    var form = document.getElementById("form-new-user");

    form.submit();

    console.log("REDIRECTING TO PARTICIPANTS...");
    showPageContents('participants');
}

function submitTheme()
{
    console.log("SUBMITTING NEW THEME FORM...");
    var form = document.getElementById("form-new-theme");

    form.submit();

    console.log("REDIRECTING TO THEMES...");
    showPageContents('themes');
}

function submitScore()
{
    console.log("SUBMITTING NEW SCORE FORM...");
    var form = document.getElementById("form-submit-score");

    form.submit();

    console.log("REDIRECTING TO SCORES...");
    showPageContents('scores');
}