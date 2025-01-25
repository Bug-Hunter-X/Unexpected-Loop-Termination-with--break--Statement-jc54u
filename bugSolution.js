function myFunction() {
  let i = 0;
  while (i < 10) {
    console.log(i);
    i++;
    if (i === 5) {
      // Perform any necessary action here
      console.log("Condition met!");
    }
  }
}

myFunction(); // This will print 0 to 9, demonstrating the loop continues after the condition is met.