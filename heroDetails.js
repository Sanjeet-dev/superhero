const name = document.getElementById("name");
const photo = document.getElementById("photo");
const power = document.getElementById("power");
const bio = document.getElementById("bio");
console.log(bio)
// fetching the api
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        const response = JSON.parse(xhttp.responseText);
        if (response.response === "error") {
            console.log("error fetching data");
            return;
        }
    
        //showing the data on screen

        name.innerHTML = response.name;
        console.log(response.image.url);
        photo.setAttribute("src", response.image.url);
        
        power.innerHTML = '<h3>POWER</h3><h4>Intelligence: ' + response.powerstats.intelligence + '</h4><h4>strength: ' + response.powerstats.strength + '</h4><h4>Speed: ' + response.powerstats.speed + '</h4><h4>Durability: ' + response.powerstats.durability + '</h4><h4>Power: ' + response.powerstats.power + '</h4><h4>Combat: ' + response.powerstats.combat + '</h4>';
        
        
        bio.innerHTML = '<h3>BIOGRAPHY</h3><h4>Full-Name: ' + response.biography['full-name'] + '<h4>Place-of-birth: ' + response.biography['place-of-birth'] + '</h4><h4>First-Appearence: ' + response.biography['first-appearance'] + '</h4><h4>Publisher: ' + response.biography.publisher + '</h4><h4>Alignment: ' + response.biography.alignment + '</h4>';
    }
};

xhttp.open("GET", "https://www.superheroapi.com/api.php/3505074639705186/" + localStorage.getItem("heroSelected"), true);
xhttp.send();