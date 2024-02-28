<h1>Unittests in JS</h1>
  <h2>Learning Objectives</h2>
  <ul>
    <li>How to use Mocha to write a test suite.</li>
    <li>How to use different assertion libraries (Node or Chai).</li>
    <li>How to present long test suites.</li>
    <li>When and how to use spies.</li>
    <li>When and how to use stubs.</li>
    <li>What are hooks and when to use them.</li>
    <li>Unit testing with Async functions.</li>
    <li>How to write integration tests with a small node server.</li>
  </ul>
  <h2>Tasks To Complete</h2>
  <ol>
    <li>
      <h3>Basic test with Mocha and Node assertion library</h3>
      <p>
        Install Mocha using npm:<br>
        Set up a scripts in your package.json to quickly run Mocha using npm test.<br>
        You have to use assert.<br>
        Create a new file named 0-calcul.js:<br>
        Create a function named calculateNumber. It should accepts two arguments (number) a and b.<br>
        The function should round a and b and return the sum of it.<br>
        Test cases:<br>
        Create a file 0-calcul.test.js that contains test cases of this function<br>
        You can assume a and b are always number.<br>
        Tests should be around the "rounded" part.<br>
      </p>
      <h4>Tips:</h4>
      <p>
        For the sake of the example, this test suite is slightly extreme and probably not needed.<br>
        However, remember that your tests should not only verify what a function is supposed to do, but also the edge cases.<br>
      </p>
      <h4>Requirements:</h4>
      <ul>
        <li>You have to use assert.</li>
        <li>You should be able to run the test suite using npm test 0-calcul.test.js.</li>
        <li>Every test should pass without any warning.</li>
      </ul>
      <h4>Expected output:</h4>
      <pre>
&gt; const calculateNumber = require("./0-calcul.js");
&gt; calculateNumber(1, 3)
4
&gt; calculateNumber(1, 3.7)
5
&gt; calculateNumber(1.2, 3.7)
5
&gt; calculateNumber(1.5, 3.7)
6
      </pre>
      <h4>Run test:</h4>
      <pre>
bob@dylan:~$ npm test 0-calcul.test.js
> task_0@1.0.0 test /root
> ./node_modules/mocha/bin/mocha "0-calcul.test.js"

calculateNumber
✓ ...
✓ ...
✓ ...
...

