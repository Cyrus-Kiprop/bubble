import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import Section from '../page-elements/section';
import CenterTitle from '../shared/CenterTitle';
import Row from '../shared/Row';

import weatherImg from '../../images/weather-img.png';
import diriWines from '../../images/diri-img.png';
import tucan from '../../images/tucan-img.png';
import growthpad from '../../images/growthpad.png';
import dechrist from '../../images/dechrist.png';
import phaser from '../../images/phaser.png';

Index.propTypes = {

};

function Index(props) {
  const projects = [
    {
      projImage: weatherImg,
      name: 'Weather App',
      category: 'Weather forecasts',
      link: 'https://cyrus-kiprop.github.io/weather_app/',
    },
    {
      projImage: diriWines,
      name: 'Diri Wines and Spirits',
      category: 'Sales and Marketting',
      link: 'https://diri-wines-and-spirits.business.site/',
    },
    {
      projImage: tucan,
      name: 'Tucan Travel',
      category: 'Food and Beverages',
      link: 'https://www.tucantravel.com/food-and-drink-in-kenya',
    },

    {
      projImage: growthpad,
      name: 'Growthpad Consulting',
      category: 'Digital Consulting',
      link: 'https://growthpad.co.ke/',
    },
    {
      projImage: phaser,
      name: 'Phaser shooting game',
      category: 'Games and Entertainment',
      link: 'https://gallant-wescoff-7173eb.netlify.app/',
    },
    {
      projImage: dechrist,
      name: "De Christe's Ruby",
      category: 'Spa and Wellness',
      link: 'https://dechristiesruby.com/',
    },

  ];
  return (
    <Section>
      <RecentWrapper>
        <CenterTitle title="Recent Works" id={'projects'} />
        <Row>
          {
                       projects && projects.map((work) => (
                         <div className="col-lg-4 col-md-6 col-sm-6 uiux">
                           <div className="work_single_item" >
                             <img className="img-fluid" src={work.projImage} alt="" />
                             <div className="work_info">
                               <h6 title="Better Days Hotel">{work.name}</h6>
                               <p>{work.category}</p>
                               <a className="link" href={work.link} target="_blank" rel="noopener">
                                 <FontAwesomeIcon icon={faLink} />
                               </a>
                             </div>
                           </div>
                         </div>
                       ))
                    }
        </Row>
      </RecentWrapper>
    </Section>
  );
}

export default Index;

const RecentWrapper = styled.div`
position: relative;
// background-color: #111111;
padding-top: 2rem;
padding-bottom: 1rem;
  // background-color: #0d1117;

.work_info {
    background-color: #fff;
    padding: 20px;
    padding-left: 40px;
    margin-left: 22px;
    text-align: left;
    position: relative;
}

.work_info h6 {
    font-weight: 600;
    font-size: 17px;
    color: #000;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
}


.work_info > p {
    font-size: 15px;
    margin-top: 5px;
    font-weight: 600;
    position: relative;
    padding-left: 30px;
    color: #000;
}

.work_info > p::after {
    position: absolute;
    content: "";
    height: 1px;
    width: 20px;
    top: 49%;
    left: 0;
    background-color: #000;
    transition: .3s;
}

.work_info  > a {
    font-size: 24px;
    color: #fff;
    position: absolute;
    height: 44px;
    width: 44px;
    background: #111;
    line-height: 44px;
    text-align: center;
    left: -22px;
    top: 50%;
    margin-top: -22px;
    z-index: 1;
}
.work_info a::after {
        position: absolute;
        content: "";
        height: 100%;
        width: 0;
        background-color: #fff;
        top: 0;
        left: 0;
        transition: .3s;
    }
    
    .work_info > a:hover::after {
        width: 100%;
        z-index: -1;
    }
    
    .work_info > a > svg {
        font-size: 16px;
    }
    
    .work_info a:hover  svg {
        color: black;
    }
    
    .work_single_item {
        margin-bottom: 30px;
        text-align: center;
        overflow: hidden;
    }
`;
