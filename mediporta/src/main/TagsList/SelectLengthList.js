import React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';

const SelectLengthList = ({ maxLengthList }) => {

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
          defaultValue={10}
          inputProps={{
            name: 'listLength',
            id: 'uncontrolled-native',
          }}
          sx={{ '& select': { paddingY: '12px', fontSize: '1.25rem' } }}
          onChange={handleChange}
        >
          <option value={10}>10</option>
          <option value={20}>20</option>
          <option value={30}>30</option>
        </NativeSelect>
      </FormControl>
    </Box>
  );
}

export default SelectLengthList
