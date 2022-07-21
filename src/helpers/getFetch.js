let productos = [
    { id:'1',suplemento: 'Proteina',marca:'Star Nutrition',precio:'5000', foto:"../../imagenes/StarNutritionVeganaChocolate.png"},
    { id:'2',suplemento: 'Proteina',marca:'Star Nutrition',precio:'5000', foto: "../../imagenes/starNutritionWhey.png"},
    { id:'3',suplemento: 'Proteina',marca:'Gold Nutrition',precio:'5000', foto: "../../imagenes/gold_nutrition.png"},
    { id:'4',suplemento: 'Creatina',marca:'Star Nutrition',precio:'15000', foto: "../../imagenes/creatina_star.png"},
    { id:'5',suplemento: 'Creatina',marca:'Ultra Tech',precio:'15000', foto: "../../imagenes/creatina_ultratech.png"},
    { id:'6',suplemento: 'Creatina',marca:'Universal',precio:'15000', foto: "../../imagenes/creatina_universal.png"},
]
  
  
export const getFetch = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
            resolve(productos)
      }, 3000);
  
    })
  }