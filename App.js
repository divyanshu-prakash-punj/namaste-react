// const heading = React.createElement("h1", {id:"heading",xyz:"abc"}, "Hello World from React !");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

/**
 * task to create a nested html like :
 *
 * <div id="parent">
 *      <div id="child1>
 *          <h1> I am H1 tag from Child 1</h1>
 *          <h2> I am H2 tag from Child 1</h2>
 *      </div>
 *      <div id="child2>
 *          <h1> I am H1 tag from Child 2</h1>
 *          <h2> I am H2 tag from Child 2</h2>
 *      </div>
 * </div>
 */

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "I am H1 tag from Child 1"),
    React.createElement("h2", {}, "I am H2 tag from Child 1"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I am H1 tag from Child 2"),
    React.createElement("h2", {}, "I am H2 tag from Child 2"),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);
setInterval(function () {root.render(parent)}, 10000);