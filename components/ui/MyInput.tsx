import React from 'react';
import {
  FormControl,
  FormControlLabel,
  FormControlHelper,
  Input,
  InputField,
  InputSlot,
  InputIcon,
  Icon,
} from '@gluestack-ui/themed';
import { MaterialIcons } from '@expo/vector-icons';

type Props = {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  helperText?: string;
  iconName?: keyof typeof MaterialIcons.glyphMap;
  isInvalid?: boolean;
};

const MyInput = ({
  label,
  value,
  onChangeText,
  placeholder,
  helperText,
  iconName = 'person',
  isInvalid = false,
}: Props) => {
  return (
    <FormControl isInvalid={isInvalid}>
      <FormControlLabel>{label}</FormControlLabel>
      <Input>
        <InputField value={value} onChangeText={onChangeText} placeholder={placeholder} />
        <InputSlot>
          <InputIcon>
            <Icon as={MaterialIcons} name={iconName} />
          </InputIcon>
        </InputSlot>
      </Input>
      {helperText && <FormControlHelper>{helperText}</FormControlHelper>}
    </FormControl>
  );
};

export default MyInput;
