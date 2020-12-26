import Head from 'next/head';
import { Button, Heading, Text, Flex } from '@chakra-ui/react';

import { useAuth } from '@/lib/auth';
import { Logo } from '@/styles/icons';
import DashboardShell from '@/components/DashboardShell';
import EmptyState from '@/components/EmptyState';
import FreePlanEmptyState from '@/components/FreePlanEmptyState';

export default function Home() {
  const auth = useAuth();

  let shellContent = null;
  if (auth.user) {
    shellContent = <EmptyState />;
  } else {
    shellContent = <FreePlanEmptyState />;
  }

  return (
    <Flex direction="column" height="100vh">
      <Head>
        <title>Fast Feedback</title>
      </Head>
      <DashboardShell>{shellContent}</DashboardShell>
    </Flex>
  );
}
