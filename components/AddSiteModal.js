import React from 'react';
import { useForm } from 'react-hook-form';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Flex
} from '@chakra-ui/react';
import {
  Button,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input
} from '@chakra-ui/react';
import { createSite } from '@/lib/db';

const AddSiteModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { register, handleSubmit } = useForm();

  const initialRef = React.useRef();
  const onCreateSite = (siteData) => createSite(siteData);

  return (
    <>
      <Button
        variant="solid"
        size="md"
        mt={4}
        color="whiteAlpha.900"
        backgroundColor="gray.900"
        onClick={onOpen}
      >
        Add Your First Site
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent as="form" onSubmit={handleSubmit(onCreateSite)}>
          <ModalHeader fontWeight="bold">Add site</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Name</FormLabel>
              <Input
                placeholder="My Site"
                name="site"
                ref={register({
                  required: true
                })}
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Link</FormLabel>
              <Input
                name="url"
                placeholder="https://website.com"
                ref={register({
                  required: true
                })}
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button onClick={onClose} mr={3}>
              Cancel
            </Button>
            <Button type="submit" colorScheme="cyan">
              Create
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AddSiteModal;
