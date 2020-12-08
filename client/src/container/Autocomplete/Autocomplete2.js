import React, {useState} from 'react';
import PlacesAutocomplete, {
    geocodeByAddress,
    getLatLng,
} from 'react-places-autocomplete';
import {Box, FormControl, FormLabel, Input} from '@chakra-ui/react'
import FormikControl from "../../component/Formik/FormikControl/FormikControl";
import {Field, Form} from "formik";

const Autocomplete2 = (props) => {

    const [address, setAddress] = React.useState("");
    const [coordinates, setCoordinates] = React.useState({
        lat: null,
        lng: null
    });


    const handleSelect = async value => {
        const results = await geocodeByAddress(value);
        const latLng = await getLatLng(results[0]);
        console.log(latLng);
        console.log(value);
        setAddress(value);
        setCoordinates(latLng);
    };

    return (
        <PlacesAutocomplete
            value={address}
            onChange={setAddress}
            onSelect={handleSelect}
        >
            {({getInputProps, suggestions, getSuggestionItemProps, loading}) => (
                <Box>

                    <FormControl>
                        <Box m={3}>
                            <FormLabel htmlFor={address}>Search Places</FormLabel>
                            <Input
                                {...getInputProps({
                                    placeholder: 'Search Places ...',
                                    className: 'location-search-input',

                                })}
                                name={address}
                            />
                        </Box>
                    </FormControl>

                    <Box>
                        {loading ? <Box>...loading</Box> : null}

                        {suggestions.map(suggestion => {
                            const style = {
                                backgroundColor: suggestion.active ? "#41b6e6" : "#fff"
                            };
                            return (
                                <Box {...getSuggestionItemProps(suggestion, {style})}>
                                    {suggestion.description}
                                </Box>
                            );
                        })}
                    </Box>
                </Box>
            )}
        </PlacesAutocomplete>
    );
};

export default Autocomplete2;
