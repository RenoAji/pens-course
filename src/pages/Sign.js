import logo from "../images/Logo_PENS_putih.png";
import ilustrasi from "../images/ilustrasi.png";
import AppForm from "../components/AppForm";

export default function Sign({ action }) {
  let p = "";
  if (action === "Login") {
    p = (
      <p>
        Belum Punya Akun? <a href="/register">Daftar</a>
      </p>
    );
  } else {
    p = (
      <p>
        Sudah Punya Akun? <a href="/login">Masuk</a>
      </p>
    );
  }

  return (
    <div className="sign">
      <div className="d-flex align-items-stretch border border-1 border-gray">
        <div className="hero section">
          <img alt="Logo Pens" src={logo} width={32} />
          <h1 className="mb-5">Selamat Datang Di PENS Course!</h1>
          <img src={ilustrasi} alt="" width={256} />
        </div>
        <div className="section">
          <h4 className="text-center">{action}</h4>
          <AppForm action={action} />
          <div className="py-4 text-center">
            <a href="/">Lanjutkan Sebagai Guest</a>
            {p}
          </div>
        </div>
      </div>
    </div>
  );
}
