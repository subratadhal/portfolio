import React from "react";
import { NavLink } from "react-router-dom";

function PaginationCommon(props) {
  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="page-link-body">
              <NavLink to={props.linkData.prevLink} className="link left">
                <p>
                  <strong>{props.linkData.prevTitle}</strong>
                </p>
                <p>{props.linkData.prevContent}</p>
              </NavLink>

              <div className="pagination-list-menu">
                <NavLink to={props.linkData.homeLink} rel="nofollow">
                  <span></span>
                  <span></span>
                  <span></span>
                </NavLink>
              </div>

              <NavLink to={props.linkData.nextLink} className="link right">
                <p>
                  <strong>{props.linkData.nextTitle}</strong>
                </p>
                <p>{props.linkData.nextContent}</p>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PaginationCommon;
