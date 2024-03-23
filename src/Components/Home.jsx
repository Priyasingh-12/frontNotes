import React from 'react';

const Home = () => {
  return ( 
    <>
      <div className="container d-flex justify-content-center mt-5"> 
        <div className="card card-body p-5 text-white" style={{ maxWidth: '1200px', borderRadius: '0', backgroundColor: 'black',marginLeft:"190px" }}>
          <h1 className="display-4">Notes App React.js Nodejs And Mongodb!</h1>
          <p className="lead">A simple App to manage Notes developed with Nodejs, Express,
            Mongodb and Javascript Technologies</p>
          <hr className="my-4" />
          {/* <p>veniam voluptatibus aliquid unde sit Libero veniam similique ex reiciendis
            doloribus! Deleniti sunt cum ad est atque. Esse earum
          </p> */}
          <div className="text-center">
            <a
              className="btn btn-primary btn-lg"
              href="/signup"
              role="button"
            >Register</a>
          </div>
        </div>
      </div>
    </>
  );
}
 
export default Home;
