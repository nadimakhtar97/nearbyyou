import React,{Component} from 'react';
import Store from './Store/Store';
import axios from '../../axios-backend';
import {Container,HStack,Stack,Heading,Flex,Box,SimpleGrid} from '@chakra-ui/react'

class stores extends Component {

    state = {
        stores : []
    }

    componentDidMount() {
        let storesData = null;
        axios.get('/stores').then((res)=>{
           storesData = [...res.data];
           this.setState({stores:storesData});
        })
    }

    render() {

        const store = this.state.stores.map((store)=>(

                <Store key={store._id}
                       storeName={store.name}
                       id={store._id}
                       storeDescription={store.description}
                       storeTags={store.tags}
                       slug={store.slug}
                />

        ))

        return (
            <Box>
                <Box m={5}>
                    <Heading>STORES</Heading>
                </Box>
                <SimpleGrid minChildWidth="182px" spacing={3}>
                    {store}
                </SimpleGrid>
            </Box>
        );
    }
}

export default stores;
