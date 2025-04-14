import React from "react";
import {Message} from '../../../crud/src/components/Message';

export const Details = ({search}) => {   
    if(!search){
        return(
            <section>
                <Message msg={`No hay info`} bgColor='#dc3545' />
            </section>
        )
    }else{
        return(        
            <section>        
                <h1>Ingredientes y preparación</h1>
                <h2>Nombre: {search.strMeal}</h2>
                <section>
                    <article>Categoría: {search.strCategory}</article>
                    <article>Tipo: {search.strTags}</article>
                    <article>Procedencia: {search.strArea}</article>
                    <article>Instrucciones: {search.strInstructions}</article>
                    <picture>
                        <img src={search.strMealThumb} alt={search.strMeal} />                    
                    </picture>                
                    <iframe width={560} height={315} src={search.strYoutube} frameBorder={0}
                    allow="acelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
                </section>
                <h2>Ingredientes y medidas</h2>
                <section>
                    <article>
                        <ul>
                            {search.strIngredient1 && search.strMeasure1 && <li>{search.strMeasure1} {search.strIngredient1}</li>}
                            {search.strIngredient2 && search.strMeasure2 && <li>{search.strMeasure2} {search.strIngredient2}</li>}
                            {search.strIngredient3 && search.strMeasure3 &&<li>{search.strMeasure3} {search.strIngredient3}</li>}
                            {search.strIngredient4 && search.strMeasure4 && <li>{search.strMeasure4} {search.strIngredient4}</li>}
                            {search.strIngredient5 && search.strMeasure5 && <li>{search.strMeasure5} {search.strIngredient5}</li>}
                            {search.strIngredient6 && search.strMeasure6 && <li>{search.strMeasure6} {search.strIngredient6}</li>}
                            {search.strIngredient7 && search.strMeasure7 && <li>{search.strMeasure7} {search.strIngredient7}</li>}
                            {search.strIngredient8 && search.strMeasure8 && <li>{search.strMeasure8} {search.strIngredient8}</li>}
                            {search.strIngredient9 && search.strMeasure9 && <li>{search.strMeasure9} {search.strIngredient9}</li>}
                            {search.strIngredient10 && search.strMeasure10 && <li>{search.strMeasure10} {search.strIngredient10}</li>}
                            {search.strIngredient11 && search.strMeasure11 && <li>{search.strMeasure11} {search.strIngredient11}</li>}
                            {search.strIngredient12 && search.strMeasure12 && <li>{search.strMeasure12} {search.strIngredient12}</li>}
                            {search.strIngredient13 && search.strMeasure13 && <li>{search.strMeasure13} {search.strIngredient13}</li>}
                            {search.strIngredient14 && search.strMeasure14 && <li>{search.strMeasure14} {search.strIngredient14}</li>}
                            {search.strIngredient15 && search.strMeasure15 && <li>{search.strMeasure15} {search.strIngredient15}</li>}
                            {search.strIngredient16 && search.strMeasure16 && <li>{search.strMeasure16} {search.strIngredient16}</li>}
                            {search.strIngredient17 && search.strMeasure17 && <li>{search.strMeasure17} {search.strIngredient17}</li>}
                            {search.strIngredient18 && search.strMeasure18 && <li>{search.strMeasure18} {search.strIngredient18}</li>}
                            {search.strIngredient19 && search.strMeasure19 &&  <li>{search.strMeasure19} {search.strIngredient19}</li>}
                            {search.strIngredient20 && search.strMeasure20 && <li>{search.strMeasure20} {search.strIngredient20}</li>}
                        </ul>
                    </article>
                </section>
            </section>
        )
    }        
}