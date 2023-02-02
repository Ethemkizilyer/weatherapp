import { BsSearch, BsMap } from "react-icons/bs";
import {
  Text,
  Flex,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import { Button } from "@chakra-ui/react";
import { toast } from "react-toastify";
import Router, { useRouter } from "next/router";
import { getToken } from "../commons";

type Props = {
  city: any;
  setCity: CallableFunction;
  late?: number; 
  lon?: number 
  name?:string
  
};

const NavBar = ({ city, setCity,late,lon,name }: Props) => {
  const [currentLatLng, setCurrentLatLng] = useState<{
    lat?: number | null;
    lng?: number | null;
  }>({ lat: late, lng: lon});
  const [currentCityName, setCurrentCityName] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const routing = useRouter();
  const ref = useRef<HTMLDivElement>(null);

  const handleSearchByLatLng = async (
    e: React.FormEvent<HTMLButtonElement>
  ) => {
    e.preventDefault();
    if (!getToken()) return routing.push(`/unauth`);
    if (!currentLatLng?.lat || !currentLatLng.lng)
      return toast("lat ve lng girin", {
        type: "warning",
        position: "top-center",
      });
    routing.push(
      `/searchByLatLng?lat=${currentLatLng?.lat}&lng=${currentLatLng?.lng}`
    );
    setCurrentCityName(name!);
  };

  const handleSearchByName = async (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!getToken()) return routing.push(`/unauthorized`);
    if (!currentCityName)
      return toast("şehir girin", {
        type: "warning",
        position: "top-center",
      });
    setCurrentLatLng({ lat: late, lng: lon });
    routing.push(`/${currentCityName}`);
  };

  useEffect(() => {
    Router.events.on("routeChangeStart", () => {
      setIsLoading(true);
    });
    Router.events.on("routeChangeComplete", () => {
      setIsLoading(false);
    });
    setCurrentLatLng({lat:late,lng:lon})
    setCurrentCityName(name!)
  }, [late,lon,name]);

  return (
    <>
      <Flex
        bg="primary.100"
        alignItems="center"
        height={20}
        justifyContent="space-between"
      >
        <Text
          ml={{ base: 10, md: 10, lg: 20 }}
          fontSize="xl"
          color="primary.900"
          as="b"
        >
          Koordinat
        </Text>
        <InputGroup
          maxWidth={{ base: "35%", md: "30%", lg: "15%" }}
          mr={[5, 10, 10]}
          position="relative"
          ref={ref}
        >
          <Input
            width={"33%"}
            placeholder="Lat"
            onChange={(e: any) => {
              setCurrentLatLng({
                lat: e.target.value,
                lng: currentLatLng?.lng,
              });
            }}
            value={`${currentLatLng?.lat}`}
          />
          <Input
            width={"33%"}
            placeholder="Lng"
            ml={"2px"}
            onChange={(e: any) => {
              setCurrentLatLng({
                lat: currentLatLng?.lat,
                lng: e.target.value,
              });
            }}
            value={`${currentLatLng?.lng}`}
          />
          <Button
            isLoading={isLoading}
            width={"33%"}
            size="md"
            backgroundColor="#1193ec"
            borderRadius="10px"
            ml={"8px"}
            color="#f7fdfb"
            _hover={{ bg: "#006eb9" }}
            _active={{
              bg: "#006eb9",
              transform: "scale(0.95)",
            }}
            onClick={handleSearchByLatLng}
          >
            <BsSearch size={"15px"} color="white" />
          </Button>
        </InputGroup>
      </Flex>

      <Flex
        bg="primary.100"
        alignItems="center"
        height={"50"}
        mb={"1rem"}
        justifyContent="space-between"
      >
        <Text
          ml={{ base: 10, md: 10, lg: 20 }}
          fontSize="xl"
          color="primary.900"
          as="b"
        >
          Şehir ismi
        </Text>
        <InputGroup
          maxWidth={{ base: "35%", md: "30%", lg: "15%" }}
          mr={[5, 10, 10]}
          justifyContent="end"
          position="relative"
          ref={ref}
        >
          <Input
            width={"66%"}
            placeholder="Şehir"
            onChange={(e: any) => {
              setCurrentCityName(e.target.value);
            }}
            value={currentCityName}
          />

          <Button
            isLoading={isLoading}
            width={"33%"}
            size="md"
            backgroundColor="#1193ec"
            borderRadius="10px"
            ml={"8px"}
            color="#f7fdfb"
            _hover={{ bg: "#006eb9" }}
            _active={{
              bg: "#006eb9",
              transform: "scale(0.95)",
            }}
            onClick={handleSearchByName}
          >
            <BsSearch size={"15px"} color="white" />
          </Button>
        </InputGroup>
      </Flex>
    </>
  );
};

export default NavBar;
