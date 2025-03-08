document.getElementById('send-btn').addEventListener('click', function() {
    let userInput = document.getElementById('user-input').value;
    if (userInput) {
        showMessage(userInput, 'user');
        let botResponse = getBotResponse(userInput);
        setTimeout(function() {
            showMessage(botResponse, 'bot');
        }, 1000);
        document.getElementById('user-input').value = '';
    }
});

function showMessage(message, sender) {
    let messageDiv = document.createElement('div');
    messageDiv.classList.add('message', sender + '-message');
    messageDiv.innerText = message;
    document.getElementById('messages').appendChild(messageDiv);
    document.getElementById('chatbox').scrollTop = document.getElementById('chatbox').scrollHeight;
}

function getBotResponse(input) {
    const colorAlias = {
        "czerwień": "czerwony",      
        "zieleń": "zielony",
        "żółć": "żółty", 
        "pomarańcz": "pomarańczowy",  
        "róż": "różowy", 
        "fiolet": "fioletowy",
        "brąz": "brązowy",        
        "czerń": "czarny",          
        "biel": "biały",           
        "turkus": "turkusowy",       
        "granat": "granatowy",      
        "beż": "beżowy"    
        
    };

    const colorExamples = {
        "czerwony": "jabłko, truskawka, serce",
        "niebieski": "niebo, morze, dżinsy",
        "zielony": "trawa, liść, ogórek",
        "żółty": "słońce, banan, kukurydza",
        "pomarańczowy": "pomarańcza, dynia, marchewka",
        "różowy": "róża, flaming, arbuz",
        "fioletowy": "śliwka, lawenda, jagody",
        "brązowy": "czekolada, kora drzewa, orzech",
        "czarny": "noc, węgiel, kruk",
        "biały": "śnieg, mleko, chmury",
        "szary": "popiół, beton, wilk",
        "turkusowy": "ocean, kamień turkus, egzotyczna papuga",
        "złoty": "złoto, medal, słońce o zachodzie",
        "srebrny": "srebro, moneta, księżyc",
        "granatowy": "granat, atrament, marynarka",
        "beżowy": "piasek, kawa z mlekiem, skóra"
    };

    let color = input.toLowerCase().trim();

    if (colorAlias[color]) {
        color = colorAlias[color];
    }

    if (colorExamples[color]) {
        return `Przykłady przedmiotów w kolorze ${color}m:\n${colorExamples[color]}.`;
    } else {
        return `Przepraszam, nie znam koloru "${input}".`;
    }
}

let userInput = document.getElementById('user-input');
let inputHint = document.getElementById('input-hint');

userInput.addEventListener('input', function() {
    if (userInput.value.length > 0) {
        inputHint.style.display = 'none';
    } else {
        inputHint.style.display = 'block';
    }
});

