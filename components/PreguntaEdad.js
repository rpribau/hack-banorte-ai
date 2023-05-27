// PreguntaEdad.js
import React from 'react';
import { Box, Button, FormControl, FormLabel, Heading, Input } from '@chakra-ui/react';
import { FaCheck } from 'react-icons/fa';

const PreguntaEdad = ({ selectedOption, onOptionChange, onNextQuestion }) => {
  const handleInputChange = (event) => {
    if (onOptionChange) {
      onOptionChange(event.target.value);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onNextQuestion();
  };

  return (
    <Box maxW="md" mx="auto" p={4} borderWidth="1px" borderRadius="md">
      <Heading as="h2" size="lg" mb={4}>
        Pregunta 1:
      </Heading>
      <form onSubmit={handleSubmit}>
        <FormControl isRequired>
          <FormLabel mb={4}>¿Cuál es tu edad?</FormLabel>
          <Input value={selectedOption} onChange={handleInputChange} />
        </FormControl>
        <Button
          type="submit"
          colorScheme="teal"
          mt={4}
          leftIcon={<FaCheck />}
          isDisabled={!selectedOption}
          onClick={handleSubmit}
        >
          Siguiente
        </Button>
      </form>
    </Box>
  );
};

export default PreguntaEdad;
