import Axios from '../components/Axios'
import {React, useEffect, useMemo, useState} from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const Home = () => {

    const [Data, setData] = useState()
    const [loading, setLoading] = useState(true)
 
    const GetData = () => {
        Axios.get(
            `/users/`
        ).then((response)=>{

            setData(response.data)
            console.log(response.data)
            setLoading(false)
        })
    }

    useEffect(() => {
        GetData()
    },[])

    return(
        <div>
            {loading ? <p>Loading data...</p> :
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                        <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>E-mail</TableCell>
                        </TableRow>
                        </TableHead>
                        <TableBody>
                        {Data.map((item, index) => (
                            <TableRow
                            key={index}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                            <TableCell component="th" scope="row">
                                {item.id}
                            </TableCell>
                            <TableCell align="left">{item.email}</TableCell>
                            </TableRow>
                        ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            }
        </div>
    )
}

export default Home