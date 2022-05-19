import { HiCalendar } from 'react-icons/hi';
import { Box, Text, Flex, Spacer, Tag, Button, Icon } from '@chakra-ui/react';

export function Launchitem(launch) {
    return (
        <Box key={launch.flight_number} bg="gray.100" p={4} m={4} borderRadius="lg">
            <Flex display="flex">
                <Text>
                    Mission <strong>{launch.mission_name}</strong> ({launch.launch_year})
                </Text>
                <Spacer />
                <Tag p={2} colorScheme={launch.launch_success ? 'green' : 'red'}>
                    {launch.launch_success ? 'Success' : 'Failure'}
                </Tag>
            </Flex>
            <Flex align="center">
                <Icon as={HiCalendar} color="gray.500" />
                <Text ml={2} color="gray.500">
                    {(launch.launch_date_local.split('T')[0])}
                </Text>
            </Flex>
            <Button mt={2} colorScheme="blue">View Details</Button>
        </Box>
    )
}