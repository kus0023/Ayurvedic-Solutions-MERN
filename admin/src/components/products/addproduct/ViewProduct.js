import React from "react";

export default function ViewProduct(props) {
  return (
    <div>
      {true && (
        <div>
          <div className="col s12">
            <div className="card">
              <div className="card-content">
                <h5>Disease name </h5>
                <h6>Disease Description</h6>
                <p>Disease desc</p>
                <h6>Doses:</h6>
                <p>doses</p>
              </div>
              <div className="card-action">
                <a href="#!">Delete</a>
                <a href="#!">Update</a>
              </div>
            </div>
          </div>
          <h5>Products</h5>
          <div className="col s6">
            <div className="card">
              <div className="card-image">
                <img
                  src="https://5.imimg.com/data5/UL/ER/MY-47611873/planet-ayurveda-arjuna-capsules-500x500.png"
                  style={{ height: "10vh" }}
                  alt=""
                />
                <span className="card-title red">Card Title</span>
              </div>
              <div className="card-content">
                <p style={{ height: 100, overflow: "hidden" }}>
                  I am a very simple card. I am good at containing small bits of
                  information. I am convenient because I require little markup
                  to use effectively.
                </p>
              </div>
              <div className="card-action">
                <a href="#!">Delete</a>
                <a href="#!">Update</a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
