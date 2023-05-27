// PreguntaTamañoPortal.js
import React from 'react';
import { Box, Button, FormControl, FormLabel, Radio, RadioGroup, Heading } from '@chakra-ui/react';
import { FaCheck } from 'react-icons/fa';

const PreguntaTamañoPortal = ({ onPortalSizeChange, onNextQuestion, onPreviousQuestion }) => {
  const handleRadioChange = (event) => {
    if (event.target && event.target.value) {
      const { value } = event.target;
      onPortalSizeChange(value);
    }
  };

  const handleNext = () => {
    onNextQuestion();
  };

  const handlePrevious = () => {
    onPreviousQuestion();
  };

  return (
    <Box maxW="md" mx="auto" p={4} borderWidth="1px" borderRadius="md">
        <Heading as="h2" size="lg" mb={4}>
        Pregunta 2:
      </Heading>
      <FormControl>
        <FormLabel mb={4}>¿Cuál es el tamaño de tu portal?</FormLabel>
        <RadioGroup onChange={handleRadioChange}>
          <FormControl mb={2}>
            <Radio value="Pequeño">Pequeño</Radio>
          </FormControl>
          <FormControl mb={2}>
            <Radio value="Mediano">Mediano</Radio>
          </FormControl>
          <FormControl mb={2}>
            <Radio value="Grande">Grande</Radio>
          </FormControl>
        </RadioGroup>
      </FormControl>
      <Button
        colorScheme="teal"
        mt={4}
        leftIcon={<FaCheck />}
        isDisabled={!onPortalSizeChange}
        onClick={handleNext}
      >
        Siguiente
      </Button>
      {onPreviousQuestion && (
        <Button colorScheme="gray" mt={4} onClick={handlePrevious}>
          Anterior
        </Button>
      )}
    </Box>
  );
};

export default PreguntaTamañoPortal;
