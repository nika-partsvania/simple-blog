import "./loader.css";

const Loader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center">
      <div className="lds-circle">
        <div></div>
      </div>
    </div>
  );
};

export default Loader;
