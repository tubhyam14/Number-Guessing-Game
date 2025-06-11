
const maxNo=100;
const minNo=1;

let answer=Math.floor(Math.random()*(maxNo)+1);
let isPlaying=true;
let guess;
 

        document.getElementById("sumbit").onclick=checkGuess; 
        document.getElementById("reset").onclick = function () {
            location.reload();
          };
          

        document.getElementById("input").addEventListener("keydown", function (e) {
            if (e.key === "Enter") {
                checkGuess();
            }
        });
        
        
       function checkGuess() {  
        guess=document.getElementById("input").value;
        guess=Number(guess);
        if(guess==answer){
            document.getElementById("display").textContent="Yayy!!! You guessed correctly"

        }

        if(guess>answer){
            document.getElementById("display").textContent="Too High!!"

        }


        if(guess<answer){
            document.getElementById("display").textContent="Too Low!!"

        }
        display.classList.remove("animate");
        void display.offsetWidth; // Force reflow
        display.classList.add("animate");
    
    }


 



console.log(answer);