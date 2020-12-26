import React from 'react';
import { Flex, Heading, Text, Button } from '@chakra-ui/react';
const FreePlanEmptyState = () => (
  <Flex
    ml="auto"
    mr="auto"
    maxWidth="800px"
    flexDirection="column"
    width="100%"
  >
    <Flex backgroundColor="gray.100" width="100%" />
    <Flex
      backgroundColor="gray.50"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      p={16}
    >
      <Heading size="lg" as="h2">
        Get feedback on your site instantly
      </Heading>
      <Text>Start today then grow with us</Text>
      <Button
        variant="solid"
        size="md"
        mt={4}
        color="whiteAlpha.900"
        backgroundColor="gray.900"
      >
        Upgrade to Starter
      </Button>
    </Flex>
  </Flex>
);
export default FreePlanEmptyState;
