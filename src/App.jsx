import { useEffect, useState } from 'react'
import { Form } from './Form/Form';
import { Details } from './Details/Details';
import { Api } from './Services/Api';
import {Loader} from '../../crud/src/components/Loader'
import {Message} from '../../crud/src/components/Message';
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
        let res = await api.get(endpoint);      
        if (res.meals) {                
          let [meals] = res.meals;            
          setSearch(meals);           
        }        
        setLoading(false);          
      }
    }
    
    fetchData();
    
  },[plato])

  return (    
    <>
      <h1>Recetas de cocina</h1>
      <Form QueryData={QueryData}/>
      {loading && <Loader />}
      {search.meals == null ? <Message msg={`No hay info`} bgColor='#dc3545' /> : ''}      
      {search && !loading && <Details search={search} />}      
    </>
  )
}

export default App
