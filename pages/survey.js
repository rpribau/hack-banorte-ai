// survey.js
import React, { useState } from 'react';
import { Container, Box, Image, Heading, useColorModeValue, Flex, Text, Link } from '@chakra-ui/react';
import NextLink from 'next/link';
import PreguntaEdad from '../components/PreguntaEdad';
import PreguntaTamañoPortal from '../components/PreguntaTamañoPortal';
import { FaFacebook, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";

const LinkItem = ({ href, path, target, children, ...props }) => {
  const active = path === href;
  const inactiveColor = useColorModeValue('gray200', 'whiteAlpha.900');
  return (
    <Link
      as={NextLink}
      href={href}
      scroll={false}
      p={2}
      bg={active ? 'grassTeal' : undefined}
      color={active ? '#202023' : inactiveColor}
      target={target}
      {...props}
    >
      {children}
    </Link>
  );
};

const Survey = () => {
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [age, setAge] = useState('');
  const [portalSize, setPortalSize] = useState('');

  const handleNextQuestion = () => {
    setCurrentQuestion(currentQuestion + 1);
  };

  const handlePreviousQuestion = () => {
    setCurrentQuestion(currentQuestion - 1);
  };

  const handleAgeChange = (value) => {
    setAge(value);
  };

  const handlePortalSizeChange = (value) => {
    setPortalSize(value);
  };

  return (
    <Container>
      <Box borderRadius="lg">
        
          <Image
            borderRadius={16}
            src="https://i.imgur.com/sa6eHtZ.png"
            alt="Logo Banorte"
            href=""
          />
        
        <h>‎</h>
        <Heading as="h2">Hola, Oscar! 👋</Heading>
      </Box>
      <h>‎</h>
      <Box 
            borderRadius="lg" 
            bg={"gray.100"} 
            p={3} 
            mb={5} 
            align="justify" 
            color="black"
            fontWeight="bold">
                <Text fontWeight={"bold"} mb={2}>
                ✨ ¡Bienvenido a la nueva interfaz de Banorte! ✨
                </Text>
                

            <Text fontWeight={"normal"}>
            Diseñada con inteligencia artificial, te ofrecemos una comodidad 
            única en tus operaciones bancarias. Con una interfaz intuitiva y 
            personalizada, simplificamos cada paso del proceso. Desde consultar 
            saldos hasta realizar transferencias, nuestras funciones están al 
            alcance de tus dedos. Además, nuestra avanzada seguridad respaldada 
            por inteligencia artificial protege tus transacciones y datos 
            personales. En Banorte, tu satisfacción es primordial, 
            por lo que te pediremos contestar unas preguntas para 
            crear una interfaz ideal.
            </Text>      
      </Box>
      {currentQuestion === 1 && (
        <PreguntaEdad
          selectedOption={age}
          onOptionChange={handleAgeChange}
          onNextQuestion={handleNextQuestion}
        />
      )}
      {currentQuestion === 2 && (
        <PreguntaTamañoPortal
          onPortalSizeChange={handlePortalSizeChange}
          onNextQuestion={handleNextQuestion}
          onPreviousQuestion={handlePreviousQuestion}
        />
      )}

    <h>‎</h>

    <Flex justify="center" my={4}>
        <LinkItem 
            color="red.500" 
            mx={2}
            href= "https://www.facebook.com/banorte"
        >
            <FaFacebook size={32} />
        </LinkItem>

        <LinkItem 
            color="red.500" 
            mx={2}
            href= "https://twitter.com/Banorte_mx"
        >
            <FaTwitter size={32} />
        </LinkItem>

        <LinkItem 
            color="red.500" 
            mx={2}
            href= "https://www.youtube.com/banorte"
        >
            <FaYoutube size={32} />
        </LinkItem>

        <LinkItem 
            color="red.500" 
            mx={2}
            href= "https://www.instagram.com/banorte_mx/"
        >
            <FaInstagram size={32} />
        </LinkItem>


      </Flex>

      <Text textAlign="center" my={2} fontSize="sm">
        2023 Grupo Financiero Banorte. Derechos reservados.{" "}
        </Text>

        <Text textAlign="center" my={2} fontSize="sm">
        <NextLink 
            href="/terminos-legales">
                Términos Legales
        </NextLink> | {" "}
        
        <NextLink 
            href="/aviso-privacidad">
                Aviso de Privacidad
        </NextLink>

        </Text>

    </Container>
  );
};

export default Survey;
