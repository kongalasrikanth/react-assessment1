import React from 'react';
import { Slide } from 'react-slideshow-image';
import menshero from '../../Images/mens-hero.jpg';
import bottombanner from '../../Images/bottombanner.jpg';
import { Link } from 'react-router-dom';
import '../../Style/Home.scss';
import 'react-slideshow-image/dist/styles.css';

export default function Home({ name, title }) {
    const slideImages = [
        {
            url: 'https://images.unsplash.com/photo-1484186304838-0bf1a8cff81c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80',
        },
        {
            url: 'https://images.unsplash.com/photo-1525430182374-bf7e61d4f220?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=540&q=80',

        },
        {
            url: 'https://images.unsplash.com/photo-1577375774296-1480089cb555?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80',
        },
    ];

    return (
        <React.Fragment>
            <div >
                <div className="aem-Grid  aem-Grid--12">
                    <div className='aem-GridColumn aem-GridColumn--default--12 aem-GridColumn--phone--12'>
                        <Slide>
                            {slideImages.map((slideImage, index) => (
                                <div className="each-slide" key={index}>
                                    <div className="aem-Grid  aem-Grid--12">
                                        <div className='aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12'>
                                            <div className='slider-div' >
                                                <h3>Shop the new <br />Signature Collection</h3>
                                                <p>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lobortis mattis aliquam faucibus purus.
                                                </p><br />
                                                <button>SHOP NOW</button>
                                            </div>

                                        </div>
                                        <div className='aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12'>
                                            <img  className='slider-div1' src={slideImage.url} />

                                        </div>

                                    </div>
                                </div>
                            ))}
                        </Slide>
                    </div>
                </div>
                <div className="aem-Grid aem-Grid--10 flex">
                    <div className='aem-GridColumn aem-GridColumn--default--2 background-grid aem-GridColumn--phone--12'>
                        <div className="card">
                            <div className="img-container">
                                <Link to="/Header">
                                    <img  src="https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg" alt="product" className="card-img-top" />
                                </Link>
                            </div>
                            <div className="card-footer1">
                                <h5>Shop Women</h5>
                                <p>
                                    Lorem ipsum dolor sit amet
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='aem-GridColumn aem-GridColumn--default--2 background-grid aem-GridColumn--phone--12'>
                        <div className="card">
                            <div className="img-container">
                                <Link to="/Header">
                                    <img  src='https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg' alt="product" className="card-img-top" />
                                </Link>
                            </div>
                            <div className="card-footer1">
                                <h5>Shop Men</h5>
                                <p>
                                    Lorem ipsum dolor sit amet
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='aem-GridColumn aem-GridColumn--default--2 background-grid aem-GridColumn--phone--12'>
                        <div className="card">
                            <div className="img-container">
                                <Link to="/Header">
                                    <img  src="https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg" alt="product" className="card-img-top" />
                                </Link>
                            </div>
                            <div className="card-footer1">
                                <h5>Jewellery</h5>
                                <p>
                                    Lorem ipsum dolor sit amet
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='aem-GridColumn aem-GridColumn--default--2 background-grid aem-GridColumn--phone--12'>
                        <div className="card">
                            <div className="img-container">
                                <Link to="/Header">
                                    <img  src="https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg" alt="product" className="card-img-top" />
                                </Link>
                            </div>
                            <div className="card-footer1">
                                <h5>Electronics</h5>
                                <p>
                                    Lorem ipsum dolor sit amet
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="aem-Grid aem-Grid--12 flex">
                    <div className='aem-GridColumn aem-GridColumn--default--5 aem-GridColumn--phone--12'>
                        <div className='section3'>
                            <h2>Take off in the new <br />Signature Legging</h2>
                            <h4>Lorem Ipsum Dolor Tempor</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor labore dolore magna lorem ipsum dolor sit dolore magna.</p>
                            <div className='btn-flex'>
                                <button className='custom-button'>SHOP COLLECTION</button>
                                <button>SHOP NOW</button>
                            </div>
                            <div className="hr_lines">
                  <hr />
                </div>
                        </div>
                    </div>
                    <div className='aem-GridColumn aem-GridColumn--default--5 aem-GridColumn--phone--12'>
                        <img  className='menshero' src={menshero} />
                    </div>
                </div>
                <div className="hero_banner ">
                    <div className="aem-Grid aem-Grid--12 flex">
                        <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12">
                            <div className="card-img"><img  src={bottombanner} className="card-img-top1" alt="" /></div>
                        </div>
                        <div className="aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--12">
                            <div className="mobile_card">
                                <div className="card-body1">
                                    <h5 className="card-title1">Conquer your<br /> next adventure</h5>
                                    <h6 className="card-h6">Lorem Ipsum Dolor Tempor</h6><br />
                                    <button className='custom-button1'>SHOP DEVICES</button>
                                    {/* <div className="hr_lines">
                  <hr />
                </div> */}
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
