function Home() {
  return (
    <div className="container">
      <div className="row text-white py-5">
        <div
          className="col-12 col-md-12"
          style={{
            background:
              "url('https://picsum.photos/id/1003/400/600') no-repeat bottom right",
            minHeight: "500px",
          }}
        >
          <div className="row">
            <div className="col-md-6">
              <h1
                className="font-rufina-bold float-right mb-4"
                style={{ fontSize: "70px" }}
              >
                Healthy eating <br /> is important <br /> part of lifestyle
              </h1>

              <small>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                eveniet debitis adipisci esse laboriosam nisi a consectetur,
                nulla nostrum eaque!
              </small>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        Hello world hello world Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Distinctio est odio nulla suscipit excepturi culpa
        voluptatum soluta voluptatibus qui, porro expedita quisquam quam vero
        harum doloremque inventore facilis nesciunt reprehenderit?
      </div>
      <div className="row text-white py-5">
        <div className="col-12 col-md-8">
          <img
            src="https://picsum.photos/id/1003/500/300"
            alt="Start to plan your diet"
            className="mb-5"
          />
          <h2>Start to plan your diet today</h2>
          <p style={{maxWidth: "400px"}} className="small">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Modi, alias? Dolore, praesentium.
          </p>
        </div>
        <div className="col-md-4">
          <p className="small mb-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            architecto quasi soluta provident odio delectus adipisci.
          </p>
          <img
            src="https://picsum.photos/id/1003/300/450"
            alt="Start to plan your diet"
            className="mb-3"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
