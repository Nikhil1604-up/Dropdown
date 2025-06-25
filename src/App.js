import "./styles.css";
import { useState } from "react";

export default function App() {
  const [accordinData, setAccordinData] = useState([
    {
      header: "Accordin 1",
      content: "This is content of Accordin1",
      isActive: false,
    },
    {
      header: "Accordin 2",
      content: "This is content of Accordin2",
      isActive: false,
    },
    {
      header: "Accordin 3",
      content: "This is content of Accordin3",
      isActive: false,
    },
    {
      header: "Accordin 4",
      content: "This is content of Accordin4",
      isActive: false,
    },
    {
      header: "Accordin 5",
      content: "This is content of Accordin5",
      isActive: false,
    },
  ]);

  const [activeIndex, setActiveIndex] = useState(0);

  const handleAccordinClick = (indexToUpdate) => {
    setAccordinData((prev) =>
      prev.map((item, index) =>
        indexToUpdate === index ? { ...item, isActive: !item.isActive } : item
      )
    );
  };
  return (
    <div className="App">
      <div className="accordin-container">
        {accordinData.map((accn, index) => {
          return (
            <div key={index}>
              <div
                className="accn-header"
                onClick={() => handleAccordinClick(index)}
              >
                <h3>{accn.header}</h3>
                <i
                  className={`fa-solid ${
                    accn.isActive ? "fa-chevron-up" : "fa-chevron-down"
                  } icon`}
                />
              </div>
              {accn.isActive && (
                <div className="acc-content">
                  {" "}
                  <p>{accn.content}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
