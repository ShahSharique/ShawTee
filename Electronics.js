import React from 'react'
import Product from "./Product"


function Electronics() {
    return (
      <div className="home">
        <h1>Watches Section</h1>

        <div className="home__row">
          <Product
            id="32"
            title="Rolex Submariner -The Reference Among Divers' Watch "
            price={3050}
            rating={4}
            image="https://content.rolex.com/dam/2022/upright-bba-with-shadow/m126613lb-0002.png?imwidth=380"
          />
          <Product
            id="33"
            title="Patek Philippe Automatic Gold-Black Dial Luxury Watch"
            price={3599}
            rating={5}
            image="https://rukminim1.flixcart.com/image/832/832/watch/c/b/6/5980-1r-001-patek-philippe-original-imaegfhvbu67rv8s.jpeg?q=70"
          />
        </div>
        <div className="home__row">
          <Product
            id="34"
            title="Tissot Supersport Chrono Watch"
            price={3550}
            rating={4}
            image="https://www.tissotwatches.com/media/catalog/product/cache/aaadd316e453df5b08f7f4246fad1a9c/T/1/T125.617.36.051.01_R_1.png"
          />
          <Product
            id="35"
            title="Casio G Shock Watch"
            price={2250}
            rating={4}
            image="https://rukminim1.flixcart.com/image/332/398/ku2zjww0/watch/m/k/b/g1138-gba-900-7adr-casio-men-original-imag79yf382kqrfr.jpeg?q=50"
          />
        </div>
        <div className="home__row">
          <Product
            id="36"
            title="GRAND CARRERA & tag heuer cr7 Leather Chronograph Watch"
            price={2950}
            rating={4}
            image="https://n4.sdlcdn.com/imgs/i/h/y/GRAND-CARRERA-7-tag-heuer-SDL871025861-1-a5fbc.jpg"
          />
          <Product
            id="37"
            title="CARRERA TAG Heuer Calibra 16 -Automatic Chronograph watch"
            price={2999}
            rating={4}
            image="https://i.pinimg.com/originals/58/5b/ef/585bef9ba18181243524c03bae7727a1.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="38"
            title="Fossil Men's Machine Black Stainless Steel Watch"
            price={2550}
            rating={4}
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpZCgiE0ShUaFpsujhF2M_IZZGhKtqI_iZZ0dObErmCEF9D9jv9YdXbw6tpQd06MHUcPM&usqp=CAU"
          />
          <Product
            id="39"
            title="Fossil Watches For Men & Women"
            price={1950}
            rating={4}
            image="https://sslimages.shoppersstop.com/sys-master/images/h54/h0d/28165774540830/WFIFES5221I_NoColour.jpg_230Wx334H"
          />
        </div>
      </div>
    );
}

export default Electronics
