const nameInput = document.getElementById('name')
const emailInput = document.getElementById('email')
const passwordInput = document.getElementById('password')
const submitButton = document.getElementById('submit')
const list = document.getElementById('registry_list');
let clients = []

class Client
{
    constructor(name, email)
    {
        this.name = name
        this.email = email
    }
}

function isNameInputInvalid()
{
    const name = nameInput.value.trim();
    let hasName = false;

    for(const client of clients)
    {
        if(client.name == name)
        {
            hasName = true;
            break;
        }
    }

    if(hasName)
    {
        alert('Usuário já existente!')
    }

    else if(name.length == 0)
    {
        alert('Campo vazio!')
    }

    return name.length == 0 || hasName
}

function isEmailInputInvalid()
{
    return emailInput.value.trim().length == 0
}

function isPasswordInvalid()
{
    return password.value.length < 8
}

submitButton.onclick = function()
{
    if(isNameInputInvalid()) 
    {
        return;
    }

    if(isEmailInputInvalid()) 
    {
        alert('Campo de email inválido!')
        return;
    }

    if(isPasswordInvalid()) 
    {
        alert('A senha precisa ser maior que 8 caracteres!');
        return;
    }

    let newClient = new Client(nameInput.value, emailInput.value)
    newClient.password = passwordInput.value;

    clients.push(newClient)
    refreshList()
}


function refreshList()
{
    list.innerHTML = '';

    for(const client of clients)
    {
        list.innerHTML += `<li>${client.name}</li>`
    }
}