const weather = document.querySelector(".js-weather"),
    COORDS = "coords",
    API_KEY = "a9b303de0edabd90d0130113cb83c299";

const getWeather = (lat, lng) => {
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
    ).then(response =>
        response.json().then(json => {
            const temperature = Math.floor(json.main.temp);
            const description = json.weather[0].description;
            const place = json.name;
            weather.innerHTML = `${place}'s temperature is ${temperature}, ${description}`;
        })
    );
};

const saveCoords = coords => {
    localStorage.setItem(COORDS, JSON.stringify(coords));
};

const handleGeoSuccess = position => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    const coordsObj = {
        latitude, //latitude라고만 써도 latitude: latitude와 같은 의미
        longitude
    };

    saveCoords(coordsObj);
    getWeather(latitude, longitude);
};

const handleGeoFailed = error => {
    console.log(error);
};

const askForCoords = () => {
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoFailed);
};

const loadCoords = () => {
    const loadedCoords = localStorage.getItem(COORDS);
    if (loadedCoords === null) {
        askForCoords();
    } else {
        const parsedCoords = JSON.parse(loadedCoords);
        getWeather(parsedCoords.latitude, parsedCoords.longitude);
    }
};

const weatherInit = () => {
    loadCoords();
};

weatherInit();
