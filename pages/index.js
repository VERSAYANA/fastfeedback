import Head from 'next/head';
import { Button, Heading, Text } from '@chakra-ui/react';

import { useAuth } from '@/lib/auth';

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
    <div>
      <Head>
        <title>Fast Feedback</title>
      </Head>
      <main>
        <Heading>Fast Feedback</Heading>
        {signInOut}
        <Text>{auth?.user?.email}</Text>
      </main>
    </div>
  );
}
