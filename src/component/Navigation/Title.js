import React from 'react'


function Title() {
  return (
    <div>
      <div className='main'>

        <div className='hero-sec'>
          <div className="aem-Grid aem-Grid--12">
            <div className="aem-GridColumn aem-GridColumn--default--4">
              <div className="card_1">
                <div className="card_1-body">
                  <h5 className="card_1_title">Men’s <br />Outerwear</h5>
                  <div className='lines'>
                    <hr />
                  </div>
                </div>
              </div>
            </div>
            <div className="aem-GridColumn aem-GridColumn--default--8">
              <div className="card-img">
                <img alt="Venia_alt" src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" className="card-img-top"/>
              </div>
            </div>
          </div>
        </div>

      </div>

      <div className='sub hero-sec'>
        <div className="aem-Grid aem-Grid--12">
          <div className="aem-GridColumn aem-GridColumn--default--8 aem-GridColumn--phone--12">
            <div className="card-img">
              <img alt="Venia_alt" src="https://img.mensxp.com/media/content/2020/Nov/Abhishek-Bachchans-Masterclass-On-Suiting-Up1400_5fa2a4064015f.jpeg" className="card-img-top" alt="" />
            </div>
          </div>

          <div className="aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--12">
            <div className="card_1">
              <div className="card_1-body">
                <h5 className="card_1_title">Men’s <br />Outerwear</h5>
                <div className='lines'>
                  <hr />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Title