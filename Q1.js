function customPrint(n, message) {
  if (n == 0) {
    return 0
  } else {
    console.log(message)
    return customPrint(n - 1, message) // this is known as the recursive way to ittarate anything
  }
}

customPrint(5, 'Hello, world!');

