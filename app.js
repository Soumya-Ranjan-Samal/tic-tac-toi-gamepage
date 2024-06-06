let block = document.querySelectorAll("button");
let reset = document.querySelector("#reset");

reset.addEventListener("click",()=>{
    start.style.backgroundColor="red";
    start.style.color="black";
    start.style.borderColor="black";
    start.innerHTML="start";
    banner.style.opacity=0;
    banner.style.top="-200px";
    start.style.height="2.5rem"
    start.style.width="5rem";
    for(i=0;i<9;i++){
        block[i].innerText="";
    }
});

block[0].addEventListener("mouseover",()=>{
    block[0].style.backgroundColor="lightgray";
});
block[0].addEventListener("mouseout",()=>{
    block[0].style.backgroundColor="white";
});
block[1].addEventListener("mouseover",()=>{
    block[1].style.backgroundColor="lightgray";
});
block[1].addEventListener("mouseout",()=>{
    block[1].style.backgroundColor="white";
});

block[2].addEventListener("mouseover",()=>{
    block[2].style.backgroundColor="lightgray";
});
block[2].addEventListener("mouseout",()=>{
    block[2].style.backgroundColor="white";
});

block[3].addEventListener("mouseover",()=>{
    block[3].style.backgroundColor="lightgray";
});
block[3].addEventListener("mouseout",()=>{
    block[3].style.backgroundColor="white";
});
block[4].addEventListener("mouseover",()=>{
    block[4].style.backgroundColor="lightgray";
});

block[4].addEventListener("mouseout",()=>{
    block[4].style.backgroundColor="white";
});

block[5].addEventListener("mouseover",()=>{
    block[5].style.backgroundColor="lightgray";
});
block[5].addEventListener("mouseout",()=>{
    block[5].style.backgroundColor="white";
});

block[6].addEventListener("mouseover",()=>{
    block[6].style.backgroundColor="lightgray";
});
block[6].addEventListener("mouseout",()=>{
    block[6].style.backgroundColor="white";
});

block[7].addEventListener("mouseover",()=>{
    block[7].style.backgroundColor="lightgray";
});
block[7].addEventListener("mouseout",()=>{
    block[7].style.backgroundColor="white";
});
block[8].addEventListener("mouseover",()=>{
    block[8].style.backgroundColor="lightgray";
});
block[8].addEventListener("mouseout",()=>{
    block[8].style.backgroundColor="white";
});

let chance=0;
let banner=document.querySelector(".gameOver");
let start=document.querySelector("#start");

start.addEventListener("click",()=>{
if(start.innerText=="Play Again!"){
    start.style.backgroundColor="red";
    start.style.color="black";
    start.style.borderColor="black";
    start.innerHTML="start";
    banner.style.opacity=0;
    banner.style.top="-200px";
    start.style.height="2.5rem"
    start.style.width="5rem";
}
else{
    start.style.backgroundColor="black";
    start.style.color="red";
    start.style.borderColor="red";
    start.innerHTML="started";
}
});


block[0].addEventListener("click",()=>{
    
     if(chance==0&&start.innerHTML=="started"&&block[0].innerText==""){
        block[0].innerText="O";
        chance=1;
        check(0);
    }
    if(chance==1&&start.innerHTML=="started"&&block[0].innerText==""){
        block[0].innerText="X";
        chance=0;
        check(0);
    }
});

block[1].addEventListener("click",()=>{
    
     if(chance==0&&start.innerHTML=="started"&&block[1].innerText==""){
        block[1].innerText="O";
        chance=1;
        check(1);
    }
    if(chance==1&&start.innerHTML=="started"&&block[1].innerText==""){
        block[1].innerText="X";
        chance=0;
        check(1);
    }
});

block[2].addEventListener("click",()=>{
    
     if(chance==0&&start.innerHTML=="started"&&block[2].innerText==""){
        block[2].innerText="O";
        chance=1;
        check(2);
    }
    if(chance==1&&start.innerHTML=="started"&&block[2].innerText==""){
        block[2].innerText="X";
        chance=0;
        check(2);
    }
});

block[3].addEventListener("click",()=>{
    
     if(chance==0&&start.innerHTML=="started"&&block[3].innerText==""){
        block[3].innerText="O";
        chance=1;
        check(3);
    }
    if(chance==1&&start.innerHTML=="started"&&block[3].innerText==""){
        block[3].innerText="X";
        chance=0;
        check(3);
    }
});

block[4].addEventListener("click",()=>{
    
     if(chance==0&&start.innerHTML=="started"&&block[4].innerText==""){
        block[4].innerText="O";
        chance=1;
        check(4);
    }
    if(chance==1&&start.innerHTML=="started"&&block[4].innerText==""){
        block[4].innerText="X";
        chance=0;
        check(4);
    }
});

