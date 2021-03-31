import Input from './Input';
import TextArea from './TextArea';
import Checkbox from './Checkbox';
import Button from './Button';

import './index.css';

export default function Form() {
  return (
    <div>
      <h2>Join the event</h2>
      <form id="register-form">
        <Input
          title="First name"
          type="text"
          name="firstName"
          placeholder="Enter your first name"
        />
        <Input title="Last name" type="text" name="lastName" placeholder="Enter your last name" />
        <Input title="Business email" type="email" name="email" placeholder="Enter your email" />
        <Input title="Title" type="text" name="title" placeholder="What is your job title?" />
        <Input
          title="Company name"
          type="text"
          name="companyName"
          placeholder="Where do you work?"
        />
        <Input title="Company size" type="text" name="companySize" placeholder="Select" />
        <TextArea
          title="What are you hoping to learn about?"
          name="message"
          placeholder="Where do you work?"
        />
        <Checkbox
          name="receiveEmails"
          message="I would like to receive emails about future webinars"
        />
        <Button>Register for this event</Button>
      </form>
    </div>
  );
}
