import React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';

const SelectLengthList = ({ maxLengthList, options }) => {
  const handleChange = (event) => {
    maxLengthList(+event.target.value)
  }

  const checkOptionsIsNumber = () => {
    if (options.length === 0) {
      return false
    } 
    return options.every(el => typeof +el === 'number')
  }

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel variant="standard" htmlFor="uncontrolled-native">
          Ilość Wierszy
        </InputLabel>
        <NativeSelect
          defaultValue={options[0]}
          inputProps={{
            name: 'listLength',
            id: 'uncontrolled-native',
          }}
          sx={{ '& select': { paddingY: '12px', fontSize: '1.25rem' } }}
          onChange={handleChange}
        >
          {checkOptionsIsNumber() 
          ? options.map((el, idx) => <option key={idx} value={+el}>{el}</option>) 
          : <option value={5}>5</option>}
        </NativeSelect>
      </FormControl>
    </Box>
  );
}

export default SelectLengthList
