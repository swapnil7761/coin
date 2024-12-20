import React from "react";
import s from "./Newsletter.module.css";
import newlettersvg from "/footer.svg";
import newsbanner from "/newsletterblack.png";

const Newsletter = () => {
  return (
    <div
      data-role="text-content"
      className={s.newslettersection}
      style={{ background: ` url(${newlettersvg}) top ` }}
    >
      <div className={s.newslettercontent}>
        <div data-role="form-header" className={s.newletterhead}>
          <h2>Stay on top of crypto. All the time, any time.</h2>
          <p>
            Please keep me updated by email with the latest crypto news,
            research findings, reward programs, event updates, coin listings,
            and more information from CoinMarketCap.
          </p>
        </div>
        <div data-role="form-body" className={s.newslettersubmit}>
          <form>
            <div>
              <input
                placeholder="Enter your e-mail address"
                type="email"
                required
              />
            </div>
            <div>
              <button type="submit">Subscribe</button>
            </div>
          </form>
        </div>
      </div>
      <div data-role="banner-content" className={s.newletterbanner}>
        <img
          data-role="banner-image"
          src={newsbanner}
          alt="Newsletter Banner"
        />
      </div>
    </div>
  );
};

export default Newsletter;
