var score=0;
document.getElementById('score').innerHTML=String(score);

var play_x= 45;  
var chg=3;
// var y= document.getElementById('b2').style.left= String(Number(l.slice(0,l.length-1)) - 5)+"%";                        
window.addEventListener("keydown", function (e){
    switch(e.key){
        case 'ArrowLeft':
            if(play_x>3){
                play_x=play_x-chg;
            }                    
            document.getElementById('b2').style.left= String(play_x)+"%";    
            document.getElementById('b1').style.left= String(play_x)+"%";    
            break;
        case 'ArrowRight':
            if(play_x<75){
                play_x=play_x+chg;
            }   
            document.getElementById('b2').style.left= String(play_x)+"%";                        
            document.getElementById('b1').style.left= String(play_x)+"%";    
            break;
        }
    //    console.log(x);
} );

var tl= document.getElementById('ball');
var t=50;
var l=50;

var time=0;
var velx=2;
var vely=5;
function sim(){
    //console.log(i);
    if(t<=0 || t>=95){
        if(play_x-15<=l && l<=play_x+15){
            velx+=0.2;
            console.log("hit");
            score+=1;
            document.getElementById('score').innerHTML=String(score);
        }
        else{
            score=0;
            document.getElementById('score').innerHTML=String(score);
        }
        vely*=-1;
    }
    if(l<=0 || l>=95){
        velx*=-1;        
    }
    t= t+vely;
    l= l+velx;
    time++;

    tl.style.top= t+"%";
    tl.style.left= l+"%";
}

setInterval( sim ,45);
