import InputField from './InputField';
import SubmitButton from './SubmitButton';

function RegistrationForm({ title, onSubmit }) {
  const fields = [
    { label: 'Имя пользователя', type: 'text', name: 'username', placeholder: 'Введите имя' },
    { label: 'Электронная почта', type: 'email', name: 'email', placeholder: 'Введите email' },
    { label: 'Пароль', type: 'password', name: 'password', placeholder: 'Введите пароль' },
    { label: 'Номер телефона', type: 'tel', name: 'phone', placeholder: 'Введите номер телефона' },
    { label: 'Страна', type: 'text', name: 'country', placeholder: 'Введите страну' },
    { label: 'Город', type: 'text', name: 'city', placeholder: 'Введите город' },
    { label: 'Возраст', type: 'number', name: 'age', placeholder: 'Введите возраст' },
  ];

  return (
    <form className="registration-form" onSubmit={onSubmit}>
      <h2>{title}</h2>
      {fields.map((field) => (
        <InputField
          key={field.name}
          label={field.label}
          type={field.type}
          name={field.name}
          placeholder={field.placeholder}
        />
      ))}
      <SubmitButton text="Зарегистрироваться" />
    </form>
  );
}

export default RegistrationForm;
