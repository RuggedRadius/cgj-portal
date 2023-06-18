

function showLoginModal() 
{
    Swal.fire(
    {
      title: 'Login',
      html: `
        <input id="username" class="swal2-input" type="text" placeholder="Username">
        <input id="password" class="swal2-input" type="password" placeholder="Password">
      `,
      showCancelButton: true,
      confirmButtonText: 'Login',
      cancelButtonText: 'Cancel',
      focusConfirm: false,
      preConfirm: () => 
      {
        const username = Swal.getPopup().querySelector('#username').value;
        const password = Swal.getPopup().querySelector('#password').value;
        return { username, password };
      }
    }).then(result => 
    {
      if (result.isConfirmed) 
      {
        // Call the server request handler to perform login
        handleLogin(result.value);
      }
    });
  }

function handleLogin(credentials) 
{
    // Perform the server request to handle login
    // You can use Axios or any other HTTP library to make the request
    axios.post('/login', credentials)
        .then(response => 
        {
            document.getElementById('login').style.display = 'none';
            document.getElementById('logout').style.display = 'block';

            var status = document.getElementById("login-status");
            status.innerText = `LOGGED IN AS ${credentials.username}`;
            status.style.color = 'green';

            // Redirect to another page
            showPageContents('home');

            // Login successful
            Swal.fire({
                icon: 'success',
                title: 'Success',
                text: response.data.message
            });
        })
        .catch(error => 
        {
            // Login failed
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: error.response.data.error
            });
        });
}

function handleLogout()
{
    axios.post('/logout')
    .then(response => 
    {
        document.getElementById('logout').style.display = 'none';
        document.getElementById('login').style.display = 'block';

        var status = document.getElementById("login-status");
        status.innerText = "NOT LOGGED IN";
        status.style.color = 'red';

        // Login successful
        Swal.fire({
            icon: 'success',
            title: 'Success',
            text: response.data.message
        });
    })
    .catch(error => 
    {
        // Login failed
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: error.response.data.error
        });
    });
}

