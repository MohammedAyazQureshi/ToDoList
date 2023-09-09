const inputBox=document.getElementById("input-box")

const listContainer=document.getElementById("list-container")

// whwnever we write anything it should appear in input field and if it is not present then it should give alert

function AddTask(){
    if(inputBox.value===''){
      alert("you must write something");
    }
    else{
      let li=document.createElement("li");
      li.innerHTML=inputBox.value;
      listContainer.appendChild(li);

      // creating close button 

       let i=document.createElement("i");
       i.innerHTML="\u00d7"
      li.appendChild(i);
    }
    inputBox.value="";
    saveData()
}

// on clicking on list it show that we selected the task and clicking i it should get remove from todolist 

listContainer.addEventListener("click",function(e){
  if(e.target.tagName==="LI"){
         e.target.classList.toggle("checked");
         saveData()
  }else if(e.target.tagName==="I"){
         e.target.parentElement.remove();
         saveData()
  }
},false);


// to store aur data in local server 

function saveData(){
  localStorage.setItem("data",listContainer.innerHTML);
}

function showTask(){
  listContainer.innerHTML=localStorage.getItem("data");
}
showTask();


