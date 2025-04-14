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
    setSearch();
    if(plato === null) return;    
    const fetchData = async () => {      
      if(plato != undefined){
        let {nombre} = plato 
        let endpoint = `${url}${nombre}`;        
        setLoading(true);        
        let res = await api.get(endpoint);         
        if (res.meals!=null) {                
          let [meals] = res.meals;            
          setSearch(meals);           
        }else{                
          setSearch();
        }        
        setLoading(false);          
      }
    }
    
    fetchData();
    
  },[plato])

  return (    
    <>
      <h1>Recetas de cocina</h1>
      <article className='grid-1-2'>
        <Form className="form" QueryData={QueryData}/>
        {loading && <Loader className="loader"/>}   
        {!loading && <Details className="details" search={search} />}           
      </article>                  
    </>
  )
}

export default App
