import React from 'react'
import './Home.css'
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <div className="home_container">
            <img className="home_image" alt="Here come the Holidays. Prime Video" 
                src='https://images-na.ssl-images-amazon.com/images/G/15/digital/video/merch/2020/Other/Holiday/DESKTOP_TALL_HERO_1X_3219_Generic_Promo_Creative_EN_1500x600._CB417666422_.jpg'/>
            
                <div className="home_row">
                    <Product 
                        id= "5132387"
                        title="A Promised Land"
                        price={34.99}
                        image='https://images-na.ssl-images-amazon.com/images/I/41L5qgUW2fL._SX327_BO1,204,203,200_.jpg'
                        rating={5}
                    />
                    <Product 
                        id= "85365447"
                        title="Minecraft for Nintendo Switch - Standard Edition"
                        price={29.96}
                        image='https://images-na.ssl-images-amazon.com/images/I/71dIHv1zh7L._AC_SY741_.jpg'
                        rating={4}
                    />
                </div>
                <div className="home_row">
                    <Product 
                        id= "6985345"
                        title="Windows 10 Home 64 Bit - Windows 10 Home License - English, for 1 PC"
                        price={129.99}
                        image='https://images-na.ssl-images-amazon.com/images/I/71Srxxo3mtL._AC_SX522_.jpg'
                        rating={4}
                    />
                    <Product 
                        id= "325614"
                        title="Echo Dot (3rd gen) - Smart speaker with Alexa - Charcoal"
                        price={29.99}
                        image='https://images-na.ssl-images-amazon.com/images/I/61RNVt9kXUL._AC_SX679_.jpg'
                        rating={4}
                    />
                    <Product 
                        id= "548796541"
                        title="Tenet (BIL/ Blu-ray + Digital + 4K Ultra HD)"
                        price={23.99}
                        image='https://images-na.ssl-images-amazon.com/images/I/81d0DPvluPL._AC_SX342_.jpg'
                        rating={3}
                    />                    
                </div>
                <div className="home_row">                
                    <Product 
                        id= "2358974" 
                        title="DualSense Wireless Controller - DualSense Controller Edition"
                        price={86.56}
                        image='https://images-na.ssl-images-amazon.com/images/I/71y%2BUGuJl5L._AC_SX679_.jpg'
                        rating={4}
                    />
                </div>
            </div>
        </div>
    )
}

export default Home

