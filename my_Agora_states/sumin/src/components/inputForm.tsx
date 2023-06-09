import React, {useState , ComponentProps} from 'react';
import styled from 'styled-components';
import { dataList } from './dummyData';

const InputSection = styled.section`
    height: 600px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 20px;
`
const NameWrapper = styled.div`
    display: flex;
    flex-direction: row;
`

const TitleWrapper = styled.div`
    display: flex;
    flex-direction: row;
`

const QustionWrapper = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    > button {
        margin-top:20px;
        padding: 10px;
        width: 100px;
        height: 50px;
        background-color: rgb(133,114,104);
        color: rgb(255, 255, 255);
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 10px;
        box-shadow: rgba(255, 255, 255, 0.2) 3px 3px 6px 0px inset, 
        rgba(101, 83, 73, 0.5) -3px -3px 6px 1px inset;
        font-family: 'Fugaz One', cursive;
        font-size: 16px;
    }
`

type NewData = {
    id: string,
    createdAt: string,
    title: string,
    url: string,
    author: string,
    answer: null,
    bodyHTML: string,
    avatarUrl: string,
}

function InputForm() {

    const [name, setName] = useState("");
    const [title, setTitle] = useState("");
    const [question, setQuestion] = useState("");
    const [data, setData] = useState(dataList);

    const onChangeName  = (e:React.ChangeEvent<HTMLInputElement>) =>{
        setName(e.currentTarget.value)
    }
    const onChangeTitle = (e:React.ChangeEvent<HTMLInputElement>) =>{
        setTitle(e.target.value)
    }
    const onChangeQuestion = (e:React.ChangeEvent<HTMLTextAreaElement>) =>{
        setQuestion(e.target.value)
    }

    const onSubmitDiscussion = (e:React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault()
        const newData : NewData = {
            id: String(Date.now()),
            createdAt: JSON.stringify(new Date()),
            title: title,
            url: "https://google.com",
            author: name,
            answer: null,
            bodyHTML: question,
            avatarUrl: './icon.png',
        }
        const updatedData = [newData, ...data];

        setData(updatedData);

        setName('');
        setTitle('');
        setQuestion('');

    }

    // const dataListMap = data.map(discussion => {
    //     if (!discussion.answer){
    //         return {
    //             ...discussion,
    //         }
    //     }
        
    //     return{
    //         ...discussion,
    //         answer: {
    //             ...discussion.answer,
    //         }
            
    //     }
    // })

    return (
        <>
        <InputSection onSubmit={onSubmitDiscussion}>
            <NameWrapper>
                <label>✦ NAME ✦</label>
                <input 
                placeholder= 'write your name'
                value={name}
                onChange={onChangeName} />
            </NameWrapper>
            <TitleWrapper>
                <label>✦ TITLE ✦</label>
                <input 
                placeholder= 'write title'
                value={title}
                onChange={onChangeTitle} />
            </TitleWrapper>
            <QustionWrapper>
                <label>✦ QUESTION ✦</label>
                <textarea 
                placeholder= 'write question' 
                value={question}
                onChange={onChangeQuestion} />
                <button type='submit'>SUBMIT</button>
            </QustionWrapper>
        </InputSection>
        </>
    )
}

export default InputForm