//თამაშის დაწყების ფუნქცია
function start() {
    const shouldStart = confirm(`თამაშის დაწყებისას დააჭირეთ ოკ, თუ არა და დააჭირეთ ცანცლე`);
    if (shouldStart) {
        diapazon() ;
    } else {
        console.log(`თქენ არ დაიწყეთ თამაში`);
        alert(`თქენ არ დაიწყეთ თამაში`);
    }
}

//დიაპაზონსი განსაძვრის ფუნქცია
function diapazon() {
    let minValue, maxValue;

    while (true) {
        console.log('შეიყვანე დიაპაზონის მინიმალური რიცხვი:');
        minValue = prompt('შეიყვანე დიაპაზონის მინიმალური რიცხვი:');
        console.log(`დიაპაზონის მინიმალური რიცხვი: ${minValue}`);
        if (minValue === null) {
            console.log("თქვენ გააუქმეთ მონაცემის შეკყავანა, გაიმეორეთ.");
            alert("თქვენ გააუქმეთ მონაცემის შეკყავანა, გაიმეორეთ.");
            return;
        } else if (minValue === "") {
            console.log("თქვენ არ შეიყვანეთ თანხა, გაიმეორეთ.");
            alert("თქვენ არ შეიყვანეთ თანხა, გაიმეორეთ.");
            return;
        }
        if (isNaN(minValue) || !/^-?\d+$/.test(minValue)) {
            console.log('თქვენ შეიყვანეთ არაკორექტული თანხა, გაიმეორეთ');
            alert('თქვენ შეიყვანეთ არაკორექტული თანხა, გაიმეორეთ');
            return;
        }
       
        console.log('შეიყვანე დიაპაზონის მაქსიმალური რიცხვი:');
        maxValue = prompt('შეიყვანე დიაპაზონის მაქსიმალური რიცხვი:');
        console.log(`დიაპაზონის მინიმალური რიცხვი: ${maxValue}`);
        if (maxValue === null) {
            console.log("თქვენ გააუქმეთ მონაცემის შეკყავანა, გაიმეორეთ.");
            alert("თქვენ გააუქმეთ მონაცემის შეკყავანა, გაიმეორეთ.");
            return;
        } else if (maxValue === "") {
            console.log("თქვენ არ შეიყვანეთ თანხა, გაიმეორეთ.");
            alert("თქვენ არ შეიყვანეთ თანხა, გაიმეორეთ.");
            return;
        }
        
        if (isNaN(maxValue) || !/^-?\d+$/.test(maxValue)) {
            console.log('თქვენ შეიყვანეთ არაკორექტული თანხა, გაიმეორეთ');
            alert('თქვენ შეიყვანეთ არაკორექტული თანხა, გაიმეორეთ');
            return;
        }

        if (isNumeric(minValue) && isNumeric(maxValue) && parseInt(minValue) < parseInt(maxValue)) {
            break;
        } else {
            alert('გთხოვ შეიყვანე რიცხვითი მნიშვნელობები და პირველი რიცვი შემოიტანე უფრო პატარა ვიდრე მეორეზე.');
        }
    }

    const secretNumber = Math.floor(Math.random() * (parseInt(maxValue) - parseInt(minValue) + 1)) + parseInt(minValue);
    const maxAttempts = parseInt(maxValue) - parseInt(minValue);
    let attempts = 0;

    //მნიშვნელობის შემოწმება 
    function isNumeric(value) {
        return !isNaN(parseFloat(value)) && isFinite(value);
    }

//რიცხვის მოძებნის ფუნქცია

    function guessNumber() {
        if (attempts >= maxAttempts) {
            const lostMessage = `თქვენ წააგეთ, რიცხვი კი იყო: ${secretNumber}. ცდილობების რაოდენობა: ${attempts}.`;
            console.log(lostMessage);
            alert(lostMessage);
            return;
        }

        let userGuess;

        while (true) {
            console.log(`გამოიცანით რიცხვი ${minValue}-დან ${maxValue}-მდე.`);
            userGuess = prompt(`გამოიცანით რიცხვი ${minValue}-დან ${maxValue}-მდე.`);
            console.log(`თქვენ შეიყვანეთ  ${userGuess}`);
            
            if (userGuess === null) {
                const cancelledMessage = 'თამაში შეჩერდა, თქვენ წააგეთ.';
                console.log(cancelledMessage);
                alert(cancelledMessage);
                return;
            }

            if (isNumeric(userGuess) && Number.isInteger(parseFloat(userGuess)) && parseFloat(userGuess) >= parseFloat(minValue) && parseFloat(userGuess) <= parseFloat(maxValue)) {
                break;
            } else {
                console.log('გთხოვთ შეიყვანთ ცხრილში მართლად რიცხვი.');
                alert('გთხოვთ შეიყვანთ ცხრილში მართლად რიცხვი.');
            }
        }

        attempts++;

        if (parseFloat(userGuess) === secretNumber) {
            Result(true);
        } else {
            const hint = parseFloat(userGuess) < secretNumber ? 'არა უფრო დიდი რიცვია' : 'არა უფრო პატარა რიცხვია';
            Result(false, hint);
        }
    }
  

//შედეგის გამოხატვის ფუნქცია
    function Result(isCorrect, hint = '') {
        if (isCorrect) {
            const successMessage = `გილოცავ, შენ გამოიცანი რიცხვი ${secretNumber},  ცდილობების რაოდენობა: ${attempts}.`;
            console.log(successMessage);
            alert(successMessage);
        } else {
            const failureMessage = `${hint}. კიდევ ერთხელ სცადე.`;
            console.log(failureMessage);
            alert(failureMessage);
            guessNumber();
        }
    }

    guessNumber();
}

//თამაშის დაწყების ფუნქციის გამოძახება

start();
