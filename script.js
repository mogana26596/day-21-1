var div=document.createElement("div");
div.style.textAlign="center";
div.style.margin= "50px";


var input=document.createElement("input");
input.setAttribute("type","text");
input.setAttribute("id","co");
input.setAttribute("placeholder","1,2,3,4,5,6,7,8,9,10");
input.style.height="35px";
input.style.weight="400px";
input.style.marginBottom="10px";
input.style.marginRight="15px";


var button=document.createElement("button");
button.setAttribute("type","button");
button.setAttribute("class","btn btn-primary");
button.innerHTML="Search";
button.style.height="35px";
button.style.padding="5px";
button.style.fontSize="15px";
button.style.marginBottom="20px";
button.addEventListener("click",foo);

let a1=document.createElement("div");
a1.setAttribute("id","a1");

let a2=document.createElement("div");
a2.setAttribute("id","a2");

let a3=document.createElement("div");
a3.setAttribute("id","a3");

let a4=document.createElement("div");
a4.setAttribute("id","a4");

let a5=document.createElement("div");
a5.setAttribute("id","a5");

let a6=document.createElement("div");
a6.setAttribute("id","a6");

let a7=document.createElement("div");
a7.setAttribute("id","a7");

let a8=document.createElement("div");
a8.setAttribute("id","a8");

div.append(input,button,a1,a2,a3,a4,a5,a6,a7,a8);
document.body.append(div);

async function foo() {
try {
let res=document.getElementById("co").value;
let url=`https://testimonialapi.toolcarton.com/api/${res}`;
let result=await fetch(url);
let result1= await result.json();


a1.innerHTML=`<div class="card text-center text-dark bg-info mb-3" style="width: 30rem;">
<div class="card-body">
<p class="card-subtitle mb-3 text-white">Id: ${result1.id}</p>
</div>
</div>`;

a2.innerHTML=`<div class="card text-center text-dark bg-info mb-3" style="width: 30rem;">
<div class="card-body">
<p class="card-subtitle mb-3 text-white">Name: ${result1.name}</p>
</div>
</div>`;

a3.innerHTML=`<div class="card text-center text-dark bg-info mb-3" style="width: 30rem;">
<div class="card-body">
<p class="card-subtitle mb-3 text-white">Location: ${result1.location}</p>
</div>
</div>`;

a4.innerHTML=`<div class="card text-center text-dark bg-info mb-3" style="width: 30rem;">
<div class="card-body">
<p class="card-subtitle mb-3 text-white">Designation: ${result1.designation}</p>
</div>
</div>`;

a5.innerHTML=`<div class="card text-center text-dark bg-info mb-3" style="width: 30rem;">
<div class="card-body">
<p class="card-subtitle mb-3 text-white">Avatar: ${result1.avatar}</p>
</div>
</div>`;

a6.innerHTML=`<div class="card text-center text-dark bg-info mb-3" style="width: 30rem;">
<div class="card-body">
<p class="card-subtitle mb-3 text-white">Lorem: ${result1.lorem}</p>
</div>
</div>`;

a7.innerHTML=`<div class="card text-center text-dark bg-info mb-3" style="width: 30rem;">
<div class="card-body">
<p class="card-subtitle mb-3 text-white">Rating: ${result1.rating}</p>
</div>
</div>`;

a8.innerHTML=`<div class="card text-center text-dark bg-info mb-3" style="width: 30rem;">
<div class="card-body">
<p class="card-subtitle mb-3 text-white">Audio: ${result1.audio}</p>
</div>
</div>`;
} catch (error) {
    console.log(error);
}
}
foo();