
"use strict";
(function() {
  const URL = "https://prereqmap.uw.edu/api/course_typeahead";
  window.addEventListener("load", init);

  /**
   * When users click the button, it will remove the image in the middle
   * Initialize the ajax button to call the correct function when pressed.
   */
  function init() {
    fetchCourse();
  }



  /**
   * Function to start the ajax fetch call to ICNDB API once the button is hit.
   * Upon success, shows the jokes. Everytime the button is clicked, it will fetch a new joke
   */
  function fetchCourse() {
    let url = URL;
    fetch(url)
      .then(checkStatus)
      .then(resp => resp.json())
      .then(processJson)
      .catch(handleRequestError);
  }

  function processJson(courseJson) {
   console.log(courseJson);
  }

  /**
   * This function will be called when there's an error occur
   * fetch process failed, show error, place text, and re-enable the button
   */
  function handleRequestError() {
    /*
    let response = gen("p");
    let msg = "There was an error requesting data from the ICNDb service";
    response.textContent = msg;
    */
   console.log("there was an error fetching the course");
  }

  /**
   * Returns the element that has the ID attribute with the specified value.
   * @param {string} idName - element ID
   * @returns {object} DOM object associated with id.
   */
  function id(idName) {
    return document.getElementById(idName);
  }

  /**
   * Returns the first DOM object that matches the given selector.
   * @param {string} selector - query selector.
   * @returns {object} The first DOM object matching the query.
   */
  function qs(selector) {
    return document.querySelector(selector);
  }

  /**
   * Returns a new element with the given tag name.
   * @param {string} tagName - HTML tag name for new DOM element.
   * @returns {object} New DOM object for given HTML tag.
   */
  function gen(tagName) {
    return document.createElement(tagName);
  }

  /**
   * This is a helper function to throw an Error if the fetch response status is not ok
   * before processing the data.
   * @param {res} res - check status response
   */
  async function checkStatus(res) {
    if (!res.ok) {
      return new Error(await res.text());
    }
    return res;
  }
})();
