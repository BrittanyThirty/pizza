//Business
function Pizza(size,toppings) {
  this.size = size;
  this.toppings = toppings;

Pizza.prototype.price = function(){
var price = 15
  if(this.size === "Personal") {
    price *= 1;
  } else if(this.size === "Medium") {
    price *= 2;
  } else {
    price *= 2.5;
  }

  if(this.toppings >= 3) {
    price *= .07;
  } else if (this.toppings === 1) {
    price *= .05
  } else {
    price *= 1;
  }
Pizza();
};


//UI
$("document").ready(function(){
  $("form#enter-order").submit(function(event){
    event.preventDefault();

    var pickSize = $(#size).val();
    var pickToppings = [];

    var yourPizza = new Pizza(pickSize, pickToppings);
    console.log(yourPizza);

      $('input[name="toppings"]:checked').each(function() {
        pickToppings.push($(this.total);
        $("#pick-toppings").append("<li>"+ this.total + "</li>");
      });

  $(".total-due").show();
  $("#pizza-size").text(newPizza.pizzasize);
  $("#pizza-toppings").text(newPizza.pizzatoppings);
});
