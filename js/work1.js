const wordText = document.querySelector(".word"),
hintText = document.querySelector(".hint span"),
timeText = document.querySelector(".time b"),
refreshBtn = document.querySelector(".refresh"),
checkBtn = document.querySelector(".check"),
inputField = document.querySelector("input");

let correctWord, timer;

document.getElementById("night").onclick = function()
{
    document.getElementById("demo").style.cssText=" color: white; background: rgb(29, 27, 27); "
 
}


document.getElementById("light").onclick = function()
{
    document.getElementById("demo").style.cssText=" color: black; background:white;"
    
}

const initTimer = maxTime => {
    clearInterval(timer);
     timer = setInterval(() =>{
      if(maxTime > 0)
      {
        maxTime--; // decrement maxTime by 1 
        return timeText.innerHTML = maxTime;
      }
      clearInterval(timer);
      alert(` Time off ${correctWord.toLocaleUpperCase()} was the correct word`);
      initGame(); // calling initGame function, so the game restart again
     }, 1000);
}

const initGame = () => {
    initTimer(30); // calling initTimer function with passing the maxTime 30 as the value
    let radomObj = words[Math.floor(Math.random() * words.length)]; // getting random object from words
    let wordArray = radomObj.word.split(""); // splitting each letter of random word
    for (let i = wordArray.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1)) // get random number
      // shuffling and swiping wordArray letter randomly
      let temp = wordArray[i];
      wordArray[i] = wordArray[j];
      wordArray[j] = temp;
        
    }
    wordText.innerHTML = wordArray.join(""); // passing shuffled word as text
    hintText.innerHTML = radomObj.hint; // passing the random hint words 
    correctWord = radomObj.word.toLocaleLowerCase(); // passing random word to correctWord
    inputField.value = ""; // making input field empty 
    inputField.setAttribute("maxlength", correctWord.length); // setting input maxlength value to word length
    
}
initGame();

const checkWord = () => {
    let userWord = inputField.value.toLocaleLowerCase();
    // if user didnt enter anything
    if(!userWord) return alert(`Please enter a word check 😃`);
    // checking is userWord is doesnt match
     if(userWord !== correctWord) return alert(`Oops!!! ${userWord} is not a correct word`);
    // else statement 
    alert(` Congrats!!! ${userWord.toLocaleUpperCase()} is a correct word`);
        
     initGame();
}

refreshBtn.addEventListener("click", initGame);
checkBtn.addEventListener("click", checkWord);
