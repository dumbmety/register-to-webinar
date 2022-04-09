import Button from "../../Elements/Button"
import Checkbox from "../../Elements/Checkbox"
import Heading from "../../Elements/Heading"
import Input from "../../Elements/Input"
import TextArea from "../../Elements/TextArea"

import "./index.css"

export default function Form() {
  return (
    <div>
      <Heading type="h2" id="joinTheEvent" />
      <form id="register-form" onSubmit={e => e.preventDefault()}>
        <div className="register-form__group">
          <Input
            title="firstName"
            type="text"
            name="firstName"
            placeholder="firstNamePlaceholder"
          />
          <Input
            title="lastName"
            type="text"
            name="lastName"
            placeholder="lastNamePlaceholder"
          />
        </div>
        <div className="register-form__group">
          <Input
            title="businessEmail"
            type="email"
            name="email"
            placeholder="businessEmailPlaceholder"
          />
          <Input
            title="jobTitle"
            type="text"
            name="jobTitle"
            placeholder="jobTitlePlaceholder"
          />
        </div>
        <div className="register-form__group">
          <Input
            title="companyName"
            type="text"
            name="companyName"
            placeholder="companyNamePlaceholder"
          />
          <Input
            title="companySize"
            type="text"
            name="companySize"
            placeholder="companySizePlaceholder"
          />
        </div>
        <TextArea
          title="formMessage"
          name="message"
          placeholder="formMessagePlaceholder"
        />
        <Checkbox name="receiveEmails" message="receiveEmails" />
        <Button id="registerButton" />
      </form>
    </div>
  )
}
