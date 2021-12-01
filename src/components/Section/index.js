export default function Section(){
    return(
        <div><div id="#top" />
        <section id="home">
          <div className="banner-container">
            {" "}
            <img src="images/banner-bg.jpg" alt="banner" />
            <div className="container banner-content">
              <div className="hero-text animated fadeInDownBig">
                <h1 className="responsive-headline" style={{ fontSize: 40 }}>
                  Themer - Bootstrap Responsive
                  <br />
                  Template for your Business or Corporate
                </h1>
                <a href="#basics" className="arrow-link">
                  {" "}
                  <i className="fa fa-arrow-circle-down fa-2x" />{" "}
                </a>
                {/*<p>Awesome theme for your Business or Corporate site to showcase <br/>
    your product and service.</p>*/}
              </div>
              {/* <a class="hero-button learn-more smoothscroll text-center" href="#features">Learn More</a>*/}
              {/* <div class="hero-img"> <img src="images/homepage-1204-background-lapto.png" alt="" class="text-center animated fadeInUpBig"/></div>*/}
            </div>
          </div>
        </section>
        <section id="services" className="page-section colord">
          <div className="container">
            <div className="row">
              {/* item */}
              <div className="col-md-3 text-center">
                {" "}
                <i className="fa fa-arrows fa-2x circle" />
                <h3>
                  Responsive <span className="id-color">Design</span>
                </h3>
                <p>
                  Nullam ac rhoncus sapien, non gravida purus. Alinon elit
                  imperdiet congue. Integer elit imperdiet congue.
                </p>
              </div>
              {/* end: */}
              {/* item */}
              <div className="col-md-3 text-center">
                {" "}
                <i className="fa fa-css3 fa-2x circle" />
                <h3>
                  HTML5/CSS3 <span className="id-color">Dev</span>
                </h3>
                <p>
                  Nullam ac rhoncus sapien, non gravida purus. Alinon elit
                  imperdiet congue. Integer elit imperdiet congue.
                </p>
              </div>
              {/* end: */}
              {/* item */}
              <div className="col-md-3 text-center">
                {" "}
                <i className="fa fa-lightbulb-o fa-2x circle" />
                <h3>
                  JavaScript <span className="id-color">jQuery</span>
                </h3>
                <p>
                  Nullam ac rhoncus sapien, non gravida purus. Alinon elit
                  imperdiet congue. Integer ultricies sed elit impe.
                </p>
              </div>
              {/* end: */}
              {/* item */}
              <div className="col-md-3 text-center">
                {" "}
                <i className="fa fa-globe fa-2x circle" />
                <h3>
                  Web <span className="id-color">Designing</span>
                </h3>
                <p>
                  Nullam ac rhoncus sapien, non gravida purus. Alinon elit
                  imperdiet congue. Integer elit imperdiet conempus.
                </p>
              </div>
              {/* end:*/}
            </div>
          </div>
          {/*/.container*/}
        </section>
        <section id="aboutUs">
          <div className="container">
            <div className="heading text-center">
              {/* Heading */}
              <h2>About Us</h2>
              <p>
                At lorem Ipsum available, but the majority have suffered
                alteration in some form by injected humour.
              </p>
            </div>
            <div className="row feature design">
              <div className="six columns right">
                <h3>Clean and Modern Design.</h3>
                <p>
                  Lorem ipsum dolor sit amet, ea eum labitur scsstie
                  percipitoleat fabulas complectitur deterruisset at pro. Odio
                  quaeque reformidans est eu, expetendis intellegebat has ut,
                  viderer invenire ut his. Has molestie percipit an. Falli
                  volumus efficiantur sed id, ad vel noster propriae. Ius ut
                  etiam vivendo, graeci iudicabit constituto at mea. No soleat
                  fabulas prodesset vel, ut quo solum dicunt. Nec et jority have
                  suffered alteration.{" "}
                </p>
                <p>
                  Odio quaeque reformidans est eu, expetendis intellegebat has
                  ut, viderer invenire ut his. Has molestie percipit an. Falli
                  volumus efficiantur sed id, ad vel noster propriae. Ius ut
                  etiam vivendo, graeci iudicabit constituto at mea. No soleat
                  fabulas prodesset vel, ut quo solum dicunt. Nec et amet
                  vidisse mentitumsstie percipitoleat fabulas.{" "}
                </p>
              </div>
              <div className="six columns feature-media left">
                {" "}
                <img src="images/feature-img-1.png" alt />{" "}
              </div>
            </div>
          </div>
        </section>
        <section id="clients">
          <div id="demo" className="clients">
            <div className="container">
              <div className="heading text-center">
                <h2>Oure Clients</h2>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="customNavigation">
                    {" "}
                    <a className="prev">
                      <i className="fa fa-chevron-circle-left" />
                    </a>{" "}
                    <a className="next">
                      <i className="fa fa-chevron-circle-right" />
                    </a>{" "}
                  </div>
                  <div id="owl-demo" className="owl-carousel">
                    <div className="item">
                      {" "}
                      <span className="helper">
                        {" "}
                        <img src="images/clients/client-1.png" alt="client" />
                      </span>{" "}
                    </div>
                    <div className="item">
                      {" "}
                      <span className="helper">
                        {" "}
                        <img src="images/clients/client-2.png" alt="client" />
                      </span>{" "}
                    </div>
                    <div className="item">
                      {" "}
                      <span className="helper">
                        {" "}
                        <img src="images/clients/client-3.png" alt="client" />
                      </span>{" "}
                    </div>
                    <div className="item">
                      {" "}
                      <span className="helper">
                        {" "}
                        <img src="images/clients/client-4.png" alt="client" />
                      </span>{" "}
                    </div>
                    <div className="item">
                      {" "}
                      <span className="helper">
                        {" "}
                        <img src="images/clients/client-5.png" alt="client" />
                      </span>{" "}
                    </div>
                    <div className="item">
                      {" "}
                      <span className="helper">
                        {" "}
                        <img src="images/clients/client-6.png" alt="client" />
                      </span>{" "}
                    </div>
                    <div className="item">
                      {" "}
                      <span className="helper">
                        {" "}
                        <img src="images/clients/client-7.png" alt="client" />
                      </span>{" "}
                    </div>
                    <div className="item">
                      {" "}
                      <span className="helper">
                        {" "}
                        <img src="images/clients/client-8.png" alt="client" />
                      </span>{" "}
                    </div>
                    <div className="item">
                      {" "}
                      <span className="helper">
                        {" "}
                        <img src="images/clients/client-9.png" alt="client" />
                      </span>{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="work" className="page-section page">
          <div className="container text-center">
            <div className="heading">
              <h2>Our Work Speaks</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa,
                alias enim placeat earum quos ab.
              </p>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div id="portfolio">
                  <ul className="filters list-inline">
                    <li>
                      {" "}
                      <a className="active" data-filter="*" href="#">
                        All
                      </a>{" "}
                    </li>
                    <li>
                      {" "}
                      <a data-filter=".photography" href="#">
                        Photography
                      </a>{" "}
                    </li>
                    <li>
                      {" "}
                      <a data-filter=".branding" href="#">
                        Branding
                      </a>{" "}
                    </li>
                    <li>
                      {" "}
                      <a data-filter=".web" href="#">
                        Web
                      </a>{" "}
                    </li>
                  </ul>
                  <ul
                    className="items list-unstyled clearfix animated fadeInRight showing"
                    data-animation="fadeInRight"
                    style={{ position: "relative", height: 438 }}
                  >
                    <li
                      className="item branding"
                      style={{ position: "absolute", left: 0, top: 0 }}
                    >
                      {" "}
                      <a href="images/work/1.jpg" className="fancybox">
                        {" "}
                        <img src="images/work/1.jpg" alt />
                        <div className="overlay">
                          {" "}
                          <span>Etiam porta</span>{" "}
                        </div>
                      </a>{" "}
                    </li>
                    <li
                      className="item photography"
                      style={{ position: "absolute", left: 292, top: 0 }}
                    >
                      {" "}
                      <a href="images/work/2.jpg" className="fancybox">
                        {" "}
                        <img src="images/work/2.jpg" alt />
                        <div className="overlay">
                          {" "}
                          <span>Lorem ipsum</span>{" "}
                        </div>
                      </a>{" "}
                    </li>
                    <li
                      className="item branding"
                      style={{ position: "absolute", left: 585, top: 0 }}
                    >
                      {" "}
                      <a href="images/work/3.jpg" className="fancybox">
                        {" "}
                        <img src="images/work/3.jpg" alt />
                        <div className="overlay">
                          {" "}
                          <span>Vivamus quis</span>{" "}
                        </div>
                      </a>{" "}
                    </li>
                    <li
                      className="item photography"
                      style={{ position: "absolute", left: 877, top: 0 }}
                    >
                      {" "}
                      <a href="images/work/4.jpg" className="fancybox">
                        {" "}
                        <img src="images/work/4.jpg" alt />
                        <div className="overlay">
                          {" "}
                          <span>Donec ac tellus</span>{" "}
                        </div>
                      </a>{" "}
                    </li>
                    <li
                      className="item photography"
                      style={{ position: "absolute", left: 0, top: 219 }}
                    >
                      {" "}
                      <a href="images/work/5.jpg" className="fancybox">
                        {" "}
                        <img src="images/work/5.jpg" alt />
                        <div className="overlay">
                          {" "}
                          <span>Etiam volutpat</span>{" "}
                        </div>
                      </a>{" "}
                    </li>
                    <li
                      className="item web"
                      style={{ position: "absolute", left: 292, top: 219 }}
                    >
                      {" "}
                      <a href="images/work/6.jpg" className="fancybox">
                        {" "}
                        <img src="images/work/6.jpg" alt />
                        <div className="overlay">
                          {" "}
                          <span>Donec congue </span>{" "}
                        </div>
                      </a>{" "}
                    </li>
                    <li
                      className="item photography"
                      style={{ position: "absolute", left: 585, top: 219 }}
                    >
                      {" "}
                      <a href="images/work/7.jpg" className="fancybox">
                        {" "}
                        <img src="images/work/7.jpg" alt />
                        <div className="overlay">
                          {" "}
                          <span>Nullam a ullamcorper diam</span>{" "}
                        </div>
                      </a>{" "}
                    </li>
                    <li
                      className="item web"
                      style={{ position: "absolute", left: 877, top: 219 }}
                    >
                      {" "}
                      <a href="images/work/8.jpg" className="fancybox">
                        {" "}
                        <img src="images/work/8.jpg" alt />
                        <div className="overlay">
                          {" "}
                          <span>Etiam consequat</span>{" "}
                        </div>
                      </a>{" "}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="plans" className="page-section">
          <div className="container">
            <div className="heading text-center">
              {/* Heading */}
              <h2>Our Plans</h2>
              <p>
                At lorem Ipsum available, but the majority have suffered
                alteration in some form by injected humour.
              </p>
            </div>
            <div className="row flat">
              <div className="col-lg-3 col-md-3 col-xs-6">
                <ul className="plan plan1">
                  <li className="plan-name">Basic </li>
                  <li className="plan-price">
                    {" "}
                    <strong>$29</strong> / month{" "}
                  </li>
                  <li>
                    {" "}
                    <strong>5GB</strong> Storage{" "}
                  </li>
                  <li>
                    {" "}
                    <strong>1GB</strong> RAM{" "}
                  </li>
                  <li>
                    {" "}
                    <strong>400GB</strong> Bandwidth{" "}
                  </li>
                  <li>
                    {" "}
                    <strong>10</strong> Email Address{" "}
                  </li>
                  <li>
                    {" "}
                    <strong>Forum</strong> Support{" "}
                  </li>
                  <li className="plan-action">
                    {" "}
                    <a href="#" className="btn btn-danger btn-lg">
                      Signup
                    </a>{" "}
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-3 col-xs-6">
                <ul className="plan plan2 featured">
                  <li className="plan-name">Standard </li>
                  <li className="plan-price">
                    {" "}
                    <strong>$39</strong> / month{" "}
                  </li>
                  <li>
                    {" "}
                    <strong>5GB</strong> Storage{" "}
                  </li>
                  <li>
                    {" "}
                    <strong>1GB</strong> RAM{" "}
                  </li>
                  <li>
                    {" "}
                    <strong>400GB</strong> Bandwidth{" "}
                  </li>
                  <li>
                    {" "}
                    <strong>10</strong> Email Address{" "}
                  </li>
                  <li>
                    {" "}
                    <strong>Forum</strong> Support{" "}
                  </li>
                  <li className="plan-action">
                    {" "}
                    <a href="#" className="btn btn-danger btn-lg">
                      Signup
                    </a>{" "}
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-3 col-xs-6">
                <ul className="plan plan3">
                  <li className="plan-name">Advanced </li>
                  <li className="plan-price">
                    {" "}
                    <strong>$199</strong> / month{" "}
                  </li>
                  <li>
                    {" "}
                    <strong>50GB</strong> Storage{" "}
                  </li>
                  <li>
                    {" "}
                    <strong>8GB</strong> RAM{" "}
                  </li>
                  <li>
                    {" "}
                    <strong>1024GB</strong> Bandwidth{" "}
                  </li>
                  <li>
                    {" "}
                    <strong>Unlimited</strong> Email Address{" "}
                  </li>
                  <li>
                    {" "}
                    <strong>Forum</strong> Support{" "}
                  </li>
                  <li className="plan-action">
                    {" "}
                    <a href="#" className="btn btn-danger btn-lg">
                      Signup
                    </a>{" "}
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-3 col-xs-6">
                <ul className="plan plan4">
                  <li className="plan-name">Mighty </li>
                  <li className="plan-price">
                    {" "}
                    <strong>$999</strong> / month{" "}
                  </li>
                  <li>
                    {" "}
                    <strong>50GB</strong> Storage{" "}
                  </li>
                  <li>
                    {" "}
                    <strong>8GB</strong> RAM{" "}
                  </li>
                  <li>
                    {" "}
                    <strong>1024GB</strong> Bandwidth{" "}
                  </li>
                  <li>
                    {" "}
                    <strong>Unlimited</strong> Email Address{" "}
                  </li>
                  <li>
                    {" "}
                    <strong>Forum</strong> Support{" "}
                  </li>
                  <li className="plan-action">
                    {" "}
                    <a href="#" className="btn btn-danger btn-lg">
                      Signup
                    </a>{" "}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section id="team" className="page-section">
          <div className="container">
            <div className="heading text-center">
              {/* Heading */}
              <h2>Our Team</h2>
              <p>
                At variations of passages of Lorem Ipsum available, but the
                majority have suffered alteration..
              </p>
            </div>
            {/* Team Member's Details */}
            <div className="team-content">
              <div className="row">
                <div className="col-md-3 col-sm-6 col-xs-6">
                  {/* Team Member */}
                  <div className="team-member pDark">
                    {/* Image Hover Block */}
                    <div className="member-img">
                      {/* Image  */}
                      <img
                        className="img-responsive"
                        src="images/photo-1.jpg"
                        alt
                      />{" "}
                    </div>
                    {/* Member Details */}
                    <h4>John Doe</h4>
                    {/* Designation */}
                    <span className="pos">CEO</span>
                    <div className="team-socials">
                      {" "}
                      <a href="#">
                        <i className="fa fa-facebook" />
                      </a>{" "}
                      <a href="#">
                        <i className="fa fa-google-plus" />
                      </a>{" "}
                      <a href="#">
                        <i className="fa fa-twitter" />
                      </a>{" "}
                      <a href="#">
                        <i className="fa fa-dribbble" />
                      </a>{" "}
                      <a href="#">
                        <i className="fa fa-github" />
                      </a>{" "}
                    </div>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6 col-xs-6">
                  {/* Team Member */}
                  <div className="team-member pDark">
                    {/* Image Hover Block */}
                    <div className="member-img">
                      {/* Image  */}
                      <img
                        className="img-responsive"
                        src="images/photo-2.jpg"
                        alt
                      />{" "}
                    </div>
                    {/* Member Details */}
                    <h4>Larry Doe</h4>
                    {/* Designation */}
                    <span className="pos">Art Director</span>
                    <div className="team-socials">
                      {" "}
                      <a href="#">
                        <i className="fa fa-facebook" />
                      </a>{" "}
                      <a href="#">
                        <i className="fa fa-google-plus" />
                      </a>{" "}
                      <a href="#">
                        <i className="fa fa-twitter" />
                      </a>{" "}
                      <a href="#">
                        <i className="fa fa-dribbble" />
                      </a>{" "}
                      <a href="#">
                        <i className="fa fa-github" />
                      </a>{" "}
                    </div>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6 col-xs-6">
                  {/* Team Member */}
                  <div className="team-member pDark">
                    {/* Image Hover Block */}
                    <div className="member-img">
                      {/* Image  */}
                      <img
                        className="img-responsive"
                        src="images/photo-3.jpg"
                        alt
                      />{" "}
                    </div>
                    {/* Member Details */}
                    <h4>Ranith Kays</h4>
                    {/* Designation */}
                    <span className="pos">Manager</span>
                    <div className="team-socials">
                      {" "}
                      <a href="#">
                        <i className="fa fa-facebook" />
                      </a>{" "}
                      <a href="#">
                        <i className="fa fa-google-plus" />
                      </a>{" "}
                      <a href="#">
                        <i className="fa fa-twitter" />
                      </a>{" "}
                      <a href="#">
                        <i className="fa fa-dribbble" />
                      </a>{" "}
                      <a href="#">
                        <i className="fa fa-github" />
                      </a>{" "}
                    </div>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6 col-xs-6">
                  {/* Team Member */}
                  <div className="team-member pDark">
                    {/* Image Hover Block */}
                    <div className="member-img">
                      {/* Image  */}
                      <img
                        className="img-responsive"
                        src="images/photo-4.jpg"
                        alt
                      />{" "}
                    </div>
                    {/* Member Details */}
                    <h4>Joan Ray</h4>
                    {/* Designation */}
                    <span className="pos">Creative</span>
                    <div className="team-socials">
                      {" "}
                      <a href="#">
                        <i className="fa fa-facebook" />
                      </a>{" "}
                      <a href="#">
                        <i className="fa fa-google-plus" />
                      </a>{" "}
                      <a href="#">
                        <i className="fa fa-twitter" />
                      </a>{" "}
                      <a href="#">
                        <i className="fa fa-dribbble" />
                      </a>{" "}
                      <a href="#">
                        <i className="fa fa-github" />
                      </a>{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*/.container*/}
        </section>
        <section id="contactUs" className="contact-parlex">
          <div className="parlex-back">
            <div className="container">
              <div className="row">
                <div className="heading text-center">
                  {/* Heading */}
                  <h2>Contact Us</h2>
                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered.
                  </p>
                </div>
              </div>
              <div className="row mrgn30">
                <form method="post" action id="contactfrm" role="form">
                  <div className="col-sm-12">
                    <div className="form-group">
                      <label htmlFor="name">Name</label>
                      <input
                        type="text"
                        className="form-control"
                        name="name"
                        id="name"
                        placeholder="Enter name"
                        title="Please enter your name (at least 2 characters)"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email</label>
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        id="email"
                        placeholder="Enter email"
                        title="Please enter a valid email address"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="comments">Comments</label>
                      <textarea
                        name="comment"
                        className="form-control"
                        id="comments"
                        cols={3}
                        rows={5}
                        placeholder="Enter your message…"
                        title="Please enter your message (at least 10 characters)"
                        defaultValue={""}
                      />
                      <button
                        name="submit"
                        type="submit"
                        className="btn btn-lg btn-primary"
                        id="submit"
                      >
                        Submit
                      </button>
                    </div>
                    <div className="result" />
                  </div>
                </form>
              </div>
            </div>
            {/*/.container*/}
          </div>
        </section>
        </div>
    )
}