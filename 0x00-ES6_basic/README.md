# 0x00. ES6 Basics
This project explores the fundamentals of ES6, the next major revision of JavaScript, introducing new features and syntax that have revolutionized web development.

Dive into the world of constants, variables, block-scoped variables, arrow functions, function parameters, string templating, object creation, iterators, and for-of loops, gaining proficiency in modern JavaScript development.

## Resources
- [ECMAScript 6 - ECMAScript 2015](https://www.w3schools.com/js/js_es6.asp)
- [Statements and declarations](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements)
- [Arrow functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
- [Default parameters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters)
- [Rest parameter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters)
- [Javascript ES6 — Iterables and Iterators](https://towardsdatascience.com/javascript-es6-iterables-and-iterators-de18b54f4d4)

## Learning Objectives
- What ES6 is
- New features introduced in ES6
- The difference between a constant and a variable
- Block-scoped variables
- Arrow functions and function parameters default to them
- Rest and spread function parameters
- String templating in ES6
- Object creation and their properties in ES6
- Iterators and for-of loops

## Requirements
[![!ubuntu18.04](https://img.shields.io/badge/ubuntu-18.04_LTS-orange.svg)](https://www.ubuntu.com/download/desktop)
[![!nodejs](https://img.shields.io/badge/nodejs-12.11.x-green.svg)](https://nodejs.org/en/download/)
[![!jest](https://img.shields.io/badge/jest-26.x-red.svg)](https://jestjs.io/docs/en/getting-started)
[![!eslint](https://img.shields.io/badge/eslint-6.x.x-blue.svg)](https://eslint.org/docs/user-guide/getting-started)

## Setup
### Install NodeJS 12.11.x
(in your home directory): 
```bash
$ curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
$ sudo bash nodesource_setup.sh
$ sudo apt install nodejs
```
### Install Jest, Babel, and ESLint
in your project directory, install Jest, Babel and ESList by using the supplied `package.json` and run `npm install`.

## Configuration files
<details>
  <summary>package.json</summary>

  ```json
{
  "scripts": {
    "lint": "./node_modules/.bin/eslint",
    "check-lint": "lint [0-9]*.js",
    "dev": "npx babel-node",
    "test": "jest",
    "full-test": "./node_modules/.bin/eslint [0-9]*.js && jest"
  },
  "devDependencies": {
    "@babel/core": "^7.6.0",
    "@babel/node": "^7.8.0",
    "@babel/preset-env": "^7.6.0",
    "eslint": "^6.4.0",
    "eslint-config-airbnb-base": "^14.0.0",
    "eslint-plugin-import": "^2.18.2",
    "eslint-plugin-jest": "^22.17.0",
    "jest": "^24.9.0"
  }
}
  ```
</details>
<details>
  <summary>.eslintrc.js</summary>

  ```js
  module.exports = {
  env: {
    browser: false,
    es6: true,
    jest: true,
  },
  extends: [
    'airbnb-base',
    'plugin:jest/all',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['jest'],
  rules: {
    'no-console': 'off',
    'no-shadow': 'off',
    'no-restricted-syntax': [
      'error',
      'LabeledStatement',
      'WithStatement',
    ],
  },
  overrides:[
    {
      files: ['*.js'],
      excludedFiles: 'babel.config.js',
    }
  ]
};
  ```
</details>
</details>
<details>
  <summary>babel.config.js</summary>

  ```js
  module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
  ],
};
  ```
</details>

#### Finally...
Don’t forget to run `npm install` from the terminal of your project folder to install all necessary project dependencies.

## Tasks
### Mandatory
<details>
  <summary>0. Const or let?</summary>
  Modify

  - function `taskFirst` to instantiate using `const`
  - function `taskNext` to instantiate using `let`

  ```js
  export function taskFirst() {
  var task = 'I prefer const when I can.';
  return task;
  }

  export function getLast() {
    return ' is okay';
  }

  export function taskNext() {
    var combination = 'But sometimes let';
    combination += getLast();

    return combination;
  }
  ```
  Execution example:
  ```bash
  bob@dylan:~$ cat 0-main.js
  import { taskFirst, taskNext } from './0-constants.js';

  console.log(`${taskFirst()} ${taskNext()}`);

  bob@dylan:~$ 
  bob@dylan:~$ npm run dev 0-main.js 
  I prefer const when I can. But sometimes let is okay
  bob@dylan:~$  
  ```
</details>

<details>
  <summary>1. Block Scope</summary>

  Given what you’ve read about `var` and hoisting, modify the variables inside the function `taskBlock` so that the variables aren’t overwritten inside the conditional block.

  ```js
  export default function getSumOfHoods(initialNumber, expansion1989, expansion2019) {
  if (expansion1989 === undefined) {
    expansion1989 = 89;
  }

  if (expansion2019 === undefined) {
    expansion2019 = 19;
  }
  return initialNumber + expansion1989 + expansion2019;
}
  ```
</details>

<details>
  <summary>2. Arrow functions</summary>

  Rewrite the following standard function to use ES6’s arrow syntax of the function `add` (it will be an anonymous function after)

  ```js
  export default function getNeighborhoodsList() {
  this.sanFranciscoNeighborhoods = ['SOMA', 'Union Square'];

  const self = this;
  this.addNeighborhood = function add(newNeighborhood) {
    self.sanFranciscoNeighborhoods.push(newNeighborhood);
    return self.sanFranciscoNeighborhoods;
  };
}
  ```
</details>

<details>
  <summary>3. Parameter defaults</summary>

  Condense the internals of the following function to 1 line - without changing the name of each function/variable.

_Hint_: The key here to define default parameter values for the function parameters.

  ```js
  export default function getSumOfHoods(initialNumber, expansion1989, expansion2019) {
  if (initialNumber === undefined) {
    initialNumber = 0;
  }

  if (expansion1989 === undefined) {
    expansion1989 = 89;
  }

  if (expansion2019 === undefined) {
    expansion2019 = 19;
  }

  return initialNumber + expansion1989 + expansion2019;
}
  ```
</details>

<details>
  <summary>4. Rest parameter syntax for functions</summary>

  Modify the following function to return the number of arguments passed to it using the rest parameter syntax

  ```js
  export default function returnHowManyArguments() {

}
  ```
  Example:
  ```bash
  > returnHowManyArguments('one', 'two', 3, 'four');
  4
  > returnHowManyArguments(true, false, 'three');
  3
  ```
</details>

<details>
  <summary>5. The wonders of spread syntax</summary>

  Using spread syntax, concatenate 2 arrays and each character of a string by modifying the function below. Your function body should be one line long.

  ```js
  export default function concatArrays(array1, array2, string) {

}
  ```
</details>

<details>
  <summary>6. Take advantage of template literals</summary>

  Rewrite the return statement to use a template literal so you can the substitute the variables you’ve defined.

  ```js
  export default function getSanFranciscoDescription() {
  const year = 2017;
  const budget = {
    income: '$119,868',
    gdp: '$154.2 billion',
    capita: '$178,479',
  };

  return 'As of ' + year + ', it was the seventh-highest income county in the United States'
        / ', with a per capita personal income of ' + budget.income + '. As of 2015, San Francisco'
        / ' proper had a GDP of ' + budget.gdp + ', and a GDP per capita of ' + budget.capita + '.';
}
  ```
</details>

<details>
  <summary>7. Object property value shorthand syntax</summary>

  Notice how the keys and the variable names are the same?

  Modify the following function’s `budget` object to simply use the keyname instead.

  ```js
  export default function getBudgetObject(income, gdp, capita) {
  const budget = {
    income: income,
    gdp: gdp,
    capita: capita,
  };

  return budget;
}
  ```
</details>

<details>
  <summary>8. No need to create empty objects before adding in properties</summary>

  Rewrite the `getBudgetForCurrentYear` function to use ES6 computed property names on the budget object

  ```js
  function getCurrentYear() {
  const date = new Date();
  return date.getFullYear();
}

export default function getBudgetForCurrentYear(income, gdp, capita) {
  const budget = {};

  budget[`income-${getCurrentYear()}`] = income;
  budget[`gdp-${getCurrentYear()}`] = gdp;
  budget[`capita-${getCurrentYear()}`] = capita;

  return budget;
}
  ```
</details>

<details>
  <summary>9. ES6 method properties</summary>

  Rewrite `getFullBudgetObject` to use ES6 method properties in the `fullBudget` object

  ```js
  import getBudgetObject from './7-getBudgetObject.js';

export default function getFullBudgetObject(income, gdp, capita) {
  const budget = getBudgetObject(income, gdp, capita);
  const fullBudget = {
    ...budget,
    getIncomeInDollars: function (income) {
      return `$${income}`;
    },
    getIncomeInEuros: function (income) {
      return `${income} euros`;
    },
  };

  return fullBudget;
}
  ```
</details>

<details>
  <summary>10. For...of Loops</summary>

  Rewrite the function `appendToEachArrayValue` to use ES6’s `for...of` operator. And don’t forget that `var` is not ES6-friendly.

  ```js
  export default function appendToEachArrayValue(array, appendString) {
  for (var idx in array) {
    var value = array[idx];
    array[idx] = appendString + value;
  }

  return array;
}
  ```
</details>

<details>
  <summary>11. Iterator</summary>

  Write a function named `createEmployeesObject` that will receive two arguments:

  - `departmentName` (String)
  - `employees` (Array of Strings)

  ```js
  export default function createEmployeesObject(departmentName, employees) {

}
  ```
  
  The function should return an object with the following format:

  ```js
 {
     $departmentName: [
          $employees,
     ],
}
  ```
</details>

<details>
  <summary>12. Let's create a report object</summary>

  Write a function named `createReportObject` whose parameter, `employeesList`, is the return value of the previous function `createEmployeesObject`.

  ```js
  export default function createReportObject(employeesList) {

}
  ```
  `createReportObject` should return an object containing the key `allEmployees` and a method property called `getNumberOfDepartments`.

  `allEmployees` is a key that maps to an object containing the department name and a list of all the employees in that department. If you’re having trouble, use the spread syntax.

  The method property receives `employeesList` and returns the number of departments. I would suggest suggest thinking back to the ES6 method property syntax.
  
  ```js
  {
    allEmployees: {
      engineering: [
        'John Doe',
        'Guillaume Salva',
      ],
    },
  };
  ```
</details>

### Advanced
<details>
  <summary>13. Iterating through report objects </summary>

  Write a function named `createIteratorObject` that will take into argument a report Object created with the previous function `createReportObject`.

  This function will return an iterator to go through every employee in every department.

  ```js
  export default function createIteratorObject(report) {

}
  ```
  Execution example:
  ```bash
  bob@dylan:~$ cat 100-main.js
  import createIteratorObject from "./100-createIteratorObject.js";

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
  }

  bob@dylan:~$
  bob@dylan:~$ npm run dev 100-main.js 
  Bob
  Jane
  Sylvie
  bob@dylan:~$
  ```
</details>

<details>
  <summary>14. Iterate through object</summary>

  Finally, write a function named `iterateThroughObject`. The function’s parameter `reportWithIterator` is the return value from `createIteratorObject`.

  ```js
  export default function iterateThroughObject(reportWithIterator) {

 }
  ```
  It should return every employee name in a string, separate by ` | `
  ```js
  {
  allEmployees: {
     engineering: [
          'John Doe',
          'Guillaume Salva',
     ],
  },
  ...
};
  ```
  Should return `John Doe | Guillaume Salva`

  Reminder - the functions will be _imported_ by the test suite.

  Full example:
  ```bash
  > employees = {
      ...createEmployeesObject('engineering', engineering),
      ...createEmployeesObject('design', design),
    };
  >
  > const report = createReportObject(employees);
  > const reportWithIterator = createIteratorObject(report);
  > iterateThroughObject(reportWithIterator)
  'John Doe | Guillaume Salva | Kanye East | Jay Li'
  > 
  ```
  Execution example:
  ```bash
  bob@dylan:~$ cat 101-main.js
  import createEmployeesObject from "./11-createEmployeesObject.js";
  import createReportObject from './12-createReportObject.js';
  import createIteratorObject from './100-createIteratorObject.js';
  import iterateThroughObject from './101-iterateThroughObject.js';


  const employees = {
      ...createEmployeesObject('engineering', ['Bob', 'Jane']),
      ...createEmployeesObject('marketing', ['Sylvie'])
  };

  const report = createReportObject(employees);
  const reportWithIterator = createIteratorObject(report);

  console.log(iterateThroughObject(reportWithIterator));

  bob@dylan:~$
  bob@dylan:~$ npm run dev 101-main.js 
  Bob | Jane | Sylvie
  bob@dylan:~$
  ```
</details>