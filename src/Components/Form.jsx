import React from 'react';
import Header from './Header';
import toast, { Toaster } from 'react-hot-toast';

const Form = (props) => {
 const [formValues, setFormValues] = React.useState([{ name: '', email: '' }]);

 let handleChange = (i, e) => {
  let newFormValues = [...formValues];
  newFormValues[i][e.target.name] = e.target.value;
  setFormValues(newFormValues);
 };

 let addFormFields = () => {
  setFormValues([...formValues, { name: '', email: '' }]);
 };

 let removeFormFields = (i) => {
  let newFormValues = [...formValues];
  newFormValues.splice(i, 1);
  setFormValues(newFormValues);
 };

 let handleSubmit = (event) => {
  event.preventDefault();
  setTimeout(() => {
   toast.success('Form Submitted');
  }, 2000);
 };
 return (
  <>
   <Header props={props} />
   <form onSubmit={handleSubmit} className="form">
    {formValues.map((element, index) => (
     <div className="form-inline" key={index}>
      <label>Name</label>
      <input type="text" name="name" value={element.name || ''} onChange={(e) => handleChange(index, e)} />
      <label>Email</label>
      <input type="text" name="email" value={element.email || ''} onChange={(e) => handleChange(index, e)} />
      {index ? (
       <button type="button" className="button remove" onClick={() => removeFormFields(index)}>
        Remove
       </button>
      ) : null}
     </div>
    ))}
    <div className="button-section">
     <button className="button add" type="button" onClick={() => addFormFields()}>
      Add
     </button>
     <button className="button submit" type="submit">
      Submit
     </button>
    </div>
   </form>
   <Toaster />
  </>
 );
};
export default Form;
