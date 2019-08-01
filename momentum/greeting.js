//전역변수 설정
const form = document.querySelector(".js-form"),
    input = form.querySelector("input"),
    greeting = document.querySelector(".js-greeting");

const USER_LS = "currentUser",
    SHOWING_CN = "showing";

//function 작성
const loadName = () => {
    const currentUser = localStorage.getItem(USER_LS);
    if (currentUser === null) {
        askForName();
    } else {
        paintGreeting(timeText(), currentUser);
    }
};

const handleSubmit = event => {
    event.preventDefault(); //webpage가 refresh되는걸 막는다.
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
    form.addEventListener("submit", handleSubmit); //form을 작성하면 submit event가 발생, 이때 handleSubmit실행.
};

const timeText = () => {
    const date = new Date();
    const Hour = date.getHours();
    let text = "";

    if (Hour > 6 && Hour < 12) {
        text = "good morning";
    } else if (Hour >= 12 && Hour < 19) {
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
