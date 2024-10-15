// preventDefault
// stopPropagation

const TestView = () => {
  return (
    <div style={{ minHeight: "100vh", padding: 100 }}>
      <div
        onClick={() => {
          alert("Clicked On Div");
        }}
      >
        <button
          onClick={(event) => {
            event.stopPropagation();
            alert("Clicked On Button");
          }}
        >
          Click
        </button>
      </div>
    </div>
  );
};

export default TestView;
