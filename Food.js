import React from 'react'
import Product from "./Product"


function Food() {
    return (
      <div className="home">
        <h1>Sneakers section</h1>

        <div className="home__row">
          <Product
            id="24"
            title="Baby Blue Shadow Custom Nike Air Force 1"
            price={3450}
            rating={4}
            image="https://i.etsystatic.com/9217789/r/il/b51638/2699237733/il_1588xN.2699237733_fy7d.jpg"
          />
          <Product
            id="25"
            title="Nike Air Jordan 1 Retro mid(Barely Orange & Black)"
            price={5550}
            rating={5}
            image="https://i.pinimg.com/originals/b4/5b/73/b45b73bb3a98fad1fe0450a0586d8754.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="26"
            title="Nike Air Jordan 6 Retro and Airforce 180"
            price={4000}
            rating={4}
            image="https://2.bp.blogspot.com/-I8DQjsIaCfY/T_dBbLa1-BI/AAAAAAAAGJE/03pUEOmkaE8/s1600/IMG_1684.jpg"
          />
          <Product
            id="27"
            title="PUMA Viz Runner Men's Running Sneakers..."
            price={3050}
            rating={4}
            image="https://www.dbargains.com/wp-content/uploads/2020/06/s-l1600-2-38.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="28"
            title="Nike LeBron XII"
            price={4699}
            rating={5}
            image="https://th.bing.com/th/id/OIP.CZAxl9y9dBi7L_Ik35PdNwHaHa?pid=ImgDet&rs=1"
          />
          <Product
            id="29"
            title="PRADA Monolith Leather Combat Boots with Pouch"
            price={3350}
            rating={4}
            image="https://th.bing.com/th/id/OIP.08lRMK5cdcXuBEyKtWqLXwHaJz?pid=ImgDet&rs=1"
          />
        </div>

        <div className="home__row">
          <Product
            id="30"
            title="Christian Dior Kaws B23-High Top Snekaer"
            price={3150}
            rating={5}
            image="https://th.bing.com/th/id/OIP.aT9-xa9dZsuulBghpuQTwwAAAA?pid=ImgDet&w=187&h=201&c=7&dpr=1.5"
          />
          <Product
            id="31"
            title="Nike AirMax 270 React WorldWide Shoes "
            price={2799}
            rating={5}
            image="https://5.imimg.com/data5/ANDROID/Default/2021/1/YJ/JM/ZU/36974239/product-jpeg.jpeg"
          />
        </div>
      </div>
    );
}

export default Food
