import { useParams } from "react-router-dom";

export default function HeroSecond({ heading = "" }) {
  let { param } = useParams();
  return (
    <div className="hero d-flex pb-5 ps-4 gap-5 flex-wrap">
      <div className="px-5 py-4" style={{ maxWidth: 600 }}>
        <h1>{heading || param}</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit, itaque
          at! Rerum, quam expedita quis eius omnis, Lorem ipsum dolor, sit amet
          consectetur adipisicing elit. Sit, itaque at! Rerum, quam expedita
          quis eius omni{" "}
        </p>
      </div>
    </div>
  );
}
