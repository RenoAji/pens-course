import { Navigate, useSearchParams } from "react-router-dom";

export default function Profile() {
  const [searchParams] = useSearchParams();

  const log =
    searchParams.has("email") &&
    searchParams.has("password") &&
    searchParams.has("name");

  if (log) {
    localStorage.setItem("name", searchParams.get("name"));
    localStorage.setItem("password", searchParams.get("password"));
    localStorage.setItem("email", searchParams.get("email"));
  }

  var user = {
    name: localStorage.getItem("name"),
    email: localStorage.getItem("email"),
    password: localStorage.getItem("password"),
  };

  if (!user["name"]) {
    return <Navigate to="/" />;
  }
  return (
    <div
      className="p-3 w-50 py-5 profile"
      style={{ height: "70vh", minWidth: "512px" }}
    >
      <h5>Profil Saya</h5>
      <div className="border border-1 border-gray rounded container p-2 px-4 d-flex align-items-center w-100 justify-content-between">
        <div className="d-flex flex-row gap-3 p-1 align-items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            fill="currentColor"
            class="bi bi-person-circle"
            viewBox="0 0 16 16"
          >
            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
            <path
              fill-rule="evenodd"
              d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"
            />
          </svg>
          <div className="container">
            <p className="m-0 fs-4">{user["name"]}</p>
            <p className="m-0 text-secondary">{user["email"]}</p>
          </div>
        </div>
        <button style={{ height: "fit-content" }}>Detail</button>
      </div>
      <br />
      <div className="d-flex gap-4">
        <div className="border border-1 border-gray rounded w-25 px-3 p-1">
          <p className="m-1">Jumlah Semua Kursus</p>
          <h5>10</h5>
        </div>

        <div className="border border-1 border-gray rounded w-25 px-3 p-1">
          <p className="m-1">Jumlah Kursus Selesai</p>
          <h5>4</h5>
        </div>

        <div className="border border-1 border-gray rounded w-25 px-3 p-1">
          <p className="m-1">Jumlah Kursus Belum Selesai</p>
          <h5>6</h5>
        </div>
      </div>
    </div>
  );
}
