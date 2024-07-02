const input=document.querySelector('input');
const button=document.querySelector('button');
const tasklist=document.querySelector('.list');


const inputHandler=function(){
  const newtask=input.value;
  if(newtask.length===0)
    return;
  const newElement=document.createElement("li");
  newElement.innerText=newtask;
  tasklist.appendChild(newElement);
  input.value="";

}
button.addEventListener("click",inputHandler);





