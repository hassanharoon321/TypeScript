import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./search.css";
import FooterTwo from "../../Components/Footer/Footer2"

const Search = () =>{
    return(
        <>
        <div>
        <div className="container-fluid search-top">
          <div className="row mx-0">
            <div className="col-md-2 d-flex justify-content-center">
            </div>
            <div className="col-md-9">
              <h1>Search for jobs</h1>
              <h6>Showing 15,321 Graphic Design Jobs</h6>
            </div>
          </div>
        </div>
        <div className="container-fluid container-bottom padder">
          <div className="row mx-0">
            <div className="col-md-3">
              <div className="select-area">
                <button className="smooth-button">Refine Search</button>
                <select name="Sort by" id="Sorting">
                  <option value="Sort By">Sort By        </option>
                </select>
                <select name="Job Type" id>
                  <option value>Job Type</option>
                </select>
                <select name="Industry" id>
                  <option value>Industry</option>
                </select>
                <select name="Country" id>
                  <option value>Country</option>
                </select>
              </div>
            </div>
            <div className="col-md-6">
              <div className="job_result">
                <h4 className="text-color">Graphic Design</h4>
                <p className="text-disabled">Technysm</p>
                <div className="info-tags">
                  <span className="ml-0"><i className="fal fa-money-check"></i> 2-3 Years</span>
                  <span><ion-icon name="location-outline" /> Karachi, Pakistan</span>
                  <span><i className="fal fa-pencil-alt"></i> Head of Media Team</span>
                </div>
                <p>Stylish Eve is looking for an enthusiastic and creative Graphic Designer with strong interpersonal skills and a positive attitude!</p>
                <ul className="ml-0">
                  <li>Create visual elements such as logos, original images, illustrations to help deliver a message</li>
                </ul>
              </div>
              <div className="job_result">
                <h4 className="text-color">Graphic Design</h4>
                <p className="text-disabled">Technysm</p>
                <div className="info-tags">
                <span className="ml-0"><i className="fal fa-money-check"></i> 2-3 Years</span>
                  <span><ion-icon name="location-outline" /> Karachi, Pakistan</span>
                  <span><i className="fal fa-pencil-alt"></i> Head of Media Team</span>
                </div>
                <p>Stylish Eve is looking for an enthusiastic and creative Graphic Designer with strong interpersonal skills and a positive attitude!</p>
                <ul className="ml-0">
                  <li>Create visual elements such as logos, original images, illustrations to help deliver a message</li>
                </ul>
              </div>
              <div className="job_result">
                <h4 className="text-color">Graphic Design</h4>
                <p className="text-disabled">Technysm</p>
                <div className="info-tags">
                <span className="ml-0"><i className="fal fa-money-check"></i> 2-3 Years</span>
                  <span><ion-icon name="location-outline" /> Karachi, Pakistan</span>
                  <span><i className="fal fa-pencil-alt"></i> Head of Media Team</span>
                </div>
                <p>Stylish Eve is looking for an enthusiastic and creative Graphic Designer with strong interpersonal skills and a positive attitude!</p>
                <ul className="ml-0">
                  <li>Create visual elements such as logos, original images, illustrations to help deliver a message</li>
                </ul>
              </div>
              <div className="job_result">
                <h4 className="text-color">Graphic Design</h4>
                <p className="text-disabled">Technysm</p>
                <div className="info-tags">
                <span className="ml-0"><i className="fal fa-money-check"></i> 2-3 Years</span>
                  <span><ion-icon name="location-outline" /> Karachi, Pakistan</span>
                  <span><i className="fal fa-pencil-alt"></i> Head of Media Team</span>
                </div>
                <p>Stylish Eve is looking for an enthusiastic and creative Graphic Designer with strong interpersonal skills and a positive attitude!</p>
                <ul className="ml-0">
                  <li>Create visual elements such as logos, original images, illustrations to help deliver a message</li>
                </ul>
              </div>
              <div className="job_result">
                <h4 className="text-color">Graphic Design</h4>
                <p className="text-disabled">Technysm</p>
                <div className="info-tags">
                <span className="ml-0"><i className="fal fa-money-check"></i> 2-3 Years</span>
                  <span><ion-icon name="location-outline" /> Karachi, Pakistan</span>
                  <span><i className="fal fa-pencil-alt"></i> Head of Media Team</span>
                </div>
                <p>Stylish Eve is looking for an enthusiastic and creative Graphic Designer with strong interpersonal skills and a positive attitude!</p>
                <ul className="ml-0">
                  <li>Create visual elements such as logos, original images, illustrations to help deliver a message</li>
                </ul>
              </div>
            </div>
            <div className="col-md-2">
              <div className="place-ad">
                <h4>Place Ad Here!</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterTwo />
      </>
    )
}

export default Search;