class IndecisionApp extends React.Component{ //parent component
   

    render() {
        const title = 'Indecision'
        const subtitle = 'Put your life in the hands of the computer'
        return (
            <div>
            <Header title={title} subtitle={subtitle} />
            <Action />
            <Options />
            <AddOption />
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
    render(){
        return <button>What Should I Do</button>
    }
}
class Options extends React.Component {
    render(){
        return (
            <div>
            <p>Options Component</p>
            <Option />
            </div>
        )
    }
}

class Option extends React.Component {
    render() {
        return (
            <div>
            <p>Option 1</p>
            </div>
        )
    }
}

class AddOption extends React.Component {
    render() {
        return (
            <div>
            <p>Add Options</p>
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