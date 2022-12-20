
var phrases = ["pierniki", "boże narodzenie", "wigilia", "barszcz", "śnieg", "papis", "zsge gurą", "nienawidzę liceum", "adios", "pablo"];
var currentPhrase = (Math.random() * phrases.length).toFixed(0);
var manX = 350, manY = 200;
var temporarPhrase = [];

// pokazuje haslo
function start()
{
    let win = 0;
    document.getElementById("password").innerHTML = "";
    for (let i = 0; i < phrases[currentPhrase].length; i++)
    {
        if (temporarPhrase[i] != null)
        {
            document.getElementById("password").innerHTML += temporarPhrase[i];
            win++;
        }
        else if (phrases[currentPhrase][i] == " ")
        {
            document.getElementById("password").innerHTML += "&nbsp&nbsp&nbsp&nbsp";
        }
        else
        {
            document.getElementById("password").innerHTML += "_ ";
        }
    }
    if (win == phrases[currentPhrase].length)
    {
        const canvas = document.getElementById("man");
        const ctx = canvas.getContext("2d");
        ctx.font = "30px Arial";
        ctx.fillStyle = "white";
        ctx.fillText("Wygrałeś!", manX + 300, manY - 20);
    }
}

let progression = 0;
// RYSOWANIEE
function hangMan()
{
    const canvas = document.getElementById("man");
    const ctx = canvas.getContext("2d");
    ctx.lineWidth = 5;
    ctx.strokeStyle = "white";
    // cholerstwo na rysowanie nie patrz na to
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
            ctx.font = "30px Arial";
            ctx.fillStyle = "white";
            ctx.fillText("Przegrałeś!", manX + 300, manY - 20);
        break;
    }
}

// sprawdza czy dana litera znajduje sie w wyrazie i wywoluje adekwatne do odpowiedzi funkcje
let alreadyUsedKeys = [];
function check(phraseKey)
{
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
        console.log("yupi");
        start();
    }
    else
    {
        alreadyUsedKeys.push(phraseKey);
        hangMan();
    }
}

// KLAWISZE
// NIE RUSZAM TEGO CHUJSTWA WIECEJ TO LOSOWO DAJE JAKIES ZNAKI ROWNA SIE ZASRANE
// let hotkeys = ['a', 'ą', 'b', 'c', 'ć', 'd', 'e', 'ę', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'ł', 'm', 'n', 'ń', 'o', 'ó', 'p', 'r', 's', 'ś', 't', 'u', 'w', 'y', 'z', 'ź', 'ż',];
// function clickableKeys()
// {
//     for (let i = 0; i < hotkeys.length; i++)
//     {
//         document.getElementById("game").innerHTML += "<div id='" + hotkeys[i] + "' class='phraseKey' onclick='check('" + hotkeys[i] + "')'>" + hotkeys[i] + "</div>";
//     }
// }
