import React, {useState} from 'react';
import styled from 'styled-components';
import InputForm from './inputForm';
import { dataListMap } from './dummyData';
import { Discussions } from './dummyData';

const DiscussionWrapper = styled.div`
    /* background-color: rgb(2,114,104,0.2); */
    border-radius: 10px;
    width: 54rem;
    height: 600px;
    margin: 20px;
    padding: 20px;
`

const DiscussionContainer = styled.ul`
    /* background-color: rgb(133,114,104);
    border-radius: 10px;
    width: 32%;
    height: 185px;
    padding: 15px;
    margin-bottom: 13px;
    display: flex;
    flex-direction: column;
    box-shadow: rgba(255, 255, 255, 0.235) 3px 3px 6px 0px inset, 
    rgba(101, 83, 73, 0.5) -3px -3px 6px 1px inset;
    transition-duration: 0.5s; */
`
const AvatarAnswered = styled.li`
    border: black 1px solid;
    margin-bottom: 10px;
    background-color: rgb(255, 255, 255);
    border-radius: 10px;
    width: 32%;
    height: 185px;
    padding: 15px;
    margin-bottom: 13px;
    display: flex;
    flex-direction: column;
    box-shadow: rgba(255, 255, 255, 0.235) 3px 3px 6px 0px inset, 
    rgba(101, 83, 73, 0.5) -3px -3px 6px 1px inset;
    transition-duration: 0.5s;
`

const ImgStyle = styled.img`
    height: 50px;
    width: 50px;
    border-radius: 50%;
`

const Answered = styled.div`
background-color: #9cbdbd;
display: flex;
flex-direction: row;
justify-content: space-between;
`

function Discussion() {

     return (
        <>
            <DiscussionWrapper > 
                <DiscussionContainer>
                    {dataListMap.map((data: Discussions, index) => (
                        <AvatarAnswered key={index}>
                            <Answered>
                                <p><ImgStyle src={data.avatarUrl} /></p>
                                <p>{data.answer? '✦' : '✧'}</p>
                            </Answered>
                            <p>{data.title}</p>
                            <p>{data.author}/{data.createdAt}</p>
                        </AvatarAnswered>
                    ))}
                </DiscussionContainer>
            </DiscussionWrapper>
        </>
    )
}

export default Discussion