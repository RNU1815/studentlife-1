import { useState, useEffect } from "react"
import AppBody from "../../components/share/app/AppBody"
import SecondaryNav from "../../components/share/navbar/SecondaryNav"
import { HiDownload, HiUpload, HiUser } from "react-icons/hi"
import { MdOutlineHistory } from "react-icons/md"
import {
    Container,
    Flex,
    Box,
    Text,
    Input,
    VStack,
    Button,
    HStack,
    useDisclosure,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Select,
    Checkbox,
} from "@chakra-ui/react"
const linkMenu = [
    { name: "Drop", icon: HiUpload, to: "/airdrop" },
    { name: "Receive", icon: HiDownload, to: "/airdrop/receive" },
    { name: "History", icon: MdOutlineHistory, to: "/airdrop/history" },
]
const dummyData = [
    {
        name: "MR.ABC DEF",
        description: "HELLOOOOOOOOOOOOOOOOOOOOOO",
    },
]
const dummyData2 = [
    {
        name: "MR.ABC DEF",
    },
    {
        name: "MR.GHI JKL",
    },
    {
        name: "MR.MNO PQR",
    },
    {
        name: "MR.STU VWX",
    },
    {
        name: "MR.STU VWX",
    },
    {
        name: "MR.STU VWX",
    },
]
const openModal = () => {}
export default function Index() {
    // state for file upload
    const [files, setFiles] = useState([])
    //state for click drop
    const [clickDrop, setClickDrop] = useState(false)
    //state for modal
    const { isOpen, onOpen, onClose } = useDisclosure()
    // state for user select
    const [selectedType, setSelectedType] = useState("Everyone")
    //state for select receiver
    const [info, setInfo] = useState({
        receiver: "",
        description: "",
    })

    useEffect(() => {
        if (clickDrop == false) {
            setSelectedType("Everyone")
            if (selectedType === "Everyone") {
                setInfo({
                    receiver: "Everyone",
                    description: "",
                })
            }
        }
    }, [isOpen])

    const updateFile = (file: any) => {
        setFiles(file)
        console.log(file)
    }
    return (
        <AppBody secondarynav={linkMenu}>
            <Flex
                backgroundColor={"snow"}
                borderRadius={"50px"}
                minHeight={"auto"}
                px={"0"}
                py={"5%"}
                flexDirection={"row"}
                justifyContent={"center"}
                w={["100%", "90%", "80%", "70%"]}
                m={"auto"}
                mt={["25%", "15%", "5%"]}
                shadow={"md"}
                border={"1px"}
                borderColor={"gray.200"}
                // transition={"all 0.2s ease-in-out"}
                // _focusWithin={{ transform: "scale(1.02)" }}
            >
                <Flex flexDirection={"column"} alignItems={"center"} alignContent={"center"} w={"80%"}>
                    <VStack w={"full"} spacing={"5%"}>
                        <Box w={"full"} h={"200px"} backgroundColor={"orange.200"} shadow={"lg"}>
                            This is for dropzone
                            {/* <Dropzone onChange={()=>{}} value={files} style={{borderRadius:"50px",padding:"10%"}}>
              {files.map((file: any) => (
                <FileItem {...file} preview />
              ))}
              {files.length == 0 ? (
                <Flex flexDirection={"column"} justifyContent={"center"} alignItems={"center"}>
                  <HiUpload fontSize={"84px"} />
                  <Text fontSize={"2xl"}>Drop the file</Text>
                  <Text fontSize={"md"}>Maximum file size can be up to 200MB</Text>
                </Flex>
              ) : null}
            </Dropzone> */}
                        </Box>
                        <Box w={"100%"}>
                            <Text fontWeight={"bold"} mb={"2%"}>
                                Receiver
                            </Text>
                            <HStack spacing={5}>
                                <HiUser fontSize={"3rem"} />
                                <Input
                                    type={""}
                                    placeholder={"Select Receiver"}
                                    variant={"outline"}
                                    borderColor={"gray.400"}
                                    onClick={async () => {
                                        const wfc = await setClickDrop(false)
                                        onOpen()
                                    }}
                                    rounded={"2xl"}
                                    value={info.receiver ? info.receiver : "Please select Receiver"}
                                    textAlign={"center"}
                                    _focus={{
                                        borderColor: "gray.400",
                                    }}
                                ></Input>
                            </HStack>
                        </Box>
                        {/* select receiver modal */}
                        <Modal isOpen={isOpen} onClose={onClose} isCentered size={["sm", "md"]}>
                            <ModalOverlay bg={"none"} />
                            <ModalContent>
                                <ModalHeader>
                                    <Text align={"center"}>{!clickDrop ? "Select Receiver" : "Set Drop Duration"}</Text>
                                </ModalHeader>
                                <ModalCloseButton />
                                <ModalBody>
                                    <Flex flexDirection={"column"} justifyContent={"space-around"} w={"80%"} m={"auto"} gap={4}>
                                        {!clickDrop ? (
                                            <>
                                                <HStack spacing={5}>
                                                    <Text fontSize={"lg"}>Type: </Text>
                                                    <Select
                                                        rounded={"xl"}
                                                        textAlign={"center"}
                                                        onChange={(e) => {
                                                            setSelectedType(e.target.value)
                                                        }}
                                                    >
                                                        <option value="Everyone">Everyone</option>
                                                        <option value="Community">Community</option>
                                                        <option value="Department">Department</option>
                                                        <option value="Specific">Specific receiver</option>
                                                    </Select>
                                                </HStack>
                                                {selectedType == "Everyone" ? null : (
                                                    <>
                                                        <Input
                                                            type={""}
                                                            placeholder={"Search by name"}
                                                            variant={"outline"}
                                                            borderColor={"gray.200"}
                                                            onClick={onOpen}
                                                            rounded={"2xl"}
                                                            textAlign={"center"}
                                                            _focus={{
                                                                borderColor: "gray.400",
                                                            }}
                                                        ></Input>
                                                        <Select
                                                            size="3"
                                                            multiple
                                                            onChange={(e) => {
                                                                setInfo({ receiver: e.target.value, description: "" })
                                                            }}
                                                        >
                                                            {dummyData2.map((data) => {
                                                                return <option value={data.name}>{data.name}</option>
                                                            })}
                                                        </Select>
                                                    </>
                                                )}
                                            </>
                                        ) : (
                                            <></>
                                        )}
                                    </Flex>
                                </ModalBody>
                                <ModalFooter alignItems={"center"} textAlign={"center"} alignSelf={"center"}>
                                    {!clickDrop ? (
                                        <>
                                            <Button colorScheme="orange" mr={3} onClick={onClose} alignItems={"center"} alignSelf={"center"}>
                                                Close
                                            </Button>
                                        </>
                                    ) : (
                                        <>
                                            <Button
                                                colorScheme="orange"
                                                mr={3}
                                                onClick={onClose}
                                                alignItems={"center"}
                                                alignSelf={"center"}
                                                textAlign={"center"}
                                            >
                                                Confirm
                                            </Button>
                                        </>
                                    )}
                                </ModalFooter>
                            </ModalContent>
                        </Modal>
                        <Box w={"100%"}>
                            <Text fontWeight={"bold"} mb={"2%"}>
                                Description
                            </Text>
                            <Input
                                variant={"outline"}
                                placeholder={"Description of the file"}
                                borderColor={"gray.400"}
                                h={16}
                                rounded={"2xl"}
                                value={info.description}
                                onChange={(e) => {
                                    setInfo({ ...info, description: e.target.value })
                                }}
                            ></Input>
                        </Box>
                        <Button
                            colorScheme={"orange"}
                            rounded={"3xl"}
                            px={14}
                            py={[3, 6]}
                            shadow={"xl"}
                            onClick={async () => {
                                const wfc = await setClickDrop(true)
                                onOpen()
                            }}
                        >
                            Drop
                        </Button>
                    </VStack>
                </Flex>
            </Flex>
        </AppBody>
    )
}