import ReactLogo from "../assets/react.svg"; // adjust the path according to your file structure

const StartPage = () => {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="text-center w-100">
        <img
          className="d-block mx-auto mb-4"
          src={ReactLogo}
          alt=""
          width="72"
          height="57"
        />
        <h1 className="display-5 fw-bold text-body-emphasis">
          The Paintability Game
        </h1>
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-4">
            A single-player strategy game based on graph theory.
          </p>
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <button type="button" className="btn btn-primary btn-lg px-4 gap-3">
              Play
            </button>
            <button
              type="button"
              className="btn btn-outline-secondary btn-lg px-4"
            >
              Tutorial
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default StartPage;
