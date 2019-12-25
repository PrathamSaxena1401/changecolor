var btns= document.getElementsByTagName("button");
console.log(btns);

var copybtns =[];
for(let i=0; i<btns.length; i++){
copybtns.push(btns[i].classList[1]);// we are duplicating an array to another help to remember when we reset


};
console.log(copybtns);
function colorchanger(buttnthg){
    if(buttnthg.value === 'red'){
        red();
    }
    else if(buttnthg.value === 'green'){
       green();
    }
    else if(buttnthg.value === 'blue'){
        blue();
    }
    else if(buttnthg.value === 'yellow'){
        yellow();
    }
    else if(buttnthg.value === 'reset'){
        reset();
    }
    else if(buttnthg.value === 'random'){
        random();
    }
 
};
function red(){
    for(let i=0;i<btns.length;i++){
        btns[i].classList.remove(btns[i].classList[1]);
        btns[i].classList.add("btn-danger");
    };
};
function green(){
    for(let i=0;i<btns.length;i++){
        btns[i].classList.remove(btns[i].classList[1]);
        btns[i].classList.add("btn-success");
    }
};
function blue(){
    for(let i=0;i<btns.length;i++){
        btns[i].classList.remove(btns[i].classList[1]);
        btns[i].classList.add("btn-primary");
    };
};
function yellow(){
    for(let i=0;i<btns.length;i++){
        btns[i].classList.remove(btns[i].classList[1]);
        btns[i].classList.add("btn-warning");
    };
};
function reset(){
    for(let i=0;i<btns.length;i++){
        btns[i].classList.remove(btns[i].classList[1]);
        btns[i].classList.add(copybtns[i]);
    };
};
function random(){
    let choices =['btn-success', 'btn-danger','btn-warning','btn-primary'];
    for(let i=0;i<btns.length;i++){
        number =Math.floor(Math.random()*4);
        btns[i].classList.remove(btns[i].classList[1]);
        btns[i].classList.add(choices[number]);
        
    };
};
 