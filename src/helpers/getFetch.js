let productos = [
    { id:'1',categoria: 'Proteina',marca:'Star Nutrition',cantidad: '20gr' ,precio:'5000', foto:"../../imagenes/StarNutritionVeganaChocolate.png"},
    { id:'2',categoria: 'Proteina',marca:'Star Nutrition',cantidad: '25gr' ,precio:'5000', foto: "../../imagenes/starNutritionWhey.png"},
    { id:'3',categoria: 'Proteina',marca:'Gold Nutrition',cantidad: '27gr' ,precio:'5000', foto: "../../imagenes/gold_nutrition.png"},
    { id:'4',categoria: 'Creatina',marca:'Star Nutrition',cantidad: '5gr' ,precio:'15000', foto: "../../imagenes/creatina_star.png"},
    { id:'5',categoria: 'Creatina',marca:'Ultra Tech',cantidad: '5gr' ,precio:'15000', foto: "../../imagenes/creatina_ultratech.png"},
    { id:'6',categoria: 'Creatina',marca:'Universal',cantidad: '5gr' ,precio:'15000', foto: "../../imagenes/creatina_universal.png"},
]
  
  
export const  getFetch = (id) => {
  return new Promise (( resolve, reject)=>{
      setTimeout(()=>{
        if (id) {
          resolve(productos.find(producto => producto.id === id))
      }else{
        resolve(productos)
      }
      }, 1000)
      
  })
}