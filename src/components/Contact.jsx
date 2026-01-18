import React from "react";
import Footer from "./footer/Footer";
import Header from "./Header";
import PageTitle from "./PageTitle";

export default function Contact() {
  return (
    // <React.Fragment>
    //   <Header />
    <div align="center">
      <PageTitle title="Contact Page" />
      <div>
        <form>
          <div>
            <label>Email</label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Your name"
              required
              minLength={5}
            />
          </div>
          <div>
            <label for="message">Text</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              placeholder="type your message"
              minLength={30}
              maxLength={500}
            ></textarea>
          </div>
          <div>
            <button id="resetButton" type="reset">
              Reset
            </button>
            <button id="submitButton" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
