# doveTailCodingChallenge

## Introduction

The task is to write a script in Python to find out how many Sundays fell on the first of the month during the twentieth century (1 Jan 1901 to 31 Dec 2000).

## JavaScript Solution

To run the JavaScript solution, first install Node.js by following these steps:

1. Install Homebrew by running this command in the terminal:

```
/bin/bash -c "$(curl -fsSL <https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh>)"

```

2. Install Node.js by running this command in the terminal:

```
brew install node

```

Then, navigate to the `jsSolution` directory and run the following command in the terminal:

```
node sundaysOfFirstMonthCounter.js

```

## Installation

First, ensure that you have Jest installed in your project. You can install Jest by running the following command:

```
npm install --save-dev jest

```

## Running the JS Tests

Once Jest is installed, you can run the tests by following these steps:

1. Create a file called `sundaysOfFirstMonthCounter.test.js` in the same directory where `sundaysOfFirstMonthCounter.js` is located.
2. Copy the test code shown above into `sundaysOfFirstMonthCounter.test.js`.
3. In your terminal, navigate to the directory where the tests are located.
4. Run the following command in your terminal:

```
npx jest sundaysOfFirstMonthCounter.test.js

```

1. Jest will now run the tests and return the results in your terminal.

## Python Solution

To run the Python solution, navigate to the `python-solution` directory and run the following command in the terminal:

```
python3 <filename>

```

Replace `<filename>` with the name of the Python file containing the solution code (e.g. `sundaysOfFirstMonthCounter.py`).

## Running the Python Tests

To run the tests in the terminal, follow the steps below:

1. Open the terminal on your computer.
2. Navigate to the directory where the file '[sundaysOfFirstMonthCounter.py](http://sundaysoffirstmonthcounter.py/)' is saved i.e. ‘pythonExample’.
3. Run the following command to install pytest, if you haven't already:

   ```
   pip install pytest

   ```

4. After the installation is successful, run the following command to execute the tests:

   ```
   pytest -q {name_of_test_file.py}

   ```

   Note: Replace {name_of_test_file.py} with the actual name of the file in which the tests are saved. In this case, it is 'test_sundaysOfFirstMonthCounter.py'.

5. After running the above command, you should see the output of the tests in the terminal. If all the tests pass, you should see something like this:

   ```
   ..........
   ----------------------------------------------------------------------
   Ran 10 tests in 0.001s

   OK

   ```

   When a test fail, you will see an error message indicating which test(s) failed and what the expected output was.

## Conclusion

Both solutions provide the same output and have been tested using their respective testing frameworks
