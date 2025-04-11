import { use, useState } from 'react'
import { Form } from './Form/Form';
import { Details } from './Details/Details';
import { Api } from './Services/Api';
let url = 'www.themealdb.com/api/json/v1/1/search.php?s=';

function App() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState(null);
  const [loading, setLoading] = useState(true);  
  const [plato, setPlato] = useState({});

  let api = Api();

  function QueryData(datos){    
    setPlato(datos);
    let endpoint = `${url}${plato.nombre}`;    
    api.get(endpoint).then((res)=>{
      if (res.ok) {
        console.log(res);
      }
    })
  }

  return (    
    <>
      <Form QueryData={QueryData}/>
      <Details />
    </>
  )
}

export default App
