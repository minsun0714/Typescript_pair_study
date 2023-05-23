import React, {useState} from 'react';
import styled from 'styled-components';
import InputForm from './inputForm';
import { dataListMap } from './dummyData';
import { Discussions } from './dummyData';

const DiscussionWrapper = styled.ul`
    /* background-color: rgb(2,114,104,0.2); */
    border-radius: 10px;
    width: 54rem;
    height: 600px;
    margin: 20px;
    padding: 20px;
`

const DiscussionContainer = styled.li`
    background-color: rgb(133,114,104);
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

function Discussion() {

    return (
        <>
            <DiscussionWrapper>
                <DiscussionContainer>
                    {dataListMap.map((data: Discussions) => <img src={data.avatarUrl}/>)}
                </DiscussionContainer>
            </DiscussionWrapper>
        </>
    )
}

export default Discussion