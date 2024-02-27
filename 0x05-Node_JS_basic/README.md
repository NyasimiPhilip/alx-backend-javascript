  <h1>NodeJS Basics</h1>
    <p>This project contains tasks for learning the basics of NodeJS.</p>
    <h2>Tasks To Complete</h2>
    <ol>
        <li>
            <h3>Executing basic javascript with Node JS</h3>
            <p><code>0-console.js</code> contains a module that exports a function named <code>displayMessage</code> that prints in STDOUT the string argument.</p>
        </li>
        <li>
            <h3>Using Process stdin</h3>
            <p><code>1-stdin.js</code> contains a script that will be executed through the command line with the following requirements:</p>
            <ul>
                <li>It should display the message <em>Welcome to Holberton School, what is your name?</em> (followed by a new line).</li>
                <li>The user should be able to input their name on a new line.</li>
                <li>The program should display <em>Your name is: INPUT</em>.</li>
                <li>When the user ends the program, it should display <em>This important software is now closing</em> (followed by a new line).</li>
            </ul>
        </li>
        <li>
            <h3>Reading a file synchronously with Node JS</h3>
            <p><code>2-read_file.js</code> contains a module that exports a function <code>countStudents</code> with the following requirements:</p>
            <ul>
                <li>Create a function named <code>countStudents</code>. It should accept a path in argument.</li>
                <li>The script should attempt to read the database file synchronously.</li>
                <li>If the database is not available, it should throw an error with the text <em>Cannot load the database</em>.</li>
                <li>If the database is available, it should log the number of students in each field, and the list with the following format: <em>Number of students in FIELD: 6. List: LIST_OF_FIRSTNAMES</em>.</li>
                <li>CSV file can contain empty lines (at the end) - and they are not a valid student!</li>
            </ul>
        </li>
        <li>
            <h3>Reading a file asynchronously with Node JS</h3>
            <p><code>3-read_file_async.js</code> contains a module that exports a function <code>countStudents</code> with the following requirements:</p>
            <ul>
                <li>Create a function named <code>countStudents</code>. It should accept a path in argument (same as in <code>2-read_file.js</code>).</li>
                <li>The script should attempt to read the database file asynchronously.</li>
                <li>If the database is not available, it should throw an error with the text <em>Cannot load the database</em>.</li>
                <li>If the database is available, it should log the number of students in each field, and the list with the following format: <em>Number of students in FIELD: 6. List: LIST_OF_FIRSTNAMES</em>.</li>
                <li>CSV file can contain empty lines (at the end) - and they are not a valid student!</li>
            </ul>
        </li>
        <li>
            <h3>Create a small HTTP server using Node's HTTP module</h3>
            <p><code>4-http.js</code> contains a script that creates and exports a small HTTP server using the <code>http</code> module with the following requirements:</p>
            <ul>
                <li>It should be assigned to the variable <code>app</code>, which must be exported.</li>
                <li>HTTP server should listen on port 1245.</li>
                <li>Displays <em>Hello Holberton School!</em> in the page body for any endpoint as plain text.</li>
            </ul>
        </li>
        <li>
            <h3>Create a more complex HTTP server using Node's HTTP module</h3>
            <p><code>5-http.js</code> contains a script that creates and exports a more complex HTTP server using the <code>http</code> module with the following requirements:</p>
            <ul>
                <li>It should be assigned to the variable <code>app</code>, which must be exported.</li>
                <li>HTTP server should listen on port 1245.</li>
                <li>It should return plain text.</li>
                <li>When the URL path is <code>/</code>, it should display <em>Hello Holberton School!</em> in the page body.</li>
                <li>When the URL path is <code>/students</code>, it should display <em>This is the list of our students</em> followed by the same content as the file <code>3-read_file_async.js</code> (with and without the database) - the name of the database must be passed as an argument of the file.</li>
                <li>CSV file can contain empty lines (at the end) - and they are not a valid student!</li>
            </ul>
        </li>
        <li>
            <h3>Create a small HTTP server using Express</h3>
            <p><code>6-http_express.js</code> contains a script that creates and exports a small HTTP server using the Express module with the following requirements:</p>
            <ul>
                <li>It should be assigned to the variable <code>app</code>, which must be exported.</li>
                <li>HTTP server should listen on port 1245.</li>
                <li>Displays <em>Hello Holberton School!</em> in the page body for the endpoint <code>/</code>.</li>
            </ul>
        </li>
        <li>
            <h3>Create a more complex HTTP server using Express</h3>
            <p><code>7-http_express.js</code> contains a script that creates and exports a more complex HTTP server using the Express module with the following requirements:</p>
            <ul>
                <li>It should be assigned to the variable <code>app</code>, which must be exported.</li>
                <li>HTTP server should listen on port 1245.</li>
                <li>It should return plain text.</li>
                <li>When the URL path is <code>/</code>, it should display <em>Hello Holberton School!</em> in the page body.</li>
                <li>When the URL path is <code>/students</code>, it should display <em>This is the list of our students</em> followed by the same content as the file <code>3-read_file_async.js</code> (with and without the database) - the name of the database must be passed as an argument of the file.</li>
                <li>CSV file can contain empty lines (at the end) - and they are not a valid student!</li>
            </ul>
        </li>
        <li>
            <h3>Organize a complex HTTP server using Express</h3>
            <p>Writing every part of a server within a single file is not sustainable. Create a full server in a directory named <code>full_server</code> with the requirements listed below.</p>
            <ol>
                <li>
                    <h4>Organize the structure of the server</h4>
                    <p>Create 2 directories within the <code>full_server</code> folder:</p>
                    <ul>
                        <li>controllers.</li>
                        <li>routes.</li>
                    </ul>
                    <p>Create a file <code>full_server/utils.js</code> with a function named <code>readDatabase</code> that accepts a file path as an argument:</p>
                    <ul>
                        <li>It should read the database asynchronously.</li>
                        <li>It should return a promise.</li>
                        <li>When the file is not accessible, it should reject the promise with the error.</li>
                        <li>When the file can be read, it should return an object of arrays of the firstname of students per field.</li>
                    </ul>
                </li>
                <li>
                    <h4>Write the App controller</h4>
                    <p>Inside the file <code>full_server/controllers/AppController.js</code>:</p>
                    <ul>
                        <li>Create a class named <code>AppController</code>. Add a static method named <code>getHomepage</code>.</li>
                        <li>The method accepts request and response as arguments. It returns a 200 status and the message <em>Hello Holberton School!</em>.</li>
                    </ul>
                </li>
                <li>
                    <h4>Write the Students controller</h4>
                    <p>Inside the file <code>full_server/controllers/StudentsController.js</code>, create a class named <code>StudentsController</code>. Add two static methods:</p>
                    <ul>
                        <li>The first one is <code>getAllStudents</code>:</li>
                        <ul>
                            <li>The method accepts request and response as arguments.</li>
                            <li>It should return a status 200.</li>
                            <li>It calls the function <code>readDatabase</code> from the utils file, and display in the page:</li>
                            <ul>
                                <li>First line: <em>This is the list of our students.</em></li>
                                <li>And for each field (order by alphabetic order case insensitive), a line that displays the number of students in the field, and the list of first names (ordered by appearance in the database file) with the following format: <em>Number of students in FIELD: 6. List: LIST_OF_FIRSTNAMES</em>.</li>
                            </ul>
                            <li>If the database is not available, it should return a status 500 and the error message <em>Cannot load the database.</em></li>
                        </ul>
                        <li>The second one is <code>getAllStudentsByMajor</code>:</li>
                        <ul>
                            <li>The method accepts request and response as arguments.</li>
                            <li>It should return a status 200.</li>
                            <li>It uses a parameter that the user can pass to the browser major. The major can only be CS or SWE. If the user is passing another parameter, the server should return a 500 and the error <em>Major parameter must be CS or SWE.</em></li>
                            <li>It calls the function <code>readDatabase</code> from the utils file, and displays in the page the list of first names for the students (ordered by appearance in the database file) in the specified field <em>List: LIST_OF_FIRSTNAMES_IN_THE_FIELD.</em></li>
                            <li>If the database is not available, it should return a status 500 and the error message <em>Cannot load the database.</em></li>
                        </ul>
                    </ul>
                </li>
                <li>
                    <h4>Write the routes</h4>
                    <p>Inside the file <code>full_server/routes/index.js</code>:</p>
                    <ul>
                        <li>Link the route <code>/</code> to the <code>AppController</code>.</li>
                        <li>Link the route <code>/students</code> and <code>/students/:major</code> to the <code>StudentsController</code>.</li>
                    </ul>
                </li>
                <li>
                    <h4>Write the server reusing everything you created</h4>
                    <p>Inside the file named <code>full_server/server.js</code>, create a small Express server:</p>
                    <ul>
                        <li>It should use the routes defined in <code>full_server/routes/index.js</code>.</li>
                        <li>It should use the port 1245.</li>
                    </ul>
                </li>
                <li>
                    <h4>Update package.json (if you are running it from inside the folder <code>full_server</code>)</h4>
                    <p>If you are starting node from inside of the folder <code>full_server</code>, you will have to update the command <code>dev</code> by: <code>nodemon --exec babel-node --presets babel-preset-env ./server.js ../database.csv</code>.</p>
                    <p>Warning: Don't forget to export your express app at the end of <code>server.js</code> (<code>export default app;</code>).</p>
                    <p>The database filename is passed as argument of the <code>server.js</code> BUT, for the purpose of testing, you should retrieve this filename at the execution or when it's needed (when <code>getAllStudents</code> or <code>getAllStudentsByMajor</code> are called for example).</p>
                    <p>If you want to add test to validate your integration, you will need to add this file: <code>.babelrc</code>.</p>
                    <pre>
{
    "presets": [["env", {"exclude": ["transform-regenerator"]}]]
}
                    </pre>
                </li>
            </ol>
        </li>
    </ol>