import Head from 'next/head';
import { Button, Heading, Text, Flex } from '@chakra-ui/react';

import { useAuth } from '@/lib/auth';
import { Logo } from '@/styles/icons';

export default function Home() {
  const auth = useAuth();

  let signInOut = null;
  if (auth.user) {
    signInOut = <Button onClick={(e) => auth.signout()}>Sign out</Button>;
  } else {
    signInOut = (
      <Button onClick={(e) => auth.signinWithGithub()}>Sign in</Button>
    );
  }

  return (
    <Flex direction="column" height="100%">
      <Head>
        <title>Fast Feedback</title>
      </Head>
      <Flex as="main" direction="column">
        <Logo boxSize="32px" />
        {signInOut}
        <Text>{auth?.user?.email}</Text>
      </Flex>
    </Flex>
  );
}
