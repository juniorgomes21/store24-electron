import React, { useState, useEffect } from "react";
import { formatarDataDia, maskCell } from "@/Validation&Formatation/formatation";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import apiAxios from "@/services/apiAxios";
import CircularProgress from "@mui/material/CircularProgress";
import vivo from '../../../public/vivo.png';
import tim from '../../../public/tim.jpg';
import oi from '../../../public/oi.jpeg';
import claro from '../../../public/claro.png';

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const objx = {
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
	},
  "COM164": {
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
	},
  "COM163": {
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
	},
  "COM162": {
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
	},
  "COM161": {
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
	},
  "COM160": {
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
	},
  "COM159": {
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
	},
  "COM158": {
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
	},
  "COM157": {
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
	},
  "COM156": {
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
	},
  "COM155": {
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
	},
  "COM154": {
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
	},
  "COM153": {
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
	},
  "COM152": {
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
	},
  "COM173": {
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
	},
  "COM174": {
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
	},
  "COM175": {
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
	},
  "COM176": {
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
	},
  "COM177": {
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
	},
  "COM178": {
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
	},
  "COM179": {
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
	},
  "COM180": {
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
	},
  "COM181": {
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
	},
  "COM182": {
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
	},
  "COM183": {
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
	},
  "COM184": {
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
	},
  "COM185": {
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
	},
  "COM186": {
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
	},
  "COM187": {
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
	},
  "COM188": {
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
	},
  "COM189": {
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
	},
  "COM190": {
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
	},
  "COM191": {
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
	},
  "COM192": {
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
	},
  "COM193": {
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
	},
  "COM194": {
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
	},
  "COM195": {
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
	},
  "COM196": {
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
	},
  "COM197": {
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
	},
  "COM198": {
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
	},
  "COM199": {
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
	},
  "COM200": {
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
	},
  "COM201": {
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
	},
  "COM202": {
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
	},
  "COM203": {
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
	},
  "COM204": {
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
	},
}

