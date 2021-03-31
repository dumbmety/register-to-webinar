import './index.css';

export default function TextArea({ title, name, placeholder }) {
  return (
    <div className="form-control">
      <label htmlFor={name}>{title}</label>
      <textarea id={name} name={name} placeholder={placeholder} />
    </div>
  );
}
