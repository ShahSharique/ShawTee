import React from 'react'
import Product from './Product'

function Done() {
    return (
      <div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "2rem",
          }}
        >
          <h1>
            Your order is confirmed<br></br>
            Thankyou for shopping!
          </h1>
        </div>
        <h2>You might also like</h2>
        <div className="home__row">
          <Product
            id="1"
            title="Retro graphic T-shirt.... (Oversized tshirt)"
            price={359}
            rating={4}
            image="https://ragstock.com/wp-content/uploads/vintage-sports-t-shirts.jpg"
          />

          <Product
            id="2"
            title="Attack on Titan Hoodie,Anime Merchandise"
            price={799}
            rating={5}
            image="https://attackontitanshop.com/wp-content/uploads/2021/07/Attack-on-Titan-Anime-Hoodies-Levi-Ackerman-Spring-Hooded-Swearshirts-Women-Men-Unisex-Casual-Loose-Pullovers.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="3"
            title="Lavender Wideleg Denim Jeans"
            price={900}
            rating={4}
            image="https://i.pinimg.com/736x/f5/2d/aa/f52daa1abbbc618fad6c70446207bed8.jpg"
          />

          <Product
            id="4"
            title="Pink Wide Flare Denim Jeans"
            price={950}
            rating={5}
            image="https://cdn.shopify.com/s/files/1/0555/4195/6677/products/THC22-03-227480_1707x.jpg?v=1649830383"
          />
        </div>

        <div className="home__row">
          <Product
            id="6"
            title="Drop Shoulder Cut-and-sew Sweatshirt"
            price={810}
            rating={4}
            image="https://img.ltwebstatic.com/images2_pi/2019/09/18/15687995674228266033.webp"
          />

          <Product
            id="7"
            title="Bucket hats(Black colour)"
            price={250}
            rating={3}
            image="https://m.media-amazon.com/images/I/71oMAXGoUoL._UL1500_.jpg"
          />
        </div>
      </div>
    );
}

export default Done
