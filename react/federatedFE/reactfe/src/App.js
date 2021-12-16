import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [SRC, setSRC] = useState(0);

  const BASE_URI = "https://localhost:8000/";
  const CONTECT_URI = `${BASE_URI}context/`;
  const AUTH_URI = `${BASE_URI}api/core/user/login/`;

  const getAuthTokens = function () {
    return new Promise(function (resolve, reject) {
      fetch(AUTH_URI, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // Authorization: "Bearer " + localStorage.getItem("token"),
        },
        body: JSON.stringify({
          email: "keith@giantsource.com",
          password: "p1",
        }),
      }).then(function (response) {
        if (response.ok) {
          response.json().then(function (data) {
            console.log(data);
            return resolve(data);
          });
        } else {
          console.log(response);
          reject(response.statusText);
        }
      });
    });
  };

  const getSRCObject = function (token) {
    return fetch(CONTECT_URI, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        return data;
      });
  };

  const init = async function () {
    const auth = await getAuthTokens();
    setSRC(await getSRCObject(auth.token));
  };

  init();
  return (
    <div className="App">
      <header className="App-header">
        <p>VERSION</p>
        <p>{SRC.BUILD_DATE}</p>
      </header>
    </div>
  );
}

export default App;
