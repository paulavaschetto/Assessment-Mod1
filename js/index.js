/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function openMenu() {
    var x = document.getElementById("menuLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }


    //initialising a variable name data
    var data = 0;
   
  
   //printing default value of data that is 0 in h2 tag
    document.getElementById("counting").innerText = data;


   //*creation of increment function*//
    function increment() {
        data = data + 1;
        document.getElementById("counting").innerText = data;
    }
   //creation of decrement function//
    function decrement() {
        data = data - 1;
        document.getElementById("counting").innerText = data;
    }

    var dataCheckout = 1;
    document.getElementById("counting-check").innerText = dataCheckout;

    function incrementCheck() {
        dataCheckout = dataCheckout + 1;
        document.getElementById("counting-check").innerText = dataCheckout;
    }
    //creation of decrement function//
    function decrementCheck() {
      dataCheckout = dataCheckout - 1;
        document.getElementById("counting-check").innerText = dataCheckout;
    }

    // remove item from cart

    var removeCartItem = document.getElementsByClassName("delete-btn");
    console.log(removeCartItem);
    for (var i = 0; i < removeCartItem.length; i++) {
      var button = removeCartItem[i]
      button.addEventListener('click', function(event){
        var buttonClicked = event.target
        buttonClicked.parentElement.parentElement.remove()
      })
    }