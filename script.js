
// A simple function invoked by click event of the button to start the countdown timer
var countDown = function() {
    let button1 = document.querySelector(".btn1");
    button1.setAttribute("style", "display: none");
    let countdown = document.querySelector("#result");
    let time = 10;
    countdown.innerHTML = "";

    countdown.innerHTML = time--;
    setTimeout(() => {
        countdown.innerHTML = time--;
        setTimeout(() => {
            countdown.innerHTML = time--;
            setTimeout(() => {
                countdown.innerHTML = time--;
                setTimeout(() => {
                    countdown.innerHTML = time--;
                    setTimeout(() => {
                        countdown.innerHTML = time--;
                        setTimeout(() => {
                            countdown.innerHTML = time--;
                            setTimeout(() => {
                                countdown.innerHTML = time--;
                                setTimeout(() => {
                                    countdown.innerHTML = time--;
                                    setTimeout(() => {
                                        countdown.innerHTML = time--;
                                        setTimeout(() => {
                                            countdown.innerHTML = "Happy Independence Day";
                                        },1000);
                                    },1000);
                                },1000);
                            },1000);
                        }, 1000);
                    },1000);
                },1000);
            },1000);
        },1000);
    },1000);
};





