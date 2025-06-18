 const input1=document.getElementById("input1");
 const input2=document.getElementById("input2");
  const button=document.getElementById("button");
 const temdeg= document.getElementById("temdeg")
const input3=document.getElementById("input3")

 function calculate(){
 let value1= Number(input1.value)
 let value2= Number(input2.value)
 let value3= Number(input3.value)
 let result= 0;
 if(temdeg.value==="+" && temdeg.value==="+"){
    result=value1+value2+value3;

 } else if(temdeg.value==="-" && temdeg.value==="-"){
    result=value1-value2-value3;
 } else if(temdeg.value==="*" && temdeg.value==="*"){
    result=value1*value2*value3;
 }   else if(temdeg.value==="/" && temdeg.value==="/"){
    result=value1/value2/value3;
 }


 const div=document.createElement("div")
 document.body.appendChild(div);
 div.innerText=result;
}