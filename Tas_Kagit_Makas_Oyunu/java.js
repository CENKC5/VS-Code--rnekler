 const computerChoiseDisplay= document.getElementById('computer-choise')
 const userChoiseDisplay = document.getElementById('user-choise')
 const resultDisplay =  document.getElementById('result')   
 const possibleChoise=document.querySelectorAll('button')
 let userChoice
let computerChoice
let result


 possibleChoise.forEach(possibleChoise => possibleChoise.addEventListener('click',(e)=>{
    userChoice=e.target.id
    userChoiseDisplay.innerHTML=userChoice
    generateComputerChoice()
    getResult()
 }))
 function   generateComputerChoice(){
    const randomNumber= Math.floor (Math.random() * possibleChoise.length+1)
    if(randomNumber===1){
        computerChoice='tas'
    }
    if(randomNumber===2){
        computerChoice='kagit'
    }
    if(randomNumber===3){
        computerChoice='makas'
    }
    computerChoiseDisplay.innerHTML=computerChoice

 }
 function getResult(){
    if(computerChoice===userChoice){
        result="Berabere!"
    }
    if(computerChoice==='tas'&&userChoice==='makas')
    result="Maalesef... Kaybettiniz"

    if(computerChoice==='tas'&&userChoice==='kagit')
    result="Tebrikler... kazandınız"

    if(computerChoice==='kagit'&&userChoice==='makas')
    result="Tebrikler... kazandınız"

    if(computerChoice==='kagit'&&userChoice==='tas')
    result="Maalesef... Kaybettiniz"

    if(computerChoice==='makas'&&userChoice==='kagit')
    result="Maalesef... Kaybettiniz"

    if(computerChoice==='makas'&&userChoice==='tas')
    result="Tebrikler... kazandınız"
resultDisplay.innerHTML=result

 }
