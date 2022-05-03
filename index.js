let playground = document.getElementById("playground")
let Name =  document.getElementById("Name");
const welcomeText = document.getElementById("welcomeText")
const submitName = document.getElementById("submitName");
const nameText = document.getElementById("nameText")
const mainPlayground = document.getElementById("mainPlayground")
const userChoice = document.getElementById("userChoice")
const userChoices = document.getElementById("userChoices")
const computerHtml = document.getElementById("computerHtml")
const userResult = document.getElementById("userResult")
const compResult = document.getElementById("compResult")



function Start(){
 playground.innerHTML = "";
 Name.classList.toggle("name1");
 
}

submitName.addEventListener('click',(event)=>{
   event.preventDefault();
   Start();

  const Welcome = ()=>{
    welcomeText.innerHTML+="Wohoo....!!!!!😍  " + `<i>${nameText.value}</i>` + "  You are ready for the Game";
    mainPlayground.classList.add("name1")
  };
  Welcome()
});

userChoice.addEventListener('click',(e)=>{
  e.preventDefault();
  game()

})

const Game = ["rock", "Paper", "Scr"];

let userCount=0;
let CompCount=0;

const game = ()=>{
  const userchoiceVal = userChoices.value
  const CompChoiceVal = Game[Math.floor(Math.random()*3)]
  computerHtml.innerHTML="Computer Choice : " + CompChoiceVal;
  if(userchoiceVal=="rock"||userchoiceVal=="Paper"||userchoiceVal=="Scr"){

  if(userchoiceVal===CompChoiceVal) alert("Oops Draw")
  
  if(userchoiceVal==="rock" && CompChoiceVal==="Paper"){
    compResult.innerHTML= "Computer : " + ++CompCount
  }
  if(userchoiceVal==="rock" && CompChoiceVal==="Scr"){
    userResult.innerHTML= "Your : " + ++userCount
  }
 if(userchoiceVal==="Scr" && CompChoiceVal==="Paper"){
  userResult.innerHTML= "Your : " + ++userCount
 }
 if(userchoiceVal==="Scr" && CompChoiceVal==="rock"){
  compResult.innerHTML= "Computer : " + ++CompCount
 }
 if(userchoiceVal==="Paper" && CompChoiceVal==="rock"){
  userResult.innerHTML= "Your : " + ++userCount
 }
 if(userchoiceVal==="Paper" && CompChoiceVal==="Scr"){
  compResult.innerHTML= "Computer : " + ++CompCount
 }
}
else alert("Wrong choice of input")
 
 
  
     
};
