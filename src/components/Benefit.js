import Card from "react-bootstrap/Card";

export default function Benefit({ count }) {
  const cards = [];
  for (let i = 0; i < count; i++) {
    cards.push(
      <Card style={{ width: "16rem" }} key={i} className="my-2">
        <Card.Body className="text-start">
          <Card.Title className="py-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="currentColor"
              class="bi bi-arrow-down-up"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M11.5 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L11 2.707V14.5a.5.5 0 0 0 .5.5m-7-14a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L4 13.293V1.5a.5.5 0 0 1 .5-.5"
              />
            </svg>
          </Card.Title>
          <Card.Subtitle className="mb-2">Lorem Ipsum</Card.Subtitle>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
    );
  }
  return (
    <div className="text-center benefit py-3">
      <h4>Benefit yang di dapat</h4>
      <p>Lorem Ipsum</p>
      <div className="d-flex justify-content-center justify-content-evenly flex-wrap">
        {cards}
      </div>
    </div>
  );
}
