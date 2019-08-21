//Making Variables
var time = document.getElementById('time');
var greet = document.getElementById('greeting');
var message = document.getElementById('message');

function changeQuote() {
    //Quotes Array
    var quote = new Array(20);
    quote[0] = "Give up, Give in, or give it all you got.";
    quote[1] = "Conquer the bad habits or they will conquer you.";
    quote[2] = "Being rejected from something good just means you were being pointed toward something better.";
    quote[3] = "What will you do today that will make you proud in a year?";
    quote[4] = "Do not pray for an easy life; pray for the strength to endure a difficult one.";
    quote[5] = "If you are afraid of failure you don't deserve to be successful!";
    quote[6] = "Thank you past for all the lessons, and move on.";
    quote[7] = "The strongest people aren't always the people who win, but the people who don't give uo when they lose.";
    quote[8] = "Strength is when you have so much to cry for but you prefer to smile instead.";
    quote[9] = "Fear kills more dreams than failure ever will.";
    quote[10] = "If you want something different You gotta do something different.";
    quote[11] = "There are no mistakes in life, just lessons.";
    quote[12] = "The greatest mistake we make us living in constant fear that we will make one.";
    quote[13] = "Do not listen with the intent to reply, but with the intent to understand.";
    quote[14] = "Today, be the reason someone feels loved.";
    quote[15] = "When you choose to forgive those who have hurt you, you take away their power.";
    quote[16] = "May you always do what you are afraid to do.";
    quote[17] = "Dream it, Believe it, Achieve it.";
    quote[18] = "Remind yourself that you don't have to do what everyone else is doing.";
    quote[19] = "The best thing about the future is it comes one day at a time.";

    var arrNum = Math.floor(Math.random() * (quote.length - 1));
    message.textContent = '"' + quote[arrNum] + '"';
    setTimeout(changeQuote, 900000);

}
//Function for showing time

function showTime() {
    var today = new Date();
    let hour = today.getHours();
    let min = today.getMinutes();
    let sec = today.getSeconds();

    //Checking AM or PM
    var amPm = hour >= 12 ? 'PM' : 'AM';
    hour = hour % 12 || 12;

    //Time
    time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)}<span>&nbsp;</span>${amPm}`;

    setTimeout(showTime, 1000);
}

function addZero(n) {
    return (parseInt(n, 10) < 10 ? '0' : '') + n;
}


//Function for setting background

function setBackground() {
    let today = new Date();
    let hour = today.getHours();

    if (hour >= 0 && hour < 12) {
        //Morning
        document.body.style.backgroundImage = "url('img/morning.jpg')";
        greet.textContent = 'Good Morning';
    } else if (hour >= 12 && hour < 16) {
        //Afternoon
        document.body.style.backgroundImage = "url('img/afternoon.jpg')";
        greet.textContent = 'Good Afternoon';
    } else if (hour >= 16 && hour < 21) {
        document.body.style.backgroundImage = "url('img/evening.jpg')";
        greet.textContent = 'Good Evening';
    } else if (hour >= 21 && hour < 24) {
        //Night
        document.body.style.backgroundImage = "url('img/night.jpg')";
        greet.textContent = 'Good Night';
        time.classList.toggle('night');
        greet.classList.toggle('night');
        message.classList.toggle('night');
    }

}

//Running Functions
showTime();
setBackground();
changeQuote();