class IndecisionApp extends React.Component{ //parent component
   

    render() {
        const title = 'Indecision'
        const subtitle = 'Put your life in the hands of the computer'
        const options = ['One','Two']
        return (
            <div>
            <Header title={title} subtitle={subtitle} />
            <Action />
            <Options options={options} />
            <AddOption options={options} />
            </div>
        )
    }
}

class Header extends React.Component  { //with react components uppercase is reqd otherwise it wont render
    render (){
        return (
            <div>
            
            <h1>{this.props.title}</h1>
            <h2>{this.props.subtitle}</h2>
            </div>
        )
    }
}

class Action extends React.Component {
    handlePick()
    {

    }

    render(){
        return <button onClick={this.handlePick}>What Should I Do</button>
    }
}
class Options extends React.Component {
    handleRemoveAll()
    {

    }
    render(){
        return (
            <div>
            <p>{this.props.options.length}</p>
            
            {
                this.props.options.map((option) => <Option key={option} optionText={option} />)
            }
            {/* setting key is mandatory but key is reserved so not gonna be avaliable down below*/}
           {/* <Option length={this.props.options.length} /> */}
           <button onClick={this.handleRemoveAll}>RemoveAll</button>
            </div>
        )
    }
}

class Option extends React.Component {
    render() {
        return (
            <div>
            <p>{this.props.optionText}</p>
            
            </div>
        )
    }
}

class AddOption extends React.Component {
    handleAddOption(e)
    {
        e.preventDefault()
        const option = e.target.elements.option.value.trim()
        if(option)
        {
            this.props.options.push(option)
            e.target.elements.option.value= ''
        }
        
    }
    render() {
        return (
            <div>
            <form onSubmit={this.handleAddOption}>
            <input type="text" name="option"></input>
            <button>Submit</button>
            </form>
            </div>
            )
    }
}
// const jsx = (
//     <div>
//     <h1>Title</h1>
//     <Header/>
//     <Action /> {/*common spacing convention*/}
//     <Options />
//     <AddOptions />
//     </div>
// )

ReactDOM.render(<IndecisionApp />,document.getElementById('app'))