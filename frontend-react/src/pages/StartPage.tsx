interface Props {
    title: string;
    description: string;
    onClickTutorial: () => any;
    onClickPlay: () => any;
    image: string | undefined;
}

const StartPage = ({title, description, onClickTutorial, onClickPlay, image=undefined} : Props) => {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="text-center w-100">
        <img
          className="d-block mx-auto mb-4"
          src={image}
          alt=""
          width="72"
          height="57"
        />
        <h1 className="display-5 fw-bold text-body-emphasis">
          {title}
        </h1>
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-4">
            {description}
          </p>
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <button type="button" className="btn btn-primary btn-lg px-4 gap-3" onClick={onClickPlay}>
              Play
            </button>
            <button
              type="button"
              className="btn btn-outline-secondary btn-lg px-4"
              onClick={onClickTutorial}
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
