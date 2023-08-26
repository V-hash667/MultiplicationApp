const a=Math.ceil(Math.random()*10);
const b=Math.ceil(Math.random()*10);

const ques = document.getElementById("q");
ques.innerText=`what is ${a} multiply by ${b}`

var sc=document.getElementById("sq")

const ans=document.getElementById('ans');
var score = JSON.parse(localStorage.getItem("score"));
if (!score) {
   score = 0;
 }


sc.innerText="score:"+score;

const cans=a*b;

const fm=document.getElementById('form');


fm.addEventListener("submit",()=>{
    const userAns=parseInt(ans.value);
   if (userAns==cans){
    score++;
    uls()
   
   }
   else{
    score--;
    uls()
  
   }
   
});
function uls(){
   localStorage.setItem("score",JSON.stringify(score))
}


