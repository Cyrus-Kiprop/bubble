import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'


WhatIDoItem.propTypes = {
    heading: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
};

function WhatIDoItem(props) {
    const {heading, body, imgUrl} = props
    return (
        <ItemWrapper>
            <div className="info-block-w-icon">
                <div className="ci-icon">
                    < img src={imgUrl} alt={heading}/>
                </div>
                <div className="ci-text">
                    <h4>{heading}</h4>
                    <p>
                        {
                            body
                        }
                    </p>
                </div>
            </div>
        </ItemWrapper>
    );
}

export default WhatIDoItem;

const ItemWrapper = styled.div`
.info-block-w-icon{
    position: relative;
    text-align: left;
    width: 100%;
    display: flex;
    margin: 0;
    padding: 0 10px 30px 0;
    }
    
    .ci-icon {
    max-width: 104px;
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    }
    
   .ci-text > h4{
   font-size: 16px;
    color: #f5f5f5;
    margin: 7px 0;
    font-weight: 600;
   }
   
   .ci-text > p {
    font-size: .92em;
   }
`