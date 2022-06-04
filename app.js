/*
BAD JOKES GENERATOR

If user hits "Escape" > send them to a website: https://cheezburger.com/1633029/33-funny-cat-memes-that-never-fail-to-make-us-lol 

If user hits "Hit me for a joke" button, start generator below:

1. Math.random generator to pick a number between 1 to 3 (to start)
2. Jokes are stored in one object which has 3 different keys (requirement)
3. Dad: [array of 3 jokes as strings]
4. Bad: [array of 3 jokes as strings]
5. Random: [array of 3 jokes as strings]

Rss: https://www.rd.com/list/bad-jokes-cant-help-laugh-at/
https://www.countryliving.com/life/a27452412/best-dad-jokes/


Return string from user click input
*/
//alert('Hello! Test test');

//Select buttons: "Hit me for a joke"
const dad = document.querySelector('#dadBtn');
const bad = document.querySelector('#badBtn');
const rand = document.querySelector('#randomBtn');

//Select to replace text under id of "jokes" ("I got dad jokes...")
const jokeText = document.querySelector("#joke");

//Jokes object
const jokes = {
    dad: ["I'm afraid for the calendar. Its days are numbered.", 
    "What did the ocean say to the beach? Nothing, it just waved.",
    "I don't trust those trees. They seem kind of shady."],
    bad: ["If you're American when you go in the bathroom and American when you come out, what are you in the bathroom? European.",
    "What do you call a can opener that doesn't work? A can't opener.",
    "What do you call a fake noodle? An impasta."],
    random: ["Did you hear about the Italian chef who died? He pasta-way.",
    "I sold my vacuum the other day. All it was doing was collecting dust.",
    "I like elephants. Everything else is irrelephant."],
    generateRandom(){
        const randomNum = Math.floor(Math.random()*3);
        return randomNum;
    },
    returnDadJoke(){
        return jokes.dad[this.generateRandom()];
    },
    returnBadJoke(){
        return jokes.bad[this.generateRandom()];
    },
    returnRandJoke(){
        return jokes.random[this.generateRandom()];
    }
}

//Jokes generator after clicking buttons
dad.addEventListener('click', function(e){
    jokeText.textContent = `${jokes.returnDadJoke()}`;
})

bad.addEventListener('click', function(e){
    jokeText.textContent =`${jokes.returnBadJoke()}`;
})

rand.addEventListener('click', function(e){
    jokeText.textContent =`${jokes.returnRandJoke()}`;
})


