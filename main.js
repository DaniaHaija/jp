const inputBox =document.querySelector(".text");
const btn=document.querySelector("button");
const list=  document.querySelector(".list");
    btn.onclick=addtext;
    function addtext(){
    if(inputBox.value=="")
    alert("must write sth");
else{ list .innerHTML+= `<li> <input type="checkbox" class="checkbox"/> <span>${inputBox.value}</span></li>`;
const checkbox=document.querySelectorAll(".checkbox ");
     
for(let i=0;i<=checkbox.length;i++)
checkbox[i].onclick=function(e){
     
   e.target.nextElementSibling.classList.toggle('remov-item');
}}
    
    
    

};
