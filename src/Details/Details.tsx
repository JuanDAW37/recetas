import React from "react";

export const Details = ({search}) => {
    return(
        <>
            <h1>Ingredientes y preparación</h1>
            <h2>Nombre: {search.strMeal}</h2>
            <section>
                <article>Categoría: {search.strCategory}</article>
                <article>Tipo: {search.strTags}</article>
                <article>Procedencia: {search.strArea}</article>
                <article>Instrucciones: {search.strInstructions}</article>
                <picture>
                    <img src={search.strMealThumb} alt="Foto del plato" />                    
                </picture>                
                <iframe width={560} height={315} src={search.strYoutube} frameBorder={0}
                allow="acelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
            </section>
            <h2>Ingredientes y medidas</h2>
            <section>
                <article>
                    <ul>
                        <li>{search.strMeasure1} {search.strIngredient1}</li>
                        <li>{search.strMeasure2} {search.strIngredient2}</li>
                        <li>{search.strMeasure3} {search.strIngredient3}</li>
                        <li>{search.strMeasure4} {search.strIngredient4}</li>
                        <li>{search.strMeasure5} {search.strIngredient5}</li>
                        <li>{search.strMeasure6} {search.strIngredient6}</li>
                        <li>{search.strMeasure7} {search.strIngredient7}</li>
                        <li>{search.strMeasure8} {search.strIngredient8}</li>
                        <li>{search.strMeasure9} {search.strIngredient9}</li>
                        <li>{search.strMeasure10} {search.strIngredient10}</li>
                        <li>{search.strMeasure11} {search.strIngredient11}</li>
                        <li>{search.strMeasure12} {search.strIngredient12}</li>
                        <li>{search.strMeasure13} {search.strIngredient13}</li>
                        <li>{search.strMeasure14} {search.strIngredient14}</li>
                        <li>{search.strMeasure15} {search.strIngredient15}</li>
                        <li>{search.strMeasure16} {search.strIngredient16}</li>
                        <li>{search.strMeasure17} {search.strIngredient17}</li>
                        <li>{search.strMeasure18} {search.strIngredient18}</li>
                        <li>{search.strMeasure19} {search.strIngredient19}</li>
                        <li>{search.strMeasure20} {search.strIngredient20}</li>
                    </ul>
                </article>
            </section>
        </>
    )
}