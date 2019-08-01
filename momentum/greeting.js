const form = document.querySelector(".js-form"),
    input = form.querySelector("input"),
    greeting = document.querySelector(".js-greeting");

const USER_LS = "currentUser",
    SHOWING_CN = "showing";

const loadName = () => {
    const currentUser = localStorage.getItem(USER_LS);
    if (currentUser === null) {
        askForName();
    } else {
        paintGreeting(timeText(), currentUser);
    }
};

const handleSubmit = event => {
    event.preventDefault();
    const currnetValue = input.value;
    paintGreeting(timeText(), currnetValue);
    saveName(currnetValue);
};

const paintGreeting = (text, user) => {
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerHTML = `${text},${user}`;
};

const saveName = userName => {
    localStorage.setItem(USER_LS, userName);
};

const askForName = () => {
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit", handleSubmit);
};

const timeText = () => {
    const date = new Date();
    const Hour = date.getHours();
    let text = "";

    if (Hour > 6 && Hour < 12) {
        text = "good morning";
    } else if (Hour >= 12 && Hour < 7) {
        text = "good afternoon";
    } else {
        text = "good night";
    }
    return text;
};

const greetingInit = () => {
    loadName();
    timeText();
    setInterval(timeText, 1000);
};

greetingInit();
