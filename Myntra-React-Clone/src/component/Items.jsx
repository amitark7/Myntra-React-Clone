import Item from "./Item";
import { useDispatch, useSelector } from "react-redux";
import { itemAction } from "../reducer/itemReducer";



const Items = () => {
  const dispatch = useDispatch();
  const itemList = useSelector((state) => state.item.data)


  const addToBag = (itemId) => {
    dispatch(itemAction.addtoBag(itemId))
  }

  

  return (
    <main>
      <div className="items-container">
        {
          itemList.map((item) => {
            return <Item key={item.id} item={item} addToBag={addToBag} />
          })
        }
      </div>
    </main>


  )
}

export default Items;