import { useEffect, useState } from 'react'
import { Form } from './Form/Form';
import { Details } from './Details/Details';
import { Api } from './Services/Api';
import {Loader} from '../../crud/src/components/Loader'
let url = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';

function App() {
  const [data, setData] = useState({});  
  const [loading, setLoading] = useState(false);  
  const [plato, setPlato] = useState();

  let api = Api();

  function QueryData(datos){    
    setPlato(datos);    
  }

  useEffect(()=>{
    
    if(plato === null) return;    
    const fetchData = async () => {      
      if(plato != undefined){
        let {nombre} = plato 
        let endpoint = `${url}${nombre}`;        
        setLoading(true);                      
        await api.get(endpoint).then((res)=>{      
        if (res) {          
          let [meal] = res.meals;          
          setData(meal);                   
        }
        });
        setLoading(false);        
      }
    }
    
    fetchData();
    
  },[plato])

  return (    
    <>
      <h2>Buscador de recetas de cocina</h2>
      {loading && <Loader />}
      <Form QueryData={QueryData}/>
      <Details search={data}/>
    </>
  )
}

export default App
