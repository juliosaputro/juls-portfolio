import React from 'react'
import styled from '@emotion/styled'
import {Button, useMediaQuery} from '@mui/material'
import { useTheme } from "@mui/material/styles";

export default function ButtonPrimary() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'))

  return (
    <>
    {
        isMobile ? (
            <>
            <ButtonMobile>
                Contact Me
            </ButtonMobile>
            </>
        ):(
            <>
            <ButtonWeb>
            Contact Me
            </ButtonWeb>
            </>
        )
    }
    </>
    
  )
}


const ButtonWeb = styled(Button)({
    width:'310px',
    position:'relative',
    display:'inline-block',
    padding:'10px 30px',
    textDecoration:'none',
    textTransform:'uppercase',
    fontWeight:700,
    letterSpacing:'2px',
    fontSize:'18px',
    borderRadius:'40px',
    boxShadow:'-3px -3px 7px #ffffff73, 3px 3px 5px rgba(94, 104, 121, .288)',
})

const ButtonMobile = styled(Button)({
    width:'210px',
    position:'relative',
    display:'inline-block',
    padding:'10px 30px',
    textDecoration:'none',
    textTransform:'uppercase',
    fontWeight:700,
    letterSpacing:'2px',
    fontSize:'18px',
    borderRadius:'40px',
    boxShadow:'-3px -3px 7px #ffffff73, 3px 3px 5px rgba(94, 104, 121, .288)',
})