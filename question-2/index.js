/*
* Question 2: Promises
● Given the script file callbacks.js, write a script that does the following:
- Create a method resolvedPromise that is similar to
delayedSuccess and resolves a message after a timeout of 500ms.
- Create a method rejectedPromise that is similar to
delayedException and rejects an error message after a timeout of
500ms.
- Call both promises separately and handle the resolved and reject
results and then output to the console
*/
const resolvePromise = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ message: 'delayed success!' });
        }, 500);
    });
};


const rejectPromise = () => {
    return new Promise((_, reject) => {
        setTimeout(() => {
            reject({ error: 'delayed exception!' });
        }, 500);
    });
};

resolvePromise()
    .then(res => console.log(res))
    .catch(err => console.log(err));

rejectPromise()
    .then(res => console.log(res))
    .catch(err => console.log(err));