const TOPIC = "Automate the Boring Stuff Workbook, Chapter 5 - Debugging";
let JUSTIFICATION = "left"; // "left", "right", or "center"
let FLASHCARDS = [
  ["What happens if you run the following program and press ENTER instead of entering a name?<br><pre>print('Enter your name:')\nname = input()\nif name == '':\n    raise Exception('You did not enter a name.')\nelse:\n    print('Hello,', name)</pre>", "The program crashes with the exception message \"You did not enter a name.\""],
  ["Write the code that raises an Exception error with the error message 'An error happened. This error message is vague and unhelpful.'", "<code>raise Exception('An error happened. This error message is vague and unhelpful.')</code>"],
  ["True or false: A raise statement must be inside a try block.", "False. A raise statement can be anywhere."],
  ["What happens if you run the following program and press ENTER instead of entering a name?<br><pre>def get_name():\n    print('Enter your name:')\n    name = input()\n    if name == '':\n        raise Exception('You did not enter a name.')\n\n    return name\n\ntry:\n    name = get_name()\nexcept:\n    name = 'Guido'\n\nprint('Hello,', name)</pre>", "The program prints 'Hello, Guido.' This is because the try block catches the raised exception, then runs the code in the except block, which assigns the name variable the value 'Guido'."],
  ["\"While exceptions are for user errors, assertions are for ____ errors.\"", "Assertions are for programmer errors."],
  ["Why is failing fast a good thing?", "Failing fast is a good thing because it reduces the time between the true cause of a bug and when the bug is first noticed, making the true cause easier to find and fix."],
  ["Which command line argument to the Python interpreter suppresses assertion checks when running a program?", "The -o command line argument suppresses assertion checks."],
  ["What does <code>assert False</code> do?", "An assert False statement will always raise an assertion error if executed, because the condition is always False."],
  ["Alice writes a program with several print() calls for debugging information instead of using the logging module. After she's done programming, she starts removing these print() calls. What are two possible mistakes she could make while removing them?", "Using print() calls instead of the logging module could later result in accidentally leaving in some of the debugging print() calls or accidentally removing non-debugging print() calls."],
  ["What logging level should you use for an error that causes a failure that makes the program crash with no chance of recovery?", "CRITICAL."],
  ["What logging level should you use when a particular function in your program, calculate_my_result(), is called?", "DEBUG, or possibly INFO."],
  ["What logging level should you use when the program logs the value of a particular variable?", "DEBUG."],
  ["What logging level should you use when the user requests that the program open a file, but the file doesn't exist?", "ERROR, or possibly WARNING."],
  ["What logging level should you use when the program detects that a calculation is wrong but is able to continue running?", "ERROR, or possibly WARNING."],
  ["What logging level should you use when the program starts running and needs to record the time and date at which it started?", "INFO, or possibly DEBUG."],
  ["What logging level should you use when the program keeps track of how many times a while loop had looped before exiting?", "DEBUG."],
  ["What logging level should you use when the program logs the string the user entered for an input() call?", "DEBUG, or possibly INFO."],
  ["What do you do if you want the program to run at normal speed, then pause and start the debugger once the execution reaches a particular line of code?", "Set a breakpoint on that particular line of code."],
  ["If the debugger is currently paused on a line of code within a function and you want it to run the rest of the code in the function at normal speed, then pause once the execution has returned from the function, which debugger button should you press?", "Step Out."],
  ["Which button should you press if the debugger is currently paused on a line of code and you want it to resume running at normal speed?", "Continue."],
  ["If the debugger is currently paused on a line of code, how can you immediately terminate the program?", "Stop or Quit (the label varies between debuggers)."],
  ["If the debugger is currently paused on a line of code that is a function call, which debugger button would cause the debugger to pause on the first line in that function?", "Step In or Step Into (the label varies between debuggers)."],
  ["If the debugger is currently paused on a line of code that is a function call, and you want to run all the code inside that function at normal speed, then pause again when the execution has returned from the function, which debugger button should you press?", "Step Over."]
];
