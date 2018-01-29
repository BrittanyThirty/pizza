
 function Pizza(size){}
   this.size = size;
   this.toppings = [];
 };

Pizza.prototype.cost = function() {
  var cost = 15;
}
  if(this.size === "Personal") {
    cost *= 1;
  } else if(this.size === "Medium") {
    cost *= 2;
  } else {
    cost *= 2.5;
  }

if(this.toppings.length === 0) {
  cost *= 1;
} else {
  cost += this.toppings.length;
}

return cost;

};




$(function(){
$("form#order-form").submit(function(event){
  event.preventDefault();


  var inputtedPizzaSize = $("select#pizza-size").val();
  var newPizza = new Pizza (inputtedPizzaSize);


}
})
