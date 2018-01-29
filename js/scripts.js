//Business
function Pizza(size) {
  this.size = size;
  this.toppings = toppings;
};

Pizza.prototype.cost = function(){
  var cost = 15;
}

  if(this.size === "Personal") {
    cost *= 1;
  } else if(this.size === "Medium") {
    cost *= 2;
  } else {
    cost *= 2.5;
  }

  if(this.toppings >= 2) {
    cost *= .07;
  } else if (this.toppings === 1) {
    cost *= .05
  } else {
    cost *= 1;
  }
  console.log(this.cost)


var pickSize;
var pickToppings;
Pizza();

//UI
$("document").ready(function(){
  $("form#enter-order").submit(function(event){
    event.preventDefault();

    var inputtedPizzaSize = $(this).find("select#pizza-size").val();
    var newPizza = new Pizza(inputtedPizzaSize, inputtedPizzaToppings);

      $("#pizza-toppings").each(function() {
        newPizza.pizzatoppings.push($(this).val());


  $(".total-due").show();
  $("#pizza-size").text(newPizza.pizzasize);
  $("#pizza-toppings").text(newPizza.pizzatoppings);
});
