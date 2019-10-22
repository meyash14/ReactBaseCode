


var appRoot = document.getElementById('app')

let Visibility = false
const toggleVisibility = () =>
{
    Visibility = !Visibility
    render()
}

const render = () =>
{
    const jsx = (
        <div>
        <h1>Visibility Toggle</h1>
        <button onClick={toggleVisibility}>{Visibility?'Hide Details':'Show Details'}</button>
        {Visibility && (
            <div>
            <p> Hey.These are some details</p>
            </div>
        )}
        </div>
    )
    ReactDOM.render(jsx,appRoot)
}

render()










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