// api ile cagirmaq

const card = document.getElementById("card")
axios.get("https://restcountries.com/v3.1/all").then(res => {
    console.log(res)
    let html = ""
    for (let i = 0; i < res.data.length; i++) {
        const { flags, name, population, region, capital } = res.data[i]
        html += `
    <div class="card" style="width: 18rem;" >
    <img class="card-img-top" src="${flags.png}" alt="Card image cap">
    <div class="card-body">
        <h5 class="card-title">${name.common}</h5>
        <p class="card-text">${population} </p>
        <p class="card-text"> ${region} </p>
        <p class="card-text">${capital}</p>
       
    </div>
</div>
    `
    }
    card.innerHTML = html
})


// Filter

let select=document.getElementById("select")
axios.get("https://restcountries.com/v3.1/all").then(res => {
    console.log(res)
    let html = ""
    for (let i = 0; i < res.data.length; i++) {
        const {name} = res.data[i]
        html += `
        <option> ${name.common}</option>
    `
    }
    select.innerHTML = html
})


// let search = document.getElementById("search")

// search.addEventListener("keyup" , function() {
//     axios.get("https://restcountries.com/v3.1/all").then((res)=>{
//     html =""
//     for (let i = 0; i < res.data.length; i++) {
//         const { flags, name, population, region, capital } = res.data[i]
//         if(
//    name.common
//       .toLowerCase()
//       .includes(search.value.toLowerCase())
//         ){
//             html += `
//     <div class="card" style="width: 18rem;" >
//     <img class="card-img-top" src="${flags.png}" alt="Card image cap">
//     <div class="card-body">
//         <h5 class="card-title">${name.common}</h5>
//         <p class="card-text">${population} </p>
//         <p class="card-text"> ${region} </p>
//         <p class="card-text">${capital}</p>
       
//     </div>
// </div>
//     `
//         }
        
//     }
// })
// })