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
                        LinkedIn
                      </button>
                    </div>
                  </div>
                  <div className="div2">
                    <img
                      src="https://images.unsplash.com/photo-1548384394-ba607603e3b1?w=320&h=427&fit=crop"
                      height="80%"
                      width="50%"
                    />
                  </div>
                </div>
              </div>
              <div className="formsty">
                <h1>
                  Ad<span className="hsty">d Pro</span>jects
                </h1>
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
                    <textarea
                      className="inpsty"
                      value={Description}
                      onChange={this.Dchan}
                      id="desc"
                      cols={4}
                      rows={4}
                    />
                  </div>
                  <div className="buttonstyle">
                    <button type="submit" onClick={sub}>
                      Add
                    </button>
                  </div>
                </form>
              </div>
              <div className="end"></div>
            </div>
          )
        }}
      </Context.Consumer>
    )
  }
}
