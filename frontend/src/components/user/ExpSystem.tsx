import { useState, useEffect } from "react"
import { VStack, Flex, Heading, Box, Text, Progress } from "@chakra-ui/react"

function ExpSystem() {
    // useEffect(() =>{

    // })

    return (
        <div>
            <Flex rounded="xl" direction="column" mt={4} mx={4} bg="white" position="initial" shadow={"lg"}>
                <Text color="black" p="5" fontSize="xl" fontWeight="500">
                    LV.10
                </Text>
                <div></div>
                <Progress mx="3" rounded="xl" position="initial" colorScheme="green" color="gray.400" size="md" value={50} />
                <Text color="black" ml="5" mb="5" mt={1} fontSize="l" fontWeight="500">
                    EXP : 500/999
                </Text>
            </Flex>
        </div>
    )
}

export default ExpSystem