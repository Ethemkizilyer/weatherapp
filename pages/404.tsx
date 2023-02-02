import { Button, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import image404 from "../public/404.jpg";
import { useRouter } from "next/router";
const Custom404 = () => {
  const router = useRouter();

  return (
    <Flex
      flexDir="column"
      minHeight="100%"
      justifyContent="center"
      alignItems="center"
      minWidth="100%"
    >
      <Image src={image404} height={600} width={600} alt="404" an/>
      <Text fontSize="4xl" my="3">
        Bu sayfa bulunamadı
      </Text>
      <Button size="lg" onClick={() => router.back()}>
        Geri Dön
      </Button>
    </Flex>
  );
};

export default Custom404;