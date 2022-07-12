// collapsible menu
function openMenu() {
    var x = document.getElementById("menuLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }
// counter
    var data = 0;
    document.getElementById("counting").innerText = data;

    function increment() {
        data = data + 1;
        document.getElementById("counting").innerText = data;
    }
 
    function decrement() {
        data = data - 1;
        document.getElementById("counting").innerText = data;
    }
