export default function Header(){
    return(
        <div>
            <header className="header">
          <div className="container">
            <nav className="navbar navbar-inverse" role="navigation">
              <div className="navbar-header">
                <button
                  type="button"
                  id="nav-toggle"
                  className="navbar-toggle"
                  data-toggle="collapse"
                  data-target="#main-nav"
                >
                  {" "}
                  <span className="sr-only">Toggle navigation</span>{" "}
                  <span className="icon-bar" /> <span className="icon-bar" />{" "}
                  <span className="icon-bar" />{" "}
                </button>
                <a
                  href="#"
                  className="navbar-brand scroll-top logo  animated bounceInLeft"
                >
                  <b>
                    Theme<i>R</i>
                  </b>
                </a>{" "}
              </div>
              {/*/.navbar-header*/}
              <div id="main-nav" className="collapse navbar-collapse">
                <ul className="nav navbar-nav" id="mainNav">
                  <li className="active" id="firstLink">
                    <a href="#home" className="scroll-link">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="#services" className="scroll-link">
                      Services
                    </a>
                  </li>
                  <li>
                    <a href="#aboutUs" className="scroll-link">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="#work" className="scroll-link">
                      Portfolio
                    </a>
                  </li>
                  <li>
                    <a href="#plans" className="scroll-link">
                      Plans
                    </a>
                  </li>
                  <li>
                    <a href="#team" className="scroll-link">
                      Team
                    </a>
                  </li>
                  <li>
                    <a href="#contactUs" className="scroll-link">
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>
              {/*/.navbar-collapse*/}
            </nav>
            {/*/.navbar*/}
          </div>
          {/*/.container*/}
        </header>
        </div>
    )
}