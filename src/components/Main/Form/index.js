import Button from '../../Elements/Button';
import Checkbox from '../../Elements/Checkbox';
import Heading from '../../Elements/Heading';
import Input from '../../Elements/Input';
import TextArea from '../../Elements/TextArea';

import checkLang from '../../../helpers/check-lang';

import './index.css';

const Form = () => {
  const language = checkLang();

  return (
    <div>
      <Heading type="h2">
        {language === 'english' ? 'Join the event' : 'به این رویداد بپیوندید'}
      </Heading>
      <form id="register-form">
        <div className="register-form__group">
          <Input
            title={language === 'english' ? 'First name' : 'نام'}
            type="text"
            name="firstName"
            placeholder={
              language === 'english' ? 'Enter your first name' : 'نام خود را وارد نمایید'
            }
          />
          <Input
            title={language === 'english' ? 'Last name' : 'نام خانوادگی'}
            type="text"
            name="lastName"
            placeholder={
              language === 'english' ? 'Enter your last name' : 'نام خانوادگی خود را وارد نمایید'
            }
          />
        </div>
        <div className="register-form__group">
          <Input
            title={language === 'english' ? 'Business email' : 'ایمیل کاری'}
            type="email"
            name="email"
            placeholder={language === 'english' ? 'Enter your email' : 'ایمیل خود را وارد نمایید'}
          />
          <Input
            title={language === 'english' ? 'Title' : 'عنوان'}
            type="text"
            name="title"
            placeholder={
              language === 'english' ? 'What is your job title?' : 'عنوان شغلی شما چیست؟'
            }
          />
        </div>
        <div className="register-form__group">
          <Input
            title={language === 'english' ? 'Company name' : 'نام شرکت'}
            type="text"
            name="companyName"
            placeholder={language === 'english' ? 'Where do you work?' : 'شما كجا كار مي كنيد؟'}
          />
          <Input
            title={language === 'english' ? 'Company size' : 'اندازه شرکت'}
            type="text"
            name="companySize"
            placeholder={language === 'english' ? 'Select' : 'انتخاب'}
          />
        </div>
        <TextArea
          title={
            language === 'english'
              ? 'What are you hoping to learn about?'
              : 'شما امیدوارید در مورد چه چیزهایی یاد بگیرید؟'
          }
          name="message"
          placeholder={language === 'english' ? 'Where do you work?' : 'شما كجا كار مي كنيد؟'}
        />
        <Checkbox
          name="receiveEmails"
          message={
            language === 'english'
              ? 'I would like to receive emails about future webinars'
              : 'من می خواهم ایمیل هایی را درباره وبینارهای آینده دریافت کنم'
          }
        />
        <Button>
          {language === 'english' ? 'Register for this event' : 'ثبت نام برای این رویداد'}
        </Button>
      </form>
    </div>
  );
};

export default Form;
