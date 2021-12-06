import React from 'react';
import * as styled from './Gallery.styled';
import kotel from '../../../assets/img/kotel.png'
import piesel from '../../../assets/img/piesel.jpg'
import pieselwut from '../../../assets/img/pieselwut.png'

const Gallery: React.FC = () => {
    return (
        <styled.Container>
            <styled.Wrapper>
                <styled.CardContainer>
                    <styled.ImageConatiner>
                        <img style={{ width: '100%', height: '100%' }} src={kotel} alt="" />
                    </styled.ImageConatiner>
                    <styled.ImageConatiner>
                        <img style={{ width: '100%', height: '100%' }} src={piesel} alt="" />
                    </styled.ImageConatiner>
                    <styled.ImageConatiner>
                        <img style={{ width: '100%', height: '100%' }} src={pieselwut} alt="" />
                    </styled.ImageConatiner>
                </styled.CardContainer>
            </styled.Wrapper>
        </styled.Container>
    )
}

export default Gallery;