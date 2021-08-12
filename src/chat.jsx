import { render } from '@testing-library/react';
import { extend } from 'jquery'
import React from 'react'
import { Component } from 'react'
class KommunicateChat extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    (function (d, m) {
      var kommunicateSettings = { "appId": "1158d7e0bf97ef664e9075c1bce736069", "popupWidget": true, "automaticChatOpenOnNavigation": true };
      var s = document.createElement("script"); s.type = "text/javascript"; s.async = true;
      s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
      var h = document.getElementsByTagName("head")[0]; h.appendChild(s);
      window.kommunicate = m; m._globals = kommunicateSettings;
    })(document, window.kommunicate || {});
  }

  render() {
    return (
      <div></div>
    )
  }

}

export default KommunicateChat;
