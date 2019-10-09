//alert ('Hello from external JS file');

/* multiple lines comment
Alert() produces output in an alert box
document.write() produces on the browser window
*/

document.write('Greetings from document.write()');

 console.log('Hi, I am happy to help you with debugging');
 console.log('you can\'t delete me');

 //not a secured way
document.getElementById('heading').innerHTML += "</br>Learning JS , produced by innerHTML</br>";

//secured but reduced performance
document.getElementById('heading').innerText += 'Hi, I am produced by innerText';

//secured and increased performance
document.getElementById('heading').textContent += 'Hello from textContent'