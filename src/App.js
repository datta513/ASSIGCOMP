import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'
import {Component} from 'react'
import Context from './Context/Contexrt'
import Home from './components/Home/home'
import Con from './components/Contacts'
import About from './components/About/About'
import Project from './components/Project/project'

export default class App extends Component {
  state = {
    projects: [
      {
        id: 1,
        projectName: 'FOOD',
        ProjectLink: 'https://harsafoodmunch.ccbp.tech',
        Description:
          'its a web application developed by using html and css for providing food for delivery of food',
        imgur:
          'https://static.toiimg.com/thumb/msid-101282760,imgsize-252432,width-400,resizemode-4/101282760.jpg',
      },
      {
        id: 2,
        projectName: 'TODO',
        ProjectLink: 'https://harsa1todo.ccbp.tech',
        Description:
          'its a web application developed by using html and css for providing todo list activites',
        imgur:
          'https://cdn.pixabay.com/photo/2020/01/21/18/39/todo-4783676_640.png',
      },
    ],
  }
  chan = data => {
    this.setState(prev => ({projects: [...prev.projects, data]}))
  }
  render() {
    const {projects} = this.state
    console.log(projects)
    return (
      <Context.Provider value={{projects, change: this.chan}}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/Projects" component={Project} />
            <Route path="/About" component={About} />
            <Route path="/Contscts" component={Con} />
          </Switch>
        </BrowserRouter>
      </Context.Provider>
    )
  }
}
