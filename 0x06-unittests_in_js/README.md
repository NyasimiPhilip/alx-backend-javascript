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