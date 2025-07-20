function updateTime() {
    let tokyoDateElement = document.querySelector("#tokyo .date");
    if (tokyoDateElement) {
        tokyoDateElement.innerHTML = moment().tz("Asia/Tokyo").format("MMMM Do YYYY");
        let tokyoTimeElement = document.querySelector("#tokyo .time");
        tokyoTimeElement.innerHTML = moment().tz("Asia/Tokyo").format("h:mm:ss [<small>] A [</small>]");
    }
    
    let parisDateElement = document.querySelector("#paris .date");
    if (parisDateElement) {
        parisDateElement.innerHTML = moment().tz("Europe/Paris").format("MMMM Do YYYY");
        let parisTimeElement = document.querySelector("#paris .time");
        parisTimeElement.innerHTML = moment().tz("Europe/Paris").format("h:mm:ss [<small>]A [</small>]");
    }
    

    let losAngelesDateElement = document.querySelector("#los-angeles .date");
    if (losAngelesDateElement) {
        losAngelesDateElement.innerHTML = moment().tz("America/Los_Angeles").format("MMMM Do YYYY");
        let losAngelesTimeElement = document.querySelector("#los-angeles .time");
        losAngelesTimeElement.innerHTML = moment().tz("America/Los_Angeles").format("h:mm:ss [<small>]A[</small>]");
    }
    

    let kyivDateElement = document.querySelector("#kyiv .date");
    if (kyivDateElement) {
        kyivDateElement.innerHTML = moment().tz("Europe/Kyiv").format("MMMM Do YYYY");
        let kyivTimeElement = document.querySelector("#kyiv .time");
        kyivTimeElement.innerHTML = moment().tz("Europe/Kyiv").format("h:mm:ss [<small>]A[</small>]");
    }
    }
   


function updateCity(event) {
    let cityTimeZone = event.target.value;
    if (cityTimeZone == "current") {
        cityTimeZone = moment.tz.guess();
    }
    let cityTime = moment().tz(cityTimeZone);
    let cityName = cityTimeZone.replace("_", " ").split("/")[1];
    let citiesElement = document.querySelector("#cities");
    citiesElement.innerHTML = `
        <div class="city">
            <div>
                <h2>${cityName}</h2>
                <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
            </div>
                    
            <div class="time">${cityTime.format("h:mm:ss")}<small>${cityTime.format("A")} <?small></div>
        </div>
    
    `;
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);