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
                <img alt="Venia_alt" src="https://media.istockphoto.com/photos/business-network-concept-customer-support-shaking-hands-picture-id1256603011?k=20&m=1256603011&s=612x612&w=0&h=ZoZ6LyKdwAqubUtMloUivfG1EYiIDUTJytFX-KK1Xdc=" className="card-img-top" alt="" />
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