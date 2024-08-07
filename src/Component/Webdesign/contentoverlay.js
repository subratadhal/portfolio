import React, { useEffect, useState } from "react";
import { webdata } from "../../data/webdata";

function Contentoverlay(props) {
  const [item, setIitem] = useState({});

  useEffect(() => {
    const arrayItem = webdata.find((item) => item.key === props.site);
    setIitem(arrayItem);
  }, [props.site]);

  return (
    <>
      <section className="task-details-wrapper">
        <div className="card">
          <div className="task-details">
            <div className="task-header">
              <h3>{item?.title}</h3>
              <p>{item?.description}</p>
            </div>
            <div className="ux-role">
              <p className="mb-10">
                <strong>UX Role</strong>
              </p>
              <ul>
                {item?.uxrole?.map((data, key) => {
                  return <li key={key}>{data}</li>;
                })}
              </ul>
            </div>
            <div className="ui-role">
              <p className="mb-10">
                <strong>UI Role</strong>
              </p>
              <ul>
                {item?.uirole?.map((data, key) => {
                  return <li key={key}>{data}</li>;
                })}
              </ul>
            </div>
            <div className="ui-engineer">
              <p className="mb-10">
                <strong>UI Engineer</strong>
              </p>
              <ul>
                {item?.uiengineer?.map((data, key) => {
                  return <li key={key}>{data}</li>;
                })}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contentoverlay;
