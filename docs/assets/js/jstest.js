function myFunction() {
  $("#demo").html("Hello JavaScript!!");
}

var mult = "";

var input = 1;
while (input <= 100) {
  if (input % 3 == 0 && input % 5 == 0) {
    mult = mult + " FizzBuzz";
  } else if (input % 3 == 0) {
    mult = mult + " Fizz";
  } else if (input % 5 == 0) {
    mult = mult + " Buzz";
  } else {
    mult = mult + " " + (input);
  }
  input++;
}

function oneToOneHundred() {
  $("#numbers").html(mult);
}

