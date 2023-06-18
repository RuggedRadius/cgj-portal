function submitNewUser()
{
    console.log("SUBMITTING NEW USER FORM...");
    var form = document.getElementById("form-new-user");

    form.submit();

    console.log("REDIRECTING TO PARTICIPANTS...");
    showPageContents('participants');
}