import React, { useState, useEffect, useRef  } from 'react';
import { NavLink } from 'react-router-dom';
import {stockData} from '../../data/casestudy';

function PaginationCaseStudy(props) {

  const slug = props.slug;
  const [previousData, setPreviousData] = useState();
  const [nextData, setNextData] = useState();

  useEffect(() => {
    const currentIndex = stockData.findIndex(item => item.slug === slug);
    const previousIndex = (currentIndex - 1 + stockData.length) % stockData.length;
    const PreviousData = getDataByIndex(previousIndex);
    setPreviousData(PreviousData);
    const nextIndex = (currentIndex + 1) % stockData.length;
    const NextData = getDataByIndex(nextIndex);
    setNextData(NextData);
  }, [slug]);

  const getDataByIndex = (index) => {
    if (index >= 0 && index < stockData.length) {
      return stockData[index];
    }
    return null;
  };

  return (
      <section>
        <div className="container">
          <div className="row">
            <div className="col"> 
              <div className="section-pagination"> 
                  <div className='pagination-link'>             
                    <NavLink to={`/portfolio/case-study-details/${previousData?.slug}`} rel="nofollow">
                      <img src={`${process.env.PUBLIC_URL}/images/casestudy/${previousData?.paginationBanner}`} alt='' /> 
                      <span>{previousData?.title}</span>
                    </NavLink>
                  </div>  
                  <div className='pagination-list'>
                    <NavLink to={`/portfolio/case-study`} rel="nofollow">                     
                      <span></span>
                      <span></span>
                      <span></span>
                    </NavLink>
                  </div>      
                  <div className='pagination-link'> 
                    <NavLink to={`/portfolio/case-study-details/${nextData?.slug}`} rel="nofollow">
                        <img src={`${process.env.PUBLIC_URL}/images/casestudy/${nextData?.paginationBanner}`} alt='' />
                        <span>{nextData?.title}</span>
                    </NavLink>
                  </div>                   
              </div>               
            </div>
          </div>
        </div>
      </section>  
  );
}

export default PaginationCaseStudy;
