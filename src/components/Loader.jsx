import { BounceLoader } from "react-spinners";

const Loader = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "90vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "black",
      }}
    >
      <BounceLoader color="#D2B400" size={90} />
    </div>
  );
};

export default Loader;
