
//JSX- Java Script XML
const app = {
        title:'Indecision App',
        subTitle:'Nothing',
        options:['One']
}

const template = (
        <div>
            <h1>{app.title}</h1>
            {(app.subTitle) && <p>{app.subTitle}</p>}
            <ol>
                    {(app.options && app.options.length>0) && <li>Item {app.options[0]}</li>}
                    {(app.options && app.options.length>0) && <li>Item {app.options[1]}</li>}
            </ol>
            {(app.options && app.options.length>0) && <p>{app.options}</p>}
            {app.options.length>0?<p>Here are your options: {app.options}</p>:'No Options'}
        </div>

)
const user ={
    name: 'Yash',
    age : 17,
    location: 'Delhi'
}
function getLocation(location)
{
    if(location)
    {
       // return location
        return <p>Location: {location}</p>
    }
}
const template2 = (
        <div>
        <h1>{user.name?user.name:'Annonymous'}</h1> {/*ternanry operator*/ }
        {(user.age && user.age>=18)&& <p>{user.age}</p>} {/*logical and */}
      { /* <p>{getLocation(user.location)}</p>  way to comment in jsx:*/}
        {getLocation(user.location)}
        </div>
    )
const appRoot = document.getElementById('app')
ReactDOM.render(template,appRoot)

