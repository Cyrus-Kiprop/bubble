import React from 'react';
import styled from 'styled-components'

function FooterSocial(props) {
    return (
        <SocialWrapper>
                <ul className="footer-social-links">
                    <li>
                        <a href="#" target="_blank">Twitter</a>
                    </li>
                    <li>
                        <a href="#" target="_blank">Facebook</a>
                    </li>
                    <li>
                        <a href="#" target="_blank">Instagram</a>
                    </li>
                </ul>
        </SocialWrapper>

    );
}

const SocialWrapper = styled.div`
    ul {
        display: flex;
        list-style: none;
    }
    
    ul > li {
        display: inline-block;
        margin-right: 25px;
    }
    
    ul > li > a {
        text-decoration: none;
        line-height: 21px;
        font-size: 13px;
        opacity: .6;
        color: #dddddd;
        transition: color .3s ease-in;
    }
    
    ul > li > a:hover {
        color: #fff;
    }
    
    
    
`

export default FooterSocial;