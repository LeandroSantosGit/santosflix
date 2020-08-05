import { useState } from 'react';

function useForm(dadosIniciais) {
  const [values, setValues] = useState(dadosIniciais);

  function setValue(chave, valor) {
    setValues({
      ...values,
      [chave]: valor,
    });
  }

  function handleInputChange(event) {
    // const { getAttribute, value } = event.target;
    setValue(
      event.target.getAttribute('name'),
      event.target.value,
    );
  }

  function clearForm() {
    setValues(dadosIniciais);
  }

  return {
    values,
    handleInputChange,
    clearForm,
  };
}

export default useForm;
