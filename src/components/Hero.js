import ilustrasi from "../images/ilustrasi.png";
import { Image } from "react-bootstrap";

export default function Hero() {
  return (
    <div className="hero d-flex pb-5 ps-4 gap-5 flex-wrap">
      <div className="px-5 py-4" style={{ maxWidth: 600 }}>
        <p className="p-0 m-1">Kursus online bersertifikasi</p>
        <h1>Kembangkan Potensi, Ikuti Kursus Online Disini!</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit, itaque
          at! Rerum, quam expedita quis eius omnis, Lorem ipsum dolor, sit amet
          consectetur adipisicing elit. Sit, itaque at! Rerum, quam expedita
          quis eius omni{" "}
        </p>
        <button>Masuk</button>{" "}
      </div>
      <div style={{ maxWidth: 512 }}>
        <Image src={ilustrasi} fluid />
      </div>
    </div>
  );
}
