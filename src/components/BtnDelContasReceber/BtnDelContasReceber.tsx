import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function BtnDelContasReceber(){
    return (
        <Stack spacing={2} direction="row">
          <Button variant="contained" color="error">Excluir</Button>
        </Stack>
      );
}