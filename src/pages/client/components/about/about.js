import React, { Component } from 'react';

class AboutUs extends Component {
    render() {
        return (
            <section className="ftco-about d-md-flex" style={{padding:'0'}}>
                <div className="one-half img" style={{ backgroundImage: 'url(../images/about.jpg)', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center center' }} />
                <div className="one-half ftco-animate">
                    <div className="overlap">
                        <div className="heading-section ftco-animate ">
                            <span style={{fontFamily:'Pacifico' ,color:'#c49b63',display: 'block',lineHeight:'1',marginBottom: '-48px',fontSize:'48px'}}>Discover</span>
                            <h2 className="mb-4" style={{ fontSize: '40px', fontWeight: '700', position: 'relative', textTransform: 'uppercase', fontFamily: 'sans-serif',color:'#fff'}}>Our Story</h2>
                        </div>
                        <div style ={{color:'gray',fontFamily:'"Montserrat", "Helvetica Neue", Arial, sans-serif'}}>
                            <p>On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word "and" and the Little Blind Text should turn around and return to its own, safe country. But nothing the copy said could convince her and so it didn’t take long until a few insidious Copy Writers ambushed her, made her drunk with Longe and Parole and dragged her into their agency, where they abused her for their.</p>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
export default AboutUs;