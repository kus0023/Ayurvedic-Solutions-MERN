import React from "react";
import "./css/DiseaseDetail.css";

const M = window.M;
class DiseaseDetail extends React.Component {
  componentDidMount() {
    const elems = document.querySelectorAll(".scrollspy");
    M.ScrollSpy.init(elems, { top: 0, offset: 0 });
  }

  componentWillUnmount() {
    const elem = document.querySelector(".scrollspy");
    const instance = M.ScrollSpy.getInstance(elem);
    instance.destroy();
  }

  render() {
    return (
      <>
        <div className="head">
          <div className="container ">
            <div className="row section ">
              <div className="col s12 m4">
                <img
                  className="responsive-img"
                  alt=""
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSreAlx8vw_nSEP7lJzvHzk__lcXehVxw02kQ&usqp=CAU
"
                />
              </div>

              <div className="col s12 m8">
                <h2>Title</h2>
                <div className="divider"></div>
                <p>
                  Also Knows as: <b>common names</b>
                </p>
                <div>
                  <button className="btn-large orange waves-effect">
                    <i className="material-icons right">add</i> Save
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col hide-on-small-only m3 l2">
            <ul className="section table-of-contents">
              <li>
                <a href="#description">Description</a>
              </li>
              <li>
                <a href="#benefits">Benefits</a>
              </li>
              <li>
                <a href="#doses">Doses</a>
              </li>
            </ul>
          </div>
          <div className="col s12 m9 l10">
            <div id="description" className="section scrollspy">
              <h3>Description</h3>
              <div className="divider"></div>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero,
                nihil libero autem consectetur illo aliquid voluptatum illum
                distinctio? Voluptate minus impedit ut dolorem! Minus voluptatum
                asperiores provident inventore labore esse.{" "}
              </p>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero,
                nihil libero autem consectetur illo aliquid voluptatum illum
                distinctio? Voluptate minus impedit ut dolorem! Minus voluptatum
                asperiores provident inventore labore esse.{" "}
              </p>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero,
                nihil libero autem consectetur illo aliquid voluptatum illum
                distinctio? Voluptate minus impedit ut dolorem! Minus voluptatum
                asperiores provident inventore labore esse.{" "}
              </p>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero,
                nihil libero autem consectetur illo aliquid voluptatum illum
                distinctio? Voluptate minus impedit ut dolorem! Minus voluptatum
                asperiores provident inventore labore esse.{" "}
              </p>
            </div>

            <div id="benefits" className="section scrollspy">
              <h3>Benefits</h3>
              <div className="divider"></div>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum
                reprehenderit quaerat cupiditate aperiam accusantium incidunt
                eius eaque, saepe veniam reiciendis unde minus impedit iusto
                vitae officiis. Quo modi aperiam ad.{" "}
              </p>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum
                reprehenderit quaerat cupiditate aperiam accusantium incidunt
                eius eaque, saepe veniam reiciendis unde minus impedit iusto
                vitae officiis. Quo modi aperiam ad.{" "}
              </p>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum
                reprehenderit quaerat cupiditate aperiam accusantium incidunt
                eius eaque, saepe veniam reiciendis unde minus impedit iusto
                vitae officiis. Quo modi aperiam ad.{" "}
              </p>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum
                reprehenderit quaerat cupiditate aperiam accusantium incidunt
                eius eaque, saepe veniam reiciendis unde minus impedit iusto
                vitae officiis. Quo modi aperiam ad.{" "}
              </p>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum
                reprehenderit quaerat cupiditate aperiam accusantium incidunt
                eius eaque, saepe veniam reiciendis unde minus impedit iusto
                vitae officiis. Quo modi aperiam ad.{" "}
              </p>
            </div>

            <div id="doses" className="section scrollspy">
              <h3>Doses</h3>
              <div className="divider"></div>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Corrupti culpa reprehenderit magnam rem. Soluta enim minus
                facere laudantium quae reprehenderit molestiae, ipsum in at
                repellendus autem ipsa eveniet ab veritatis.{" "}
              </p>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Corrupti culpa reprehenderit magnam rem. Soluta enim minus
                facere laudantium quae reprehenderit molestiae, ipsum in at
                repellendus autem ipsa eveniet ab veritatis.{" "}
              </p>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Corrupti culpa reprehenderit magnam rem. Soluta enim minus
                facere laudantium quae reprehenderit molestiae, ipsum in at
                repellendus autem ipsa eveniet ab veritatis.{" "}
              </p>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Corrupti culpa reprehenderit magnam rem. Soluta enim minus
                facere laudantium quae reprehenderit molestiae, ipsum in at
                repellendus autem ipsa eveniet ab veritatis.{" "}
              </p>
            </div>

            <div id="empty-space"></div>
          </div>
        </div>
      </>
    );
  }
}

export default DiseaseDetail;
