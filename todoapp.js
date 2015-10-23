addTask = function() {
var litext = document.createTextNode(document.querySelector('#taskbox').value);
var listitem = document.createElement("li");
var cbox = document.createElement("input");
cbox.type = "checkbox";
listitem.appendChild(cbox);
listitem.appendChild(litext);
listitem.className = document.querySelector('#priority').value;
cbox.onclick = completeTask;
var ulsection1 = document.querySelector('#unlist');
ulsection1.appendChild(listitem);
localSave("unlist");




}
completeTask = function(){
  if (this.checked) { 
  this.parentNode.classList.add("done");
  }
  else {
  this.parentNode.classList.remove("done");
  }
  localSave("unlist");
  
}
window.onload = function(){
  restoreList("unlist", completeTask);
}
/*window.onload = function(){
  addTask();
  completeTask();
}
*/
