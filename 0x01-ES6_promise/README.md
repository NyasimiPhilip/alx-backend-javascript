 <h1>Promise Tasks</h1>
    <ul>      
        <li>
            <h2><a href="https://github.com/NyasimiPhilip/alx-backend-javascript/blob/master/0x01-ES6_promise/0-promise.js" target="_blank">Task 0: Keep every promise you make and only make promises you can keep</a></h2>
            <p>Return a Promise using the provided prototype function <code>getResponseFromAPI()</code>.</p>
            <pre><code>import getResponseFromAPI from "./0-promise.js";
const response = getResponseFromAPI();
console.log(response instanceof Promise);</code></pre>
        </li>       
        <li>
            <h2><a href="https://github.com/NyasimiPhilip/alx-backend-javascript/blob/master/0x01-ES6_promise/1-promise.js" target="_blank">Task 1: Don't make a promise...if you know you can't keep it</a></h2>
            <p>Return a promise based on the boolean argument. Resolve or reject the promise accordingly.</p>
            <pre><code>import getFullResponseFromAPI from './1-promise';
console.log(getFullResponseFromAPI(true));
console.log(getFullResponseFromAPI(false));</code></pre>
        </li>      
        <li>
            <h2><a href="https://github.com/NyasimiPhilip/alx-backend-javascript/blob/master/0x01-ES6_promise/2-then.js" target="_blank">Task 2: Catch me if you can!</a></h2>
            <p>Append three handlers to the provided function. Log messages for successful and rejected promises.</p>
            <pre><code>import handleResponseFromAPI from "./2-then";
const promise = Promise.resolve();
handleResponseFromAPI(promise);</code></pre>
        </li>      
        <li>
            <h2><a href="https://github.com/NyasimiPhilip/alx-backend-javascript/blob/master/0x01-ES6_promise/3-all.js" target="_blank">Task 3: Handle multiple successful promises</a></h2>
            <p>Import functions from utils.js and collectively resolve promises. Log the result to the console.</p>
            <pre><code>import handleProfileSignup from "./3-all";
handleProfileSignup();</code></pre>
        </li>
        <li>
            <h2><a href="https://github.com/NyasimiPhilip/alx-backend-javascript/blob/master/0x01-ES6_promise/4-user-promise.js" target="_blank">Task 4: Simple promise</a></h2>
            <p>Return a resolved promise with a specific object structure.</p>
            <pre><code>import signUpUser from "./4-user-promise";
console.log(signUpUser("Bob", "Dylan"));</code></pre>
        </li>
        <li>
            <h2><a href="https://github.com/NyasimiPhilip/alx-backend-javascript/blob/master/0x01-ES6_promise/5-photo-reject.js" target="_blank">Task 5: Reject the promises</a></h2>
            <p>Write and export a function that returns a promise rejecting with an Error based on the filename.</p>
            <pre><code>import uploadPhoto from './5-photo-reject';
console.log(uploadPhoto('guillaume.jpg'));</code></pre>
        </li>      
        <li>
            <h2><a href="https://github.com/NyasimiPhilip/alx-backend-javascript/blob/master/0x01-ES6_promise/6-final-user.js" target="_blank">Task 6: Handle multiple promises</a></h2>
            <p>Import functions and create a function that calls two other functions. Return an array with the results.</p>
            <pre><code>import handleProfileSignup from './6-final-user';
console.log(handleProfileSignup("Bob", "Dylan", "bob_dylan.jpg"));</code></pre>
        </li>
          <li>
            <h2><a href="https://github.com/NyasimiPhilip/alx-backend-javascript/blob/master/0x01-ES6_promise/7-load_balancer.js" target="_blank">Task 7: Load balancer</a></h2>
            <p>Write and export a function named loadBalancer. It should accept two promises and return the value returned by the first resolved promise.</p>
            <pre><code>import loadBalancer from "./7-load_balancer";
const ukSuccess = 'Downloading from UK is faster';
const frSuccess = 'Downloading from FR is faster';
const promiseUK = new Promise(resolve => setTimeout(resolve, 100, ukSuccess));
const promiseFR = new Promise(resolve => setTimeout(resolve, 200, frSuccess));
const test = async () => {
    console.log(await loadBalancer(promiseUK, promiseFR));
};
test();</code></pre>
        </li>     
        <li>
            <h2><a href="https://github.com/NyasimiPhilip/alx-backend-javascript/blob/master/0x01-ES6_promise/8-try.js" target="_blank">Task 8: Throw error / try catch</a></h2>
            <p>Write a function named divideFunction that handles division and throws an error when the denominator is 0.</p>
            <pre><code>import divideFunction from './8-try';
console.log(divideFunction(10, 2));
console.log(divideFunction(10, 0));</code></pre>
        </li>        
        <li>
            <h2><a href="https://github.com/NyasimiPhilip/alx-backend-javascript/blob/master/0x01-ES6_promise/9-try.js" target="_blank">Task 9: Throw an error</a></h2>
            <p>Write a function named guardrail that creates an array and appends results or error messages based on a provided math function.</p>
            <pre><code>import guardrail from './9-try';
import divideFunction from './8-try';
console.log(guardrail(() => divideFunction(10, 2)));
console.log(guardrail(() => divideFunction(10, 0)));</code></pre>
        </li>     
        <li>
            <h2><a href="https://github.com/NyasimiPhilip/alx-backend-javascript/blob/master/0x01-ES6_promise/100-await.js" target="_blank">Task 10: Await / Async</a></h2>
            <p>Write an async function named asyncUploadUser that calls two functions and returns an object with the results. If one of the functions fails, return an empty object.</p>
            <pre><code>import asyncUploadUser from "./100-await";
const test = async () => {
    const value = await asyncUploadUser();
    console.log(value);
};
test();</code></pre>
        </li>
    </ul>
