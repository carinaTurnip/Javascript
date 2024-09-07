/* 
The Document Object Model (DOM) is a programming interface 
for HTML documents. 
It represents the page so that programs can change 
the document structure, style, and content. 
The DOM represents the document as nodes and objects. 
That way, programming languages can connect to the page.
*/
const h1 = document.querySelector('h1')
const mainContentSection = document.querySelector('body')
console.log(document.querySelector('h1'))
h1.style.textDecoration = 'underline'
mainContentSection.style.color =  "red" //exercise 1

link.style.textDecoration = 'underline'
const link = document.querySelector('#fork')
link.style.textDecoration = 'underline'//exercise 2

/*
    In addition to selecting a single element, 
    we can also select multiple elements using 
    the querySelectorAll method. 
    This method takes a CSS selector as an argument 
    and returns a NodeList of elements that match the selector.
*/


