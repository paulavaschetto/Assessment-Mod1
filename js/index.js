/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function openMenu() {
    var x = document.getElementById("menuLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

  /* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }
  $("button").on("click", function(ev) {
    var currentQty = $('input[name="quantity"]').val();
    var qtyDirection = $(this).data("direction");
    var newQty = 0;
    
    if (qtyDirection == "1") {
      newQty = parseInt(currentQty) + 1;
    }
    else if (qtyDirection == "-1") {
      newQty = parseInt(currentQty) - 1;
    }
  
    // make decrement disabled at 1
    if (newQty == 1) {
      $(".decrement-quantity").attr("disabled", "disabled");
    }
    
    // remove disabled attribute on subtract
    if (newQty > 1) {
      $(".decrement-quantity").removeAttr("disabled");
    }
    
    if (newQty > 0) {
      newQty = newQty.toString();
      $('input[name="quantity"]').val(newQty);
    }
    else {
      $('input[name="quantity"]').val("1");
    }
  });