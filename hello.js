function sayHello(name) {
  console.log(`Hello ${name}`);
}

module.exports = sayHello;

//The file hello.js can be called the module in this case. Every module has an object called exports which should contain all the stuff you want to export from this module like variables or functions. In our case, we are defining a function in the hello.js file and directly exporting it.
