var out=document.getElementById('F');
out.innerText='0';
var dec=false;
var res;
var sign;
//var num1;
// var plusminus=false;  //false for +, true for -

function temp_res(){
    if(sign=='+'){
        res+=num;
    }
    if(sign=='-'){
        res-=num;
    }
    if(sign=='*'){
        res*=num;
    }
    if(sign=='/'){
        res/=num;
    }
    return;
}


//................1........................
var b13 =document.getElementById('b13');
b13.addEventListener('click', function (){
    if( dec ){
        out.innerText+='1';
    }
    else if(Number(out.innerText)>0){
        out.innerText= String( (10*Number(out.innerText)) + Number(b13.innerText));
    }
    else if(Number(out.innerText)<0){
        out.innerText= String( (10*Number(out.innerText)) - Number(b13.innerText));
    }
    else{
        out.innerText= b13.innerText;
    }
});

//...............2..................
var b14 =document.getElementById('b14');
b14.addEventListener('click', function (){
    if( dec ){
        out.innerText+='2';
    }
    else if(Number(out.innerText)>0){
        out.innerText= String( (10*Number(out.innerText)) + Number(b14.innerText));
    }
    else if(Number(out.innerText)<0){
        out.innerText= String( (10*Number(out.innerText)) - Number(b14.innerText));
    }
    else{
        out.innerText= b14.innerText;
    }
});

//.................3.....................
var b15 =document.getElementById('b15');
b15.addEventListener('click', function (){
    if( dec ){
        out.innerText+='3';
    }
    else if(Number(out.innerText)>0){
        out.innerText= String( (10*Number(out.innerText)) + Number(b15.innerText));
    }
    else if(Number(out.innerText)<0){
        out.innerText= String( (10*Number(out.innerText)) - Number(b15.innerText));
    }
    else{
        out.innerText= b15.innerText;
    }
});

//................4......................
var b9 =document.getElementById('b9');
b9.addEventListener('click', function (){
    if( dec ){
        out.innerText+='4';
    }
    else if(Number(out.innerText)>0){
        out.innerText= String( (10*Number(out.innerText)) + Number(b9.innerText));
    }
    else if(Number(out.innerText)<0){
        out.innerText= String( (10*Number(out.innerText)) - Number(b9.innerText));
    }
    else{
        out.innerText= b9.innerText;
    }
});

//................5....................
var b10 =document.getElementById('b10');
b10.addEventListener('click', function (){
    if( dec ){
        out.innerText+='5';
    }
    else if(Number(out.innerText)>0){
        out.innerText= String( (10*Number(out.innerText)) + Number(b10.innerText));
    }
    else if(Number(out.innerText)<0){
        out.innerText= String( (10*Number(out.innerText)) - Number(b10.innerText));
    }
    else{
        out.innerText= b10.innerText;
    }
});

//..................6..................
var b11 =document.getElementById('b11');
b11.addEventListener('click', function (){
    if( dec ){
        out.innerText+='6';
    }
    else if(Number(out.innerText)>0){
        out.innerText= String( (10*Number(out.innerText)) + Number(b11.innerText));
    }
    else if(Number(out.innerText)<0){
        out.innerText= String( (10*Number(out.innerText)) - Number(b11.innerText));
    }
    else{
        out.innerText= b11.innerText;
    }
});

//................7....................
var b5 =document.getElementById('b5');
b5.addEventListener('click', function (){
    if( dec ){
        out.innerText+='7';
    }
    else if(Number(out.innerText)>0){
        out.innerText= String( (10*Number(out.innerText)) + Number(b5.innerText));
    }
    else if(Number(out.innerText)<0){
        out.innerText= String( (10*Number(out.innerText)) - Number(b5.innerText));
    }
    else{
        out.innerText= b5.innerText;
    }
});

//.................8...................
var b6 =document.getElementById('b6');
b6.addEventListener('click', function (){
    if( dec ){
        out.innerText+='8';
    }
    else if(Number(out.innerText)>0){
        out.innerText= String( (10*Number(out.innerText)) + Number(b6.innerText));
    }
    else if(Number(out.innerText)<0){
        out.innerText= String( (10*Number(out.innerText)) - Number(b6.innerText));
    }
    else{
        out.innerText= b6.innerText;
    }
});

//................9.....................
var b7 =document.getElementById('b7');
b7.addEventListener('click', function (){
    if( dec ){
        out.innerText+='9';
    }
    else if(Number(out.innerText)>0){
        out.innerText= String( (10*Number(out.innerText)) + Number(b7.innerText));
    }
    else if(Number(out.innerText)<0){
        out.innerText= String( (10*Number(out.innerText)) - Number(b7.innerText));
    }
    else{
        out.innerText= b7.innerText;
    }
});

//................A/C.................
var b1 =document.getElementById('b1');
b1.addEventListener('click', function (){
    out.innerText="0";
    dec=false;
    res=undefined;
    sign=undefined;
});

//..............0...................
var b17 =document.getElementById('b17');
b17.addEventListener('click', function (){
    if( dec ){
        out.innerText+='0';
    }
    else if(Number(out.innerText)!=0){
        out.innerText= String( 10*Number(out.innerText) );
    }
});

//..............decimal....................
var b18 =document.getElementById('b18');
b18.addEventListener('click', function (){
    if(!dec){
        dec=true;
        out.innerText +=".";
    } 
});

//...............+/-...................
var b2 =document.getElementById('b2');
b2.addEventListener('click', function (){
    if(out.innerText[out.innerText.length-1] != '.'){
        out.innerText=String(-1* Number(out.innerText));
    }
});

//................+.....................
var b16 =document.getElementById('b16');
b16.addEventListener('click', function (){
    if(res==undefined){
        res=Number(out.innerText);
    }
    else{
        if(sign!=undefined){
            temp_res();
        }
        res+= Number(out.innerText);
        //console.log(res);
    }
    out.innerText='';
    sign='+';

});

//................-.....................
var b12 =document.getElementById('b12');
b12.addEventListener('click', function (){
    if(res==undefined){
        res=Number(out.innerText);
    }
    else{
        res-= Number(out.innerText);
        //console.log(res);
    }
    out.innerText='';
    sign='-';
});

//................*......................
var b8 =document.getElementById('b8');
b8.addEventListener('click', function (){
    if(res==undefined){
        res=Number(out.innerText);
    }
    else{
        res*= Number(out.innerText);
        //console.log(res);
    }
    out.innerText='';
    sign='*';
});

//................./.....................
var b4 =document.getElementById('b4');
b4.addEventListener('click', function (){
    if(res==undefined){
        res=Number(out.innerText);
    }
    else{
        res/= Number(out.innerText);
        //console.log(res);
    }
    out.innerText='';
    sign='/';
});

//..................=...................
var b19 =document.getElementById('b19');
b19.addEventListener('click', function (){
    if (res==undefined){
        //out.innerText='0';
        return;
    }
    else if(sign=='+'){
        res+=Number(out.innerText);
    }
    else if(sign=='*'){
        res*=Number(out.innerText);
    }
    else if(sign=='/'){
        res/=Number(out.innerText);
    }
    else if(sign=='-'){
        res-=Number(out.innerText);
    }
    out.innerText=String(res);
    res=undefined;
});

