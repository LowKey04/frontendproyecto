let idUpdate
let id

document.addEventListener('DOMContentLoaded', () => {
    idUpdate = location.search.substring(1).split("&")
    id= idUpdate[0].substring(3, idUpdate[0].length)
    getUser(id)
    console.log('@@@ idUpdate => ', idUpdate, id)
})

const getUser = async (id) => {
    const user = await fetch(`http://localhost:9000/get-update/${id}`)
    const result = await user.json()
    if(result.msg==='success'){
        loadDataUser(result.data)
    }else{
        alert('User Not Found')
    }
    console.log('@@@ result => ', result)
}

const loadDataUser = (user) => {
    const id = document.getElementById('id')
    const firstname = document.getElementById('firstname')
    const lastname = document.getElementById('lastname')
    const address = document.getElementById('address')
    const phone = document.getElementById('phone')
    const city = document.getElementById('city')
    const zipcode = document.getElementById('zipcode')

    id.value = id
    firstname.value=user.firstname
    lastname.value=user.lastname
    address.value=user.address
    phone.value=user.value
    city.value=user.value
    zipcode.value=user.zipcode
}