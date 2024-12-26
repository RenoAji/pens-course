import ListGroup from "react-bootstrap/ListGroup";

export default function SidebarDashboard() {
  return (
    <div
      className="border border-1 border-gray rounded p-1 px-4 m-1 w-25 sidebar"
      style={{ minWidth: 500 }}
    >
      <h5 className="text-center">Dashboard</h5>
      <ListGroup className="p-2">
        <ListGroup.Item>
          <a href="/dashboard/">Profile Saya</a>
        </ListGroup.Item>
        <ListGroup.Item>
          <a href="/dashboard/matkul">Mata Kuliah Saya</a>
        </ListGroup.Item>
        <ListGroup.Item>
          <a
            onClick={() => {
              localStorage.removeItem("name");
              localStorage.removeItem("email");
              localStorage.removeItem("passsword");
            }}
            className="btn btn-danger"
            href="/"
          >
            Logout
          </a>
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
}
