
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
    // in the following syntax if do add say to 10 and then add 1 in the current state it goes to 11.React renders only whats changed for min render using Virtual DOM and thus 
    // this.setState count 0 although makes it zero it doesnt get used in this.state.count as it uses prev state being 10. 
    this.setState ({
        count : 0
    })
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