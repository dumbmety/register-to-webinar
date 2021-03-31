import Input from '../../Elements/Input';
import TextArea from '../../Elements/TextArea';
import Checkbox from '../../Elements/Checkbox';
import Button from '../../Elements/Button';

import './index.css';

export default function Form() {
  return (
    <div>
      <h2>Join the event</h2>
      <form id="register-form">
        <div className="register-form__group">
          <Input
            title="First name"
            type="text"
            name="firstName"
            placeholder="Enter your first name"
          />
          <Input title="Last name" type="text" name="lastName" placeholder="Enter your last name" />
        </div>
        <div className="register-form__group">
          <Input title="Business email" type="email" name="email" placeholder="Enter your email" />
          <Input title="Title" type="text" name="title" placeholder="What is your job title?" />
        </div>
        <div className="register-form__group">
          <Input
            title="Company name"
            type="text"
            name="companyName"
            placeholder="Where do you work?"
          />
          <Input title="Company size" type="text" name="companySize" placeholder="Select" />
        </div>
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
