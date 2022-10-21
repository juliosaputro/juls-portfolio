import React from 'react'
import styled from '@emotion/styled'
import ReactIcon from '../assets/icons/REACT.png'

export default function CardSkill() {
  return (
    <CardContainer>
        <BoxCard>
            <ImageCard src={ReactIcon}/>
        </BoxCard>
    </CardContainer>
  )
}

const CardContainer = styled('div') ({
    position:'relative',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    flexWrap:'wrap',
    width:'1200px',
    transformStyle:'preserve-3d',
    ":before":{
        // content:'React',
        position:'absolute',
        top:'20px',
        left:'20px',
        fontSize:'6em',
        fontWeight:'900',
        color:'#fff',
        opacity:0
    }  
})

const BoxCard = styled('div')({
    position:'relative',
    justifyContent:'center',
    alignItems:'center',
    display:'flex',
    width:'200px',
    height:'200px',
    margin:'40px',
    background:'#fff',
    borderRadius:'20px',
    ":before":{
        // content:'React',
        position:'absolute',
        top:'20px',
        left:'20px',
        fontSize:'6em',
        fontWeight:'900',
        color:'#fff',
        opacity:0
    },
    ":after":{

    }
})

const ImageCard = styled('img')({
    width:'150px',
    height:'150px'
})