const heading = React.createElement("h1", { style: { color: "red" } }, "hello everyone this is h1");
const heading2 = React.createElement("h2", { style: { background: "yellow" } }, "hello everyone this is h2");
const divElement = React.createElement("div", { id: "container" }, [heading, heading2]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(divElement);