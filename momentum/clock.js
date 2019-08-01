const clock = document.querySelector(".js-clock"),
    clockTitle = clock.querySelector("h1");

const showingClock = () => {
    const date = new Date(),
        Hour = date.getHours(),
        Minute = date.getMinutes(),
        Second = date.getSeconds();

    clockTitle.innerHTML = `${Hour < 10 ? `0${Hour}` : Hour} : ${
        Minute < 10 ? `0${Minute}` : Minute
    } : ${Second < 10 ? `0${Second}` : Second}`;
};

const clockInit = () => {
    showingClock();
    setInterval(showingClock, 1000);
};

clockInit();
