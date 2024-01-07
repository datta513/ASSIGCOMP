import {Link} from 'react-router-dom'
import Context from '../../Context/Contexrt'
import {
  FaInstagramSquare,
  FaLinkedin,
  FaEnvelope,
  FaRegCopyright,
} from 'react-icons/fa'

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
          <div>
            <FaInstagramSquare className="iconsty" />
            <FaLinkedin className="iconsty" />
            <FaEnvelope className="iconsty" />
          </div>
          <p>
            Copyright <FaRegCopyright /> 2024 . All rights reserved
          </p>
        </div>
      )
    }}
  </Context.Consumer>
)

export default Project
