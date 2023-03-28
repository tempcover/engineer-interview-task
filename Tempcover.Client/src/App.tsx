import { useEffect, useState } from "react";
import tempcoverLogo from "./assets/tempcover-logo.svg";
import "./App.css";

interface ApiResponse {
  carOwnerName: string;
  carMakeModelAndReg: string;
}

const API_URL = "http://localhost:5084";

const fetchDataFromApi = async () => {
  const response = await fetch(API_URL + "/carowner");
  const json: ApiResponse[] = await response.json();
  return json;
};

const App = () => {
  const [data, setData] = useState<ApiResponse[]>([]);
  useEffect(() => {
    fetchDataFromApi().then((res) => setData(res));
  }, []);

  return (
    <div className="App">
      <div className="header">
        <img src={tempcoverLogo} />
      </div>
      <div className="main">
        <h1>Josh's cars</h1>
        <div className="container">
        <h2>Introduction</h2>

        <p>
          Josh created a system that allows him to insure himself. Josh
          currently owns a <b>Mini Cooper</b> with a registration of <b>A1</b>.
          He has recently decided to get two new cars. A <b>Ford Fiesta</b> with
          a registration of <b>A2</b> and a <b>Toyota Yaris</b> with a
          registration of <b>A3</b>.
        </p>

        <p>
          There's a slight problem though, Josh didn't write the system to allow
          more than one vehicle to be added.
        </p>
        <p>
          Since Josh wants to be able to own two more cars, the system needs a
          bit of an update to allow for the new additions to the garage.
        </p>
        <p>
          Please give this system a well deserved update to show all of Josh's
          cars in the table below. Please consider the following:
        </p>
        <ul className="list">
          <li>Any need for new entities</li>
          <li>Relationships between entities</li>
          <li>SOLID principles</li>
          <li>TDD</li>
          <li>Frontend components</li>
          <li>Styling</li>
        </ul>
        <p>
          HINT: You do not need to interact with a database, feel free to edit
          the data returned in the file "CarOwnerRepository.cs", changing the
          entity structure as required.
        </p>
        <p>
          HINT: We've left this pretty barebones intentionally, you are free to
          add additional libraries to assist with the above tasks.
        </p>
        <p>
          EXTRA: If you have time, please set up a test within the /test project to check your work. Playright(https://playwright.dev/) has been set up.
        </p>
        <div className="table-wrapper">
          <table className="table">
            <thead>
              <tr>
                <th>Car owner</th>
                <th>Car information</th>
              </tr>
            </thead>
            <tbody>
              {data.map((d) => {
                return (
                  <tr key={d.carMakeModelAndReg}>
                    <td>{d.carOwnerName}</td>
                    <td>{d.carMakeModelAndReg}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>     
        </div>
      </div>
    </div>
  );
};

export default App;
