import React, {useState, useEffect} from "react";
import axios from 'axios'

import {
  Card, CardImg, CardText, CardBody, CardLink,
  CardTitle, CardSubtitle
} from 'reactstrap';

import NasaCard from './NasaCard'

function NasaList() {

  const [data, setData] = useState([])

  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=FkgMajnIigXby9xvFMSCcA9ntc4Nu4UmCdmvVLnz')
    .then((response) => {
      setData(response.data)

    })
  },[])

//   console.log(data)

  return (
    <div>

                <NasaCard 
                title={data.title}
                date={data.date}
                url={data.url}
                explanation={data.explanation}
                copyright={data.copyright}
                />

    </div>
  );
}

export default NasaList;
