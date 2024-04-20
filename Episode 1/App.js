const heading = React.createElement(
  "h1",
  { id: "title" },
  "Hello I am Learing React"
);

//Example of the Nested Html structure inside the React Application
const parent = React.createElement(
  "parent",
  { id: "parent" },
  React.createElement("child", { id: "child" }),
  [
    React.createElement("h1", { id: "title" }, "Ema the h1 tag"),
    React.createElement("h3", {}, "Ema the h3 tag!"),
  ] //This is the array of children
);

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
root.render(parent);

// Render = React element is a JavaScript Object which after using the keyword render will be converted to HTML
// that the Browser understands

//Creating 2 children under the same parent
const parentMum = React.createElement("parentMum", {}, [
  React.createElement("child1", {}, [
    React.createElement("h1", {}, "ema the h1 here"),
    React.createElement("h2", {}, "me the h2"),
  ]),
  React.createElement("child2", {}, [
    React.createElement("h3", {}, "me the h3"),
    React.createElement("h4", {}, "me the h4"),
  ]),
]);

root.render(parentMum);

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

function x(y) {
  y();
  console.log("iam in x");
}
x(function y() {
  console.log("Hi Iam inside the y function");
});
