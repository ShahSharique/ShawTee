import React from "react";
import "./Home.css";
import Product from "./Product";

function Home({ data }) {
  if (data) {
  }
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://img.freepik.com/free-vector/promotion-fashion-banner_1188-161.jpg?w=2000"
      ></img>
      <div className="super">
        <div className="big">
          <a href="/men">
            {" "}
            <div className="small">
              <div className="image">
                <img
                  className="img"
                  src="https://creativemachine.co/wp-content/uploads/2020/03/ecommerce_men_s_clothing_banner_template_20_1080x1080.jpg"
                />
                <div className="image_overlay">
                  <div className="image_title">Men</div>
                </div>
              </div>
              <h3>Men</h3>
            </div>
          </a>
          <a href="/women">
            {" "}
            <div className="small">
              <div className="image">
                <img
                  className="img"
                  src="https://images-eu.ssl-images-amazon.com/images/G/31/img18/apparel/womens-apparel/revamp/18._CB500996044_.jpg"
                />
                <div className="image_overlay">
                  <div className="image_title">Women</div>
                </div>
              </div>
              <h3>Women</h3>
            </div>
          </a>
        </div>
        <div className="big">
          <a href="/Sneakers">
            {" "}
            <div className="small">
              <div className="image">
                <img
                  className="img"
                  src="https://th.bing.com/th/id/OIP.itwjoHRqtXl3gzyX8YiGTgHaEK?pid=ImgDet&rs=1"
                />
                <div className="image_overlay">
                  <div className="image_title">Sneakers</div>
                </div>
              </div>
              <h3>Sneakers</h3>
            </div>
          </a>
          <a href="/electronics">
            <div className="small">
              <div className="image">
                <img
                  className="img"
                  src="https://wallup.net/wp-content/uploads/2017/11/17/230735-watch-luxury_watches.jpg"
                />
                <div className="image_overlay">
                  <div className="image_title">Watches</div>
                </div>
              </div>{" "}
              <h3>Watches</h3>
            </div>
          </a>
        </div>
      </div>
      <div className="stick">
        <h1>Weekly Special!</h1>
      </div>

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

export default Home;
