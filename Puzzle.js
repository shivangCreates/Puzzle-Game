var parts=["image1x1.jpg","image1x2.jpg","image1x3.jpg","image1x4.jpg",
          "image2x1.jpg","image2x2.jpg","image2x3.jpg","image2x4.jpg",
          "image3x1.jpg","image3x2.jpg","image3x3.jpg","image3x4.jpg",
          "image4x1.jpg","image4x2.jpg","image4x3.jpg","image4x4.jpg" 
];
var Solved=["image1x1.jpg","image2x1.jpg","image3x1.jpg","image4x1.jpg",
          "image1x2.jpg","image2x2.jpg","image3x2.jpg","image4x2.jpg",
          "image1x3.jpg","image2x3.jpg","image3x3.jpg","image4x3.jpg",
          "image1x4.jpg","image2x4.jpg","image3x4.jpg","image4x4.jpg" 
];
var folder_Name="Puzzle-img/";
var alltd=document.querySelectorAll("td");
alltd.forEach((td,index)=>{
td.innerHTML=`<img src="${folder_Name+parts[index]}" />`
td.onclick= function (){
    Tap(this,index);
}

})
var i=-1;
var j=-1;
var gameStatus=0;
var totalchance=10
function Tap(td,index){
    td.style.outline="3px solid yellow";
    if(i<0 && j<0){
        //User Select it First Time
        i=index;
    }else{
        j=index
         var temp=alltd[i].innerHTML;
         alltd[i].innerHTML=alltd[j].innerHTML;
         alltd[j].innerHTML=temp;
         //reset outline
         alltd[i].style.outline=" none";
        alltd[j].style.outline="none ";
         totalchance--;
        count.innerHTML=totalchance;

          //swap img in array
        var t=parts[i];
        parts[i]=parts[j];
        parts[j]=t;
        if(totalchance==0){
            gameStatus=0;
            Playsound();
            count.innerHTML="  OOps You Lost ‼️‼️‼️"
        }
        if(parts.toString()==Solved.toString() ) {
           document.getElementById("Solved").innerHTML="Puzzle Solved✅";
            gameStatus=1;
            Playsound();

        } 
        function Playsound(){
            const audio=document.getElementById("gameOver");
            audio.play();
        } 
          i=-1;
         j=-1;     
    }  

}
