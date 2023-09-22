// var button= document.querySelector("button");
// var input = document.querySelector("input");
// var ul =document.querySelector("ul");

// button.addEventListener("click",function(){
//     var li =document.createElement("li");
//     li.appendChild(document.createTextNode("testing"));
//     ul.appendChild(li);
// })


var button = document.querySelector("button");
var ul = document.querySelector("ul");
var input = document.querySelector("input");

function inputLength(){
    return input.value.length
}

function createListElement(){
    var li = document.createElement("li");
    var testing = document.createTextNode(input.value);
    li.appendChild(testing);
    ul.appendChild(li);
    input.value =""; 
}

function addListAfterClick(){
    if( inputLength() > 0){
        createListElement(); 
        }
}

function addListAfterKeypress(){
    if( input.value.length > 0 && event.key==="Enter"){
        createListElement();
       }
}


button.addEventListener("click", addListAfterClick );

input.addEventListener("keypress",addListAfterKeypress);