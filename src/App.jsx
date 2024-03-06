import { useState } from "react";
import ContactPage from "./Pages/ContactPage";
import backgroundImage from "./assets/Designer.png";
import Button from "./Pages/Button";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [showButton, setShowButton] = useState(true);

  const handleClick = () => {
    setShowButton(!showButton);
    setTimeout(() => setShowForm(!showForm), 500); // Delay showing the form to allow the button transition to finish
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div>
        {showForm && (
          <ContactPage
            handleClick={() => {
              setShowForm(false);
              setShowButton(true);
            }}
          />
        )}
        {showButton && (
          <Button
            handleClick={() => {
              setShowButton(false);
              setTimeout(() => setShowForm(true), 500); // Delay showing the form to allow the button transition to finish
            }}
          />
        )}
      </div>
    </div>
  );
}

export default App;
