import axios from "axios";
import { useEffect } from "react";

const TestView = () => {
  useEffect(() => {
    axios.get("http://localhost:3000/countries/2337").then((res) => {
      console.log(res.data);
    });
  }, []);

  return <div style={{ margin: 48 }}></div>;
};

export default TestView;
