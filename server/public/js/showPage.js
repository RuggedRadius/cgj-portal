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
        rows.forEach((row) => {
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