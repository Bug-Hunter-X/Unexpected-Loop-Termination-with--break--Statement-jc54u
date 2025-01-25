function myFunction() {
  let i = 0;
  while (i < 10) {
    console.log(i);
    i++;
    if (i === 5) {
      break; // Exit the loop when i is 5
    }
  }
}

myFunction(); // This will print 0, 1, 2, 3, 4

//The bug is that when the `break` statement is encountered in the if condition, the loop immediately terminates, and the code after it is skipped.If the programmer intends to continue executing the code after the `break`, they must place it outside the loop.