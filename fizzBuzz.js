function fizzBuzz(countTo) {
  // your code here
  var array = [];
  
  for(var i = 1; i <= countTo; i++)
  {
    if(i % 3 == 0 && i % 5 == 0)
      array.push("fizzbuzz");
    else if(i % 5 == 0)
      array.push("buzz");
    else if(i % 3 == 0)
      array.push("fizz");
    else
      array.push(i);
  }
  
  return array;
}




/* From here down, you are not expected to 
   understand.... for now :)  
   
   
   Nothing to see here!
   
*/



// tests
(function testFizzBuzz() {
  // we'll use the variables in our test cases
  var countTo = 16;
  var expected = [
    1, 2, 'fizz', 4, 'buzz', 'fizz', 7, 8, 'fizz',
    'buzz', 11, 'fizz', 13, 14, 'fizzbuzz', 16
  ];

  var actual = fizzBuzz(countTo) || [];
  
  if (
    expected.length === actual.length &&
    expected.every(function(item, index) {
      return actual[index] === item;}) ) {
    
      console.log('SUCCESS: fizzBuzz is working');
  }
  else {
    console.log('FAILURE: fizzBuzz is not working');
  }  
})();