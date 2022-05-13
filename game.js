let buttonColors=["red","green","yellow","blue"];
let gamePattern=[];
let userClickParttern=[];
let level=0;
let start=false;

function nextSequence(){
    level++;
    $("h1").text("Level "+ level);
    let randomNumber=Math.floor(Math.random()*4);
    let randomChosenColor=buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);
    $("#"+randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColor);
    animatePress(randomChosenColor);

    

}

$("button").click(function(event){
    let userChoseColour=event.target.id; 
    userClickParttern.push(userChoseColour); 
    playSound(userChoseColour);
    animatePress(userChoseColour);
})

function playSound(name){
    let audio =new Audio("sounds/"+name+".mp3");
    audio.loop=false;
    audio.play();

}

function animatePress (currentColour){

    $("#"+currentColour).addClass("pressed");
    
    setTimeout(function(){
        $("#"+currentColour).removeClass("pressed");
    },100);

}

$("body").keypress(function(){
    if(!start){
        $("h1").text("Level "+ level);
        nextSequence();
        start=true;
    }
    
    


});