let bold = document.querySelectorAll("strong")
function highlight() {
    for (let i of bold) {
    	i.style.color = "green";
    }
  
}


function return_normal() {
    //Write your code here
   bold.style.color = "black";
    
}
