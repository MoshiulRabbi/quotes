import img from "./asset/img/rabbi.png";
import "./App.css";
import "font-awesome/css/font-awesome.min.css";
import "./index.css";
import React from "react";
import moment from "moment";
import InfiniteScroll from "react-infinite-scroller";
import ScrollUpButton from "react-scroll-up-button";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quoteList: [],
      offset: 0,
      limit: 5,
      hasMoreItems: true,
    };
    this.fetchTasks = this.fetchTasks.bind(this);
  }

  componentDidMount() {
    this.fetchTasks();
  }

  fetchTasks = () => {
    setTimeout(() => {
      let data = require("./data.json");
      data.sort((a, b) => {
        return new Date(b.created_at) - new Date(a.created_at);
      });
      let offset = this.state.offset;
      let limit = this.state.limit;
      let sliceData = data.slice(offset, offset + limit);
      if (sliceData.length === 0) {
        this.setState({ hasMoreItems: false });
      } else {
        this.setState((prevState) => ({
          quoteList: [...prevState.quoteList, ...sliceData],
          offset: prevState.offset + limit,
        }));
      }
    }, 200);
  };

  render() {
    var quote = this.state.quoteList;
    return (
      <div className="wrapper">
        <aside className="sidebar">
          <header>
            <div className="about">
              <div className="cover-author-image">
                <a href="/quotes/">
                  <img src={img} alt="Moshiul Rabbi" />
                </a>
              </div>
              <div className="author-name">Moshiul Rabbi</div>
              <p>I Relate things and Write about them Sometimes</p>
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
                    href="https://facebook.com/MoshiulRabbi"
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
                    href="https://in.linkedin.com/in/moshiulrabbi"
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
              <p>2023 &copy; Moshiul Rabbi</p>
            </div>
          </footer>
        </aside>

        <InfiniteScroll
          pageStart={0}
          loadMore={this.fetchTasks}
          hasMore={this.state.hasMoreItems}
          loader={
            <div className="loader" key={0}>
              <i className="fa fa-spinner fa-spin"></i>
            </div>
          }
        >
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
                  </div>
                </article>
              );
            })}
          </div>
          <div>
            <ScrollUpButton />
          </div>
        </InfiniteScroll>
      </div>
    );
  }
}

export default App;
