class Visiblity extends React.Component {

    constructor(props)
    {
        super(props)
        this.handleToggleVisiblity = this.handleToggleVisiblity.bind(this) // needed for accessing setstate inside the fn
        this.state = {
            visibility : false
        }
    }

    handleToggleVisiblity ()
    {
        this.setState((prevState) => //specialised method for setting up state
        {     
            return {
                visibility: !prevState.visibility
        
            }
            
        })   
    }
    render() {
        return (
        <div>
        <h1>Visibility Toggle</h1>
        <button onClick={this.handleToggleVisiblity}>{/* accessing the current value of variable set is constructor */this.state.visibility?'Hide Details':'Show Details'}</button>
        {this.state.visibility && (
            <div>
            <p> Hey.These are some details</p>
            </div>
        )}
        </div>
        )
    }

   

}
const appRoot = document.getElementById('app');
ReactDOM.render(<Visiblity />,appRoot)