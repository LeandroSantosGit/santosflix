import React from 'react';
import PropTypes from 'prop-types';

import { FormFieldWrapper, Label, Input } from './style';

function FormField({
  label, type, name, value, onChange, suggestions,
}) {
  const fieldId = `id_${name}`;
  const isTextArea = type === 'textarea';
  const tag = isTextArea ? 'textarea' : 'input';

  const hasValue = Boolean(value.length);
  const hasSuggestions = Boolean(suggestions.length);
  
  return (
    <FormFieldWrapper>
      <Label htmlFor={fieldId}>
        <Input
          as={tag}
          id={fieldId}
          type={type}
          name={name}
          value={value}
          hasValue={hasValue}
          onChange={onChange}
          autoComplete={hasSuggestions ? 'off' : 'on'}
          list={hasSuggestions ? `suggestionsFor_${fieldId}` : undefined}
        />
        <Label.Text>
            {label}
            :
        </Label.Text>
      </Label>
      {
        hasSuggestions && (
          <datalist id={`suggestionsFor_${fieldId}`}>
            {
              suggestions.map((suggestion) => (
                <option value={suggestion} key={`suggestionsFor_${fieldId}_option${suggestion}`}>
                  {suggestion}
                </option>
              ))
            }
          </datalist>
        )
      }
      
    </FormFieldWrapper>
  );
}

FormField.defaultProps = {
    type: 'text',
    value: '',
    onChange: () => {},
    suggestions: [],
}

FormField.propTypes = {
    label: PropTypes.string.isRequired,
    type: PropTypes.string,
    name: PropTypes.string.isRequired,
    value: PropTypes.string,
    onChange: PropTypes.func,
    suggestions: PropTypes.arrayOf(PropTypes.string),
}

export default FormField;