block[5].addEventListener("click",()=>{
    
     if(chance==0&&start.innerHTML=="started"&&block[5].innerText==""){
        block[5].innerText="O";
        chance=1;
        check(5);
    }
    if(chance==1&&start.innerHTML=="started"&&block[5].innerText==""){
        block[5].innerText="X";
        chance=0;
        check(5);
    }
});

block[6].addEventListener("click",()=>{
    
     if(chance==0&&start.innerHTML=="started"&&block[6].innerText==""){
        block[6].innerText="O";
        chance=1;
        check(6);
    }
    if(chance==1&&start.innerHTML=="started"&&block[6].innerText==""){
        block[6].innerText="X";
        chance=0;
        check(6);
    }
});
block[7].addEventListener("click",()=>{
    
     if(chance==0&&start.innerHTML=="started"&&block[7].innerText==""){
        block[7].innerText="O";
        chance=1;
        check(7);
    }
    if(chance==1&&start.innerHTML=="started"&&block[7].innerText==""){
        block[7].innerText="X";
        chance=0;
        check(7);
    }
});
block[8].addEventListener("click",()=>{
    
     if(chance==0&&start.innerHTML=="started"&&block[8].innerText==""){
        block[8].innerText="O";
        chance=1;
        check(8);
    }
    if(chance==1&&start.innerHTML=="started"&&block[8].innerText==""){
        block[8].innerText="X";
        chance=0;
        check(8);
    }
});

function checkCount(a,b){
    if(a==3||b==3)
        return true;
    return false;
}


function win(){
    start.style.backgroundColor="red";
    start.style.color="black";
    start.style.borderColor="black";
    start.innerHTML="Play Again!";
    start.style.height="50px";
    start.style.width="100px";
    banner.style.top="210px";
    banner.style.opacity=1;
    
    for(let i=0;i<9;i++){
        block[i].innerText="";
    }
}

