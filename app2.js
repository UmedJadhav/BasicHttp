const http = new EasyHttp;

const usersGet =http.get('https://jsonplaceholder.typicode.com/users')
            .then(data => console.log(data))
            .catch(err => console.log(err));


const data = {
    name:'John Doe',
    username: 'JDoey',
    email: 'jdoe@fakemail.com'
}

const usersPost =http.post('https://jsonplaceholder.typicode.com/users',data)
.then(data => console.log(data))
.catch(err => console.log(err));

const usesPut = http.put('https://jsonplaceholder.typicode.com/users/2',data)
                  .then(data => console.log(data))
                  .catch(err => conosle.log(err));

const userDel = http.delete('https://jsonplaceholder.typicode.com/users/2')
            .then(data => console.log(data))
            .catch(err=> console.log(err));
            