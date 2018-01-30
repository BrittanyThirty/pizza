//Business
function Pizza(size,toppings) {
  this.size = size;
  this.toppings = toppings;
}
var price = 15;
Pizza.prototype.price = function() {
};
  if(this.size === "personal") {
    price *= 1;
  } else if (this.size === "medium") {
    price *= 2;
  } else {
    price *= 2.5;
  }
    if(this.toppings >= 3) {
      price *= 1.07;
    } else if (this.toppings === 2) {
      price *= 1.05;
    } else {
      price *= 1;
    };
 // return Pizza.price ();


// //UI
$(document).ready(function(){

$("form#submit").click(function(){
  event.preventDefault();
})
})
var yourPizza = new Pizza(pickSize, pickToppings);
var pickSize = $("pizza-size").val();
var pickToppings = [];

//
//     $('input[name="toppings"]:checked').each(function() {
//       pickSize.push($(this.total));
//       // $("#pick-size").append("<li>"+ this.total + "</li>"){
//  $(".total-due").text(yourPizza)
//  $(".pizza-size").text(new Pizza),
// });
    // });
