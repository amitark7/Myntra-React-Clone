import '../css/bag.css'
import { MdDeleteForever } from "react-icons/md";
import { IoMdAddCircle } from "react-icons/io";
import { useDispatch, useSelector } from 'react-redux'
import { itemAction } from '../reducer/itemReducer';

const Item = ({ item, addToBag }) => {
  const bagItem = useSelector((state) => state.item.bagItem);
  const ItemFound = bagItem.indexOf((item.id))

  const dispatch = useDispatch();
  return (
    <div className="item-container">
      <img className="item-image" src={`./src/${item.image}`} alt="item image" />
      <div className="rating">
        {item.rating.stars} ⭐ | {item.rating.count}
      </div>
      <div className="company-name">{item.company}</div>
      <div className="item-name">{item.item_name}</div>
      <div className="price">
        <span className="current-price">Rs {item.current_price}</span>
        <span className="original-price">Rs {item.original_price}</span>
        <span className="discount">({item.discount_percentage}% OFF)</span>
      </div>
      {
        ItemFound >= 0 ?
          <button type="button" className="btn btn-add-bag btn-danger" onClick={() => { dispatch(itemAction.deleteItem(item.id)) }}><MdDeleteForever /> Remove</button> : <button type="button" onClick={() => addToBag(item.id)} className="btn btn-add-bag btn-success"><IoMdAddCircle /> Add to Bag</button>
      }
    </div>
  )
}

export default Item;