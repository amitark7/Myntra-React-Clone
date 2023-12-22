import { useDispatch, useSelector } from "react-redux";
import BagItem from "./BagItem";
import items from '../data/items'
import { itemAction } from "../reducer/itemReducer";
import BagSummary from "./BagSummary";
import Message from "./Message";

const Bag = () => {
  const bagItem = useSelector((state) => state.item.bagItem)
  const dispatch = useDispatch();
  function searchItem(itemId) {
    for (let i = 0; i < items.length; i++) {
      if (itemId == items[i].id) {
        return items[i];
      }
    }
  }
  const handleDelete = (id) => {
    dispatch(itemAction.deleteItem(id))
  }
  const bagArray = bagItem.map(searchItem)
  return (
    <>
      {
        bagArray.length !== 0 ? <main>
          <div className="bag-page">
            <div className="bag-items-container">
              {
                bagArray.map((item) => {
                  return <BagItem key={item.id} item={item} handleDelete={handleDelete} />
                })}
            </div>
            <div className="bag-summary">
              <BagSummary bagArray={bagArray} />
            </div>
          </div>
        </main> : <Message />
      }
    </>
  )
}

export default Bag;