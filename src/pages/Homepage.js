import Benefit from "../components/Benefit";
import Matkul from "../components/Matkul";
import Testimonial from "../components/Testimonial";
import Banner from "../components/Banner";

export default function Homepage() {
  return (
    <div>
      <div className="container w-75">
        <Benefit count={5} />
        <Matkul count={4} />
        <Testimonial count={5} />
      </div>
      <Banner />
    </div>
  );
}
