/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function openMenu() {
    var x = document.getElementById("menuLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

//   function increaseCount(a, b) {
//     var input = b.previousElementSibling;
//     var value = parseInt(input.value, 10);
//     value = isNaN(value) ? 0 : value;
//     value++;
//     input.value = value;
//   }
  
//   function decreaseCount(a, b) {
//     var input = b.nextElementSibling;
//     var value = parseInt(input.value, 10);
//     if (value > 0) {
//       value = isNaN(value) ? 0 : value;
//       value--;
//       input.value = value;
//     }
//   }

    //initialising a variable name data
    var data = 0;
  
    //printing default value of data that is 0 in h2 tag
    document.getElementById("counting").innerText = data;

    //creation of increment function
    function increment() {
        data = data + 1;
        document.getElementById("counting").innerText = data;
    }
    //creation of decrement function
    function decrement() {
        data = data - 1;
        document.getElementById("counting").innerText = data;
    }