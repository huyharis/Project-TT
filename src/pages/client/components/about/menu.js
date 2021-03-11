import React, { Component } from 'react'

export default class MenuAbout extends Component {
    render() {
        return (
            <section className="ftco-section img" id="ftco-testimony" style={{ backgroundImage: 'url(images/bg_1.jpg)' }} data-stellar-background-ratio="0.5">
            <div className="overlay" />
            <div className="container">
              <div className="row justify-content-center mb-5">
                <div className="col-md-7 heading-section text-center ftco-animate">
                  <span className="subheading" style={{fontFamily:'Pacifico' ,color:'#c49b63',display: 'block',lineHeight:'1',marginBottom: '-48px',fontSize:'48px'}}>Testimony</span>
                  <h2 className="mb-4" style={{ fontSize: '40px', fontWeight: '700', position: 'relative', textTransform: 'uppercase', fontFamily: 'sans-serif',color:'#fff'}}>Customers Says</h2>
                  <p style={{color:'grey'}}>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                </div>
              </div>
            </div>
            <div className="container-wrap">
              <div className="row d-flex no-gutters" style ={{color:'#fff',fontFamily:'"Montserrat", "Helvetica Neue", Arial, sans-serif'}}>
                <div className="col-lg align-self-sm-end">
                  <div className="testimony">
                    <blockquote style ={{color:'#fff',marginLeft:'26px'}}>
                      <p>“Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small.”</p>
                    </blockquote>
                    <div className="author d-flex mt-4" style={{marginLeft: '79px'}}>
                      <div className="image mr-3 align-self-center">
                        <img src="images/person_3.jpg" alt />
                      </div>
                      <div className="name align-self-center">Louise Kelly <span className="position">Illustrator Designer</span></div>
                    </div>
                  </div>
                </div>
                <div className="col-lg align-self-sm-end">
                  <div className="testimony overlay">
                    <blockquote style ={{color:'#fff',marginLeft:'26px'}}>
                      <p>“Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.”</p>
                    </blockquote>
                    <div className="author d-flex mt-4" style={{marginLeft: '79px'}}>
                      <div className="image mr-3 align-self-center">
                        <img src="../images/person_2.jpg" alt />
                      </div>
                      <div className="name align-self-center">Person 2<span className="position">Illustrator Designer</span></div>
                    </div>
                  </div>
                </div>
                <div className="col-lg align-self-sm-end">
                  <div className="testimony">
                    <blockquote style ={{color:'#fff',marginLeft:'26px'}}>
                      <p>“Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small  line of blind text by the name. ”</p>
                    </blockquote>
                    <div className="author d-flex mt-4" style={{marginLeft: '79px'}}>
                      <div className="image mr-3 align-self-center">
                        <img src="../images/person_3.jpg" alt />
                      </div>
                      <div className="name align-self-center">Louise Kelly <span className="position">Illustrator Designer</span></div>
                    </div>
                  </div>
                </div>
                <div className="col-lg align-self-sm-end">
                  <div className="testimony overlay">
                    <blockquote style ={{color:'#fff',marginLeft:'26px'}}>
                      <p>“Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however.”</p>
                    </blockquote>
                    <div className="author d-flex mt-4" style={{marginLeft: '79px'}}>
                      <div className="image mr-3 align-self-center">
                        <img src="../images/person_2.jpg" alt />
                      </div>
                      <div className="name align-self-center">Louise Kelly <span className="position">Illustrator Designer</span></div>
                    </div>
                  </div>
                </div>
                <div className="col-lg align-self-sm-end">
                  <div className="testimony">
                    <blockquote style ={{color:'#fff',marginLeft:'26px'}}>
                      <p>“Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small  line of blind text by the name. ”</p>
                    </blockquote>
                    <div className="author d-flex mt-4" style={{marginLeft: '79px'}}>
                      <div className="image mr-3 align-self-center">
                        <img src="../images/person_3.jpg" alt />
                      </div>
                      <div className="name align-self-center">Louise Kelly <span className="position">Illustrator Designer</span></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )
    }
}
