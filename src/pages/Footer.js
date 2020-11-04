import React from "react";
import { Icon } from "semantic-ui-react";

export default function Footer() {
  return (
    <div className="foot">
      <div className="foot-content">
        <p>
          This Website relies upon publicly available data from various sources,
          including and not limited to U.S. Federal, State, and local
          governments, WHO, and John Hopkins CSSE. News feeds obtained from
          Twitter and NewsAPI. The contents of this Website are for information
          purposes only and are not guaranteed to be accurate. Reliance on this
          Website for medical guidance is strictly prohibited.
        </p>
      </div>
      <div className="foot-copyright">
        <a
          className="link"
          href="https://github.com/ncov19-us/ncov19-sms-bot-frontend"
          alt="github-project">
          <Icon name="github" size="big" />
        </a>
        <p>Copyright 2020</p>
      </div>
    </div>
  );
}
