import './form-input.styles.jsx';
import { FormInputLabel, Group, Input } from './form-input.styles.jsx';

const FromInput = ({ label, ...otherProps}) => {
  return (
    <Group>
      <Input {...otherProps} />
      
      
        <FormInputLabel shrink={otherProps.value.length}>
          {label}
        </FormInputLabel>
      
    </Group>
  )
}

export default FromInput