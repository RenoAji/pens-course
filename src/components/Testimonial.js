import Card from "react-bootstrap/Card";
import img from "../images/informatika.jpg";
import Image from "react-bootstrap/Image";

export default function Testimonial({ count }) {
  const cards = [];
  for (let i = 0; i < count; i++) {
    cards.push(
      <Card style={{ width: "14rem" }} key={i} className="my-2">
        <Card.Body className="text-start">
          <Card.Title className="d-flex gap-3">
            <Image src={img} roundedCircle width={32} height={32} />
            <h5>Septareno</h5>
          </Card.Title>
          <Card.Text>Isi Testimoni Pengguna Aplikasi.</Card.Text>
        </Card.Body>
      </Card>
    );
  }
  return (
    <div className="text-center benefit py-3">
      <h4>Testimonial</h4>
      <p>Lorem Ipsum</p>
      <div className="d-flex justify-content-center justify-content-evenly flex-wrap">
        {cards}
      </div>
    </div>
  );
}
