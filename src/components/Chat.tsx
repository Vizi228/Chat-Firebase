import { FC, useContext, useState } from "react"
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { Context } from '..';
import { collection, addDoc, serverTimestamp, orderBy, query } from "firebase/firestore";

import { Avatar, Button, Grid, TextField } from "@mui/material"
import { Container } from "@mui/system"

const Chat: FC = (): JSX.Element => {
    const { auth, firestore } = useContext(Context);
    const [user] = useAuthState(auth);
    const [inputValue, setInputValue] = useState('');
    const [messages] = useCollectionData(query(collection(firestore, 'messages'), orderBy('createdAt', 'asc')));
    const sendMessage = async () => {
        await addDoc(collection(firestore, 'messages'), {
            uid: user?.uid,
            displayName: user?.displayName,
            photoURL: user?.photoURL,
            text: inputValue,
            createdAt: serverTimestamp(),
        })
        setInputValue('')
    }
    return (
        <Container>
            <Grid
                container
                style={{ height: window.innerHeight - 50 }}
                alignItems={"center"}
                justifyContent={"center"}
            >
                <div style={{ width: '100%', height: '55vh', border: '1px solid gray', overflowY: 'auto' }}>
                    {messages?.map(message => (
                        <div key={message.createdAt} style={{
                            margin: 10,
                            backgroundColor: user && user.uid === message.uid ? 'blue' : 'green',
                            borderRadius: 10,
                            marginLeft: user && user.uid === message.uid ? 'auto' : '10px',
                            width: 'fit-content',
                            padding: 5,
                        }}>
                            <Grid container style={{ display: 'flex', alignItems: 'center', padding: 5 }}>
                                <Avatar src={message.photoURL} style={{}} />
                                <div >{message.displayName}</div>
                            </Grid>
                            <div >{message.text}</div>
                        </div>
                    ))}
                </div>
                <Grid container alignItems={"center"} justifyContent={"center"} direction={"column"}>
                    <TextField value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder={'Введите сообщение...'} fullWidth maxRows={2} multiline variant={'outlined'} />
                    <Button onClick={sendMessage}>Send</Button>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Chat