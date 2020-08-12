import React, {useState, useEffect} from "react";
import axios from 'axios'

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
        <ul>
                <NasaCard 
                url={data.url}
                title={data.title}
                date={data.date}
                explanation={data.explanation}
                copyright={data.copyright}
                />

        </ul>
    </div>
  );
}

export default NasaList;
