import { Col, Container, Ratio, Row } from "react-bootstrap";
function HomePage() {
  return (
    <>
      <header>
        <Container>
          <Row className="justify-content-center">
            <Col className="align-item-center">
              <Ratio className="ratio-16x9">
                <img
                  src="atomic pizza colored logo.png"
                  alt="atomic pizza logo"
                  className="img-fluid"
                  loading="lazy"
                />
              </Ratio>
            </Col>
          </Row>
        </Container>
      </header>
      <main>
        <Container>
          <Row>
            <Col className="text-center">
              <h1 className="display-1">
                <u>
                  <strong>Atomic Pizza website</strong>
                </u>
              </h1>
            </Col>
          </Row>
          <Row>
            <Col
              className="text-start fw-bolder"
              style={{ fontWeight: "1000px" }}
            >
              <h6 className="display-6">
                <strong>
                  Atomic Pizza is the ultimate fusion of science and flavor.
                </strong>
              </h6>
            </Col>
          </Row>
          <Row>
            <Col className="text-start">
              <h5>
                Explore a vibrant digital periodic table where every chemical
                element becomes a collectible “pizza” you can browse, learn
                about, and order. Each element card includes its atomic number,
                a custom-designed atom image, and a fun pizza-themed
                description. Whether you're grabbing Hydrogen for a quick bite
                or splurging on a rare-earth element, Atomic Pizza turns
                chemistry into a delicious adventure.
              </h5>
            </Col>
          </Row>
        </Container>
      </main>
    </>
  );
}

export default HomePage;
