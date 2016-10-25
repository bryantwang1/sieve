var num = 50;
var numbers = [];
var prime = 2;

function createNumList() {
  for (i=2; i <= num; i++) {
   	numbers.push(i);
  };
  console.log(numbers);
};

function test(prime) {
	if (prime === num) {
  	return -1;
  } else {
    for (i = 0; i < num; i++) {
      if (numbers[i] % prime == 0 && numbers[i] != prime) {
        numbers.splice(i, 1);
        i--;
        console.log(numbers);
      } ;
    };
    return test(prime+1);
  };
};

createNumList();
test(prime);
console.log(numbers);
