import React from 'react';
import classes from './Store.module.css';
import {Link, withRouter} from "react-router-dom";
import {
    Box, Flex, Heading, HStack, Image,
    VStack, Container,
    Center, Badge, Tag,
    Avatar,TagLabel,
    Text
} from '@chakra-ui/react'
import resImage from './3.jpg'

const store = (props) => {
    return (
        <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image
                align='center'
                boxSize="200px"
                objectFit="cover"
                src={resImage}
                alt="Store Image"
            />
            <Box>
                <Badge borderRadius="full" px="2" colorScheme="teal">
                    <Link to={"/stores/" + props.id + "/edit"}>Edit</Link>
                </Badge>

            </Box>

                <Text
                    mt="1"
                    fontWeight="semibold"
                    as="h4"
                    lineHeight="tight"
                    isTruncated
                    casing='capitalize'
                    align='center'

                >
                    {props.storeName}
                </Text>
                {/*<Text as='h3' align='center' isTruncated casing='capitalize' size='sm'>{props.storeDescription}</Text>*/}

            <HStack spacing={4}>
                {props.storeTags.map(tag => (
                    <Tag
                        size='sm'
                        key={tag}
                        borderRadius="full"
                        variant="solid"
                        colorScheme="green"
                    ><TagLabel>{tag}</TagLabel>
                    </Tag>
                ))}
            </HStack>

        </Box>
    );
};

export default withRouter(store);
