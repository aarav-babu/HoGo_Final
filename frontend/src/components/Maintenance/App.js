import { Container, Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

function MaintenanceCard() {
  return (
    <Container fluid>
      <Row>
        <Col
          sm={{ span: 10, offset: 1 }}
          style={{
            backgroundImage: "url('/img/g1.jpg')",
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
          }}
          className="m-card"
        >
          <Row>
            <Col xs={{ span: 10, offset: 1 }} className="abt-box">
              <h1>Pay Maintenance Bill</h1>
              <p className="abt-desc" style={{ textAlign: 'center' }}>
                Residents can pay their monthly maintenance bill through stripe.
              </p>

              {/* <a
                // target="_blank"
                href="https://buy.stripe.com/test_fZe4ju1qg5aBeGc4gg"
                rel="noreferrer"
                style={{ textDecoration: 'none' }}
              >
                <Button variant="light" className="m-btn">
                  Pay now
                </Button>
              </a>
              <a
                // target="_blank"
                href="https://billing.stripe.com/p/login/test_00g9Dt6qhauGgGk8ww"
                rel="noreferrer"
                style={{ textDecoration: 'none' }}
              >
                <Button variant="light" className="m-btn">
                  View
                </Button>
              </a> */}
            </Col>
          </Row>
          <Row>
            <Col xs={{ span: 10, offset: 1 }} className="set-pay">
              <h1>Set New Subscription</h1>
              <p className="abt-desc">
                Set up a subscription to pay the monthly maintenance bill.
              </p>
              <a
                // target="_blank"
                href="https://buy.stripe.com/test_fZe4ju1qg5aBeGc4gg"
                rel="noreferrer"
                style={{ textDecoration: 'none' }}
              >
                <Button variant="light" className="mp-btn">
                  Subscribe
                </Button>
              </a>
            </Col>
          </Row>
          <Row>
            <Col xs={{ span: 10, offset: 1 }} className="set-pay">
              <h1>Manage Subscription</h1>
              <p className="abt-desc">
                Either cancel or pause the maintenance subscription plan.
              </p>
              <a
                // target="_blank"
                href="https://billing.stripe.com/p/login/test_00g9Dt6qhauGgGk8ww"
                rel="noreferrer"
                style={{ textDecoration: 'none' }}
              >
                <Button variant="light" className="mm-btn">
                  Manage
                </Button>
              </a>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default MaintenanceCard;
