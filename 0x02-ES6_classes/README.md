<h1>Tasks</h1>
<ul>
    <li>
        <h2><a href="https://github.com/NyasimiPhilip/alx-backend-javascript/blob/master/0x02-ES6_classes/0-classroom.js" target="_blank">Task 0: ClassRoom</a></h2>
        <p>Implement a class named ClassRoom with a prototype <code>export default class ClassRoom</code>. It should accept one attribute named maxStudentsSize (Number) and assign it to <code>_maxStudentsSize</code>.</p>
        <pre><code>import ClassRoom from "./0-classroom.js";
const room = new ClassRoom(10);
console.log(room._maxStudentsSize);</code></pre>
    </li>
</ul>
<ul>
    <li>
        <h2><a href="https://github.com/NyasimiPhilip/alx-backend-javascript/blob/master/0x02-ES6_classes/1-make_classrooms.js" target="_blank">Task 1: Initialize ClassRooms</a></h2>
        <p>Import the ClassRoom class from <code>0-classroom.js</code>. Implement a function named <code>initializeRooms</code> that should return an array of 3 ClassRoom objects with sizes 19, 20, and 34 (in this order).</p>
        <pre><code>import initializeRooms from './1-make_classrooms.js';
console.log(initializeRooms());</code></pre>
    </li>
</ul>
<ul>
    <li>
        <h2><a href="https://github.com/NyasimiPhilip/alx-backend-javascript/blob/master/0x02-ES6_classes/2-hbtn_course.js" target="_blank">Task 2: HolbertonCourse</a></h2>
        <p>Implement a class named HolbertonCourse with constructor attributes: name (String), length (Number), students (array of Strings). Verify the type of attributes during object creation. Each attribute must be stored in an “underscore” attribute version. Implement a getter and setter for each attribute.</p>
        <pre><code>import HolbertonCourse from "./2-hbtn_course.js";
const c1 = new HolbertonCourse("ES6", 1, ["Bob", "Jane"]);
console.log(c1.name);
c1.name = "Python 101";
console.log(c1);

try {
    c1.name = 12;
} catch(err) {
    console.log(err);

try {
    const c2 = new HolbertonCourse("ES6", "1", ["Bob", "Jane"]);
} catch(err) {
    console.log(err);</code></pre>
    </li>
</ul>
<ul>
    <li>
        <h2><a href="https://github.com/NyasimiPhilip/alx-backend-javascript/blob/master/0x02-ES6_classes/3-currency.js" target="_blank">Task 3: Currency</a></h2>
        <p>Implement a class named Currency with constructor attributes: code (String), name (String). Each attribute must be stored in an “underscore” attribute version. Implement a getter and setter for each attribute. Implement a method named <code>displayFullCurrency</code> that returns the attributes in the format name (code).</p>
        <pre><code>import Currency from "./3-currency.js";
const dollar = new Currency('$', 'Dollars');
console.log(dollar.displayFullCurrency());</code></pre>
    </li>
</ul>
<ul>
    <li>
        <h2><a href="https://github.com/NyasimiPhilip/alx-backend-javascript/blob/master/0x02-ES6_classes/4-pricing.js" target="_blank">Task 4: Pricing</a></h2>
        <p>Import the class Currency from <code>3-currency.js</code>. Implement a class named Pricing with constructor attributes: amount (Number), currency (Currency). Each attribute must be stored in an “underscore” attribute version. Implement a getter and setter for each attribute. Implement a method named <code>displayFullPrice</code> that returns the attributes in the format amount currency_name (currency_code). Implement a static method named <code>convertPrice</code> that should accept two arguments: amount (Number), conversionRate (Number). The function should return the amount multiplied by the conversion rate.</p>
        <pre><code>import Pricing from './4-pricing.js';
import Currency from './3-currency.js';
const p = new Pricing(100, new Currency("EUR", "Euro"));
console.log(p);
console.log(p.displayFullPrice());</code></pre>
    </li>
</ul>
<ul>
    <li>
        <h2><a href="https://github.com/NyasimiPhilip/alx-backend-javascript/blob/master/0x02-ES6_classes/5-building.js" target="_blank">Task 5: Building</a></h2>
        <p>Implement a class named Building with constructor attributes: sqft (Number). Each attribute must be stored in an “underscore” attribute version. Implement a getter for each attribute. Consider this class as an abstract class. And make sure that any class that extends from it should implement a method named <code>evacuationWarningMessage</code>. If a class that extends from it does not have an <code>evacuationWarningMessage</code> method, throw an error with the message Class extending Building must override evacuationWarningMessage.</p>
        <pre><code>import Building from './5-building.js';
const b = new Building(100);
console.log(b);

class TestBuilding extends Building {}

try {
    new TestBuilding(200)
} catch(err) {
    console.log(err);</code></pre>
    </li>
</ul>
