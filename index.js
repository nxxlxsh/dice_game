randomNumber1=Math.random();
randomNumber=Math.floor(randomNumber1*6)+1;

randomNumber2=Math.random();
randomNumber42=Math.floor(randomNumber2*6)+1;

var randomimage1="dice"+randomNumber+".png";
var randomimage2="dice"+randomNumber42+".png";

document.querySelectorAll("img")[0].setAttribute("src",randomimage1);
document.querySelectorAll("img")[1].setAttribute("src",randomimage2);

if(randomNumber===randomNumber42){
    document.querySelector("h1").innerHTML="Match Drawn";
}
else if(randomNumber>randomNumber42){
    document.querySelector("h1").innerHTML="Player1 Won!!";
}
else{
    document.querySelector("h1").innerHTML="Player2 Won!!";
}