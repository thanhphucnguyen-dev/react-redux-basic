import './input.css';
import '../Edit/edit.css';

const Input = (props) => {

  const { label, data, setData, inputType, classStyle } = props;
  return (
    <>
      <label>{label}</label>
      {inputType === 'textarea' ? (
        <textarea placeholder={data} onChange={(e) => setData(e.target.value)} className={classStyle} />
      ) : (
        <input type="text" placeholder={data} onChange={(e) => setData(e.target.value)} />
      ) }

    </>
  );
};

export default Input;
