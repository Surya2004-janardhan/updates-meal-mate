import  { useContext } from "react";
import "./FoodItem.css";
import { StoreContext } from "../../context/Storecontext";
// import "../../assets/rating_starts.png"
// import "../../assets/remove_icon_red.png"
// import "../../assets/add_icon_green.png"
// import "../../assets/add_icon_white.png"
import { assets } from "../../assets/assets";
export default function FoodItem( {id, name, price, description, image} ) {
  // console.log(assets.add_icon_white)

  // const [itemcount ,setitemcount] = useState(0)
  const { cartitems, addtocart, removefromcart, url } =
    useContext(StoreContext);
    // console.log(name,price,description,image)
  return (
    <div className="food-item">
      <div className="food-item-image-container">
        {/* {assets.add_icon_white} */}
        <img className="food-item-image" src={url+"/images/"+image} alt="" />
        {
          !cartitems[id] ? (
            <img
              className="add"
              onClick={() => addtocart(id)}
              src={assets.add_icon_white}
            />
          ) : (
            <div className="food-item-counter">
              <img
                onClick={() => removefromcart(id)}
                src={assets.remove_icon_red}
              />
              <p>{cartitems[id]}</p>
              <img
                onClick={() => addtocart(id)}
                src={assets.add_icon_green}
                alt=""
              />
            </div>
          )
          /* * // itmcount>0 && <div className="food-item-quantity">{itemcount}</div> */
        }
      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{name}</p>
          {/* <img src="{asse  ts.rating_starts" class="img-fluid ${3|rounded-top,rounded-right,rounded-bottom,rounded-left,rounded-circle,|}" alt=""> */}
        </div>
        <p className="food-item-desc">{description}</p>
        <p className="food-item-price">₹
        {price}</p>
      </div>
    </div>
  );
}
