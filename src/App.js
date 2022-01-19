import "./App.css";
import logo from "./logo.svg";
import { About } from "./About";
import "bootstrap/dist/css/bootstrap.min.css";
import * as ReactBootStrap from "react-bootstrap";
import img1 from "./img1.jpeg";
import img2 from "./img2.jpg";
import img3 from "./img3.jpg";
import img4 from "./L.png";
import img6 from "./f.png";
import img7 from "./img7.png";
import img8 from "./img8.png";
import img9 from "./img9.png";
import i1 from "./i1.jpg";
import i3 from "./i3.jpg";
import i2 from "./i2.jpg";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Link } from "react-router-dom";

let wow1 = {
  marginLeft: "1250px",
};
let style = {
  minWidth: "400px",
  minHeight: "400px",
};

let light = {
  color: "white",
};
let size = {
  width: "50px",
  height: "50px",
  padding: "5px",
};

let margin = {
  marginTop: "20px",
  marginBottom: "20px",
};

let margin1 = {
  marginLeft: "20px",
};

let margin2 = {
  margin: "10px",
};

let wow = {
  paddingLeft: "20px",
};

let hey = {
  padding: "20px",
};

let hey1 = {
  paddingRight: "10px",
  paddingLeft: "10px",
};

let color = {
  backgroundImage:
    "linear-gradient(to right top, #93b5c6, #9fb9ca, #aabdcd, #b4c1d0, #bec6d2, #c4c9d4, #caccd6, #d0cfd8, #d5d1da, #dbd3db, #e0d6db, #e4d8dc)",
};
function App() {
  return (
    <>
      <Router>
        <div style={color} className="App">
          <ReactBootStrap.Navbar bg="light" expand="lg">
            <ReactBootStrap.Navbar.Brand as={Link} style={wow} to="/">
              Animal NGO
            </ReactBootStrap.Navbar.Brand>
            <ReactBootStrap.Navbar.Toggle aria-controls="navbarScroll" />
            <ReactBootStrap.Navbar.Collapse id="navbarScroll">
              <ReactBootStrap.Nav
                className="mr-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <ReactBootStrap.Nav.Link as={Link} style={wow} to="/about">
                  About
                </ReactBootStrap.Nav.Link>
              </ReactBootStrap.Nav>
              <ReactBootStrap.Button
                style={margin1}
                className="float-right"
                href="https://rzp.io/l/9qZJbg5"
                variant="outline-success"
              >
                Donate
              </ReactBootStrap.Button>
            </ReactBootStrap.Navbar.Collapse>
          </ReactBootStrap.Navbar>
          <Switch>
            <Route exact path="/">
              {
                <>
                  <div>
                    <ReactBootStrap.Carousel>
                      <ReactBootStrap.Carousel.Item interval={1000}>
                        <img
                          style={style}
                          className="d-block w-100"
                          src={img1}
                          alt="First slide"
                        />
                        <ReactBootStrap.Carousel.Caption>
                          <h3>Save Animals</h3>
                          <p>
                            Divided by intelligence, united by a heartbeat –
                            Save animals.
                          </p>
                        </ReactBootStrap.Carousel.Caption>
                      </ReactBootStrap.Carousel.Item>
                      <ReactBootStrap.Carousel.Item interval={500}>
                        <img
                          style={style}
                          className="d-block w-100"
                          src={img2}
                          alt="Second slide"
                        />
                        <ReactBootStrap.Carousel.Caption>
                          <h3>Stand for Animal Rights!</h3>
                          <p>
                            Be kind to animals or stop calling yourself human.
                          </p>
                        </ReactBootStrap.Carousel.Caption>
                      </ReactBootStrap.Carousel.Item>
                      <ReactBootStrap.Carousel.Item>
                        <img
                          style={style}
                          className="d-block w-100"
                          src={img3}
                          alt="Third slide"
                        />
                        <ReactBootStrap.Carousel.Caption>
                          <h3>Respect animals</h3>
                          <p>The Earth will lose its soul without animals.</p>
                        </ReactBootStrap.Carousel.Caption>
                      </ReactBootStrap.Carousel.Item>
                    </ReactBootStrap.Carousel>
                  </div>

                  <ReactBootStrap.Modal.Dialog>
                    <ReactBootStrap.Modal.Title style={wow}>
                      Our Vision
                    </ReactBootStrap.Modal.Title>

                    <ReactBootStrap.Modal.Body>
                      <p>
                        Animal NGO is founded by visionaries who felt the need
                        to build a free of cost medical facility for the stray
                        animals where the best, most advanced, ethical and
                        highly skilled medical care is readily available.
                      </p>
                    </ReactBootStrap.Modal.Body>

                    <ReactBootStrap.Modal.Footer>
                      <ReactBootStrap.Button
                        className="btn btn-success"
                        variant="primary"
                        href="https://rzp.io/l/9qZJbg5"
                      >
                        Donate
                      </ReactBootStrap.Button>
                    </ReactBootStrap.Modal.Footer>
                  </ReactBootStrap.Modal.Dialog>

                  <ReactBootStrap.CardGroup style={hey}>
                    <ReactBootStrap.Card style={(hey, margin2)}>
                      <ReactBootStrap.Card.Img variant="top" src={i3} />
                      <ReactBootStrap.Card.Body>
                        <ReactBootStrap.Card.Title>
                          Critical Medical Care
                        </ReactBootStrap.Card.Title>
                        <ReactBootStrap.Card.Text>
                          There are so many animals day in & day out that are
                          subjected to cruelty, road rage and medical concerns.
                          Karma Foundation works towards helping such animals
                          either in our OPD or by admitting them into our
                          facility. Our current set-up in Pune City is our pilot
                          model. We plan to expand our horizon by working on
                          building a larger unit for farm animals, a sanctuary
                          for the old and discarded and a shelter home for the
                          ones who cannot survive on the streets of the citya
                          sanctuary for the old. stray animals at our OPD
                          clinic.
                        </ReactBootStrap.Card.Text>
                        <ReactBootStrap.Button
                          href="https://www.karmafoundation.ngo/"
                          variant="primary"
                        >
                          Visit
                        </ReactBootStrap.Button>
                      </ReactBootStrap.Card.Body>
                    </ReactBootStrap.Card>

                    <ReactBootStrap.Card style={(hey, margin2)}>
                      <ReactBootStrap.Card.Img variant="top" src={i1} />
                      <ReactBootStrap.Card.Body>
                        <ReactBootStrap.Card.Title>
                          Animal Birth Control (ABC)
                        </ReactBootStrap.Card.Title>
                        <ReactBootStrap.Card.Text>
                          Karma foundation truly believes that the best way to
                          reduce human - animal conflict & animal – animal
                          conflict is birth control. We conduct ABC surgeries
                          each day at our facility & keep the animal for Post
                          Operative care until they are fit to be released back
                          where they were picked up from.Our current set-up in
                          Pune City is our pilot model. We plan to expand our
                          horizon by working on building a larger unit for farm
                          animals, a sanctuary for the old and discarded and a
                          shelter home for the ones who cannot survive on the
                          streets of the city.
                        </ReactBootStrap.Card.Text>
                        <ReactBootStrap.Button
                          href="https://www.karmafoundation.ngo/"
                          variant="primary"
                        >
                          Visit
                        </ReactBootStrap.Button>
                      </ReactBootStrap.Card.Body>
                    </ReactBootStrap.Card>

                    <ReactBootStrap.Card style={(hey, margin2)}>
                      <ReactBootStrap.Card.Img variant="top" src={i2} />
                      <ReactBootStrap.Card.Body>
                        <ReactBootStrap.Card.Title>
                          Out Patient Department (OPD service)
                        </ReactBootStrap.Card.Title>
                        <ReactBootStrap.Card.Text>
                          Our OPD is a facility that is responsible for
                          providing prevention, cure, and alleviation of
                          diseases and pain. Our OPD clinic is a fully
                          functional facility which is equipped to handle
                          critical emergencies. We offer free treatment for
                          stray animals at our OPD clinic. Each day we attend to
                          number of patients who are victims of cruelty, road
                          accidents and who suffer from various illnesses. Our
                          partner, Animal Care Clinic has been generous by
                          extending their support towards our cause.
                        </ReactBootStrap.Card.Text>
                        <ReactBootStrap.Button
                          variant="primary"
                          href="https://www.karmafoundation.ngo/"
                        >
                          Visit
                        </ReactBootStrap.Button>
                      </ReactBootStrap.Card.Body>
                    </ReactBootStrap.Card>
                  </ReactBootStrap.CardGroup>

                  <section>
                    <div className="text-center">
                      <h2>Contact Us</h2>
                      <div style={margin}>
                        <a href="https://www.linkedin.com/signup">
                          <img style={size} src={img4} />
                        </a>
                        <a style={size} href="https://www.facebook.com/">
                          <img style={size} src={img7} />
                        </a>
                        <a href="https://twitter.com/?lang=en">
                          <img style={size} src={img8} />
                        </a>
                        <a href="https://www.youtube.com/">
                          <img style={size} src={img9} />
                        </a>
                      </div>
                    </div>
                  </section>
                </>
              }
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
          </Switch>

          <footer className="bg-dark">
            <div className="container-fluid padding">
              <div className="row text-center">
                <div className="col-md-6">
                  <hr className="light" style={light} />
                  <h5 style={light}>Contact Us</h5>
                  <hr className="light" style={light} />
                  <p style={light}>(+91) 9999999999</p>
                  <p style={light}>example123@gmail.com</p>
                </div>
                <div className="col-md-6">
                  <hr className="light" style={light} />
                  <h5 style={light}>About</h5>
                  <hr className="light" style={light} />
                  <a href="https://www.pawsindia.org/">
                    <p style={light}>Links</p>
                  </a>
                  <a href="https://www.scoopwhoop.com/ngos-for-animals/">
                    <p style={light}>Other Links</p>
                  </a>
                </div>
                <div className="col-12">
                  <hr className="light-100" style={light} />
                  <h5 style={light}>&copy; AnimalNGO.org</h5>
                  <h6 style={light}>Developer Contact</h6>
                  <a
                    style={hey1}
                    href="https://www.linkedin.com/in/priyaanshu-mittra-9bb0961b9/"
                  >
                    Linkedin
                  </a>
                  <a style={hey1} href="https://github.com/mittrajpeg606">
                    Github
                  </a>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </Router>
    </>
  );
}

export default App;
