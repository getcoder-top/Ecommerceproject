import React from 'react';
import "E:/ecommerce website/ecommercewebsite/src/pages/main.css"
import "E:/ecommerce website/ecommercewebsite/src/pages/js.js"

const NewComponent =()=>({
    render() {
      return (
        <div>
          <div>
            <div className="div1">
              <img src={require("E:/ecommerce website/ecommercewebsite/src/pages/amazonlogo_low1.png")} />
              <input type="text" className="searchbox" id="searchbox" />
              <div className="nav">
                <a href>Login/Signup</a>
                <a href>About</a>
                <a href>Contact</a>
                <a href className="cartlogo">Cart</a>
              </div>
            </div>
            <hr />
            <nav className="nav">
              <a href>Beauty</a>
              <a href>shoes</a>
              <a href>Mobile</a>
              <a href>Electronics</a>
            </nav>
            <br />
            <div className="div2">
              <div className="slideshow-container">
                {/* Full-width images with number and caption text */}
                <div className="mySlides fade">
                  <div className="numbertext">1 / 3</div>
                  <img src={require("E:/ecommerce website/ecommercewebsite/src/pages/New folder/tonystark1 (1).jpg")} style={{width: '100%'}} />
                  <div className="text">Caption one</div>
                </div>
                <div className="mySlides fade">
                  <div className="numbertext">2 / 3</div>
                  <img src={ require("E:/ecommerce website/ecommercewebsite/src/pages/New folder/tonystark (2).jpg")} style={{width: '100%'}} />
                  <div className="text">Caption Two</div>
                </div>
                <div className="mySlides fade">
                  <div className="numbertext">3 / 3</div>
                  <img src={ require("E:/ecommerce website/ecommercewebsite/src/pages/New folder/tonystark2 (1).jpg")} style={{width: '100%'}} />
                  <div className="text">Caption Three</div>
                </div>
              </div>
              <br />
            </div>
            <div className="div4">
              <div className="card">
                <img className="cardimage1" src={ require("E:/ecommerce website/ecommercewebsite/src/pages/New folder/shoes5.jpg")} alt="" />
                <p className="cardprice">$ price</p>
                <p className="carddescription">description</p>
                <p><button className="cardbutton button">ADD TO CART</button></p>
              </div>
              <div className="card">
                <img className="cardimage1" src={ require("E:/ecommerce website/ecommercewebsite/src/pages/New folder/shoes4.jpg")} alt="" />
                <p className="cardprice">$ price</p>
                <p className="carddescription">description</p>
                <p><button className="cardbutton button">ADD TO CART</button></p>
              </div>
              <div className="card">
                <img className="cardimage1" src={ require("E:/ecommerce website/ecommercewebsite/src/pages/New folder/shoes3.jpg")} alt="" />
                <p className="cardprice">$ price</p>
                <p className="carddescription">description</p>
                <p><button className="cardbutton button">ADD TO CART</button></p>
              </div>
              <div className="card">
                <img className="cardimage1" src={ require("E:/ecommerce website/ecommercewebsite/src/pages/New folder/shoes1.jpg")} alt="" />
                <p className="cardprice">$ price</p>
                <p className="carddescription">description</p>
                <p><button className="cardbutton button">ADD TO CART</button></p>
              </div>
            </div>
            {/* div5 */}
            {/* card2 */}
            <div className="div5">
              <div className="card2">
                <h2>shoes</h2>
                <div className="card2imagediv">
                  <div className="row">
                    <img className="card2image" src={ require("E:/ecommerce website/ecommercewebsite/src/pages/New folder/shoes1.jpg")} alt="" />
                    <img className="card2image" src={ require("E:/ecommerce website/ecommercewebsite/src/pages/New folder/shoes5.jpg")} alt="" />
                  </div>
                  <div className="row">
                    <img className="card2image" src={ require("E:/ecommerce website/ecommercewebsite/src/pages/New folder/shoes3.jpg")} alt="" />
                    <img className="card2image" src={ require("E:/ecommerce website/ecommercewebsite/src/pages/New folder/shoes2.jpg")} alt="" />
                  </div>
                </div>
                <p><button className="cardbutton button">VISIT ITEMS</button></p>
              </div>
              <div className="card2">
                <h2>Electronics</h2>
                <div className="card2imagediv">
                  <div className="row">
                    <img className="card2image" src={ require("E:/ecommerce website/ecommercewebsite/src/pages/New folder/elec1.jpg")} alt="" />
                    <img className="card2image" src={ require("E:/ecommerce website/ecommercewebsite/src/pages/New folder/elec2.jpg")} alt="" />
                  </div>
                  <div className="row">
                    <img className="card2image" src={ require("E:/ecommerce website/ecommercewebsite/src/pages/New folder/elec3.jpg")} alt="" />
                    <img className="card2image" src={ require("E:/ecommerce website/ecommercewebsite/src/pages/New folder/elec4.jpg")} alt="" />
                  </div>
                </div>
                <p><button className="cardbutton button">VISIT ITEMS</button></p>
              </div>
              <div className="card2">
                <div className="card2imagediv">
                  <div className="row">
                    <img className="card2image" src={ require("E:/ecommerce website/ecommercewebsite/src/pages/New folder/shoes4.jpg")} alt="" />
                    <img className="card2image" src={ require("E:/ecommerce website/ecommercewebsite/src/pages/New folder/shoes5.jpg")} alt="" />
                  </div>
                  <div className="row">
                    <img className="card2image" src={ require("E:/ecommerce website/ecommercewebsite/src/pages/New folder/shoes3.jpg")} alt="" />
                    <img className="card2image" src={ require("E:/ecommerce website/ecommercewebsite/src/pages/New folder/shoes1.jpg")} alt="" />
                  </div>
                </div>
                <p><button className="cardbutton button">VISIT ITEMS</button></p>
              </div>
              <div className="card2">
                <div className="card2imagediv">
                  <div className="row">
                    <img className="card2image" src={ require("E:/ecommerce website/ecommercewebsite/src/pages/New folder/elec1.jpg")} alt="" />
                    <img className="card2image" src={ require("E:/ecommerce website/ecommercewebsite/src/pages/New folder/elec2.jpg")} alt="" />
                  </div>
                  <div className="row">
                    <img className="card2image" src={ require("E:/ecommerce website/ecommercewebsite/src/pages/New folder/elec3.jpg")} alt="" />
                    <img className="card2image" src={ require("E:/ecommerce website/ecommercewebsite/src/pages/New folder/elec4.jpg")} alt="" />
                  </div>
                </div>
                <p><button className="cardbutton button">VISIT ITEMS</button></p>            
              </div>
            </div>
            {/* footer */}
            <footer className="footer">
              <div className="footerdiv1">
                <h1><a href>Back to top</a></h1>
              </div>
              <div className="footerdiv2">
                <div className="footerdiv3">
                  <h2>Get To Know Us</h2>
                  <ul>
                    <a href>About Us</a><br />
                    <a href>Carreers</a><br />
                    <a href>Blog</a><br />
                    <a href>Amazon Care</a><br />
                    <a href>Subscribe</a>
                  </ul>
                </div>
                <div className="footerdiv3">
                  <h2>Connect With Us</h2>
                  <ul>
                    <a href>Instagram</a><br />
                    <a href>Twitter</a><br />
                    <a href>Social Media Handel</a>
                  </ul>
                </div>
                <div className="footerdiv3">
                  <h2>Make Money With Us</h2>
                  <ul>
                    <a href>Sell on Amazon</a><br />
                    <a href>Sell Under Amazon Accelerator</a><br />
                    <a href>Amazon Global Selling</a><br />
                    <a href>Become An Affiliate</a><br />
                    <a href>Fulfilment by Amazon</a><br />
                    <a href>Advertise Your Product</a><br />
                    <a href>Amazon Pay on Merchants</a>
                  </ul>
                </div>
                <div className="footerdiv3">
                  <h2>Let Us Help You</h2>
                  <ul>
                    <a href>Covid-19 and Amazon</a><br />
                    <a href>Your Account</a><br />
                    <a href>Returns Center</a><br />
                    <a href>100% Purchase Protection</a><br />
                    <a href>Help</a>
                  </ul>
                </div>
              </div>
              <hr />
              <div className="footerdiv4">
                <h2>Download Our App</h2>
                <div className="footerdiv4a">
                  <h3>For Android</h3>
                  <a href><button className="footerdiv4abutton"><img src="/projecttest2/amazonlogo_low1.png" alt="button" /></button></a>
                </div>
                <div className="footerdiv4a">
                  <h3>For ios</h3>
                  <a href><button className="footerdiv4abutton"><img src="/projecttest2/amazonlogo_low1.png" alt="button" /></button></a>
                </div>
              </div>
              <hr />
              <div className="footerdiv5">
                <img src="/projecttest2/amazonlogo_low1.png" alt="image" />
              </div>
              <div className="footerdiv6">
                <a href>Terms and Conditions</a>
                <a href>Privacy Notice</a>
                <a href>Copywrite 1996-2022</a>
              </div>
            </footer>
          </div>
        </div>
      );
    }
  });


  export default NewComponent;