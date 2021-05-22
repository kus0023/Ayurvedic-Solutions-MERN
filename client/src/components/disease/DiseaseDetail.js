import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getDiseaseDetail } from "../../redux/actions/Disease.action";
import "./css/DiseaseDetail.css";

const M = window.M;
class DiseaseDetail extends React.Component {
  componentDidMount() {
    const elems = document.querySelectorAll(".scrollspy");
    M.ScrollSpy.init(elems, { top: 0, offset: 0 });
    this.props.getDiseaseDetail(this.props.match.params.id);
  }

  componentWillUnmount() {
    const elem = document.querySelector(".scrollspy");
    const instance = M.ScrollSpy.getInstance(elem);
    if (instance) instance.destroy();
  }

  render() {
    const { isLoading, disease, remedies } = this.props;

    if (isLoading || disease == null) {
      return <h1 className="center">Loading..</h1>;
    }

    return (
      <>
        <div className="head">
          <div className="container ">
            <div className="row section ">
              <div className="col s12 ">
                <h2>{disease.name}</h2>
                <div className="divider"></div>
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
                <a href="#causes">Causes</a>
              </li>
              <li>
                <a href="#symptoms">Symptoms</a>
              </li>
              <li>
                <a href="#remedies">Remedies</a>
              </li>
            </ul>
          </div>
          <div className="col s12 m9 l10">
            <div id="description" className="section scrollspy">
              <h3>Description</h3>
              <div className="divider"></div>
              <p>{disease.description}</p>
            </div>

            <div id="causes" className="section scrollspy">
              <h3>Causes</h3>
              <div className="divider"></div>
              <p>
                <ul className="browser-default">
                  {disease.causes.map((c, i) => (
                    <li key={i}>{c}</li>
                  ))}
                </ul>
              </p>
            </div>

            <div id="symptoms" className="section scrollspy">
              <h3>Symptoms</h3>
              <div className="divider"></div>
              <p>
                <ul className="browser-default">
                  {disease.symptoms.map((s, i) => (
                    <li key={i}>{s}</li>
                  ))}
                </ul>
              </p>
            </div>

            <div id="remedies" className="section scrollspy">
              <h3>Remedies</h3>
              <div className="divider"></div>
              <p>
                <ul className="collection">
                  {remedies.map((r, i) => (
                    <li
                      className="row collection-item orange lighten-5"
                      key={i}
                    >
                      <Link to={"/product/" + r._id + "/"}>
                        <div className="col s12 m4">
                          <img
                            className="responsive-img"
                            alt={r.name}
                            src={r.image}
                            style={{ width: "25%" }}
                          />
                        </div>
                        <div className="col s12 m8 black-text">
                          <h5>{r.name}</h5>
                          <p className="truncate">{r.description}</p>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </p>
            </div>

            <div id="empty-space"></div>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  isLoading: state.diseaseState.isLoading,
  disease: state.diseaseState.diseaseDetail,
  remedies: state.diseaseState.diseaseDetail?.remedies,
});

const mapDispatchToProps = (dispatch) => ({
  getDiseaseDetail: (id) => dispatch(getDiseaseDetail(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DiseaseDetail);
