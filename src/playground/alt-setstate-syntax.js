
class Counter extends React.Component {
    
    constructor (props)   
    {
        super(props)
        this.handleAddOne = this.handleAddOne.bind(this)
        this.handleMinusOne = this.handleMinusOne.bind(this)
        this.handleReset = this.handleReset.bind(this)
        this.state = {    // setting up default state object
            count : 0
        }
       

    }
    
    handleAddOne ()
{
    this.state.count = this.state.count + 1 //it doesnt work as manually updating the value of object happens but 
    this.setState((prevState) => //specialised method for setting up state
    {
        return {
            count: prevState.count + 1
        }
        
    })
    
}    
    handleMinusOne ()
    {
        this.setState((prevState) => //specialised method for setting up state
    {
        return {
            count: prevState.count - 1
        }
        
    })
    }

    handleReset()
    {   
    //     this.setState((prevState) => //specialised method for setting up state
    // {
    //     return {
    //         count: 0
    //     }
        
    // })
    this.setState ({
        count  :this.state.count + 1
    })
    }
      render() {
        
        return (
            <div>
        <h1>Count : {this.state.count} </h1>
        <button onClick={this.handleAddOne}>+1</button>
        <button onClick={this.handleMinusOne}>-1</button>
        <button onClick={this.handleReset}>reset</button>
        </div>
        )
    }
}

const appRoot = document.getElementById('app');
ReactDOM.render(<Counter />,appRoot)