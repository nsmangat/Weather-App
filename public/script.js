
// function getSubmit() {
//     const city = document.getElementById('city').value 
//     console.log(city)
//     fetch('/', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//             'Accept': 'application/json'
//         },
//     })


// }
const temp = document.querySelector('[data-temperature]')
function getSubmit() {
    const city = document.getElementById('city').value 

    console.log(city)
    axios.post('http://localhost:3000/', {
        city: city
    })
    .then(response => {
        const data = response.data
        console.log(data)
        console.log(data.main.temp)
        //temp.textContent = data.main.temp
        //temp.textContent = "whatever"
        document.getElementById('temperature').textContent = data.main.temp
    })
    .catch(error => console.error(error))

}