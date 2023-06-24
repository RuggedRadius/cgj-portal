function showPageContents(pageName) 
{
    fetch(`./pages/${pageName}.html`)
        .then(response => response.text())
        .then(data => 
        {
            document.getElementById('content').innerHTML = data;

            switch (pageName)
            {
                case "participants":
                    getAllUsers();
                    break;

                case "themes":
                    getAllThemes();
                    break;

                case "submitScore":
                    populateParticipantsList();
                    populateVoteFields();
                    document.getElementByI("submittedBy").value = sessionStorage.getItem("username");
                    break;
            }
        })
        .catch(error => 
            {
            console.error('Error:', error);
        });

    hideNavBar();
}

function getAllUsers() 
{
    console.log("Querying database...");
    // Get the HTML table body element
    const tbody = document.querySelector('#tbl-users tbody');
  
    // Make a request to the server to get all users
    axios.get('/getAllUsers')
      .then((response) => {
        const rows = response.data;
  
        // Populate the table with the retrieved rows
        rows.forEach((row) => 
        {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td>${row.id}</td>
                <td>${row.username}</td>            
                <td>${row.email}</td>
                <td>${row.password}</td>
            `;
            tbody.appendChild(tr);
        });
      })
      .catch((error) => 
      {
        alert(error);
        console.error(error);
      });
}

function getAllThemes() 
{
    console.log("Querying database for themes...");
    // Get the HTML table body element
    const tbody = document.querySelector('#tbl-themes tbody');
  
    // Make a request to the server to get all users
    axios.get('/getAllThemes')
      .then((response) => 
      {
        const rows = response.data;
  
        // Populate the table with the retrieved rows
        rows.forEach((row) => 
        {
            console.log("Creating row");
            const tr = document.createElement('tr');
            tr.innerHTML = 
            `
                <td>${row.description}</td>
                <td>${row.submitted_by}</td>    
            `;
            tbody.appendChild(tr);
        });
      })
      .catch((error) => 
      {
        alert(error);
        console.error(error);
      });
}

function populateParticipantsList()
{
    console.log("Participants being populated...");
    var listParent = document.getElementById("submit-score-participants");

    var username = sessionStorage.getItem("username");

    // Make a request to the server to get all users
    axios.get('/getAllUsers')
    .then((response) => 
    {
        const rows = response.data;
    
        // Populate the table with the retrieved rows
        rows.forEach((row) => 
        {
            if (row.username === username)
                return;

            var newOption = document.createElement("option");
            newOption.text = row.username;
            newOption.value = row.id;

            listParent.appendChild(newOption);
        });
    })
    .catch((error) => 
    {
        alert(error);
        console.error(error);
    });
}

function populateVoteFields()
{
    var voteFields = document.getElementsByClassName('vote-field');

    for (let i = 0; i < voteFields.length; i++) 
    {
        const element = voteFields[i];
        
        for (let j = 1; j <= 10; j++) 
        {
            var newOption = document.createElement("option");
            newOption.text = j;
            newOption.value = j;      

            element.appendChild(newOption);
        }
    }
}   