function check(n){  
    let count1=0,count2=0;
    switch(n){
        case 0:
            for(let j=0;j<3;j++){
                if(block[j].innerText=="O"){
                    count1++;
                }
                else if(block[j].innerText=="X"){
                    count2++;
                }
            }
            result=checkCount(count1,count2);
            if(result==true){win();count1=0;count2=0;break;}
            count1=0;
            count2=0;
            for(let j=0;j<7;j=j+3){
                if( block[j].innerText=="O")
                    count1++;
                else if(block[j].innerText=="X")
                    count2++;
            }
            result=checkCount(count1,count2);
            if(result==true){win();count1=0;count2=0;break;}
            count1=0;
            count2=0;
            for(let j=0;j<9;j=j+4){
                if( block[j].innerText=="O")
                    count1++;
                else if(block[j].innerText=="X")
                    count2++;
            }
            result=checkCount(count1,count2);
            if(result==true){win();count1=0;count2=0;break;}
        break;


        case 1:
            
            count1=0;
            count2=0;
            for(let j=0;j<3;j++){
                if(block[j].innerText=="O"){
                    count1++;
                }
                else if(block[j].innerText=="X"){
                    count2++;
                }
            }
            result=checkCount(count1,count2);
            if(result==true){win();count1=0;count2=0;break;}
            count1=0;
            count2=0;
            for(let j=1;j<8;j=j+3){
                if( block[j].innerText=="O")
                    count1++;
                else if(block[j].innerText=="X")
                    count2++;
            }
            result=checkCount(count1,count2);
            if(result==true){win();count1=0;count2=0;break;}
        
        break;


        case 2:
            count1=0;
            count2=0;
            for(let j=0;j<3;j++){
                if(block[j].innerText=="O"){
                    count1++;
                }
                else if(block[j].innerText=="X"){
                    count2++;
                }
            }
            result=checkCount(count1,count2);
            if(result==true){win();count1=0;count2=0;break;}
            count1=0;
            count2=0;
            for(let j=2;j<9;j=j+3){
                if( block[j].innerText=="O")
                    count1++;
                else if(block[j].innerText=="X")
                    count2++;
            }
            result=checkCount(count1,count2);
            if(result==true){win();count1=0;count2=0;break;}
            count1=0;
            count2=0;
            for(let j=2;j<7;j=j+2){
                if( block[j].innerText=="O")
                    count1++;
                else if(block[j].innerText=="X")
                    count2++;
            }
            result=checkCount(count1,count2);
            if(result==true){win();count1=0;count2=0;break;}
        break;


        case 3:
            count1=0;
            count2=0;
            for(let j=0;j<7;j=j+3){
                if(block[j].innerText=="O"){
                    count1++;
                }
                else if(block[j].innerText=="X"){
                    count2++;
                }
            }
            result=checkCount(count1,count2);
            if(result==true){win();count1=0;count2=0;break;}
            count1=0;
            count2=0;
            for(let j=3;j<6;j=j+1){
                if( block[j].innerText=="O")
                    count1++;
                else if(block[j].innerText=="X")
                    count2++;
            }
            result=checkCount(count1,count2);
            if(result==true){win();count1=0;count2=0;break;}
            break;

        case 4:
            count1=0;
            count2=0;
            for(let j=3;j<6;j++){
                if(block[j].innerText=="O"){
                    count1++;
                }
                else if(block[j].innerText=="X"){
                    count2++;
                }
            }

            result=checkCount(count1,count2);
            if(result==true){win();count1=0;count2=0;break;}
            count1=0;
            count2=0;
            for(let j=1;j<8;j=j+3){
                if( block[j].innerText=="O")
                    count1++;
                else if(block[j].innerText=="X")
                    count2++;
            }
            result=checkCount(count1,count2);
            if(result==true){win();count1=0;count2=0;break;}
            count1=0;
            count2=0;
            for(let j=0;j<9;j=j+4){
                if( block[j].innerText=="O")
                    count1++;
                else if(block[j].innerText=="X")
                    count2++;
            }
            result=checkCount(count1,count2);
            if(result==true){win();count1=0;count2=0;break;}
            count1=0;
            count2=0;
            for(let j=2;j<7;j=j+2){
                if( block[j].innerText=="O")
                    count1++;
                else if(block[j].innerText=="X")
                    count2++;
            }
            result=checkCount(count1,count2);
            if(result==true){win();count1=0;count2=0;break;}
            break;


        case 5:
            count1=0;
            count2=0;
            for(let j=3;j<6;j++){
                if(block[j].innerText=="O"){
                    count1++;
                }
                else if(block[j].innerText=="X"){
                    count2++;
                }
            }
            result=checkCount(count1,count2);
            if(result==true){win();count1=0;count2=0;break;}
            count1=0;
            count2=0;
            for(let j=2;j<9;j=j+3){
                if( block[j].innerText=="O")
                    count1++;
                else if(block[j].innerText=="X")
                    count2++;
            }
            result=checkCount(count1,count2);
            if(result==true){win();count1=0;count2=0;break;}
            break;


        case 6:
            count1=0;
            count2=0;
            for(let j=0;j<7;j=j+3){
                if(block[j].innerText=="O"){
                    count1++;
                }
                else if(block[j].innerText=="X"){
                    count2++;
                }
            }
            result=checkCount(count1,count2);
            if(result==true){win();count1=0;count2=0;break;}
            count1=0;
            count2=0;
            for(let j=2;j<7;j=j+2){
                if( block[j].innerText=="O")
                    count1++;
                else if(block[j].innerText=="X")
                    count2++;
            }
            result=checkCount(count1,count2);
            if(result==true){win();count1=0;count2=0;break;}
            count1=0;
            count2=0;
            for(let j=6;j<9;j++){
                if( block[j].innerText=="O")
                    count1++;
                else if(block[j].innerText=="X")
                    count2++;
            }
            result=checkCount(count1,count2);
            if(result==true){win();count1=0;count2=0;break;}
            break;

            case 7:
                count1=0;
                count2=0;
                for(let j=1;j<8;j=j+3){
                    if( block[j].innerText=="O")
                        count1++;
                    else if(block[j].innerText=="X")
                        count2++;
                }
                result=checkCount(count1,count2);
                if(result==true){win();count1=0;count2=0;break;}
                count1=0;
                count2=0;
                for(let j=6;j<9;j++){
                    if( block[j].innerText=="O")
                        count1++;
                    else if(block[j].innerText=="X")
                        count2++;
                }
                result=checkCount(count1,count2);
                if(result==true){win();count1=0;count2=0;break;}
                break;

                case 8:
                    count1=0;
                    count2=0;
                    for(let j=2;j<9;j=j+3){
                        if(block[j].innerText=="O"){
                            count1++;
                        }
                        else if(block[j].innerText=="X"){
                            count2++;
                        }
                    }
                    result=checkCount(count1,count2);
                    if(result==true){win();count1=0;count2=0;break;}
                    count1=0;
                    count2=0;
                    for(let j=0;j<9;j=j+4){
                    if( block[j].innerText=="O")
                        count1++;
                    else if(block[j].innerText=="X")
                        count2++;
                    }
                    result=checkCount(count1,count2);
                    if(result==true){win();count1=0;count2=0;break;}
                    count1=0;
                    count2=0;
                    for(let j=6;j<9;j++){
                        if( block[j].innerText=="O")
                            count1++;
                        else if(block[j].innerText=="X")
                            count2++;
                    }
                    result=checkCount(count1,count2);
                    if(result==true){win();count1=0;count2=0;break;}
                    break;
    }
}