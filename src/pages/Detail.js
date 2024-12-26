import { Image } from "react-bootstrap";
import img from "../images/kuliah.jpg";
import Matkul from "../components/Matkul";

export default function Detail() {
  return (
    <div className="detail-jurusan p-3">
      <div
        className="p-5 d-flex justify-content-center gap-5 m-auto"
        style={{ maxWidth: "80rem" }}
      >
        <Image src={img} className="rounded" />
        <div className="text-center p-5">
          <h4>Peserta</h4>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga,
            necessitatibus corrupti vitae ratione illum id totam, quam maiores
            explicabo perspiciatis magni! Eligendi deserunt, error fugit
            accusantium quod aut odio eum!
          </p>
        </div>
      </div>

      <div
        className="p-5 d-flex justify-content-center gap-5 m-auto"
        style={{ maxWidth: "80rem" }}
      >
        <div className="text-center p-5">
          <h4>Peserta</h4>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga,
            necessitatibus corrupti vitae ratione illum id totam, quam maiores
            explicabo perspiciatis magni! Eligendi deserunt, error fugit
            accusantium quod aut odio eum!
          </p>
        </div>
        <Image src={img} className="rounded" />
      </div>

      <div
        className="p-5 d-flex justify-content-center gap-5 m-auto"
        style={{ maxWidth: "80rem" }}
      >
        <Image src={img} className="rounded" />
        <div className="text-center p-5">
          <h4>Peserta</h4>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga,
            necessitatibus corrupti vitae ratione illum id totam, quam maiores
            explicabo perspiciatis magni! Eligendi deserunt, error fugit
            accusantium quod aut odio eum!
          </p>
        </div>
      </div>

      <div style={{ maxWidth: "70rem" }} className="m-auto">
        <Matkul count={10} card_width="12rem" />
      </div>
    </div>
  );
}
