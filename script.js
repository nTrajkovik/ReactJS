let simplejs = document.getElementById("simplejs");
let reactjs = document.getElementById("reactjs");

simplejs.innerHTML = `
<div class="demo">
    Hello from JS
    <input type="text">
    <p>${new Date().toString()}</p>
</div>
`;

ReactDOM.render(
    React.createElement(
        'div',
        {className: "demo"},
        `Hello from reactJS`,
        React.createElement(
            'input',
            {type: "text"}
        ),
        React.createElement(
            'p',
            null,
            new Date().toString()
        )
        
    ),
    reactjs
);

setInterval(crender, 2000);