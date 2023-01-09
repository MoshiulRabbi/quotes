import img from "./asset/img/rabbi.png";
import "./App.css";
import "font-awesome/css/font-awesome.min.css";
import "./index.css";
import React from "react";
import moment from "moment";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quoteList: [],
    };
    this.fetchTasks = this.fetchTasks.bind(this);
  }

  componentWillMount() {
    this.fetchTasks();
  }

  fetchTasks = () => {
    let data = require("./data.json");
    data.sort((a, b) => {
      return new Date(b.created_at) - new Date(a.created_at);
    });
    this.setState({ quoteList: data });
  };

  render() {
    var quote = this.state.quoteList;
    return (
      <div className="wrapper">
        <aside className="sidebar">
          <header>
            <div className="about">
              <div className="cover-author-image">
                <a href="/">
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
                    <i className="fa fa-github"> </i>
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
              <p>2023 &copy; MH Rabbi</p>
            </div>
          </footer>
        </aside>

        <div className="content-box">
          {quote.map(function (quote, index) {
            return (
              <article key={index} className="post">
                <div className="post-content">
                  <h2 className="post-title">
                    <a href={() => false}>"{quote.quote}"</a>
                  </h2>
                  <p className="post-words"> ({quote.status}) </p>
                  <span className="post-date">
                    —{moment(quote.created_at).format("LLLL")}
                  </span>
                  {/* <span className="post-words">Perceived</span> */}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;
