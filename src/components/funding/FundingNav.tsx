import { Link } from "react-router-dom";
// ui
import { Button, Box, Flex, Heading } from "@chakra-ui/react";
// icons

interface Props {
  title: string;
  openFundingModal: () => void;
}

export function FundingNav({ title, openFundingModal }: Props) {
  return (
    <Box bg="white" px="4" color="blue.500">
      <Flex mx="auto" maxW="1180px" justify="space-between" align="center" py="3">
        <Heading size="md" fontWeight="500">
          {title}
        </Heading>
        <Button onClick={openFundingModal}>Back Project</Button>
      </Flex>
    </Box>
  );
}
