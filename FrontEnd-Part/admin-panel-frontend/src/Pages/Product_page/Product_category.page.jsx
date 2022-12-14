import { Box, Button, Card, CardBody, CardHeader, Heading, Text, CardFooter, Image, Stack, Divider, ButtonGroup, Grid, GridItem } from "@chakra-ui/react"
import axios from "axios"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { AdminNavbar } from "../../Components/Navbar"
import { getAllProduct } from "../../redux/Products/Products.action"


export const Product_Category = () => {

    const token = useSelector(({ auth }) => auth.token) || localStorage.getItem('admin_token')
    const food_list = useSelector(({product}) => product.data)
    const Navigate = useNavigate()
    const dispatch = useDispatch()

    useEffect(() => {

        dispatch(getAllProduct(token))

    }, [])



    return (

        <Box>
            <AdminNavbar /> 
            <Grid templateColumns='repeat(3, 1fr)' gap={6}>

                {

                    food_list && food_list.map((i) => (
                        <GridItem key={i.category_id}>
                            <Card maxW='sm'>
                                <CardBody>
                                    <Image
                                        src={i.product_img_src}
                                        alt='Green double couch with wooden legs'
                                        borderRadius='lg'
                                    />
                                    <Stack mt='6' spacing='3'>
                                        <Heading size='md'>{i.category_name} Collections</Heading>
                                    </Stack>
                                </CardBody>
                                <Divider />
                                <CardFooter>
                                    <ButtonGroup spacing='2'>
                                        <Button onClick={() => Navigate(`./${i.category_id}`)} variant='solid' colorScheme='blue'>
                                            Click to Know More
                                        </Button>
                                    </ButtonGroup>
                                </CardFooter>
                            </Card>
                        </GridItem>
                    ))
                }
            </Grid>

        </Box>
    )


}