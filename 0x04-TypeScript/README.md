   <h2>Task 0: Creating an interface for a student</h2>    
    <p>Mandatory:</p>
    <ul>
        <li>Copy the following configuration files (provided above) into the task_0 directory: <strong>package.json, .eslintrc.js, tsconfig.json, webpack.config.js</strong></li>
        <li>Write your code in the <strong>main.ts</strong> file:</li>
        <ul>
            <li>Write an interface named <strong>Student</strong> that accepts the following elements: <strong>firstName (string), lastName (string), age (number), and location (string)</strong></li>
            <li>Create two students, and create an array named <strong>studentsList</strong> containing the two variables</li>
            <li>Using Vanilla JavaScript, render a table, and for each element in the array, append a new row to the table</li>
        </ul>
        <li>Requirements:</li>
        <ul>
            <li>When running, Webpack should return <strong>No type errors found</strong></li>
            <li>Every variable should use TypeScript when possible</li>
        </ul>
    </ul>
    <p>Repo:</p>
    <ul>
        <li>GitHub repository: <strong>alx-backend-javascript</strong></li>
        <li>Directory: <strong>0x04-TypeScript</strong></li>
        <li>Files: <strong>task_0/js/main.ts, task_0/package.json, task_0/.eslintrc.js, task_0/tsconfig.json, task_0/webpack.config.js</strong></li>
    </ul>
    <br>
      <h2>Task 1: Building a Teacher interface</h2>    
    <p>Mandatory:</p>
    <ul>
        <li>Create a directory <strong>task_1</strong> and copy these configuration files into this folder: <strong>package.json, tsconfig.json, webpack.config.js</strong></li>
        <li>Create a <strong>Teacher</strong> interface with the following attributes:</li>
        <ul>
            <li><strong>firstName</strong> (string) and <strong>lastName</strong> (string). These two attributes should only be modifiable when a Teacher is first initialized</li>
            <li><strong>fullTimeEmployee</strong> (boolean) - this attribute should always be defined</li>
            <li><strong>yearsOfExperience</strong> (number) - this attribute is optional</li>
            <li><strong>location</strong> (string) - this attribute should always be defined</li>
            <li>Add the possibility to add any attribute to the Object like <strong>contract</strong> (boolean) without specifying the name of the attribute</li>
        </ul>
        <li>Example:</li>
        <pre>
            <code>
                const teacher3: Teacher = {
                  firstName: 'John',
                  fullTimeEmployee: false,
                  lastName: 'Doe',
                  location: 'London',
                  contract: false,
                };                
                console.log(teacher3);                
                // should print
                // Object
                // contract: false
                // firstName: "John"
                // fullTimeEmployee: false
                // lastName: "Doe"
                // location: "London"
            </code>
        </pre>
    </ul>
    <p>Repo:</p>
    <ul>
        <li>GitHub repository: <strong>alx-backend-javascript</strong></li>
        <li>Directory: <strong>0x04-TypeScript</strong></li>
        <li>Files: <strong>task_1/js/main.ts, task_1/webpack.config.js, task_1/tsconfig.json, task_1/package.json</strong></li>
    </ul>
    <br>    
    <h2>Task 2: Extending the Teacher class</h2>    
    <p>Mandatory:</p>
    <ul>
        <li>Write an interface named <strong>Directors</strong> that extends <strong>Teacher</strong>. It requires an attribute named <strong>numberOfReports (number)</strong></li>
        <li>Example:</li>
        <pre>
            <code>
                const director1: Directors = {
                  firstName: 'John',
                  lastName: 'Doe',
                  location: 'London',
                  fullTimeEmployee: true,
                  numberOfReports: 17,
                };
                console.log(director1);                
                // should print
                // Object
                // firstName: "John"
                // fullTimeEmployee: true
                // lastName: "Doe"
                // location: "London"
                // numberOfReports: 17
            </code>
        </pre>
    </ul>
    <p>Repo:</p>
    <ul>
        <li>GitHub repository: <strong>alx-backend-javascript</strong></li>
        <li>Directory: <strong>0x04-TypeScript</strong></li>
        <li>File: <strong>task_1/js/main.ts</strong></li>
    </ul>    
    <br>    
    <h2>Task 3: Printing teachers</h2>    
    <p>Mandatory:</p>
    <ul>
        <li>Write a function named <strong>printTeacher</strong>:</li>
        <ul>
            <li>It accepts two arguments <strong>firstName</strong> and <strong>lastName</strong></li>
            <li>It returns the first letter of the firstName and the full lastName</li>
            <li>Example: <code>printTeacher("John", "Doe") -> J. Doe</code></li>
        </ul>
        <li>Write an interface for the function named <strong>printTeacherFunction</strong></li>
    </ul>
    <p>Repo:</p>
    <ul>
        <li>GitHub repository: <strong>alx-backend-javascript</strong></li>
        <li>Directory: <strong>0x04-TypeScript</strong></li>
        <li>File: <strong>task_1/js/main.ts</strong></li>
    </ul>
    <br>    
    <h2>Task 4: Writing a class</h2>    
    <p>Mandatory:</p>
    <ul>
        <li>Write a Class named <strong>StudentClass</strong>:</li>
        <ul>
            <li>The constructor accepts <strong>firstName (string)</strong> and <strong>lastName (string)</strong> arguments</li>
            <li>The class has a method named <strong>workOnHomework</strong> that returns the string <strong>"Currently working"</strong></li>
            <li>The class has a method named <strong>displayName</strong>. It returns the firstName of the student</li>
            <li>The constructor of the class should be described through an Interface</li>
            <li>The class should be described through an Interface</li>
        </ul>
        <li>Requirements:</li>
        <ul>
            <li>You can reuse the Webpack configuration from the previous exercise to compile the code.</li>
            <li>When running <code>npm run build</code>, no TypeScript error should be displayed.</li>
            <li>Every variable should use TypeScript when possible.</li>
        </ul>
    </ul>
    <p>Repo:</p>
    <ul>
        <li>GitHub repository: <strong>alx-backend-javascript</strong></li>
        <li>Directory: <strong>0x04-TypeScript</strong></li>
        <li>File: <strong>task_1/js/main.ts</strong></li>
    </ul>
    <br>
     <h2>Task 5: Advanced types Part 1</h2>    
    <p>Mandatory:</p>
    <ul>
        <li>Create the <strong>DirectorInterface</strong> interface with the 3 expected methods:</li>
        <ul>
            <li><code>workFromHome()</code> returning a string</li>
            <li><code>getCoffeeBreak()</code> returning a string</li>
            <li><code>workDirectorTasks()</code> returning a string</li>
        </ul>
        <li>Create the <strong>TeacherInterface</strong> interface with the 3 expected methods:</li>
        <ul>
            <li><code>workFromHome()</code> returning a string</li>
            <li><code>getCoffeeBreak()</code> returning a string</li>
            <li><code>workTeacherTasks()</code> returning a string</li>
        </ul>
        <li>Create a class <strong>Director</strong> that will implement <strong>DirectorInterface</strong></li>
        <ul>
            <li><code>workFromHome</code> should return the string <strong>"Working from home"</strong></li>
            <li><code>getCoffeeBreak</code> should return the string <strong>"Getting a coffee break"</strong></li>
            <li><code>workDirectorTasks</code> should return the string <strong>"Getting to director tasks"</strong></li>
        </ul>
        <li>Create a class <strong>Teacher</strong> that will implement <strong>TeacherInterface</strong></li>
        <ul>
            <li><code>workFromHome</code> should return the string <strong>"Cannot work from home"</strong></li>
            <li><code>getCoffeeBreak</code> should return the string <strong>"Cannot have a break"</strong></li>
            <li><code>workTeacherTasks</code> should return the string <strong>"Getting to work"</strong></li>
        </ul>
        <li>Create a function <strong>createEmployee</strong> with the following requirements:</li>
        <ul>
            <li>It can return either a <strong>Director</strong> or a <strong>Teacher</strong> instance</li>
            <li>It accepts 1 argument:</li>
            <ul>
                <li><strong>salary</strong> (either number or string)</li>
            </ul>
            <li>If salary is a number and less than 500 - It should return a new <strong>Teacher</strong>. Otherwise, it should return a <strong>Director</strong></li>
        </ul>
        <li>Expected result:</li>
        <ul>
            <li><code>console.log(createEmployee(200)); // Teacher</code></li>
            <li><code>console.log(createEmployee(1000)); // Director</code></li>
            <li><code>console.log(createEmployee('$500')); // Director</code></li>
        </ul>
    </ul>
    <p>Repo:</p>
    <ul>
        <li>GitHub repository: <strong>alx-backend-javascript</strong></li>
        <li>Directory: <strong>0x04-TypeScript</strong></li>
        <li>Files: <strong>task_2/js/main.ts, task_2/webpack.config.js, task_2/tsconfig.json, task_2/package.json</strong></li>
    </ul>    
    <br>
    <h2>Task 6: Creating functions specific to employees</h2>    
    <p>Mandatory:</p>
    <ul>
        <li>Write a function <strong>isDirector</strong>:</li>
        <ul>
            <li>It accepts <strong>employee</strong> as an argument</li>
            <li>It will be used as a type predicate and if the employee is a director</li>
        </ul>
        <li>Write a function <strong>executeWork</strong>:</li>
        <ul>
            <li>It accepts <strong>employee</strong> as an argument</li>
            <li>If the employee is a <strong>Director</strong>, it will call <strong>workDirectorTasks</strong></li>
            <li>If the employee is a <strong>Teacher</strong>, it will call <strong>workTeacherTasks</strong></li>
        </ul>
        <li>Expected result:</li>
        <ul>
            <li><code>executeWork(createEmployee(200)); // Getting to work</code></li>
            <li><code>executeWork(createEmployee(1000)); // Getting to director tasks</code></li>
        </ul>
    </ul>
    <p>Repo:</p>
    <ul>
        <li>GitHub repository: <strong>alx-backend-javascript</strong></li>
        <li>Directory: <strong>0x04-TypeScript</strong></li>
        <li>File: <strong>task_2/js/main.ts</strong></li>
    </ul>    
    <br>
    <h2>Task 7: String literal types</h2>    
    <p>Mandatory:</p>
    <ul>
        <li>Write a String literal type named <strong>Subjects</strong> allowing a variable to have the value <strong>Math</strong> or <strong>History</strong> only</li>
        <li>Write a function named <strong>teachClass</strong>:</li>
        <ul>
            <li>It takes <strong>todayClass</strong> as an argument</li>
            <li>It will return the string <strong>Teaching Math</strong> if <strong>todayClass</strong> is <strong>Math</strong></li>
            <li>It will return the string <strong>Teaching History</strong> if <strong>todayClass</strong> is <strong>History</strong></li>
        </ul>
        <li>Expected result:</li>
        <ul>
            <li><code>teachClass('Math'); // Teaching Math</code></li>
            <li><code>teachClass('History'); // Teaching History</code></li>
        </ul>
    </ul>
    <p>Repo:</p>
    <ul>
        <li>GitHub repository: <strong>alx-backend-javascript</strong></li>
        <li>Directory: <strong>0x04-TypeScript</strong></li>
        <li>File: <strong>task_2/js/main.ts</strong></li>
    </ul>
      <h2>Task 8: Ambient Namespaces</h2>    
    <p>Mandatory:</p>
    <ul>
        <li>Create a directory called <strong>task_3</strong> and copy these configuration files into it: <strong>package.json, webpack.config.js, tsconfig.json</strong></li>
        <li>Inside a file named <strong>interface.ts</strong>:</li>
        <ul>
            <li>Create a type <strong>RowID</strong> and set it equal to <strong>number</strong></li>
            <li>Create an interface <strong>RowElement</strong> that contains these 3 fields:</li>
            <ul>
                <li><code>firstName: string</code></li>
                <li><code>lastName: string</code></li>
                <li><code>age?: number</code></li>
            </ul>
        </ul>
        <li>Write an ambient file within <strong>task_3/js</strong>, named <strong>crud.d.ts</strong> containing the type declarations for each crud function. At the top of the file import <strong>RowID</strong> and <strong>RowElement</strong> from <strong>interface.ts</strong>.</li>
        <li>In <strong>main.ts</strong></li>
        <ul>
            <li>At the top of the file create a triple slash directive that includes all the dependencies from <strong>crud.d.ts</strong></li>
            <li>Import the <strong>RowID</strong> type and <strong>RowElement</strong> from <strong>interface.ts</strong></li>
            <li>Import everything from <strong>crud.js</strong> as <strong>CRUD</strong></li>
            <li>Create an object called <strong>row</strong> with the type <strong>RowElement</strong> with the fields set to these values:</li>
            <ul>
                <li><code>firstName: 'Guillaume'</code></li>
                <li><code>lastName: 'Salva'</code></li>
            </ul>
            <li>Create a const variable named <strong>newRowID</strong> with the type <strong>RowID</strong> and assign the value the <strong>insertRow</strong> command.</li>
            <li>Next, create a const variable named <strong>updatedRow</strong> with the type <strong>RowElement</strong> and update <strong>row</strong> with an age field set to <strong>23</strong></li>
            <li>Finally, call the <strong>updateRow</strong> and <strong>deleteRow</strong> commands.</li>
        </ul>
        <li>Expected result:</li>
        <pre>
            <code>
                const obj = {firstName: "Guillaume", lastName: "Salva"};
                CRUD.insertRow(obj)
                // Insert row {firstName: "Guillaume", lastName: "Salva"}
                const updatedRow: RowElement = { firstName: "Guillaume", lastName: "Salva", age: 23 };
                CRUD.updateRow(newRowID, updatedRow);
                // Update row 125 {firstName: "Guillaume", lastName: "Salva", age: 23}
                CRUD.deleteRow(125);
                // Delete row id 125
            </code>
        </pre>
        <li>Requirements:</li>
        <ul>
            <li>When running <code>npm run build</code>, no TypeScript error should be displayed.</li>
            <li>Every variable should use TypeScript when possible.</li>
            <li>The main file and the ambient file should both import the types defined in the interface file.</li>
            <li>You can easily test your ambient file by looking at the intellisense of your IDE when using the 3rd party functions.</li>
        </ul>
    </ul>
    <p>Repo:</p>
    <ul>
        <li>GitHub repository: <strong>alx-backend-javascript</strong></li>
        <li>Directory: <strong>0x04-TypeScript</strong></li>
        <li>Files: <strong>task_3/js/main.ts, task_3/js/interface.ts, task_3/js/crud.d.ts</strong></li>
    </ul>  
    <br>
    <h2>Task 9: Namespace & Declaration merging</h2>    
    <ul>
        <li>Create a new directory <strong>task_4</strong> and copy the above <strong>tsconfig.json</strong> and put this <strong>package.json</strong> in there</li>
        <pre>
            <code>
                {
                  "name": "task_4",
                  "version": "1.0.0",
                  "description": "",
                  "main": "index.js",
                  "scripts": {
                    "build": "webpack",
                    "test": "echo \"Error: no test specified\" && exit 1"
                  },
                  "keywords": [],
                  "author": "",
                  "license": "ISC",
                  "devDependencies": {
                    "@typescript-eslint/eslint-plugin": "^2.4.0",
                    "@typescript-eslint/parser": "^2.4.0",
                    "clean-webpack-plugin": "^3.0.0",
                    "fork-ts-checker-webpack-plugin": "^1.5.1",
                    "html-webpack-plugin": "^3.2.0",
                    "ts-loader": "^6.2.0",
                    "typescript": "^3.6.4",
                    "webpack": "^4.41.2",
                    "webpack-cli": "^3.3.9",
                    "webpack-dev-server": "^3.8.2"
                  }
                }
            </code>
        </pre>
        <li>In <strong>task_4/js/subjects</strong>:</li>
        <ul>
            <li>Create a file <strong>Teacher.ts</strong> and write a <strong>Teacher</strong> interface in a namespace named <strong>Subjects</strong>.</li>
            <ul>
                <li>The interface requires <strong>firstName</strong> and <strong>lastName</strong> as <strong>string</strong></li>
            </ul>
            <li>Create a file <strong>Subject.ts</strong> and write a <strong>Subject</strong> class in the same namespace named <strong>Subjects</strong>.</li>
            <ul>
                <li>The class has one attribute <strong>teacher</strong> that implements the <strong>Teacher</strong> interface</li>
                <li>The class has one setter method <strong>setTeacher</strong> that accepts a teacher in argument (and as setter, set the instance attribute <strong>teacher</strong> with it)</li>
            </ul>
            <li>Create a file <strong>Cpp.ts</strong> and make the following modifications in the same namespace.</li>
            <ul>
                <li>Using declaration merging, add a new optional attribute <strong>experienceTeachingC</strong> (number) to the <strong>Teacher</strong> interface</li>
                <li>Create a class <strong>Cpp</strong> extending from <strong>Subject</strong></li>
                <li>Write a method named <strong>getRequirements</strong> that will return a string <strong>Here is the list of requirements for Cpp</strong></li>
                <li>Write a method named <strong>getAvailableTeacher</strong> that will return a string <strong>Available Teacher: &lt;first name of teacher&gt;</strong></li>
                <li>If the teacher doesn’t have any experience in teaching C, then the method should return a string <strong>No available teacher</strong></li>
            </ul>
            <li>Create a file <strong>React.ts</strong> and write a <strong>React</strong> Class in the same namespace.</li>
            <ul>
                <li>Add a new attribute <strong>experienceTeachingReact?</strong> (number) to the <strong>Teacher</strong> interface</li>
                <li>In the class, write a method named <strong>getRequirements</strong> that will return a string <strong>Here is the list of requirements for React</strong></li>
                <li>Write a method named <strong>getAvailableTeacher</strong> that will return a string <strong>Available Teacher: &lt;first name of teacher&gt;</strong></li>
                <li>If the teacher doesn’t have any experience in teaching React, then the method should return a string <strong>No available teacher</strong></li>
            </ul>
            <li>Create a file <strong>Java.ts</strong> and write a <strong>Java</strong> Class in the same namespace.</li>
            <ul>
                <li>Add a new attribute <strong>experienceTeachingJava?</strong> (number) to the <strong>Teacher</strong> interface</li>
                <li>In the class, write a method named <strong>getRequirements</strong> that will return a string <strong>Here is the list of requirements for Java</strong></li>
                <li>Write a method named <strong>getAvailableTeacher</strong> that will return a string <strong>Available Teacher: &lt;first name of teacher&gt;</strong></li>
                <li>If the teacher doesn’t have any experience in teaching Java, then the method should return a string <strong>No available teacher</strong></li>
            </ul>
        </ul>
    </ul>
    <p>Repo:</p>
    <ul>
        <li>GitHub repository: <strong>alx-backend-javascript</strong></li>
        <li>Directory: <strong>0x04-TypeScript</strong></li>
        <li>Files: <strong>task_4/package.json, task_4/tsconfig.json, task_4/js/subjects/Cpp.ts, task_4/js/subjects/Java.ts, task_4/js/subjects/React.ts, task_4/js/subjects/Subject.ts, task_4/js/subjects/Teacher.ts</strong></li>
    </ul>  
