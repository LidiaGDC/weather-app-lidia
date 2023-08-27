import "./styles.css";
import Form from "./Form";
import CurrentLoc from "./CurrentLoc";
import Temperature from "./Temperature";

export default function App() {
  return (
    <div className="App">
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <title>Document</title>
          <link rel="stylesheet" href="src/style.css" />

          <link
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css"
            rel="stylesheet"
            integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6"
            crossorigin="anonymous"
          />
          <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
        </head>

        <body>
          <div class="container">
            <h1> LGDC Weather App </h1>

            <Form />
            <br />
            <CurrentLoc />

            <br />
            <h2>
              <div class="firsth2">
                <strong>Madrid</strong>{" "}
              </div>
              <div class="secondh2">
                Tuesday
                <br />
                06 April 2021
              </div>
            </h2>

            <Temperature />

            <h4>
              <div class="row data">
                <div class="col-6 "> Humidity</div>
                <div class="col-6 ">Wind</div>
                <div class="col-6 humidityvalue">0%</div>
                <div class="col-6 windvalue">3Km/h</div>
              </div>
            </h4>
            <p>
              <div class="row prediction">
                <div class="col-3 day">
                  <div class="row">
                    <div class="col-12">Wednesday</div>
                    <div class="col-12">Thursday</div>
                    <div class="col-12">Friday</div>
                    <div class="col-12">Saturday</div>
                    <div class="col-12">Sunday</div>
                  </div>
                </div>
                <div class="col-3 temperature">
                  <div class="row">
                    <div class="col-12">20°C/9°C </div>
                    <div class="col-12">18°C/6°C </div>
                    <div class="col-12">20°C/9°C</div>
                    <div class="col-12">22°C/12°C</div>
                    <div class="col-12">25°C/15°C</div>
                  </div>
                </div>
                <div class="col-3 precipitation">
                  <div class="row">
                    <div class="col-12">5% </div>
                    <div class="col-12">8% </div>
                    <div class="col-12">5%</div>
                    <div class="col-12">0%</div>
                    <div class="col-12">0%</div>
                  </div>
                </div>
                <div class="col-3 wind">
                  <div class="row">
                    <div class="col-12">2 Km/h </div>
                    <div class="col-12"> 5 Km/h </div>
                    <div class="col-12">2 Km/h</div>
                    <div class="col-12">1 Km/h</div>
                    <div class="col-12">0 Km/h</div>
                  </div>
                </div>
              </div>
            </p>
            <footer class="blockquote-footer">
              {" "}
              Coded by Lidia Gallardo{" "}
              <cite title="Source Title">
                <br />
                <a
                  href="https://github.com/LidiaGDC/weather-app-lidia"
                  class="github-link"
                  target="_blank"
                >
                  {" "}
                  Open source code{" "}
                </a>
              </cite>
            </footer>
          </div>
          <script src="src/script.js"> </script>
        </body>
      </html>
    </div>
  );
}
