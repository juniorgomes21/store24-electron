import React, { useState, useEffect } from "react";
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Pagination from '@mui/material/Pagination';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import apiAxios from "@/services/apiAxios";
import CircularProgress from "@mui/material/CircularProgress";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#2352b0',
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
    props,
    ref,
) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const obj = {
	"COM149": {
		"id": null,
		"fabricante": "ONDA COMMUNICATION",
		"modelo": "MSA110UP",
		"modOpradora": "MSA110UP.TIMBR.FW.B01",
		"imei": 864446003434735,
		"gcap": "+CGSM,+DS,+ES",
		"portName": "COM149",
		"chip": {
			"id": null,
			"operadora": "VIVO",
			"number": "5535998463501"
		}
	},
	"COM88": {
		"id": null,
		"fabricante": "ONDA COMMUNICATION",
		"modelo": "MSA110UP",
		"modOpradora": "MSA110UP.TIMBR.FW.B01",
		"imei": 864446003365558,
		"gcap": "+CGSM,+DS,+ES",
		"portName": "COM88",
		"chip": {
			"id": null,
			"operadora": "VIVO",
			"number": "5519996602273"
		}
	},
	"COM238": {
		"id": null,
		"fabricante": "ONDA COMMUNICATION",
		"modelo": "MSA110UP",
		"modOpradora": "MSA110UP.TIMBR.FW.B01",
		"imei": 864446003468394,
		"gcap": "+CGSM,+DS,+ES",
		"portName": "COM238",
		"chip": {
			"id": null,
			"operadora": "VIVO",
			"number": "5531996265944"
		}
	},
	"COM151": {
		"id": null,
		"fabricante": "ONDA COMMUNICATION",
		"modelo": "MSA110UP",
		"modOpradora": "MSA110UP.TIMBR.FW.B01",
		"imei": 864446003370053,
		"gcap": "+CGSM,+DS,+ES",
		"portName": "COM151",
		"chip": {
			"id": null,
			"operadora": "VIVO",
			"number": "5521999759279"
		}
	}
}

type Modem = {
  "fabricante": string;
  "modelo": string;
  "modOpradora": string;
  "imei": number;
  "gcap": string;
  "portName": string;
  "chip": {
    "operadora": string;
    "number": string;
  }
}

function InfoNumber() {

    const [loading, setLoading] = useState<boolean>(true);
    const [dadosCompra, setDadosCompra] = useState<Modem[]>([]);

    useEffect(() => {
      setInterval(apiMetaModemSdtos, 1000);
    }, [])

    async function apiMetaModemSdtos() {
      try {
        const response = await apiAxios.get('/modem/metamodemsdtos');
        setDadosCompra(Object.values(response.data));
        setLoading(false);

      } catch(e: any) {
        console.log("apiMetaModemSdtos", e);
        setLoading(false);
      }
    }

    if(loading) {
      return (
        <div className="flex justify-center items-center w-full">
          <CircularProgress />
        </div>
      )
    }

    return (
      <div className='h-full w-full'>
        <div className='flex flex-col items-center h-full'>
            <div className='w-full mt-2'>
                <TableContainer component={Paper} className='mt-14'>
                    <Table sx={{ minWidth: 400 }} aria-label="customized table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell align="center">Porta</StyledTableCell>
                                <StyledTableCell align="center">Fabricante</StyledTableCell>
                                <StyledTableCell align="center">Modelo</StyledTableCell>
                                <StyledTableCell align="center">Imei</StyledTableCell>
                                <StyledTableCell align="center">Tecnologias</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {dadosCompra.map((item, index) => (
                                <StyledTableRow key={index}>
                                    <StyledTableCell align="center">{item.portName}</StyledTableCell>
                                    <StyledTableCell align="center">{item.fabricante}</StyledTableCell>
                                    <StyledTableCell align="center">{item.modelo}</StyledTableCell>
                                    <StyledTableCell align="center">{item.imei}</StyledTableCell>
                                    <StyledTableCell align="center">{item.gcap}</StyledTableCell>
                                </StyledTableRow>
                            ))}
                        </TableBody>
                    </Table>
                    {/* {
                      dadosCompra.length === 0 &&
                      <div className='w-full flex justify-center mt-5 mb-5'>
                          <Alert severity="warning" className='w-1/2'>Sem informações!</Alert>
                      </div>
                    } */}
                </TableContainer>
            </div>
        </div>
      </div>
    )
}

export default InfoNumber;
