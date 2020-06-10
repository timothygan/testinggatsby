/* Scrapes a Google Form page and creates a new html form on your website that sends input
    data directly to the Google Form.
 */

import React, { Fragment } from "react"
import "./../styles/form.css"

/* props: {url}
   url: google form url to scrape data from
*/
const Form = props => {

  return(
    <Fragment>
      <div className={'form-container'}>
        <iframe
          id={'sg-contact-form'}
          src="https://docs.google.com/forms/d/e/1FAIpQLScOzl7aFjWNVftl81feGwLqT16gSxmaPVElCEupDRPQAKHveQ/viewform?embedded=true"
          width="640" height="2151" frameBorder="0" marginHeight="0" marginWidth="0">Loading…
        </iframe>
      </div>
    </Fragment>
  );
};

export default Form;
