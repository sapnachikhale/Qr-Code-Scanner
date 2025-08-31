import { Html5QrcodeScanner } from "html5-qrcode";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [scanresult, setScanresult] = useState(null);

  useEffect(() => {
    const scanner = new Html5QrcodeScanner("reader", {
      qrbox: {
        width: 250,
        height: 250,
      },
      fps: 5,
    });

    scanner.render(success, error);

    function success(result) {
      scanner.clear();
      setScanresult(result);
    }

    function error() {
      console.log(error);
    }
  },[]);

  return (
    <div className="App">
      <h1>QR Code Scanning In React</h1>
      {scanresult 
      ? <div>Success :<a href={"http://"+scanresult}>{scanresult}</a></div> 
      : 
      <div id="reader"   style={{
        width: "300px",
        height: "300px",
        margin: "20px auto",
      }}></div>
      }
    </div>
  );
}

export default App;