const msgx = {
	"COM149": [
		{
			"msg": "Oi",
			"emissor": "5591998317849",
			"date": "2023-10-22T04:14:00.000+00:00",
			"sequencial": 0
		},
		{
			"msg": "Chega rapido",
			"emissor": "5591998317849",
			"date": "2023-10-22T04:15:00.000+00:00",
			"sequencial": 1
		},
		{
			"msg": "#FiqueEsperto e evite golpes contra sua conta corrente e cartao de credito. Saiba mais no site #FiqueEsperto",
			"emissor": "40133",
			"date": "2024-10-22T14:51:00.000+00:00",
			"sequencial": 2
		}
	],
	"COM238": [
		{
			"msg": "Alguem te ligou! Saiba, mesmo sem o numero na agenda, e bloqueie ligacao spam. Ganhe 7 dias gratis, apos R$4,99/sem, com renovacao automatica. Envie TCR agora!",
			"emissor": "455",
			"date": "2007-11-22T20:38:00.000+00:00",
			"sequencial": 0
		},
		{
			"msg": "Bradescard: Parcele seu debito agora em ate 24x com taxa apartir de 0,99%, nao fique fora dessa clique agora: meuacordo.com.br/avbp2/1055141829",
			"emissor": "29356",
			"date": "2009-11-22T17:00:00.000+00:00",
			"sequencial": 1
		},
		{
			"msg": "Sssss",
			"emissor": "5591998317849",
			"date": "2019-11-22T16:36:00.000+00:00",
			"sequencial": 2
		},
		{
			"msg": "Notamos que a sua linha esta cancelada. Evite ficar sem WhatsApp e outros servicos. Recarregue HOJE e ganhe 10GB por 7 dias. https://recarga.vivo.com.br",
			"emissor": "1515",
			"date": "2024-11-22T12:06:00.000+00:00",
			"sequencial": 3
		}
	],
	"COM151": [
		{
			"msg": "Pou",
			"emissor": "5591998317849",
			"date": "2003-11-22T06:46:00.000+00:00",
			"sequencial": 0
		},
		{
			"msg": "Pou Pou lol",
			"emissor": "5591998317849",
			"date": "2003-11-22T07:01:00.000+00:00",
			"sequencial": 1
		},
		{
			"msg": "Kkkkk",
			"emissor": "5591998317849",
			"date": "2003-11-22T07:03:00.000+00:00",
			"sequencial": 2
		},
		{
			"msg": "Agora sim!!!!!",
			"emissor": "5591998317849",
			"date": "2003-11-22T07:04:00.000+00:00",
			"sequencial": 3
		},
		{
			"msg": "Eita que foi rapido!",
			"emissor": "5591998317849",
			"date": "2003-11-22T07:04:00.000+00:00",
			"sequencial": 4
		},
		{
			"msg": "ANTECIPE-SE! Venda o seu precatorio para o BRJUS e receba ate 85 por cento! Ligue (21) 3974-1300 ou whatsapp https://t.ly/niSF",
			"emissor": "27440",
			"date": "2007-11-22T12:48:00.000+00:00",
			"sequencial": 5
		},
		{
			"msg": "Vivo Pre: Vi por aqui que a sua linha esta cancelada e o seu numero sera desativado. P/ manter a linha recarregue HOJE e ganhe 10GB. https://recarga.vivo.com.br",
			"emissor": "1515",
			"date": "2019-11-22T12:05:00.000+00:00",
			"sequencial": 6
		},
		{
			"msg": "lol",
			"emissor": "5591998317849",
			"date": "2019-11-22T15:13:00.000+00:00",
			"sequencial": 7
		},
		{
			"msg": "Oi",
			"emissor": "5591998317849",
			"date": "2019-11-22T15:14:00.000+00:00",
			"sequencial": 8
		}
	],
	"COM88": [
		{
			"msg": "00200042006F0078002E000A000A0045004100530051003200510041004E0079004D0042",
			"emissor": "24724",
			"date": "2029-08-22T12:46:00.000+00:00",
			"sequencial": 0
		},
		{
			"msg": "003C0023003E00200053006500750020006300F3006400690067006F00200064006500200063006F006E006600690072006D006100E700E3006F002000E9003A002000380030003300300030003300200046006100E700610020006100200076006500720069006600690063006100E700E3006F0020006E006F0020005300680065006C006C",
			"emissor": "24724",
			"date": "2029-08-22T12:46:00.000+00:00",
			"sequencial": 1
		},
		{
			"msg": "iFood: use este codigo para acessar sua conta. Para sua seguranca, nao compartilhe com outras pessoas. ",
			"emissor": "7370797968",
			"date": "2029-08-22T12:49:00.000+00:00",
			"sequencial": 2
		},
		{
			"msg": "004F0069002000730065007200E1002000710020007000720069006E0074003F",
			"emissor": "5591998317849",
			"date": "2022-10-22T06:32:00.000+00:00",
			"sequencial": 3
		},
		{
			"msg": "Sera que vai",
			"emissor": "5591998317849",
			"date": "2023-10-22T04:22:00.000+00:00",
			"sequencial": 4
		},
		{
			"msg": "Ola hoje",
			"emissor": "5591998317849",
			"date": "2003-11-22T19:17:00.000+00:00",
			"sequencial": 5
		},
		{
			"msg": "Ola agora ",
			"emissor": "5591998317849",
			"date": "2003-11-22T19:19:00.000+00:00",
			"sequencial": 6
		},
		{
			"msg": "Elektro Informa: Ola! O codigo 17462630 possui faturas em aberto e esta sujeito ao corte de energia. Desconsidere em caso de pagamento.",
			"emissor": "29424",
			"date": "2004-11-22T15:10:00.000+00:00",
			"sequencial": 7
		},
		{
			"msg": "Oi",
			"emissor": "5591998317849",
			"date": "2019-11-22T15:17:00.000+00:00",
			"sequencial": 8
		}
	]
}

