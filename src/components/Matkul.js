import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import img from "../images/informatika.jpg";

export default function Matkul({
  count,
  card_width = "16rem",
  show_header = true,
}) {
  const matkul = [
    "Workshop Design Web",
    "Praktikum Konsep Pemrograman",
    "Dasar Sistem Komputer",
  ];
  const cards = [];
  for (let i = 0; i < count; i++) {
    cards.push(
      <Card style={{ width: card_width }} key={i} className="my-2">
        <Card.Img variant="top" src={img} />
        <Card.Body className="text-start">
          <Card.Title>{matkul[i % 3]}</Card.Title>
          <Card.Text>Deskirpsi matkul {matkul[i % 3]}.</Card.Text>
          <Button variant="primary" href={"/matkul/" + matkul[i % 3]}>
            Detail
          </Button>
        </Card.Body>
      </Card>
    );
  }
  return (
    <div className="text-center matkul py-3 w-100">
      {show_header ? (
        <div>
          <h4>Mata Kuliah</h4>
          <p>Lorem Ipsum</p>
        </div>
      ) : (
        <div></div>
      )}

      <div className="d-flex justify-content-evenly flex-wrap">{cards}</div>
    </div>
  );
}
