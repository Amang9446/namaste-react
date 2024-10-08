const heading = React.createElement(
  "div",
  {
    id: "image",
  },
  [
    [
      React.createElement("tabel", {}, [
        React.createElement("tr", {}, [
          React.createElement("th", {}, "Company"),
          React.createElement("th", {}, "Contact"),
          React.createElement("th", {}, "Country"),
        ]),
        ,
        React.createElement("tr", {}, [
          React.createElement("td", {}, "Alfreds Futterkiste"),
          React.createElement("td", {}, "Maria Anders"),
          React.createElement("td", {}, "Germany"),
        ]),
        React.createElement("tr", {}, [
          React.createElement("td", {}, "Centro comercial Moctezuma"),
          React.createElement("td", {}, "Francisco Chang"),
          React.createElement("td", {}, "Mexico"),
        ]),
      ]),
    ],
  ]
);
const root = ReactDOM.createRoot(document.getElementById("aman"));
console.log(root);
root.render(heading);
