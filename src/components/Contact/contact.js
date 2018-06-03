import React, { Component }	from 'react';


class index extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      message: ""
    }
  }
  


render() {
  return(
   
   
<div className="w3-container w3-padding-64 w3-theme-l5" id="contact">
  <div className="w3-row">
    <div className="w3-col m5">
    
    <div className="w3-padding-16"><span className="w3-xlarge w3-border-teal w3-bottombar">Contact Us</span></div>
    
    <ul className="icons">
								<li><a href="https://www.google.co.cr/?gws_rd=ssl" className="icon rounded fa-twitter"><span className="label">Twitter</span></a></li>
								<li><a href="https://www.google.co.cr/?gws_rd=ssl" className="icon rounded fa-facebook"><span className="label">Facebook</span></a></li>
								<li><a href="https://www.google.co.cr/?gws_rd=ssl" className="icon rounded fa-pinterest"><span className="label">Pinterest</span></a></li>
								<li><a href="https://www.google.co.cr/?gws_rd=ssl" className="icon rounded fa-google-plus"><span className="label">Google+</span></a></li>
								<li><a href="https://www.google.co.cr/?gws_rd=ssl" className="icon rounded fa-linkedin"><span className="label">LinkedIn</span></a></li>
							</ul>
      <h3>Address</h3>
      <p>Leave us your comment, opinion, complaint or suggestion</p>
      <p><i className="fa fa-map-marker w3-text-teal w3-xlarge"></i>  Alajuela, Costa Rica</p>
      <p><i className="fa fa-phone w3-text-teal w3-xlarge"></i>  +506 80693541</p>
      <p><i className="fa fa-envelope-o w3-text-teal w3-xlarge"></i>  construment@hotmail.com</p>
    </div>
    <div class="w3-col m7">
    
      <div class="w3-section">  
        <label>Name</label>
        <input class="w3-input" value={this.state.name} type="text" name="Name" required onChange={this.updateName.bind(this)} />
      </div>
      <div class="w3-section">      
        <label>Email</label>
        <input class="w3-input" value={this.state.email} type="text" name="Email" required onChange={this.updateEmail.bind(this)} />
      </div>
      <div class="w3-section">      
        <label>Message</label>
        <input class="w3-input" value={this.state.message} type="text" maxlength="500" name="Message" required onChange={this.updateMessage.bind(this)} />
      </div>  
      <button onClick={this.sendMessage.bind(this)} class="w3-button w3-right w3-theme">Send</button>
    </div>
  </div>
</div>

);
}
/*global fetch*/
sendMessage() {
var name = this.state.name;
var email = this.state.email;
var message = this.state.message;
fetch('https://construment-sa-lucho14.c9users.io/contact/send?name='+name+'&email='+email+'&message='+message)
.catch(err => console.error(err))

}

updateName(event) {
  this.setState({
    name: event.target.value
  });
}

updateEmail(event) {
  this.setState({
    email: event.target.value
  });
}

updateMessage(event) {
  this.setState({
    message: event.target.value
  });
}

}

export default index;
