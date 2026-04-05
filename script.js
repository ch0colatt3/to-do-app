
const inputBox = document.getElementById("input-box");

const listContainer = document.getElementById("list-container");
function addTask(){
    if(inputBox.value === ' '){
        alert("pls write smth <3");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);

    }
    inputBox.value = " ";
    saveData();
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");

}
showTask();

let timerInterval;

    function startCountdown() {
      clearInterval(timerInterval);  //clear previous countdown
      const input = document.getElementById("targetTime").value;
      if (!input){
        alert("Please select a date and time")
        return;
      }
      //gud//

      const targetDate = new Date(input).getTime();

      function updateCountdown(){
        const now = new Date().getTime();
        const distance = targetDate - now;
      
        if (distance <= 0) {
          document.getElementById("countdown").textContent = "Time's Up!";
          clearInterval(timerInterval);
          return;
        }

      const days = Math.floor(distance/(1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 *24))/ (1000 * 60 * 60));
      const minutes = Math.floor((distance & (1000*60*60))/(1000*60));
      const seconds = Math.floor((distance % (1000 * 60))/1000);

      document.getElementById("countdown").textContent = 
        `${days}d ${hours}h ${minutes}m ${seconds}s`;
        
      }
      updateCountdown();
      timerInterval = setInterval(updateCountdown, 1000);
    }
