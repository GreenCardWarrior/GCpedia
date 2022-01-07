import React, { useState } from 'react';
import Header from './Header';
import FAQ from './FAQ';
import JSON from './qa.json';
import {
  EmailIcon,
  FacebookIcon,
  TelegramIcon,
} from "react-share";
import {
  EmailShareButton,
  FacebookShareButton,
  TelegramShareButton,
} from "react-share";
function App() {
  const [faqs, setfaqs] = useState(JSON);
  const [url, setUrl] = useState(window.location.href);
  const [title, setTitle] = useState("Green Card Wikipedia");
  const toggleFAQ = index => {
    setfaqs(faqs.map((faq, i) => {
      if (i === index) {
        faq.open = !faq.open
      } else {
        faq.open = false;
      }

      return faq;
    }))
  }


  return (
    <div className="App">
      <Header />
      <div className="faqs">
        {faqs.map((faq, i) => (
          <FAQ faq={faq} index={i} toggleFAQ={toggleFAQ} />
        ))}
      </div>
      <header>
        <EmailShareButton
          url={window.location.href}
          subject={title}
          body="body"
          className="Demo__some-network__share-button"
        >
          <EmailIcon size={32} round />
        </EmailShareButton>&nbsp;&nbsp;
        <FacebookShareButton
          url={window.location.href}
          quote={title}
          className="Demo__some-network__share-button"
          hashtag="GCPedia"
        >
          <FacebookIcon size={32} round />
        </FacebookShareButton>&nbsp;&nbsp;
        <TelegramShareButton
          url={window.location.href}
          title={title}
          className="Demo__some-network__share-button"
        >
          <TelegramIcon size={32} round />
        </TelegramShareButton>
      </header>
      <p class="footer-heart">
          Made with <g-emoji class="g-emoji" alias="heart" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/2764.png">
            <img class="emoji" alt="heart" height="20" width="20" src="https://github.githubassets.com/images/icons/emoji/unicode/2764.png" /></g-emoji> by <a href="#">D.G. PD 08/2012 RD 11/22/2021 ND 12/14/2021 BM 1/26/2022</a>
        </p>
    </div>
  );
}

export default App;
