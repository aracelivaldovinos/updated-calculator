//Business logic
function add(number1, number2){
	return number1 + number2;
}
function sub(number1, number2){
	return number1 - number2;
}
function mul(number1, number2){
	return number1 * number2;
}
function div(number1, number2){
	return number1 / number2;
}

//Below is user interface logic

$(document).ready(function() {
  $("form#add").submit(function(event){
    event.preventDefault();
    const number1 = parseInt($("#add1").val());
    const number2 = parseInt($("#add2").val());
    const result = add(number1, number2);
    $("#output").text(result);
  })
  $("form#sub").submit(function(event){
    event.preventDefault();
    const number1 = parseInt($("#sub1").val());
    const number2 = parseInt($("#sub2").val());
    const result = sub(number1, number2);
    $("#output").text(result);
  });
  $("form#mul").submit(function(event){
    event.preventDefault();
    const number1 = parseInt($("#mul1").val());
    const number2 = parseInt($("#mul2").val());
    const result = mul(number1, number2);
    $("#output").text(result);
  });
  $("form#div").submit(function(event){
    event.preventDefault();
    const number1 = parseInt($("#div1").val());
    const number2 = parseInt($("#div2").val());
    const result = div(number1, number2);
    $("#output").text(result);
  });
});