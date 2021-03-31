import './index.css';

export default function Input({ title, type, name, placeholder }) {
  return (
    <div className="form-control">
      <label htmlFor={name}>{title}</label>
      <input id={name} name={name} type={type} placeholder={placeholder} />
    </div>
  );
}
