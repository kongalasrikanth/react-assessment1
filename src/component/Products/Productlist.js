import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';
import ReactPaginate from 'react-paginate';
import heart from '../../Images/heart.jpg'


const itemsPerPage = 12;

const Productlist = ({ category }) => {
    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(data);
    const [loading, setLoading] = useState(false);
    let componentMounted = true;
    useEffect(() => {
        const getProducts = async () => {
            setLoading(true);
            const response = await fetch("https://fakestoreapi.com/products");
            if (componentMounted) {
                setData(await response.clone().json());
                const data = await response.json();
                setFilter(data);
                setLoading(false);
            }
            return () => {
                componentMounted = false;
            }
        }
        getProducts();
    }, []);

    useEffect(() => {
        if (category) {
            setFilter(data.filter((value) => value.category === category));
        }
    }, [category]);

    const Loading = () => {
        return (
            <>
                <div className="col-md-3">
                    <Skeleton height={350} />
                    <Skeleton height={350} />
                    <Skeleton height={350} />
                </div>
            </>
        );
    }
    const ShowProducts = () => {
        const [currentItems, setCurrentItems] = useState(null);
        const [pageCount, setPageCount] = useState(0);
        const [itemOffset, setItemOffset] = useState(0);

        useEffect(() => {
            const endOffset = itemOffset + itemsPerPage;
            console.log(`Loading items from ${itemOffset} to ${endOffset}`);
            setCurrentItems(filter.slice(itemOffset, endOffset));
            setPageCount(Math.ceil(filter.length / itemsPerPage));
        }, [itemOffset, itemsPerPage]);

        const handlePageClick = (event) => {
            const newOffset = (event.selected * itemsPerPage) % filter.length;
            console.log(
                `User requested page number ${event.selected}, which is offset ${newOffset}`
            );
            setItemOffset(newOffset);
        };
        return (
            <>

                {currentItems?.map((product) => {
                    return (
                        <>
                            <div className="col-md-4 col-sm-6 col-6">
                                 <div className="card" key={product.id}>
                                    < NavLink to={`/products/${product.id}`}>
                                        <img src={product.image} className="card-img_top" alt={product.title} width="319px" height="382px" /></NavLink>
                                    <div className="card-footer">
                                        <h5 className="card-title mb-0">{product.title.substring(0, 18)}</h5>
                                        <p className="card-text lead fw-bold">${product.price}</p>
                                        <img src={heart} />
                                    </div>
                                </div> 



                                {/* <div className="product-card" key={product.id}>
                                < NavLink to={`/products/${product.id}`}>
                                    <div className="product-tumb">
                                        <img src={product.image} alt={product.title} />
                                    </div>
                                    <div className="product-details">
                                        <h4><a href="">{product.title.substring(0, 18)}</a></h4>
                                        <div className="product-bottom-details">
                                            <div className="product-price">${product.price}</div>
                                            <div className="product-links">
                                                <a href=""><i className="fa fa-heart"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                    </NavLink>
                                </div> */}
                            </div>
                        </>
                    )
                })}
                <div className="aem-Grid aem-Grid--12">
                    <div className="aem-GridColumn aem-GridColumn--default--5">
                        &nbsp;
                    </div>
                    <div className="aem-GridColumn aem-GridColumn--default--2 paginationone">

                    </div>
                    <div className="aem-GridColumn aem-GridColumn--default--5">
                        &nbsp;
                    </div>
                </div>
            </>
        )
    }
    return (

        <div className='product'>
            <div className="container">
                <div className="row">
                </div>
                <div className="row">
                    {loading ? <Loading /> : <ShowProducts />}

                </div>

            </div>
        </div>
    )
}

export default Productlist