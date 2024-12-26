import Accordion from "react-bootstrap/Accordion";
import Testimonial from "../components/Testimonial";
import Card from "react-bootstrap/Card";
import img from "../images/informatika.jpg";

export default function DetailMatkul() {
  return (
    <div className="p-5 detail-matkul gap-5">
      <div className="d-flex justify-content-evenly">
        <div style={{ maxWidth: "40rem" }}>
          <div className="p-2">
            <h4>Deskripsi</h4>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam
              illo modi odit dolores ea. Accusamus possimus distinctio harum,
              autem quaerat dolor debitis ut cum officia earum, placeat
              dignissimos ea porro? Lorem ipsum dolor sit, amet consectetur
              adipisicing elit. Magnam illo modi odit dolores ea. Accusamus
              possimus distinctio harum, autem quaerat dolor debitis ut cum
              officia earum, placeat dignissimos ea porro?
            </p>
          </div>
          <div className="p-2">
            <h4>Kurikulum</h4>
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Bab 1</Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Bab 2</Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>Bab 3</Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={img} />
          <Card.Body>
            <Card.Title>Rp 120.000</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
      <div className="pt-3 w-75 m-auto">
        <Testimonial count={3} />
      </div>
    </div>
  );
}
