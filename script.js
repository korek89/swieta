
var today = new Date();
var allDays = new Date(today.getFullYear(), 0, 0);
var diff = today - allDays;
var oneDay = 1000 * 60 * 60 * 24;
var day = Math.floor(diff / oneDay);
if (allDays == 366)
{
    var timeLeft = Number(day - 351);
}
else
{
    var timeLeft = Number(day - 350);
}


function timeCounter()
{
    document.getElementById("timeLeft").innerHTML = "Do świąt zostało: " + timeLeft + " dni";
    if (timeLeft > 30)
    {
        document.getElementById("message").innerHTML = "czyli jeszcze dużo czasu";
    }
    else if (timeLeft <= 30 && timeLeft > 0)
    {
        document.getElementById("message").innerHTML = "teraz jest ta chwila kiedy możesz już wprawić się w świąteczny nastrój";
    }
    else if (timeLeft == 0)
    {
        document.getElementById("message").innerHTML = "DZISIAJ ŚWIĘTA!";
    }
}
