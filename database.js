var clients = []

class Client
{
    constructor(name, email)
    {
        this.name = name
        this.email = email
    }
}

function insertNewClient(client)
{
    clients.push(client)
}