import React, { useState } from "react";
import FormControlled from "./Components/FormControlled";
import UserDataDisplay from "./Components/DataDisplay";

const App = () => {
  const [formData, setFormData] = useState(null); // Adicionando o estado para armazenar os dados

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-6 col-md-6">
          <FormControlled setFormData={setFormData} />
        </div>
        <div className="col-lg-6 col-md-6">
          <UserDataDisplay formData={formData} />
        </div>
      </div>
    </div>
  );
};

export default App;
