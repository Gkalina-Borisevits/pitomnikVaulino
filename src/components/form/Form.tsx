import React, { FormEvent, useState } from 'react';
import styles from './form.module.css';


interface FormField {
  name: string;
  label?: string;
  type: string;
  value: string;
}


interface FormProps {
  fields: FormField[];
  onSubmit: (formData: any) => void;
}


interface FormData {
  [key: string]: string;
}


const Form: React.FC<FormProps> = ({ fields, onSubmit }) => {
  const initialFormData: FormData = {};

  fields.forEach((field) => {
    initialFormData[field.name] = field.value || '';
  });


  const [formData, setFormData] = useState<FormData>(initialFormData);

  const handleFormSubmit = (e: FormEvent): void => {
    e.preventDefault();
    onSubmit(formData);
  };


  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
   
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <form className={styles.form} onSubmit={handleFormSubmit}>
      {fields.map((field) => (
        <div key={field.name} className={styles.formGroup}>
          <label className={styles.label}>{field.label}:</label>
          <input
            type={field.type}
            name={field.name}
            value={formData[field.name]}
            onChange={handleInputChange}
            className={styles.input}
          />
        </div>
      ))}
      <button type="submit" className={styles.submitButton}>
        Submit
      </button>
    </form>
  );
};

export default Form;
