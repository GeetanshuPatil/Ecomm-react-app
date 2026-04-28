import { useNavigate } from "react-router-dom";

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(-1)}
      className="mb-4 px-3 py-1 border rounded hover:bg-gray-100"
    >
      ← Back
    </button>
  );
};

export default BackButton;