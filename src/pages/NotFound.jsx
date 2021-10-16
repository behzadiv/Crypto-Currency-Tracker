import { Link } from "react-router-dom/cjs/react-router-dom.min";

const NotFound = () => {
  return (
    <div>
      <p>
        404
        <br />
        page not Found
      </p>
      <Link to="/">Go to HomePage</Link>
    </div>
  );
};

export default NotFound;