<br>
<h2>Task 10: Update task_4/js/main.ts</h2>    
    <ul>
        <li>In <strong>task_4/js/main.ts</strong>:</li>
        <ul>
            <li>Create and export a constant <strong>cpp</strong> for <strong>Cpp Subjects</strong></li>
            <li>Create and export a constant <strong>java</strong> for <strong>Java Subjects</strong></li>
            <li>Create and export a constant <strong>react</strong> for <strong>React Subjects</strong></li>
            <li>Create and export one <strong>Teacher</strong> object <strong>cTeacher</strong> with <strong>experienceTeachingC = 10</strong></li>
            <li>For <strong>Cpp subject</strong>, log to the console <strong>C++</strong>, set <strong>cTeacher</strong> as the teacher, call the two methods <strong>getRequirements</strong> and <strong>getAvailableTeacher</strong> and print the strings they return</li>
            <li>For <strong>Java subject</strong>, log to the console <strong>Java</strong>, set <strong>cTeacher</strong> as the teacher, call the two methods <strong>getRequirements</strong> and <strong>getAvailableTeacher</strong>, and print the strings they return</li>
            <li>For <strong>React subject</strong>, log to the console <strong>React</strong>, set <strong>cTeacher</strong> as the teacher, call the two methods <strong>getRequirements</strong> and <strong>getAvailableTeacher</strong>, and print the strings they return</li>
        </ul>
    </ul>
    <p>Repo:</p>
    <ul>
        <li>GitHub repository: <strong>alx-backend-javascript</strong></li>
        <li>Directory: <strong>0x04-TypeScript</strong></li>
        <li>File: <strong>task_4/js/main.ts</strong></li>
    </ul>
     <h2>Task 11: Brand convention & Nominal typing</h2>    
    <ul>
        <li>Create a directory <strong>task_5</strong> and copy these configuration files into the root of <strong>task_5</strong>: <strong>package.json, tsconfig.json, webpack.config.js</strong></li>
        <li>Create two interfaces <strong>MajorCredits</strong> and <strong>MinorCredits</strong> in <strong>task_5/js/main.ts</strong>:</li>
        <ul>
            <li>Each interface defines a number named <strong>credits</strong></li>
            <li>Add a <strong>brand</strong> property to each interface in order to uniquely identify each of them</li>
        </ul>
        <li>Create two functions named <strong>sumMajorCredits</strong> and <strong>sumMinorCredits</strong> in <strong>task_5/js/main.ts</strong>:</li>
        <ul>
            <li>Each function takes two arguments <strong>subject1</strong> and <strong>subject2</strong></li>
            <li><strong>sumMajorCredits</strong> returns <strong>MajorCredits</strong> value and <strong>sumMinorCredits</strong> returns <strong>MinorCredits</strong> value</li>
            <li>Each function sums the credits of the two subjects</li>
        </ul>
    </ul>
    <p>Repo:</p>
    <ul>
        <li>GitHub repository: <strong>alx-backend-javascript</strong></li>
        <li>Directory: <strong>0x04-TypeScript</strong></li>
        <li>Files: <strong>task_5/js/main.ts, task_5/package.json, task_5/webpack.config.js, task_5/tsconfig.json</strong></li>
    </ul>
