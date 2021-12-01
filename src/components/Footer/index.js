export default function Footer(){
    return(
        <div>
            <footer>
          <div className="container">
            <div className="social text-center">
              {" "}
              <a href="#">
                <i className="fa fa-twitter" />
              </a>{" "}
              <a href="#">
                <i className="fa fa-facebook" />
              </a>{" "}
              <a href="#">
                <i className="fa fa-dribbble" />
              </a>{" "}
              <a href="#">
                <i className="fa fa-flickr" />
              </a>{" "}
              <a href="#">
                <i className="fa fa-github" />
              </a>{" "}
            </div>
            <div className="clear" />
            {/*CLEAR FLOATS*/}
          </div>
        </footer>
        {/*/.page-section*/}
        <section className="copyright">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 text-center">
                {" "}
                Copyright 2014 | All Rights Reserved -- Template by{" "}
                <a href="http://webThemez.com">WebThemez.com</a>{" "}
              </div>
            </div>
            {/* / .row */}
          </div>
        </section>
        <a href="#top" className="topHome">
          <i className="fa fa-chevron-up fa-2x" />
        </a>
        </div>
    )
}