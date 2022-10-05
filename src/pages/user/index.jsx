import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
} from '@chakra-ui/react'

import { Button, ButtonGroup } from '@chakra-ui/react'

const User = () => {

    const [data, setdata] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3000/users')
            .then(res => setdata(res.data))
    }, [data])

    const deleted = (id)=>{
        axios.delete(`http://localhost:3000/users/${id}`)
    }

    return (
        <TableContainer>
            <Table variant='simple'>
                <Thead>
                    <Tr>
                        <Th>FirstName</Th>
                        <Th>LastName</Th>
                        <Th>Birth Date</Th>
                        <Th>Email</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {
                        data && data.map((data, index) => {
                            return (
                                <Tr key={index}>
                                    <Td>{data.firstname}</Td>
                                    <Td>{data.lastname}</Td>
                                    <Td>{data.birthdate}</Td>
                                    <Td>{data.email}</Td>
                                    <Td><Button colorScheme='red' size='sm' onClick={()=>axios.delete(`http://localhost:3000/users/${data._id}`)}>Delete</Button></Td>
                                </Tr>
                            )
                        })
                    }
                </Tbody>
            </Table>
        </TableContainer>
    )
}

export default User