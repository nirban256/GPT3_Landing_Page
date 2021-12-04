import React from 'react';
import './brand.css'
import Images from './import';

const Brand = () => {
    return (
        <div className="gpt3_brand section_padding">
            <div>
                <img src={Images.google} alt="google" />
            </div>
            <div>
                <img src={Images.slack} alt="slack" />
            </div>
            <div>
                <img src={Images.atlassian} alt="" />
            </div>
            <div>
                <img src={Images.dropbox} alt="dropbox" />
            </div>
            <div>
                <img src={Images.shopify} alt="shopify" />
            </div>
        </div>
    )
}

export default Brand
