
// Literki aby miec referencje do zmieniania stylu kazdej literki
var hotkeys = ['a', 'ą', 'b', 'c', 'ć', 'd', 'e', 'ę', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'ł', 'm', 'n', 'ń', 'o', 'ó', 'p', 'r', 's', 'ś', 't', 'u', 'w', 'y', 'z', 'ź', 'ż'];
// Mozliwe hasla do gry
var phrases = ["pierniki", "boże narodzenie", "wigilia", "barszcz", "śnieg", "papis", "zsge gurą", "nienawidzę liceum", "adios", "pablo", "amogus", "prezenty", "opłatek", "bałwan", "paszteciki", "święty mikołaj", "gwiazdka", "słodycze", "opłatek"];

var currentPhrase = (Math.random() * (phrases.length - 1)).toFixed(0);
var manX = 350, manY = 200;
var temporarPhrase = [];
var gameEnded = false;



// Nowa gra
addEventListener("keydown", (e)=>{
    if (e.key == 'Enter')
    {
        gameEnded = false;
        progression = 0;
        alreadyUsedKeys = [];
        temporarPhrase = [];
        currentPhrase = (Math.random() * (phrases.length - 1)).toFixed(0);
        const canvas = document.getElementById("man");
        const ctx = canvas.getContext("2d");
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        document.getElementById("postGameMsg").innerHTML = "";
        for (let i = 0; i < hotkeys.length; i++)
        {
            document.getElementById(hotkeys[i]).style.opacity = 1;
        }
        start();
    }
})

// rysuje haslo
function start()
{
    let winCondition = 0;
    document.getElementById("password").innerHTML = "";
    for (let i = 0; i < phrases[currentPhrase].length; i++)
    {
        if (temporarPhrase[i] != null)
        {
            document.getElementById("password").innerHTML += temporarPhrase[i];
            winCondition++;
        }
        else if (phrases[currentPhrase][i] == " ")
        {
            document.getElementById("password").innerHTML += "&nbsp&nbsp&nbsp&nbsp";
            winCondition++;
        }
        else
        {
            document.getElementById("password").innerHTML += "_ ";
        }
    }
    if (winCondition == phrases[currentPhrase].length)
    {
        document.getElementById("postGameMsg").innerHTML = "<br>Wygrałeś!<br>";
        gameEnded = true;
    }
}

let progression = 0;
// Rysuje wisielca
function hangMan()
{
    const canvas = document.getElementById("man");
    const ctx = canvas.getContext("2d");
    ctx.lineWidth = 5;
    ctx.strokeStyle = "white";
    // 
    switch (progression)
    {
        case 0: 
            ctx.beginPath();
            ctx.moveTo(manX, manY);
            ctx.lineTo(manX + 50, manY - 30);
            ctx.stroke();
            progression++;
        break;
        case 1:
            ctx.moveTo(manX + 100, manY);
            ctx.lineTo(manX + 50, manY - 30);
            ctx.stroke();
            progression++;
        break;
        case 2:
            ctx.moveTo(manX + 50, manY - 30);
            ctx.lineTo(manX + 50, manY - 180);
            ctx.stroke();
            progression++
        break;
        case 3:
            ctx.moveTo(manX + 50, manY - 180);
            ctx.lineTo(manX + 150, manY - 180);
            ctx.stroke();
            progression++
        break;
        case 4:
            ctx.moveTo(manX + 50, manY - 130);
            ctx.lineTo(manX + 100, manY - 180);
            ctx.stroke();
            progression++
        break;
        case 5:
            ctx.moveTo(manX + 150, manY - 180);
            ctx.lineTo(manX + 150, manY - 165);
            ctx.stroke();
            progression++
        break;
        case 6:
            ctx.beginPath();
            ctx.arc(manX + 150, manY - 145, 20, 0, 2 * Math.PI);
            ctx.stroke(); 
            progression++
        break;
        case 7:
            ctx.moveTo(manX + 150, manY - 125);
            ctx.lineTo(manX + 150, manY - 60);
            ctx.stroke();
            progression++
        break;
        case 8:
            ctx.moveTo(manX + 150, manY - 125);
            ctx.lineTo(manX + 125, manY - 80);
            ctx.stroke();
            progression++
        break;
        case 9:
            ctx.moveTo(manX + 150, manY - 125);
            ctx.lineTo(manX + 175, manY - 80);
            ctx.stroke();
            progression++
        break;
        case 10:
            ctx.moveTo(manX + 150, manY - 60);
            ctx.lineTo(manX + 125, manY - 20);
            ctx.stroke();
            progression++
        break;
        case 11:
            ctx.moveTo(manX + 150, manY - 60);
            ctx.lineTo(manX + 175, manY - 20);
            ctx.stroke();
            document.getElementById("postGameMsg").innerHTML = "Przegrałeś!<br>hasłem było:<h5>" + phrases[currentPhrase] + "</h5>";
            gameEnded = true;
        break;
    }
}

// Sprawdza czy kliknieta litera znajduje sie w wylosowanym hasle i wywoluje adekwatne do odpowiedzi funkcje
var alreadyUsedKeys = [];
function check(phraseKey)
{
    if (gameEnded == true)
    {
        return;
    }
    let doesItMatch = false;
    for (let i = 0; i < phrases[currentPhrase].length; i++)
    {
        for (let j = 0; j < alreadyUsedKeys.length; j++)
        {
            if (phraseKey == alreadyUsedKeys[j])
            {
                doesItMatch = true;
            }
        }
        if (phraseKey == phrases[currentPhrase][i])
        {
            doesItMatch = true;
            temporarPhrase[i] = phraseKey;
        }
        document.getElementById(phraseKey).style.opacity = 0.2;
    }
    if (doesItMatch == true)
    {
        start();
    }
    else
    {
        alreadyUsedKeys.push(phraseKey);
        hangMan();
    }
}

// KLAWISZE
// NIE RUSZAM TEGO CHUJSTWA WIECEJ TO LOSOWO DAJE JAKIES ZNAKI ROWNA SIE ZASRANE ROZPIERDOLONE TO JEST DO kwadratu
// let hotkeys = ['a', 'ą', 'b', 'c', 'ć', 'd', 'e', 'ę', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'ł', 'm', 'n', 'ń', 'o', 'ó', 'p', 'r', 's', 'ś', 't', 'u', 'w', 'y', 'z', 'ź', 'ż'];
// function clickableKeys()
// {
//     for (let i = 0; i < hotkeys.length; i++)
//     {
//         document.getElementById("game").innerHTML += "<div id='" + hotkeys[i] + "' class='phraseKey' onclick='check('" + hotkeys[i] + "')'>" + hotkeys[i] + "</div>";
//     }
// }