130 passing (35ms)
bob@dylan:~$
</pre>
</li>
  <h2>1. Combining Descriptions</h2>
  <p>Create a new file named 1-calcul.js:<br>
  Upgrade the function you created in the previous task (0-calcul.js).<br>
  Add a new argument named type at first argument of the function. type can be SUM, SUBTRACT, or DIVIDE (string).<br>
  When type is SUM, round the two numbers, and add a to b.<br>
  When type is SUBTRACT, round the two numbers, and subtract b from a.<br>
  When type is DIVIDE, round the two numbers, and divide a with b - if the rounded value of b is equal to 0, return the string Error.<br>
  Test cases:<br>
  Create a file 1-calcul.test.js that contains test cases of this function.<br>
  You can assume a and b are always number.<br>
  Usage of describe will help you to organize your test cases.</p>
  <h2>2. Basic Test Using Chai Assertion Library</h2>
  <p>While using Node assert library is completely valid, a lot of developers prefer to have a behavior-driven development style. This type being easier to read and therefore to maintain.<br>
  Let's install Chai with npm:<br>
  Copy the file 1-calcul.js in a new file 2-calcul_chai.js (same content, same behavior).<br>
  Copy the file 1-calcul.test.js in a new file 2-calcul_chai.test.js.<br>
  Rewrite the test suite, using expect from Chai.</p>
  <h2>3. Spies</h2>
  <p>Spies are a useful wrapper that will execute the wrapped function, and log useful information (e.g. was it called, with what arguments). Sinon is a library allowing you to create spies.<br>
  Let's install Sinon with npm:<br>
  Create a new file named utils.js.<br>
  Create a new module named Utils.<br>
  Create a property named calculateNumber and paste your previous code in the function.<br>
  Export the Utils module.<br>
  Create a new file named 3-payment.js:<br>
  Create a new function named sendPaymentRequestToApi. The function takes two arguments totalAmount, and totalShipping. The function calls the Utils.calculateNumber function with type SUM, totalAmount as a, totalShipping as b, and displays in the console the message The total is: &lt;result of the sum&gt;.<br>
  Create a new file named 3-payment.test.js and add a new suite named sendPaymentRequestToApi:<br>
  By using sinon.spy, make sure the math used for sendPaymentRequestToApi(100, 20) is the same as Utils.calculateNumber('SUM', 100, 20) (validate the usage of the Utils function).</p>
  <h2>4. Stubs</h2>
  <p>Stubs are similar to spies. Except that you can provide a different implementation of the function you are wrapping. Sinon can be used as well for stubs.<br>
  Create a new file 4-payment.js, and copy the code from 3-payment.js (same content, same behavior).<br>
  Create a new file 4-payment.test.js, and copy the code from 3-payment.test.js:<br>
  Imagine that calling the function Utils.calculateNumber is actually calling an API or a very expensive method. You don't necessarily want to do that on every test run.<br>
  Stub the function Utils.calculateNumber to always return the same number 10.<br>
  Verify that the stub is being called with type = SUM, a = 100, and b = 20.<br>
  Add a spy to verify that console.log is logging the correct message The total is: 10.</p>
  <h2>5. Hooks</h2>
  <p>Hooks are useful functions that can be called before execute one or all tests in a suite.<br>
  Copy the code from 4-payment.js into a new file 5-payment.js: (same content/same behavior).<br>
  Create a new file 5-payment.test.js:<br>
  Inside the same describe, create 2 tests:<br>
  The first test will call sendPaymentRequestToAPI with 100, and 20:<br>
  Verify that the console is logging the string The total is: 120.<br>
  Verify that the console is only called once.<br>
  The second test will call sendPaymentRequestToAPI with 10, and 10:<br>
  Verify that the console is logging the string The total is: 20.<br>
  Verify that the console is only called once.</p>
  <h2>6. Async Tests with done</h2>
  <p>Look into how to support async testing, for example when waiting for the answer of an API or from a Promise.<br>
  Create a new file 6-payment_token.js: Create a new function named getPaymentTokenFromAPI. The function will take an argument called success (boolean).<br>
  When success is true, it should return a resolved promise with the object {data: 'Successful response from the API'}.<br>
  Otherwise, the function is doing nothing.<br>
  Create a new file 6-payment_token.test.js and write a test suite named getPaymentTokenFromAPI:<br>
  How to test the result of getPaymentTokenFromAPI(true)?</p>
  <h2>7. Skip</h2>
  <p>When you have a long list of tests, and you can't figure out why a test is breaking, avoid commenting out a test, or removing it. Skip it instead, and file a ticket to come back to it as soon as possible.<br>
  You will be using this file, conveniently named 7-skip.test.js:</p>
  <pre>
  const { expect } = require('chai');
describe('Testing numbers', () => {
it('1 is equal to 1', () => {
expect(1 === 1).to.be.true;
});
it('2 is equal to 2', () => {
  expect(2 === 2).to.be.true;
});

it('1 is equal to 3', () => {
  expect(1 === 3).to.be.true;
});

it('3 is equal to 3', () => {
  expect(3 === 3).to.be.true;
});

it('4 is equal to 4', () => {
  expect(4 === 4).to.be.true;
});

it('5 is equal to 5', () => {
  expect(5 === 5).to.be.true;
});

it('6 is equal to 6', () => {
  expect(6 === 6).to.be.true;
});

it('7 is equal to 7', () => {
  expect(7 === 7).to.be.true;
});
});
</pre>

  <p>Using the file 7-skip.test.js:<br>
  Make the test suite pass without fixing or removing the failing test.<br>
  it description must stay the same.</p>
