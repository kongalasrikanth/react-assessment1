import React from 'react'


function Filter() {
    return (
        <div className='container'>
            <div className='filters_1'>
                <div className='filter'>
                    <h6>Filters</h6>
                </div>
                <hr />
                <div className='attribute'>

                    <h6>Categories</h6>
                    <input type="checkbox" id="option" name="option" value="option" />
                    <label>Jewellery</label> <br />
                    <input type="checkbox" id="option" name="option" value="option" />
                    <label>Electronics</label> <br />
                    <input type="checkbox" id="option" name="option" value="option" />
                    <label>Men's Clothing</label> <br />
                    <input type="checkbox" id="option" name="option" value="option" />
                    <label>Women's Clothing</label> <br />
                </div>
            </div>
        </div>


    )
}

export default Filter