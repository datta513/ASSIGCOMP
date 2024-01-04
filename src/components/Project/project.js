import {Link} from 'react-router-dom'
import Context from '../../Context/Contexrt'
import Header from '../Header/Header'
import Eachcom from './eachstyle'
import './sty.css'
const Project = () => (
  <Context.Consumer>
    {value => {
      const {projects} = value
      return (
        <div className="u">
          <Header />
          <h1 className="projhst">Projects</h1>
          {projects.length > 0
            ? projects.map(each => <Eachcom data={each} key={each.id} />)
            : ''}
        </div>
      )
    }}
  </Context.Consumer>
)

export default Project
