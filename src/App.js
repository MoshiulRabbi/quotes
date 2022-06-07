import logo from "./logo.svg";
import img from "./asset/img/rabbi.png";
import dream from "./asset/img/someones-dream.jpg";
import "./App.css";
import "font-awesome/css/font-awesome.min.css";
import "./index.css";

<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
/>;

<link
  href="https://fonts.googleapis.com/css?family=PT+Serif:400,700|Lato:300,400,700&display=swap"
  rel="stylesheet"
/>;
function App() {
  return (
    <div className="wrapper">
      <aside className="sidebar">
        <header>
          <div className="about">
            <div className="cover-author-image">
              <a href="/blog/">
                <img src={img} alt="MH Rabbi" />
              </a>
            </div>
            <div className="author-name">MH Rabbi</div>
            <p>I Relate Things and Write Sometimes.</p>
          </div>
        </header>

        <footer>
          <section className="contact">
            <h3 className="contact-title">Contact me</h3>
            <ul>
              <li>
                <a
                  href="http://moshiulrabbi.github.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-globe" aria-hidden="true"></i>
                </a>
              </li>

              <li>
                <a
                  href="https://facebook.com/Moshiul.Rabbi"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-facebook" aria-hidden="true"></i>
                </a>
              </li>

              <li className="github">
                <a
                  href="http://github.com/MoshiulRabbi"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-github"></i>
                </a>
              </li>

              <li className="linkedin">
                <a
                  href="https://in.linkedin.com/in/mhrabbi"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-linkedin"></i>
                </a>
              </li>

              <li className="email">
                <a href="mailto:moshiul15-12574@diu.edu.bd">
                  <i className="fa fa-envelope-o" aria-hidden="true"></i>
                </a>
              </li>
            </ul>
          </section>

          <div className="copyright">
            <p>2022 &copy; MH Rabbi</p>
          </div>
        </footer>
      </aside>

      <div className="content-box">
        <article className="post">
          <a
            href={() => false}
            className="post-thumbnail"
            // style="background-image: url(./img/someones-dream.jpg)"
            style={{
              backgroundImage: `url("${dream}")`,
            }}
          >
            {" "}
          </a>

          <div className="post-content">
            <h2 className="post-title">
              <a href={() => false}>We Live in Someone Else's Dream</a>
            </h2>
            <p>Writing….</p>
            <span className="post-date">
              2019, Aug 27&nbsp;&nbsp;&nbsp;—&nbsp;
            </span>
            <span className="post-words">1 minute read</span>
          </div>
        </article>

        <article className="post">
          <a
            href={() => false}
            className="post-thumbnail"
            // style="background-image: url(https://picsum.photos/200/300)"

            style={{
              backgroundImage: `url("${dream}")`,
            }}
          >
            {" "}
          </a>

          <div className="post-content">
            <h2 className="post-title">
              <a href={() => false}>We Live in Someone Else's Dream</a>
            </h2>
            <p>Writing….</p>
            <span className="post-date">
              2019, Aug 27&nbsp;&nbsp;&nbsp;—&nbsp;
            </span>
            <span className="post-words">1 minute read</span>
          </div>
        </article>
      </div>
    </div>
  );
}

export default App;
