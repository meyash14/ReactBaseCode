'use strict';

var appRoot = document.getElementById('app');

var Visibility = false;
var toggleVisibility = function toggleVisibility() {
    Visibility = !Visibility;
    render();
};

var render = function render() {
    var jsx = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            'Visibility Toggle'
        ),
        React.createElement(
            'button',
            { onClick: toggleVisibility },
            Visibility ? 'Hide Details' : 'Show Details'
        ),
        Visibility && React.createElement(
            'div',
            null,
            React.createElement(
                'p',
                null,
                ' Hey.These are some details'
            )
        )
    );
    ReactDOM.render(jsx, appRoot);
};

render();

// const showDetails = () => {
//     render1()
// }

// const hideDetails = () => {
//     render()
// }
// const render = () => {
//     const template = (
//         <div>
//         <h1>Visiblity Toggle</h1>
//         <button onClick={showDetails}>Show Details</button>
//         </div>

//     )
//     ReactDOM.render(template,appRoot)
// }

// const render1 = () => {
//     const template = (
//         <div>
//         <h1>Visiblity Toggle</h1>
//         <button onClick={hideDetails}>Hide Details</button>
//         <p> Here are some details</p>
//         </div>

//     )
//     ReactDOM.render(template,appRoot)
// }

// render()
