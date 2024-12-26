import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo_pens from "../images/Logo_PENS_putih.png";
import { useSearchParams } from "react-router-dom";

export default function AppNavbar() {
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

  return (
    <div className="header pb-1">
      {/* Navbar */}
      <Navbar collapseOnSelect expand="lg" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">
            {" "}
            <img
              alt=""
              src={logo_pens}
              width="40"
              height="40"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="m-auto gap-3">
              <Nav.Link href="/">Beranda</Nav.Link>
              <Nav.Link href="/jurusan">Jurusan</Nav.Link>
              {user["name"] ? (
                <Nav.Link href={"/dashboard/"}>Dashboard</Nav.Link>
              ) : (
                <Nav.Link href="/dashboard" disabled>
                  Dashboard
                </Nav.Link>
              )}
            </Nav>

            {user["name"] ? (
              <Nav className="gap-3">
                <Nav.Link>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    fill="currentColor"
                    class="bi bi-bell-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2m.995-14.901a1 1 0 1 0-1.99 0A5 5 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901" />
                  </svg>
                </Nav.Link>
                <Nav.Link
                  href={"/dashboard/"}
                  className="border rounded-2 border-white "
                >
                  <div className="d-flex gap-2 align-items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
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
                    {user["name"]}
                  </div>
                </Nav.Link>
              </Nav>
            ) : (
              <Nav className="gap-2">
                <Nav.Link href="/login">Masuk</Nav.Link>
                <Nav.Link
                  href="/register"
                  className="border rounded-2 border-white "
                >
                  Daftar
                </Nav.Link>
              </Nav>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
