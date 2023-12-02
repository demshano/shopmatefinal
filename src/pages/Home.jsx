import { ProductBox } from "../components"
import '../styles/home.css';

export const Home = () => {


    const products = [
        {"id": 1, "name": "Sony Wh-Ch510 Bluetooth Wireless", "price": 149, "image": "/assets/images/1001.png"},
        {"id": 2, "name": "boAt Rockerz 450", "price": 49, "image": "/assets/images/1002.png"},
        {"id": 3, "name": "JBL Tune 760NC", "price": 179, "image": "/assets/images/1003.jpg"},
        {"id": 4, "name": "Logitech H111 Wired", "price": 39, "image": "/assets/images/1004.png"},
        {"id": 5, "name": "APPLE Airpods Max Bluetooth Headset", "price": 199, "image": "/assets/images/1005.png"},
        {"id": 6, "name": "ZEBRONICS Zeb-Thunder Wired", "price": 29, "image": "/assets/images/1006.png"},
        {"id": 7, "name": "ilive bluetooth wireless headphone, Rose Gold", "price": 149, "image": "/assets/images/1007.jpg"},
        {"id": 8, "name": "Laser kids wireless headphones with bubble pop pink", "price": 99, "image": "/assets/images/1008.jpg"},
        {"id": 9, "name": "Iclever kids bluetooth haedPhones", "price": 89, "image": "/assets/images/1009.jpg"},

      ]

      

  return (
    <>
        <div className="2xl:ml-[1400px] ">
            <img className="w-[60px] flex" src={`/assets/images/cart1.png`} alt="cart" />
            <span className="flex ml-[42px] mt-[-55px] text-white font-semibold ">0</span>
        </div>

        <div>

          <div className="products">
              {products.map((product) => (
                <ProductBox product={product} key={product.id} />
                ))}
          </div>

        </div>
    </>
  )
}
