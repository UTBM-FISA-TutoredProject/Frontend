import { Box, Button, Flex } from "@chakra-ui/react";
import { type FC, useState } from "react";

const App: FC = () => {
  const [count, setCount] = useState(0);

  const handleCounterClick = (): void => {
    setCount((count) => count + 1);
  };

  return (
    <Flex alignItems="center" flexDir="column">
      <Box as="span" textDecor="line-through">
        Webpack
      </Box>
      <h1>Vite + React + ChakraUI</h1>
      <div>
        <Button bgColor="darkcyan" onClick={() => handleCounterClick()}>
          count is {count}
        </Button>
      </div>
    </Flex>
  );
};

export default App;
