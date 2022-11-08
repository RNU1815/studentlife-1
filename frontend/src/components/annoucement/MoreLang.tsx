import { FormControl, FormLabel, Select, Input, Textarea, Box, Text, Tag, TagCloseButton, TagLabel, Button } from "@chakra-ui/react"
import React, { FC } from "react"
import { BsPlusCircleFill } from "react-icons/bs"

const MoreLang: FC<{
    onClick: Function
    addLang:Function
}> = ({ onClick,addLang }) => {
    const [otherLang, setOtherLang] = React.useState(String)
    const [topic, setTopic] = React.useState(String)
    const [detail, setDetail] = React.useState(String)
    return (
        <Box pl={"1rem"} borderLeft="1px" borderLeftColor={"#DDDDDD"} my="10">
            <Tag
                height={"1.5"}
                size={"lg"}
                key={"lg"}
                borderRadius="full"
                variant="solid"
                colorScheme="blackAlpha"
                mb="2rem"
                onClick={() => onClick()}
            >
                <TagLabel>Other Languages</TagLabel>
                <TagCloseButton />
            </Tag>
            <FormControl isRequired>
                <FormLabel>Select Language</FormLabel>
                <Select placeholder="Select language" onChange={(e) => setOtherLang(e.target.value)}>
                    <option>Thai</option>
                    <option>Japanese</option>
                </Select>
            </FormControl>
            <FormControl isRequired>
                <FormLabel>Title</FormLabel>
                <Input placeholder="Title" onChange={(e) => setTopic(e.target.value)} />
            </FormControl>
            <FormControl isRequired>
                <FormLabel>Detail</FormLabel>
                <Textarea placeholder="Detail" size="sm" onChange={(e) => setDetail(e.target.value)} />
            </FormControl>
            <Text color={"red.300"} fontSize={"0.8rem"} my={"2"}>
                Note: if you added, you can't edit it anymore
            </Text>
            <Button onClick={() => addLang(otherLang,topic,detail)}>Add</Button>
        </Box>
    )
}

export default MoreLang