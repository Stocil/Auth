import { Button, Typography } from '@mui/material';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  const onClick = () => setCount((prev) => prev + 1);

  return (
    <>
      <Typography>{count}</Typography>
      <Button variant='gradient' onClick={onClick}>
        +Count
      </Button>
    </>
  );
}

export default App;
