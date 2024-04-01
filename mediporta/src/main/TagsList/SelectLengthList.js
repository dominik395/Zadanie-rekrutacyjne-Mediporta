import React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';

const SelectLengthList = ({ maxLengthList, options }) => {
  const handleChange = (event) => {
    maxLengthList(+event.target.value)
  }

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel variant="standard" htmlFor="uncontrolled-native">
          Ilość Wierszy
        </InputLabel>
        <NativeSelect
          defaultValue={options}
          inputProps={{
            name: 'listLength',
            id: 'uncontrolled-native',
          }}
          sx={{ '& select': { paddingY: '12px', fontSize: '1.25rem' } }}
          onChange={handleChange}
        >
          <option value={options[0]}>{options[0]}</option>
          <option value={options[1]}>{options[1]}</option>
          <option value={options[2]}>{options[2]}</option>
          <option value={options[3]}>{options[3]}</option>
        </NativeSelect>
      </FormControl>
    </Box>
  );
}

export default SelectLengthList
