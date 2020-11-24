import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faThumbsUp, faSave, faSearch } from '@fortawesome/free-solid-svg-icons'
import styled, { keyframes } from "styled-components";
import { tada } from 'react-animations';
import DefaultImage from '../image/default-image.jpg'


const bounceAnimation = keyframes`${tada}`;

const List = styled.ul`
width:100%;
display:flex;
flex-wrap:wrap;
justify-content:space-around;
`
const ListItem = styled.li`
position:relative;
width:300px;
height:200px;
margin-bottom:25px;

&:hover .overlay{
visibility:visible;
opacity:1;
}
&:hover{
   
    box-shadow: 10px 5px 5px grey;
    border:3px solid green;
    animation: 2s ${bounceAnimation} ease-in-out;
}
cursor:zoom-in;
`
const Image = styled.img`
height:100%;
width:100%;
`
const Overlay = styled.div`
visibility:hidden;
opacity:0;
position:absolute;
background-color:rgba(0,0,0,0.7);
top:0;
left:0;
right:0;
bottom: 0;
transition-property:opacity;
transition-duration:0.3s;
`
const StatisticBlock = styled.div`
width:100%;
display:flex;
justify-content:center;
position:absolute;
bottom:5px;
`
const StatisticItem = styled.span`
font-size:0.8rem;
font-weight:600;
color:#fff;
&:not(:last-child){
    margin-right:10px;
}
`
const IcoView = styled.div`
position:absolute;
left:50%;
top:50%;
transform:translate(-50%,-50%);
`

export default function ImageListRender({ imagesArr, onGetLargeImg }) {
    return (
        <List>
            {imagesArr.map(({ id, webformatURL = DefaultImage, largeImageURL, tags, likes, views, downloads }) => (
                <ListItem key={id} onClick={() => onGetLargeImg(largeImageURL)}>
                    <Overlay className="overlay">
                        <IcoView> <FontAwesomeIcon icon={faSearch} color="green" size='3x' /></IcoView>
                        <StatisticBlock>
                            <StatisticItem><FontAwesomeIcon icon={faEye} color="green" /> {views}</StatisticItem>
                            <StatisticItem><FontAwesomeIcon icon={faThumbsUp} color="green" /> {likes}</StatisticItem>
                            <StatisticItem><FontAwesomeIcon icon={faSave} color="green" /> {downloads}</StatisticItem>
                        </StatisticBlock>
                    </Overlay>
                    <Image src={webformatURL} alt={tags} />
                </ListItem>
            ))}
        </List>
    )
}