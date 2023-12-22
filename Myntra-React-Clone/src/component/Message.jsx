import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'

const Message = () => {
  return (
    <div className="px-4 py-5 my-5 text-center">
      <img className="d-block mx-auto mb-4" src="https://constant.myntassets.com/checkout/assets/img/empty-bag.webp" alt="bagIcon" width="150px" height="158px" />
      <h1 className="display-5 fw-bold text-body-emphasis">Hey, it feels so light!</h1>
      <div className="col-lg-6 mx-auto">
        <p className="lead mb-4">There is nothing in your bag. Let's add some items.</p>
        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
          <Link to='/' className="btn btn-outline-danger btn-lg px-4 gap-3">ADD ITEMS FROM WISHLIST</Link>
        </div>
      </div>
    </div>
  )
}
export default Message;