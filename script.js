let bold = document.querySelectorAll("strong")
function highlight() {
    for (let i of bold) {
    	i.style.color = "green";
    }
  
}


function return_normal() {
       for (let i of bold) {
    	i.style.color = "black";
    }
    
}
