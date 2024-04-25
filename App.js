import React from "react"; // this react is coming from the node modules
import ReactDOM from "react-dom";
// const heading = React.createElement(
//   "h1",
//   { id: "title" },
//   "Hello I am Learing React"
// );

// //Example of the Nested Html structure inside the React Application
// const parent = React.createElement(
//   "parent",
//   { id: "parent" },
//   React.createElement("child", { id: "child" }),
//   [
//     React.createElement("h1", { id: "title" }, "Ema the h1 tag"),
//     React.createElement("h3", {}, "Ema the h3 tag!"),
//   ] //This is the array of children
// );

// const root = ReactDOM.createRoot(document.getElementById("root"));
// // root.render(heading);
// root.render(parent);

// // Render = React element is a JavaScript Object which after using the keyword render will be converted to HTML
// // that the Browser understands

// //Creating 2 children under the same parent
// const parentMum = React.createElement("div", { id: "parentMum" }, [
//   React.createElement("div", { id: "child1" }, [
//     React.createElement("h1", {}, "Hello Iam React"),
//     React.createElement("h2", {}, "me the h2"),
//   ]),
//   React.createElement("div", { id: "child2" }, [
//     React.createElement("h3", {}, "me the h3"),
//     React.createElement("h4", {}, "me the h4"),
//   ]),
// ]);
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parentMum);

// function x() {
//   console.log("Nmamaste JavaScript");
//   for (let i = 1; i <= 5; i++) {
//     setTimeout(function () {
//       console.log(i);
//     }, i * 1000);
//   }
//   console.log("Nmamaste JavaScript");
// }
// x();

// function x() {
//   for (var i = 1; i <= 5; i++) {
//     function close(x) {
//       setTimeout(function () {
//         console.log(x);
//       }, i * 1000);
//     }
//     close(i);
//   }
//   console.log("Hi Iam Here");
// }
// x();

// function x(y) {
//   y();
//   console.log("iam in x");
// }
// x(function y() {
//   console.log("Hi Iam inside the y function");
// });

//JSX => Babel transpiles it to the React.createElement => ReactElement-JS Object => HTMLElement(render)
const jsxHeading = <h1>Namaste React iam Learing</h1>;
console.log(jsxHeading);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxHeading);

const Title = () => (
  <h1 className="title" tabIndex="5">
    Heyyy React
  </h1>
);

//React is made up of components - ie. Everything in React is a component
//There are 2 types of components - 1. Class Component, 2. Functional Component

//Functional Component - is a function that returns a JSX Code

//React Functional Component
const HeadingComponent = () => {
  return <h1>Hello World</h1>;
};

const elem = <h2>Iam elem react element and inside title</h2>;
const title = (
  <div>
    {elem}
    <h1 className="title">Iam the React Element</h1>
  </div>
);

//This is called Component Composition
const HeadingComp = () => (
  <h1 className="heading">
    <Title />
    {title}
    <HeadingComponent />
    Another way same thing:o
  </h1>
);

root.render(<HeadingComponent />);
root.render(<HeadingComp />);
