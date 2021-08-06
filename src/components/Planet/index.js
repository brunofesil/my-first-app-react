import React, { useState, useEffect } from "react";
import GrayImg from "../shared/gray_img";
import DescriptionLink from "../shared/description_with_link";
import Form from "./form";
import { useParams, useHistory, Redirect } from 'react-router-dom'

async function getPlanet(id) {
  let response = await fetch(`http://localhost:3000/api/${id}.json`)
  let data = await response.json()
  return data;
}

const Planet = () => {
  const [satellites, setSatellites] = useState([])
  const [planet, setPlanet] = useState({})
  const [redirect, setRedirect] = useState(false)

  let { id } = useParams()
  let history = useHistory()

  useEffect(() => {
    getPlanet(id).then(data => {
      setSatellites(data['satellites'])
      setPlanet(data['data'])
    }, error => {
        setRedirect(true)
    })
  }, [])

  const addSatellite = (new_satellite) => {
    setSatellites([...satellites, new_satellite])
  }

  const goToHome = () => {
    history.push('/')
  }

  let title;
  if (planet.title_with_underline) {
    title = <h4><u>{planet.name}</u></h4>
  } else {
    title = <h4>{planet.name}</h4>
  }

  if(redirect)
    return <Redirect to='/'/>

  return (
    <div>
      {title}
      <GrayImg img_url={planet.img_url} gray={planet.gray} />
      <DescriptionLink description={planet.description} link={planet.link} />
      <h4>Satélites:</h4>
      <hr/>
      <Form addSatellite={addSatellite}/>
      <hr/>
      <ul>
        {satellites.map((satellite, index) =>
          <li key={index}>{satellite.name}</li>
        )}
      </ul>
      <hr/>
      {/* <Link to='/'>Voltar by link</Link> */}
      <button type="button" onClick={goToHome}>Home</button>
    </div>
  )
}

export default Planet;