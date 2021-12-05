import React, { useState } from 'react';
import * as styled from './PersonalDescription.styled';
import blob1 from '../../../assets/img/blob1.svg';
import face from '../../../assets/img/face.svg';
import blob2 from '../../../assets/img/Vector.svg';
import { motion } from 'framer-motion';


const PersonalDescription: React.FC = () => {

    const [styleBlob, setStyleBlob] = useState<boolean>(false) 

    return (
        <>
            <styled.Container>
                <styled.CardContainer
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                        duration: 1
                    }}
                    onAnimationStart = {() => setStyleBlob(true)}
                >
                    <styled.ImageContainer>
                        <img style={{ width: '100%' }} src={face} alt="" />
                    </styled.ImageContainer>
                    <styled.TextContainer>
                        <styled.HeaderContainer>
                            <styled.Header>
                                Some information about me
                            </styled.Header>
                        </styled.HeaderContainer>
                        <styled.DescriptionContainer>
                            <styled.Description>
                                I'm Damian, my hobby is programming web applications. I have been nurturing my passion for several years. On a daily basis I study computer science.
                                Besides I am interested in electronics and mechanics.
                            </styled.Description>
                        </styled.DescriptionContainer>
                    </styled.TextContainer>
                </styled.CardContainer>
                {styleBlob && <styled.BlobContainer>
                    <motion.img 
                    initial = {{opacity: 0}}
                    animate = {{opacity: 1}}
                    transition = {{ delay: 0.5, duration: 1}}
                    src={blob1} 
                    alt="" />
                </styled.BlobContainer>}
            </styled.Container>
        </>
    )
}

export default PersonalDescription;