import Head from 'next/head';
import { Box, Center, Flex, HStack, VStack, Image, Text, LinkBox, LinkOverlay } from '@chakra-ui/react';
import { AnalysisData } from '@humble.xiang/website-description-analysis';

const WebsiteCardIntroduction = ({ url, title, description, image, favicon }: AnalysisData) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description}></meta>
      </Head>
      <Center>
        <LinkBox
          w="100%"
          maxW="1200px"
          minW="600px"
          borderWidth="1px"
          borderRadius="lg"
          _hover={{ backgroundColor: 'rgba(55, 53, 47, 0.08)' }}
        >
          <Flex h="120px">
            <VStack align="stretch" w={image ? '60%' : '100%'} p="15px">
              <Box fontSize="sm" fontWeight="semibold" as="h4" isTruncated>
                <LinkOverlay href={url} target="_blank">
                  {title}
                </LinkOverlay>
              </Box>
              <Box>
                <Text fontSize="xs" color="gray.500" noOfLines={2}>
                  {description}
                </Text>
              </Box>
              <HStack spacing="10px">
                <Image w="16px" h="16px" borderRadius="sm" src={favicon} alt="website card icon" />
                <Text fontSize="xs" isTruncated>
                  {url}
                </Text>
              </HStack>
            </VStack>
            {image && (
              <Image w="40%" h="100%" borderRadius="sm" objectFit="cover" src={image} alt="website card image" />
            )}
          </Flex>
        </LinkBox>
      </Center>
    </>
  );
};

export default WebsiteCardIntroduction;
