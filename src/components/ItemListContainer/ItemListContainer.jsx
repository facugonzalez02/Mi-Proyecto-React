import ItemCount from "../ItemCount/ItemCount"

const ItemListContainer = ({ saludo }) => {
    const onAdd = (cant) => {
      console.log(`La cantidad seleccionada es: ${cant}`)
    }
    return (
      <div>
        {saludo}
        <ItemCount initial={1} stock={10} onAdd={onAdd} />
      </div>
    )
}

export default ItemListContainer
