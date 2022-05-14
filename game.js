
let buttonColors=["red","green","yellow","blue"];
let gamePattern=[];
let userClickParttern=[];
let level=0;
let start=false;


$(document).keypress(function(){
    if(!start){
        $("h1").text("Level "+ level);
        nextSequence();
        start=true;
    }
});

$("button").click(function(){
    let userChoseColour= $(this).attr("id"); 
    userClickParttern.push(userChoseColour); 
    playSound(userChoseColour);
    animatePress(userChoseColour);
    checkAnswer(userClickParttern.length-1);
})


function checkAnswer(currenLevel){

    if (gamePattern[currenLevel]=== userClickParttern[currenLevel]){
        if (userClickParttern.length===gamePattern.length){
            setTimeout(function(){
                nextSequence();
            },1000);
        }
    } else {
        let audio= new Audio("sounds/wrong.mp3");
        audio.loop=false;
        audio.play();
        $("body").addClass("gameover");
        $("h1").text("Game Over, Press Any Key to Restart");
        setTimeout (function(){
            $("body").removeClass("gameover");
        },200);

        startOver();
    }
}

function nextSequence(){
    userClickParttern=[]
    level++;
    $("h1").text("Level "+ level);
    let randomNumber=Math.floor(Math.random()*4);
    let randomChosenColor=buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);
    $("#"+randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColor);
    
}


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

function statOver(){
    level=0;
    gamePattern=[];
    start=false;
}
