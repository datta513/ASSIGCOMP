import './sty.css'
const Eachcom = props => {
  const {data} = props
  const {ProjectLink} = data
  return (
    <div className="contm">
      <div className="cont1">
        <h1>{data.projectName}</h1>
        <p>{data.Description}</p>

        <a href={ProjectLink} target="_blank">
          View project
        </a>
      </div>
      <div className="cont2">
        <img src={data.imgur} height="70%" width="100%" alt={data.imgur} />
      </div>
    </div>
  )
}

export default Eachcom
