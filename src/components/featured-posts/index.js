import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Row from '../shared/Row';
import CenterTitle from '../shared/CenterTitle';
import artImg from '../../images/b-3.png';
import Section from '../page-elements/section';

FeaturedPosts.propTypes = {

};

function FeaturedPosts(props) {
  const [articles] = useState([
    {
      imgSrc: 'https://miro.medium.com/max/1000/0*LgWPaDxVRmD1fY4B',
      articleLink: 'https://medium.com/@cyrus_kiprop/cracking-the-css-display-inline-block-inline-block-none-visibility-hidden-property-851ad5ee926',
      postedOn: '05,12,2019',
      shortDescription: ' By default, current browsers treat every HTML element as a block element. However, CSS has a different cocktail recipe for displaying elements on the DOM:- the — inline, and block. However, there is a third smoothy called the inline-block.',
      slug: 'Cracking the CSS display',

    }, {
      imgSrc: 'https://firebasestorage.googleapis.com/v0/b/hackernoon-app.appspot.com/o/images%2FMJpFVUEItkSdoh38rYo60VT7RfH3-dxq4x96.jpeg?alt=media&token=90a6b406-5988-40eb-91fa-3bc4ece5404b',
      articleLink: 'https://www.hackernoon.com/ruby-on-rails-hidden-secrets-how-to-get-the-most-out-of-active-record-associations-6m133w8a',
      postedOn: '13.10.2020',
      shortDescription: 'I struggled a lot with Rails models as a beginner. I spent a lot of time reading the docs, read a couple of medium articles, watched some youtube videos but all in vain',
      slug: 'Ruby on Rails Hidden Secrets: Active Records Associations',
    },
  ]);
  return (
    <Section>

      <CenterTitle title="Featured Posts" />
      <Row>
        {
              articles.map((article) => (
                <div className="col-sm-12 col-md-4">

                  <Posts>
                    <div
                      className="mh-blog-item dark-bg wow fadeInUp"
                      data-wow-duration="0.8s"
                      data-wow-delay="0.3s"
                    >
                      <img src={article.imgSrc} alt="" className="img-fluid" />
                      <div className="blog-inner">
                        <h2><a href={article.articleLink} target="_blank">{article.slug}</a></h2>
                        <div className="mh-blog-post-info">
                          <ul>
                            <li>
                              <strong>Post On</strong>
                              <a href="">{article.postedOn}</a>
                            </li>
                          </ul>
                        </div>
                        <p>
                          {
                        article.shortDescription
                    }
                        </p>
                        <div className="d-flex justify-content-start">
                          <a href="https://medium.com/@cyrus_kiprop/cracking-the-css-display-inline-block-inline-block-none-visibility-hidden-property-851ad5ee926" target="_blank">Read More</a>
                        </div>
                      </div>
                    </div>
                  </Posts>
                </div>
              ))
          }
      </Row>
    </Section>

  );
}

export default FeaturedPosts;

const Posts = styled.div`

.blog-inner {
    padding: 0px 20px 30px;;
}

border-color: #444;
    background-color: #202026;
    border: 1px  solid #e5e5e5;
        border-color: #444;
    border-radius: 15px;
    margin-bottom: 10px;
    text-align: center;
    transition: all .2s ease-in-out;
    height: 100%;

:hover {
      box-shadow: 0 0 24px rgba(255,255,255,.14);
          transform: translatey(-9px);
}
img {
    padding-bottom: 30px;
    border-radius: 15px 15px 0 0;
}

.blog-inner > h2 {
  font-size: 24px;
    line-height: 32px;
    font-weight: 600;
    margin-bottom: 10px;
    color: #fff;
}

.blog-inner > li {
  margin: 0 6px;
  margin-left: 0;
}

li > strong {
  margin-right: 6px;
}

 p {
  opacity: .9;
  margin-bottom: 1rem;
  text-align:left;
}

.d-flex > a {
font-weight: bolder;
}

`;
