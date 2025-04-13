import { useEffect, useState } from 'react'
import { Form } from './Form/Form';
import { Details } from './Details/Details';
import { Api } from './Services/Api';
import {Loader} from '../../crud/src/components/Loader'
let url = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';

function App() {
  const [search, setSearch] = useState(null);  
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
        api.get(endpoint).then((res)=>{      
        if (res.meals) {                
          let [meals] = res.meals;            
          setSearch(meals);           
        }
        });
        setLoading(false);          
      }
    }
    
    fetchData();
    
  },[plato])

  return (    
    <>
      <h1>Recetas de cocina</h1>
      {loading && <Loader />}
      <Form QueryData={QueryData}/>
      {search && <Details search={search}/>}
    </>
  )
}

export default App
