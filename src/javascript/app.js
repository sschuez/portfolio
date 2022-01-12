// DARK MODE
function darkMode() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}


// CURRENT AGE CALCULATOR
var dob = new Date("08/17/1988");  
//calculate month difference from current date in time  
var month_diff = Date.now() - dob.getTime();  
//convert the calculated difference in date format  
var age_dt = new Date(month_diff);
//extract year from date      
var year = age_dt.getUTCFullYear();  
//now calculate the age of the user  
var age = Math.abs(year - 1970);  
//display the calculated age  
document.querySelector(".my-age").innerHTML = `🙋‍♂️ ${age} years old`; 


// ACCORDION  
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");
    
    /* Toggle between hiding and showing the active panel */
    var iconClass = this.querySelector(".fas").classList; 
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
      iconClass.replace("fa-minus", "fa-plus");
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
      iconClass.replace("fa-plus", "fa-minus");
    }
  });
}

// IMAGE PREVIEW
// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  // captionText.innerHTML = "Hi there" //this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
} 