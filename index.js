// Add your code here
function submitData(name, email) {
    const userData = {
      name: name,
      email: email
    };
  
    const configObject = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(userData)
    };
  
    return fetch('http://localhost:3000/users', configObject)
      .then(response => response.json())
      .then(data => {
        const newId = document.createElement('p');
        newId.textContent = `New ID: ${data.id}`;
        document.body.appendChild(newId);
      })
      .catch(error => {
        const errorMessage = document.createElement('p');
        errorMessage.textContent = `Error: ${error.message}`;
        document.body.appendChild(errorMessage);
      });
  }
