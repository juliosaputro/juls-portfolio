import React from 'react'
import styled from '@emotion/styled'
import { Typography, useMediaQuery } from '@mui/material'
import { useTheme } from "@mui/material/styles";

export default function Name() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'))
  return (
    <>
    {
        isMobile ?(
            <>
              <NameMobile>julio ricky saputro</NameMobile>
            </>
        ) : (
            <>
      <NameWeb>julio ricky saputro</NameWeb>
            </>
        )
    }
    </>
  )
}


const NameWeb = styled(Typography)({
    fontSize: '82px',
    fontWeight:900,
    fontFamily:'Roboto Condensed',
    color:'#445964',
    textTransform:'uppercase',
    textShadow: '-5px -5px 10px #ffffff73, 3px 3px 5px rgba(68, 89, 100, .6)'
})

const NameMobile = styled(Typography)({
    fontSize: '42px',
    fontWeight:900,
    fontFamily:'Roboto Condensed',
    color:'#445964',
    textTransform:'uppercase',
    textShadow: '-5px -5px 10px #ffffff73, 3px 3px 5px rgba(68, 89, 100, .6)'
})