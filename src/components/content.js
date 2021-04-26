import React, { Component } from "react";
import Header from "./header";
import Footer from "./footer";
import Work from "./work";
import Post from "./post";
import About from "./about";
import $ from "jquery";
import { motion } from "framer-motion";

export default class Content extends Component {
  constructor(props) {
    super(props);
    this.goToPost = this.goToPost.bind(this);
    this.goToAbout = this.goToAbout.bind(this);
    this.goToWork = this.goToWork.bind(this);
    this.state = { pageDisplay: "work", curr_proj: null };
  }

  goToPost(proj) {
    this.setState({ curr_proj: proj });
    this.setState({ pageDisplay: "post" });
  }

  goToAbout() {
    this.setState({ pageDisplay: "about" });
  }

  goToWork() {
    this.setState({ pageDisplay: "work" });
  }

  render() {
    let content;
    if (this.state.pageDisplay == "work") {
      content = <Work clickHandler={this.goToPost}></Work>;
    } else if (this.state.pageDisplay == "post") {
      content = (
        <Post
          title={this.state.curr_proj.title}
          description={this.state.curr_proj.description}
          rendering={this.state.curr_proj.rendering}
          date={this.state.curr_proj.date}
          category={this.state.curr_proj.category}
        ></Post>
      );
    } else if (this.state.pageDisplay == "about") {
      content = <About></About>;
    }

    return (
      <div>
        <Header
          aboutHandler={this.goToAbout}
          workHandler={this.goToWork}
          activeNav={this.state.pageDisplay}
        ></Header>
        <motion.div
          className="content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="content-bg">{content}</div>
        </motion.div>
        <Footer></Footer>
      </div>
    );
  }
}
