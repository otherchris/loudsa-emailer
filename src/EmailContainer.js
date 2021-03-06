import React from 'react';
import EmailComponent from './EmailComponent';

class EmailContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state: {
      list: '',
      apikey: '',
      subject: '',
      body: '',
    }
  }

  sendEmail() {
  }

  render() {
    return (
      <div className="email-container">
        <EmailComponent
          sendEmail={this.sendEmail.bind(this)}
        />
      </div>
    );
  }
}

export default EmailContainer;
