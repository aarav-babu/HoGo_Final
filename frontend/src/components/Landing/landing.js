import { Container, Row, Col } from 'react-bootstrap';
// import skyline from '../img/skyline-color.png';
import security from './assets/lock.png';
import phone from './assets/phone.png';
import chat from './assets/chat.png';
import bill from './assets/bill.png';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import './landing.css';
// function AppRouter() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/signin" element={<SignIn />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// function TopBar() {
//   return (
//     <>
//       {['sm'].map((expand) => (
//         <Navbar
//           key={expand}
//           variant="dark"
//           expand={expand}
//           className="my-navbar"
//           fixed="top"
//         >
//           <Container fluid>
//             <Navbar.Brand href="#" className="brand">
//               HoGo.
//             </Navbar.Brand>
//             <Navbar.Toggle aria-controls="basic-navbar-nav" />
//             <Navbar.Collapse id="basic-navbar-nav">
//               <Nav className="me-auto justify-content-end flex-grow-1 pe-3 offcanvas-body">
//                 {/* <Nav.Link href="#my-projects" style={{ paddingRight: '2rem' }}>
//                   Gate Entry
//                 </Nav.Link>
//                 <Nav.Link href="#my-projects" style={{ paddingRight: '2rem' }}>
//                   Directory
//                 </Nav.Link>
//                 <Nav.Link
//                   href="#"
//                   target="_blank"
//                   style={{ paddingRight: '2rem' }}
//                 >
//                   Forum
//                 </Nav.Link> */}
//                 <Nav.Link>
//                   <Button variant="light" className="mp-btn">
//                     Sign in
//                   </Button>
//                 </Nav.Link>
//               </Nav>
//             </Navbar.Collapse>
//           </Container>
//         </Navbar>
//       ))}
//     </>
//   );
// }

function Home() {
  return (
    <Container fluid>
      <Row className="intro-section">
        <Col xs={{ offset: 1, span: 10 }} className="intro-text">
          <Row>
            <Col>
              <div className="text text-1">H</div>
              <div className="text text-2">o</div>
              <div className="text text-3">G</div>
              <div className="text text-4">o</div>
              <div className="text text-2">.</div>
            </Col>
          </Row>

          <h1>A Comprehensive Apartment Management System.</h1>
          <p>
            An all-in-one platform where owners and tenants can manage visitors,
            access directories, interact in forums and pay the maintenance bill.
          </p>
        </Col>
        {/* <Col xs={{ span: 5 }} className="intro-img">
        <img src="/img/image.jpg" alt="Logo" />
      </Col> */}
      </Row>
    </Container>
  );
}

function GateFeature() {
  return (
    <Container fluid>
      <Row>
        <Col
          sm={{ span: 10, offset: 1 }}
          style={{
            backgroundImage: "url('/img/oyp.jpg')",
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
          }}
          className="m-card"
        >
          <Row>
            <Col xs={{ span: 10, offset: 1 }} className="abt-box">
              <h1>Gate Security</h1>
              <Row>
                <Col xs={{ span: 8 }}>
                  <p className="abt-desc">
                    A security system that uses QR codes to allow House helps,
                    Delivery Boys, and Guests to enter the apartment securely.
                    The resident is alerted on who is trying to enter the
                    apartment and can allow or deny access.
                  </p>
                </Col>
                <Col xs={{ span: 4 }}>
                  <img
                    src={security}
                    alt="gate security"
                    className="R-sec-img"
                  ></img>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

function DirectoryFeature() {
  return (
    <Container fluid>
      <Row>
        <Col
          sm={{ span: 10, offset: 1 }}
          style={{
            backgroundImage: "url('/img/gb.png')",
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
          }}
          className="m-card"
        >
          <Row>
            <Col xs={{ span: 10, offset: 1 }} className="abt-box">
              <h1>Directory</h1>
              <Row>
                <Col xs={{ span: 4 }}>
                  <img src={phone} alt="directory" className="L-sec-img"></img>
                </Col>
                <Col xs={{ span: 8 }}>
                  <p className="abt-desc" style={{ paddingTop: '1.6rem' }}>
                    Provide extension information about the flats and common
                    areas such as main gate security, maintenance staff, club
                    house etc to the residents.
                  </p>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

function ForumFeature() {
  return (
    <Container fluid>
      <Row>
        <Col
          sm={{ span: 10, offset: 1 }}
          style={{
            backgroundImage: "url('/img/lpb.svg')",
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
          }}
          className="m-card"
        >
          <Row>
            <Col
              xs={{ span: 10, offset: 1 }}
              className="abt-box"
              style={{ paddingBottom: '0rem' }}
            >
              <h1>Forums</h1>
              <Row>
                <Col xs={{ span: 8 }}>
                  <p className="abt-desc" style={{ paddingTop: '1.6rem' }}>
                    Residents can chat with other residents, discuss or organise
                    events and raise complaints/grievances which can be
                    addressed by the apartment committee.
                  </p>
                </Col>
                <Col xs={{ span: 4 }}>
                  <img
                    src={chat}
                    style={{ width: '65%', height: '90%', marginLeft: '4rem' }}
                    alt="forum chat"
                    className="R-sec-img"
                  ></img>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

function MaintenanceFeature() {
  return (
    <Container fluid>
      <Row>
        <Col
          sm={{ span: 10, offset: 1 }}
          style={{
            backgroundImage: "url('/img/bg.svg')",
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
          }}
          className="m-card"
        >
          <Row>
            <Col xs={{ span: 10, offset: 1 }} className="abt-box">
              <h1>Pay Maintenance Online</h1>
              <Row style={{ marginTop: '2rem' }}>
                <Col xs={{ span: 4 }}>
                  <img
                    src={bill}
                    alt="directory"
                    style={{ marginLeft: '4rem' }}
                    className="L-sec-img"
                  ></img>
                </Col>
                <Col xs={{ span: 8 }}>
                  <p className="abt-desc" style={{ paddingTop: '2.2rem' }}>
                    Residents can securely pay the maintenance bill online in
                    the form of a subscription and manage the plan, view
                    invoices and receipts.
                  </p>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

function App() {
  return (
    <>
      {/* <TopBar /> */}
      <Home />
      <GateFeature />
      <DirectoryFeature />
      <ForumFeature />
      <MaintenanceFeature />
    </>
  );
}

export default App;
