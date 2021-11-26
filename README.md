# React-firebase-course
NORMAL- When a request is sent to the server, server renders a HTML page to the browser and if any another request is made from that page(going to the link), ther server will render a new page for that request but in REACT- the server gives only one html page and REACT will just swap contents for other request made.

In the Banner func we write jsx which is converted by babble into old js(as browser doesnt understand jsx)give it to dom.
  1.there is no class in jsx but className
  2.There is only one parent tag in jsx

The regular variables in the javascript doesnt trigger changes as a change in variable doesnt reevaluate or run the whole function and so that change is not shown on the web page..thus states are used.
useState returns an array 

When the server starts index.js file run first and render to dom but before rendering to dom, the app.js file needs to be evaluated and compiled.Once compiled, we have a js tree type representation of jsx template and then passed to dom, and js dom manipulation looks at this tree and inject into webpage in form of html. React uses virtual dom(tree like structure) while updating template and this is when component state changes and triggers the component to be revaluated.React compares the virtual dom with a new one and only updates the change.

App component(parent) can pass data to the child compnent (Title). There can be different title page having same layout but different text so in the app function can pass args to the title function in the form of props.
As jsx needs to have a parent tag, it can cause errors sometime (div tag of title is imported in app) so fragments are used which are basically emoty tags <></> if no key is there in the tag and React.Fragment are used if there are props in the parent div. fragments wont let the content be in a div tag.
Portals put the componnt somewhere else.
REFS - https://blog.logrocket.com/why-you-should-use-refs-sparingly-in-production/
