let changetext=document.getElementById("changetext");

changetext.innerText="Welcome to JavaScript DOM ";

let changepara=document.getElementById("changepara");
let btn1=document.getElementById("btn1");

function textpara(){
    changepara.innerText="Paragraph text changed! ";
    changepara.style.color="red";
};

let changebg1=document.getElementById("changebg");
let body=document.body;

function changebg(){
body.style.background="black";
body.style.color="white";

};

let showmsg=document.getElementById("showmsg");
function ShowAlert(){
    alert("DOM is working! ");
};

let updatingpara=document.getElementById("updatingpara");
let updatetext=document.getElementById("updatetext");
let inputpara=document.getElementById("inputpara");

updatetext.addEventListener("click", function(){

    updatingpara.innerText = inputpara.value;
    inputpara.value="";
});
