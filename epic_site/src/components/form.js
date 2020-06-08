/* Scrapes a Google Form page and creates a new html form on your website that sends input
    data directly to the Google Form.
 */

import React, { Fragment } from "react"
import "./../styles/form.css"

/* props: {url}
   url: google form url to scrape data from
*/
const Form = props => {
  console.log('hi');
  scrape();

  async function scrape () {
    console.log('scrape function');
    const response = await fetch(props.url);
    const text = await response.text();
    console.log(text.match(/(?<=\<form>).*(?=\<\/form>)/));
  }

  //const forms = document.getElementsByTagName('form');
  //const action = forms[0].action;
  return(
    <Fragment>
      <div className={'form-container'}>
        <form action={'action'} method={'post'}>

        </form>
      </div>
    </Fragment>
  );
};

export default Form;
