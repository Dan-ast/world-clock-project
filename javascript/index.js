function updateTime() {
    let tokyoDateElement = document.querySelector("#tokyo .date");
    tokyoDateElement.innerHTML = moment().tz("Asia/Tokyo").format("MMMM Do YYYY");
    let tokyoTimeElement = document.querySelector("#tokyo .time");
    tokyoTimeElement.innerHTML = moment().tz("Asia/Tokyo").format("h:mm:ss [<small>] A [</small>]");

    let parisDateElement = document.querySelector("#paris .date");
    parisDateElement.innerHTML = moment().tz("Europe/Paris").format("MMMM Do YYYY");
    let parisTimeElement = document.querySelector("#paris .time");
    parisTimeElement.innerHTML = moment().tz("Europe/Paris").format("h:mm:ss [<small>]A [</small>]");

    let losAngelesDateElement = document.querySelector("#los-angeles .date");
    losAngelesDateElement.innerHTML = moment().tz("America/Los_Angeles").format("MMMM Do YYYY");
    let losAngelesTimeElement = document.querySelector("#los-angeles .time");
    losAngelesTimeElement.innerHTML = moment().tz("America/Los_Angeles").format("h:mm:ss [<small>]A[</small>]");

    let kyivDateElement = document.querySelector("#kyiv .date");
    kyivDateElement.innerHTML = moment().tz("Europe/Kyiv").format("MMMM Do YYYY");
    let kyivTimeElement = document.querySelector("#kyiv .time");
    kyivTimeElement.innerHTML = moment().tz("Europe/Kyiv").format("h:mm:ss [<small>]A[</small>]");
}

updateTime();
setInterval(updateTime, 1000);
