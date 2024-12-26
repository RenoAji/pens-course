import Matkul from "../components/Matkul";

export default function DashboardMatkul() {
  return (
    <div className="p-3 w-50 py-5">
      <h5>Matkul Saya</h5>
      <Matkul count={10} card_width="12rem" show_header={false} />
    </div>
  );
}
