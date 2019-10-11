let count=0
    const addOne = () => {
        count++
        render()
    }
    const minusOne = () => {
        count--
        render()
    }
  
    const reset = () => {
        count = 0
        render()
    }

var appRoot = document.getElementById('app')
{/* made a re-rendering fn as react uses virtual dom algo for each time a change is done it re renders that part so its updated on ui without re rendering full page*/}
const render = () =>
{
    const templateTwo = (
        <div>   {/* need wrapper div as JSX does not allow  . adjacent JSX elements musr be wrapped in an enclosing tag*/}
            <h1>Count: {count}</h1>
            {/*<button id = "my-id" className="button">+1</button>*/} {/* html class is a reserved word in js so className*/}
            <button onClick={addOne}>+1</button>
            <button onClick={minusOne}>-1</button>
            <button onClick={reset}>reset</button>
        </div>
    
      );
      ReactDOM.render(templateTwo,appRoot)
}
  render()