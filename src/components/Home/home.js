import {Component} from 'react'
import {Link, Redirect} from 'react-router-dom'
import {v4} from 'uuid'
import Header from '../Header/Header'
import './Homestyle1.css'
import Context from '../../Context/Contexrt'

export default class Home extends Component {
  state = {projectName: '', ProjectLink: '', Description: '', projects: []}

  userchan = event => {
    this.setState({projectName: event.target.value})
  }

  Dchan = event => {
    this.setState({Description: event.target.value})
  }

  PLchan = event => {
    this.setState({ProjectLink: event.target.value})
  }

  clear = () => {
    this.setState({
      projectName: '',
      ProjectLink: '',
      Description: '',
      projects: [],
    })
  }
  trig = () => {
    console.log('goto project')
    const {history} = this.props
    history.push('/projects')
  }
  trigL = () => {
    console.log('goto project')
    const {history} = this.props
    history.push('')
  }
  render() {
    const {projectName, ProjectLink, Description, projects} = this.state
    return (
      <Context.Consumer>
        {value => {
          const {change} = value
          const sub = event => {
            event.preventDefault()
            const {projectName, ProjectLink, Description} = this.state
            const data = {
              id: v4(),
              projectName: projectName,
              ProjectLink: ProjectLink,
              Description: Description,
              imgur: 'project',
            }
            this.clear()
            change(data)
          }

          return (
            <div className="main">
              <div>
                <Header />
                <div className="div0">
                  <div className="div1">
                    <h2>UI/UX designer</h2>
                    <h1>Hello,my name is Madelyn Torff</h1>
                    <p>
                      Short text with details about you, what you do or your
                      professional carrer. You can add more information on about
                      page.
                    </p>
                    <div>
                      <button type="button" onClick={this.trig} className="lib">
                        Projects
                      </button>
                      <button
                        className="lib"
                        type="button"
                        onClick={this.trigL}
                      >
                        <a
                          href="https://www.linkedin.com/in/sri-harsha-samavedam-08a369194/"
                          target="_blank"
                        >
                          LinkedIn
                        </a>
                      </button>
                    </div>
                  </div>
                  <div className="div2">
                    <img
                      src="https://static.vecteezy.com/system/resources/previews/024/602/602/non_2x/autumn-natural-background-illustration-ai-generative-free-photo.jpg"
                      height="50%"
                      width="50%"
                    />
                  </div>
                </div>
              </div>
              <div className="formsty">
                <h1 className="hsty">Add Projects</h1>
                <form>
                  <div>
                    <label htmlFor="username" className="labelg">
                      Project Name
                    </label>
                    <br />
                    <input
                      type="text"
                      className="inpsty"
                      value={projectName}
                      onChange={this.userchan}
                      id="username"
                    />
                  </div>
                  <div>
                    <label htmlFor="link" className="labelg">
                      Project Link
                    </label>
                    <br />
                    <input
                      type="text"
                      className="inpsty"
                      value={ProjectLink}
                      onChange={this.PLchan}
                      id="link"
                    />
                  </div>
                  <div>
                    <label htmlFor="desc" className="labelg">
                      Description
                    </label>
                    <br />
                    <input
                      type="text"
                      className="inpsty"
                      value={Description}
                      onChange={this.Dchan}
                      id="desc"
                    />
                  </div>
                  <div className="buttonstyle">
                    <button type="submit" onClick={sub}>
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )
        }}
      </Context.Consumer>
    )
  }
}
