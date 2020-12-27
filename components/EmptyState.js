import React from 'react';
import { Flex, Heading, Text, Button } from '@chakra-ui/react';
import AddSiteModal from '@/components/AddSiteModal';

const EmptyState = () => (
  <Flex
    ml="auto"
    mr="auto"
    maxWidth="800px"
    flexDirection="column"
    width="100%"
    borderRadius="4px"
  >
    <Flex backgroundColor="gray.100" width="100%" height={8} />
    <Flex
      backgroundColor="gray.50"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      p={16}
    >
      <Heading size="lg" as="h2">
        You haven't added any sites
      </Heading>
      <Text>Welcome, Let's get started</Text>
      <AddSiteModal />
    </Flex>
  </Flex>
);
export default EmptyState;
