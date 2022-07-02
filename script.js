
const getBrewery= async ()=>{
    await fetch("https://api.openbrewerydb.org/breweries",{method:"GET"})
    .then((data)=>data.json())
    .then((data)=>{
        console.log(data)
        populateData(data);
    })
    .catch((er)=>errorHandler(er));
}


const populateData=(data)=>{
    let tbody=document.getElementById("tbody");
    for(let i=0;i<data.length;i++){
        let tr=document.createElement("tr")

        let name=document.createElement("td")
        name.textContent=data[i].name;
        tr.appendChild(name);


        let brType=document.createElement("td")
        brType.textContent=data[i].brewery_type;
        tr.appendChild(brType);

        let address=document.createElement("td")
        address.textContent=(data[i].street+","+data[i].city+","+data[i].state+","+data[i].postal_code)
        tr.appendChild(address);

        let website_url=document.createElement("td")
        website_url.textContent=data[i].website_url;
        website_url.style.color="blue";
        tr.appendChild(website_url);


        let phone=document.createElement("td")
        phone.textContent=data[i].phone;
        tr.appendChild(phone);
        
     tbody.appendChild(tr);
    }
}


getBrewery();
const errorHandler=(er)=>console.error(er);



