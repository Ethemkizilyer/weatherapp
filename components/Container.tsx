import { convertTime } from '@/commons';
import { Box, Flex, Grid, GridItem, Text } from '@chakra-ui/react'
import { BsFillArrowUpCircleFill, BsSunrise, BsSunset, BsWind } from 'react-icons/bs';

type Props = {
  humidity: number;
  sunset: number;
  sunrise: number;
  windDir: number;
  windSpeed: number;
};

const Container = ({
  humidity,
  sunrise,
  sunset,
  windDir,
  windSpeed,
}: Props) => {
  const sunriseTime = convertTime(sunrise);
  const sunsetTime = convertTime(sunset);
  return (
    <Flex direction="column">
      <Box
        bgColor="white"
        border="2px"
        borderColor="gray.400"
        borderRadius="md"
        maxWidth={{ base: 365, md: 600, lg: 600 }}
        m={4}
      >
        <Grid
          templateColumns="180px 5px 180px"
          rowGap={1}
          columnGap={1}
          alignItems="center"
          justifyContent="center"
          minHeight={200}
        >
          <GridItem h="10">
            <Flex justify="center">
              <BsWind
                style={{
                  marginTop: "auto",
                  marginBottom: "auto",
                  marginLeft: "-3rem",
                }}
                size={40}
                color="#6B81FE"
              />
              <Box ml={4}>
                <Text fontSize="xl">Nem</Text>
                <Text>{humidity}%</Text>
              </Box>
            </Flex>
          </GridItem>
          <GridItem rowSpan={2} width={4}>
            <Box
              m="auto"
              height={[50, 100, 150]}
              borderLeft="1px"
              width={3}
              borderColor="gray.300"
            ></Box>
          </GridItem>
          <GridItem h="10">
            <Flex justify="center">
              <BsSunrise
                style={{ marginTop: "auto", marginBottom: "auto" }}
                size={40}
                color="#6B81FE"
              />
              <Box ml={4}>
                <Text fontSize="xl">Gündoğumu</Text>
                <Text>
                  {sunriseTime.hours}:{sunriseTime.mins}
                </Text>
              </Box>
            </Flex>
          </GridItem>
          <GridItem h="10">
            <Flex justify="center">
              <BsSunset
                style={{ marginTop: "auto", marginBottom: "auto" }}
                size={40}
                color="#6B81FE"
              />
              <Box ml={4}>
                <Text fontSize="xl">Gün batımı</Text>
                <Text as="b">
                  {sunsetTime.hours}:{sunsetTime.mins}
                </Text>
              </Box>
            </Flex>
          </GridItem>
        </Grid>
      </Box>
      <Box
        bgColor="white"
        border="2px"
        borderColor="gray.400"
        borderRadius="md"
        maxWidth={{ base: 365, md: 600, lg: 600 }}
        m={4}
      >
        <Grid
          templateColumns="180px 5px 180px"
          rowGap={1}
          columnGap={1}
          alignItems="center"
          justifyContent="center"
          minHeight={200}
        >
          <GridItem>
            <Flex
              direction="column"
              alignItems="center"
              justifyContent="center"
              minHeight={200}
            >
              <Text mb="5" fontSize="xx-large">
                Rüzgar
              </Text>
              <BsFillArrowUpCircleFill
                color="#7D90FE"
                size={60}
                style={{ transform: `rotate(${-windDir}deg)` }}
              />

              <Text as="i" mt="2">
                {(windSpeed * 3.6).toFixed(1)} Km/s
              </Text>
            </Flex>
          </GridItem>
        </Grid>
      </Box>
    </Flex>
  );
}


export default Container