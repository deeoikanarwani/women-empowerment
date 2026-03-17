const form = document.getElementById("storyForm");

form.addEventListener("submit", async function(e){

e.preventDefault();

const name = document.getElementById("name").value;
const story = document.getElementById("story").value;

await fetch("/story",{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({name,story})

});

loadStories();

});

async function loadStories(){

const res = await fetch("/stories");

const data = await res.json();

let container = document.getElementById("stories");

container.innerHTML="";

data.forEach((s,index)=>{

let div=document.createElement("div");

div.innerHTML=`
<h3>${s.name}</h3>
<p>${s.story}</p>
<button onclick="likeStory(${index})">❤️ ${s.likes}</button>
<hr>
`;

container.appendChild(div);

});

}

async function likeStory(index){

await fetch("/like/"+index,{method:"POST"});

loadStories();

}

loadStories();