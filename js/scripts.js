//Business
function Pizza(size,toppings) { //constructor function
  this.size = size;
  this.toppings = toppings;
};

Pizza.prototype.price = function(){ //prototype property
  var price = 15;
  if(this.size === "Personal") {
    price *= 1;
  } else if (this.size === "Medium"){
    price *= 2;
  } else {
    price *= 2.5;
  }

  if(this.toppings.length >= 3) {
    price *= 1.07;
  } else if (this.toppings.length === 2) {
    price *= 1.05;
  } else {
    price *= 1;
  }
  return price; //return price does not call the function
}               //must name and call function as shown
                // below in UI logic w var result = yourPizza.price();

//UI
$(document).ready(function() {

  $("form#order-form").submit(function() {
    event.preventDefault();

    var pickSize = $("select#pizza-size").val();
    var arrTop = [];
    var yourPizza = new Pizza(pickSize, arrTop);

    $('input[name="toppings"]:checked').each(function() {
      arrTop.push($(this).val());

    var result = yourPizza.price(); //var somevariable = then call your var
    yourPizza.price(); //calling proto price function
      $("#total-due").show();
      $("#total-due").text(result); //result from var result
    });
  });
});