type Msg = {
  msg: string | null;
  emisssor: string | null;
  date: string | null;
  sequencial: number | null;
};

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

function Chips() {

    const [loading, setLoading] = useState<boolean>(true);
    const [msgChip, setMsgChip] = useState<any>([])
    const [port, setPort] = useState<string>('');
    const [obj, setObj] = useState<Modem[]>([]);
    const [msg, setMsg] = useState<Map<string, []>>(new Map());

    useEffect(() => {
        setInterval(apiMetaModem, 1000);
    }, [])

    async function apiMetaModem() {
        try {
            const response = await apiAxios.get('/modem/metamodemsdtos');
            setObj(Object.values(response.data));
            const responseMsg = await apiAxios.get('/sms/massagesdtos');
            setMsg(responseMsg.data);
            setLoading(false);

        } catch(e: any) {
            setLoading(false);
            console.log("e");
        }
    }

    function handleClickOpen(port: string) {
        setPort(port);
        setMsgChip(Object.entries(msg).filter(([key]) => key.includes(port))[0][1]);
    };

    function auxMsgVoid(port: string) {
        const msgVoid: [] = Object.entries(msg).filter(([key]) => key.includes(port))[0][1];

        if(msgVoid.length == 0) {
            return 'text-black'
        } else {
            return 'text-orange-600';
        }
    }

    function auxOperadoraPng(operadora: string) {
        if(operadora === 'VIVO') {
            return vivo;
        } else if(operadora === 'TIM') {
            return tim;
        } else if(operadora === 'CLARO') {
            return claro;
        } else {
            return oi;
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
        <div className="flex w-full h-full">
            <div className="w-72 h-[85vh] shadow-lg overflow-y-auto shadow-slate-400 border-2 border-gray-300" style={{ scrollbarWidth: 'thin', scrollbarColor: 'blue' }}>
                <p className="flex justify-center w-full font-bold mt-2">Suas mensagens</p>
                {
                    msgChip.length === 0 && port === '' ?
                        <div className="flex justify-center text-center mt-3">
                            Click em algum chip para ver suas mensagens
                        </div>

                    :

                    msgChip.length === 0 && port !== '' ?
                        <div className="flex justify-center text-center mt-3">
                            Sem mensagem!
                        </div>

                    :

                        msgChip.map((msg : Msg, index: any) => (
                        <div key={index} className='border-b-[1px] border-orange-400 mt-2 m-2'>
                            <p className="text-[14px]"> <span  className="text-[15px] mr-2 font-bold">Data:</span>{formatarDataDia(String(msg.date))}</p>
                            <p className=" mt-2 break-all">
                                <span className="text-[15px] mr-2 font-bold">Mensagen:</span>
                                {msg.msg}
                            </p>
                            <Divider/>
                        </div>
                    ))
                }
            </div>
            <div className="flex justify-center flex-wrap w-full">
                { obj.map((item, index) => (
                    <div className={`flex flex-row w-56 h-16 shadow-lg ${port === item.portName ? `bg-green-200 shadow-green-300` : `bg-gray-300 shadow-slate-400`} ml-6 m-4 rounded-md`} key={index} onClick={() => handleClickOpen(item.portName)}>
                        <div className="flex justify-start items-center">
                            <img className="w-10 h-10 ml-2" src={auxOperadoraPng(item.chip.operadora)} alt="operadora" />
                        </div>
                        <div className="flex flex-col">
                            <div className="flex justify-end w-full">
                                <p className={`text-[10px] ${auxMsgVoid(item.portName)}`}>{item.portName}</p>
                            </div>
                            <div className="flex justify-center ml-3 mt-2 items-center">
                                {maskCell(item.chip.number)}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
  )
}

export default Chips;
