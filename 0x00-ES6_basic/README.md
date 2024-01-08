<h1>ES6 Basics Tasks</h1>
    <ul>      
        <li>
            <h2><a href="https://github.com/NyasimiPhilip/alx-backend-javascript/blob/master/0x00-ES6_basic/0-constants.js" target="_blank">Task 0: Const or let?</a></h2>
            <p>Modify functions to instantiate variables using const and let.</p>
            <pre><code>import { taskFirst, taskNext } from './0-constants.js';
console.log(`${taskFirst()} ${taskNext()}`);</code></pre>
        </li>       
        <li>
            <h2><a href="https://github.com/NyasimiPhilip/alx-backend-javascript/blob/master/0x00-ES6_basic/1-block-scoped.js" target="_blank">Task 1: Block Scope</a></h2>
            <p>Modify variables inside the function to avoid overwriting inside the conditional block.</p>
            <pre><code>import taskBlock from './1-block-scoped.js';
console.log(taskBlock(true));
console.log(taskBlock(false));</code></pre>
        </li>      
        <li>
            <h2><a href="https://github.com/NyasimiPhilip/alx-backend-javascript/blob/master/0x00-ES6_basic/2-arrow.js" target="_blank">Task 2: Arrow functions</a></h2>
            <p>Rewrite a standard function to use ES6’s arrow syntax.</p>
            <pre><code>import getNeighborhoodsList from './2-arrow.js';
const neighborhoodsList = new getNeighborhoodsList();
const res = neighborhoodsList.addNeighborhood('Noe Valley');
console.log(res);</code></pre>
        </li>   
        <li>
            <h2><a href="https://github.com/NyasimiPhilip/alx-backend-javascript/blob/master/0x00-ES6_basic/3-default-parameter.js" target="_blank">Task 3: Parameter defaults</a></h2>
            <p>Condense the internals of the function to one line using default parameter values.</p>
            <pre><code>import getSumOfHoods from './3-default-parameter.js';
console.log(getSumOfHoods(34));
console.log(getSumOfHoods(34, 3));
console.log(getSumOfHoods(34, 3, 4));</code></pre>
        </li>   
        <li>
            <h2><a href="https://github.com/NyasimiPhilip/alx-backend-javascript/blob/master/0x00-ES6_basic/4-rest-parameter.js" target="_blank">Task 4: Rest parameter syntax for functions</a></h2>
            <p>Modify the function to return the number of arguments passed to it using the rest parameter syntax.</p>
            <pre><code>import returnHowManyArguments from './4-rest-parameter.js';
console.log(returnHowManyArguments("one"));
console.log(returnHowManyArguments("one", "two", 3, "4th"));</code></pre>
        </li>        
        <li>
            <h2><a href="https://github.com/NyasimiPhilip/alx-backend-javascript/blob/master/0x00-ES6_basic/5-spread-operator.js" target="_blank">Task 5: The wonders of spread syntax</a></h2>
            <p>Using spread syntax, concatenate 2 arrays and each character of a string by modifying the function below.</p>
            <pre><code>import concatArrays from './5-spread-operator.js';
console.log(concatArrays(['a', 'b'], ['c', 'd'], 'Hello'));</code></pre>
        </li>      
        <li>
            <h2><a href="https://github.com/NyasimiPhilip/alx-backend-javascript/blob/master/0x00-ES6_basic/6-string-interpolation.js" target="_blank">Task 6: Take advantage of template literals</a></h2>
            <p>Rewrite the return statement to use a template literal.</p>
            <pre><code>import getSanFranciscoDescription from './6-string-interpolation.js';
console.log(getSanFranciscoDescription());</code></pre>
        </li>     
        <li>
            <h2><a href="https://github.com/NyasimiPhilip/alx-backend-javascript/blob/master/0x00-ES6_basic/7-getBudgetObject.js" target="_blank">Task 7: Object property value shorthand syntax</a></h2>
            <p>Modify the function to use the keyname instead of repeating key names.</p>
            <pre><code>import getBudgetObject from './7-getBudgetObject.js';
console.log(getBudgetObject(400, 700, 900));</code></pre>
        </li>
           <li>
            <h2><a href="https://github.com/NyasimiPhilip/alx-backend-javascript/blob/master/0x00-ES6_basic/8-getBudgetCurrentYear.js" target="_blank">Task 8: No need to create empty objects before adding in properties</a></h2>
            <p>Rewrite the getBudgetForCurrentYear function to use ES6 computed property names on the budget object.</p>
            <pre><code>import getBudgetForCurrentYear from './8-getBudgetCurrentYear.js';
console.log(getBudgetForCurrentYear(2100, 5200, 1090));</code></pre>
        </li>      
        <li>
            <h2><a href="https://github.com/NyasimiPhilip/alx-backend-javascript/blob/master/0x00-ES6_basic/9-getFullBudget.js" target="_blank">Task 9: ES6 method properties</a></h2>
            <p>Rewrite getFullBudgetObject to use ES6 method properties in the fullBudget object.</p>
            <pre><code>import getFullBudgetObject from './9-getFullBudget.js';
const fullBudget = getFullBudgetObject(20, 50, 10);
console.log(fullBudget.getIncomeInDollars(fullBudget.income));
console.log(fullBudget.getIncomeInEuros(fullBudget.income));</code></pre>
        </li>       
        <li>
            <h2><a href="https://github.com/NyasimiPhilip/alx-backend-javascript/blob/master/0x00-ES6_basic/10-loops.js" target="_blank">Task 10: For...of Loops</a></h2>
            <p>Rewrite the function appendToEachArrayValue to use ES6’s for...of operator.</p>
            <pre><code>import appendToEachArrayValue from './10-loops.js';
console.log(appendToEachArrayValue(['appended', 'fixed', 'displayed'], 'correctly-'));</code></pre>
        </li>      
        <li>
            <h2><a href="https://github.com/NyasimiPhilip/alx-backend-javascript/blob/master/0x00-ES6_basic/100-createIteratorObject.js" target="_blank">Task 11: Iterator</a></h2>
            <p>Write a function named createIteratorObject that will take into argument a report Object created with the previous function createReportObject.</p>
            <pre><code>import createIteratorObject from "./100-createIteratorObject.js";
import createEmployeesObject from './11-createEmployeesObject.js';
import createReportObject from './12-createReportObject.js';

const employees = {
    ...createEmployeesObject('engineering', ['Bob', 'Jane']),
    ...createEmployeesObject('marketing', ['Sylvie'])
};

const report = createReportObject(employees);
const reportWithIterator = createIteratorObject(report);

for (const item of reportWithIterator) {
    console.log(item);
}</code></pre>
        </li>       
        <li>
            <h2><a href="https://github.com/NyasimiPhilip/alx-backend-javascript/blob/master/0x00-ES6_basic/101-iterateThroughObject.js" target="_blank">Task 12: Iterate through object</a></h2>
            <p>Write a function named iterateThroughObject. The function’s parameter reportWithIterator is the return value from createIteratorObject.</p>
            <pre><code>import createEmployeesObject from "./11-createEmployeesObject.js";
import createReportObject from './12-createReportObject.js';
import createIteratorObject from './100-createIteratorObject.js';
import iterateThroughObject from './101-iterateThroughObject.js';

const employees = {
    ...createEmployeesObject('engineering', ['Bob', 'Jane']),
    ...createEmployeesObject('marketing', ['Sylvie'])
};

const report = createReportObject(employees);
const reportWithIterator = createIteratorObject(report);

console.log(iterateThroughObject(reportWithIterator));</code></pre>
        </li>
    </ul>
    </ul>
