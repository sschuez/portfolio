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
var acc = document.querySelectorAll("#accordion1");
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

// ACCORDION ALL
// var gridItems = document.getElementsByClassName("grid-item");
var accs = document.querySelectorAll("#accordionAll");

// Event Listener for all AccordionAlls
accs.forEach((acc) => {
  // Hide Plus if no accordions below
  if (acc.parentElement.parentElement.querySelectorAll("#accordion1").length === 0) { acc.classList.add("hidden") }

  acc.addEventListener("click", function() {
    
    // All accordion1s
    var gridAccordions = this.parentElement.parentElement.querySelectorAll("#accordion1");
    
    // Toggle Icon
    acc.classList.toggle("active");
    var iconClass = this.querySelector(".fas").classList;
    
    if (iconClass.contains("fa-plus")) {
      
      // Swith icon to minus
      iconClass.replace("fa-plus", "fa-minus")
      
      gridAccordions.forEach((gridAccordion) => {
        var iconClass = gridAccordion.querySelector(".fas").classList; 
        var panel = gridAccordion.nextElementSibling;
        
        // Add Active class to all accordions - expand all panes
        if (gridAccordion.classList.contains("active")) {
           // That's great, do nothing 
        } else {
          gridAccordion.classList.add("active")
          panel.style.maxHeight = panel.scrollHeight + "px"
          iconClass.replace("fa-plus", "fa-minus")
        }
      })
      
    } else {
      
      // Switch icon to plus
      iconClass.replace("fa-minus", "fa-plus")
      
      gridAccordions.forEach((gridAccordion) => {
        var iconClass = gridAccordion.querySelector(".fas").classList; 
        var panel = gridAccordion.nextElementSibling;
        
        // Collapse all panels
        if (gridAccordion.classList.contains("active")) {
          gridAccordion.classList.remove("active")
          panel.style.maxHeight = null
          iconClass.replace("fa-minus", "fa-plus")
        }

      })
    }

  })

})

// IMAGE PREVIEW
// Get the image previews
var imgs = document.querySelectorAll("#modalTrigger");

// For each image preview, insert Modal and Carroussell
imgs.forEach((img) => {
  
  img.onclick = function(){
    var imgScope = this.parentElement;
    
    // Get the modal
    var modal = imgScope.querySelector("#myModal");
    modal.style.display = "block";
  
    // Get the <span> element that closes the modal
    var span = imgScope.getElementsByClassName("close")[0];
    
    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
      modal.style.display = "none";
    } 
    
    // CARROUSSELL
    var slideIndex = 1;
    var scope = imgScope;
    showSlides(slideIndex, scope);
    
    // Next control
    next = imgScope.querySelector(".next");
    next.onclick = function() {
      showSlides(slideIndex += 1, imgScope);
    }

    // Prev control
    prev = imgScope.querySelector(".prev");
    prev.onclick = function() {
      showSlides(slideIndex -= 1, imgScope);
    }
    
    // Function to define which img to show
    function showSlides(n, scope) {
      var i;
      var slides = scope.getElementsByClassName("mySlides");
      // var dots = scope.getElementsByClassName("dot");
      if (n > slides.length) {slideIndex = 1}
      if (n < 1) {slideIndex = slides.length}
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
        slides[slideIndex-1].style.display = "block";
      };
 
    };
 
  }); 

