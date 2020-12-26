import React from 'react';
import {
  Flex,
  Stack,
  Link,
  Avatar,
  Heading,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink
} from '@chakra-ui/react';
import { Logo } from '@/styles/icons';
import { useAuth } from '@/lib/auth';

const DashboardShell = ({ children }) => {
  const auth = useAuth();
  return (
    <Flex flexDirection="column" height="100%">
      <Flex
        justifyContent="space-between"
        alignItems="center"
        py={6}
        px={8}
        backgroundColor="white"
      >
        <Stack spacing={4} isInline alignItems="center">
          <Logo boxSize="6" />
          <Link>Sites</Link>
          <Link>Feedback</Link>
        </Stack>
        <Stack spacing={4} isInline alignItems="center">
          <Link>{auth?.user?.name}</Link>
          <Avatar size="sm" src={auth?.user?.photoURL} />
        </Stack>
      </Flex>
      <Flex backgroundColor="gray.200" flexDirection="column" height="100%">
        <Flex
          flexDirection="column"
          ml="auto"
          mr="auto"
          mt={16}
          mb={16}
          maxWidth="800px"
          width="100%"
        >
          <Breadcrumb separator="/">
            <BreadcrumbItem>
              <BreadcrumbLink color="gray.600">Sites</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
          <Heading>My Sites</Heading>
        </Flex>
        {children}
      </Flex>
    </Flex>
  );
};
export default DashboardShell;
