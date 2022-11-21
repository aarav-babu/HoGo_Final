import React, { useEffect } from 'react';
import { useState } from 'react';
// import NavBar from './components/navbar/navbar';
// import './Homeowner.css';
import { Button, Col, Container, Stack, Alert, Card } from 'react-bootstrap';
// import axios from 'axios';
import firebase from 'firebase/compat/app';
import AuthGoogle from './AuthGoogle';
import { io } from 'socket.io-client';
import Notification from './notification.svg'
import Messages from '../Messages';
import MessageInput from '../MessageInput';

const firebaseConfig = {
  apiKey: 'AIzaSyApGu9ocnsTuj8lPsmB7hsD0KVAz8E0OY8',
  authDomain: 'seproj-b3304.firebaseapp.com',
  projectId: 'seproj-b3304',
  storageBucket: 'seproj-b3304.appspot.com',
  messagingSenderId: '42172049653',
  appId: '1:42172049653:web:cddc7902753e3ba3343dbc',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function Homeowner() {
  const [vals, setVals] = useState({
    name: '',
    phno: '',
    apno: '',
  });
  const [val, setVal] = useState({
    name: '',
    phno: '',
    apno: '',
  });

  // const handleSearch = async () => {
  //   axios.get(`http://127.0.0.1:4000/search/44a`).then((response) => {
  //     val.phno = response.data[0].phno;
  //     console.log(val.phno);
  //   });
  // };

  const [socket, setSocket] = useState(null);

  useEffect(() => {
    setSocket(io('http://localhost:3001'));
    console.log(socket);
  }, [val.apno]);

  useEffect(() => {
    socket?.emit('newUser', val.apno);
  }, [socket, val.apno]);

// function usehandleThis(){
//     setSocket(io('http://localhost:3001'));
//     socket?.emit('newUser', val.apno);
//   }

  // const [entries, setEntries] = useState([]);

  useEffect(() => {
    const newSocket = io(`http://${window.location.hostname}:3001`);
    setSocket(newSocket);
    return () => newSocket.close();
  }, [setSocket]);

  // useEffect(() => {
  //   socket?.on('entryAlert', (data) => {
  //     setEntries((prev) => [...prev, data]);
  //   });
  // }, [socket]);

  // const displayEntries = ({ senderHno,senderName, senderAgency, senderPurpose }) => {
    
  //     if(senderHno===val.apno){
  //       return(
  //     <Container>
  //       <Card> 
  //       <span className="mainline">{`Hey ${val.name} ${senderName} from ${senderAgency} wants permission for ${senderPurpose}`}</span>
  //       <Button
  //         variant="success"
  //         onClick={() => {
  //           handleDecisison('accept', senderName);
  //         }}
  //       >
  //         Accept
  //       </Button>
  //       <Button
  //         variant="danger"
  //         onClick={() => {
  //           handleDecisison('deny', senderName);
  //         }}
  //       >
  //         Deny
  //       </Button>
  //       </Card>
  //     </Container>
  //     )}
  // };

  // const handleDecisison = (answer,senderName) => {
  //   socket?.emit('aorD', {
  //     resAnswer: answer,
  //     resApartno: val.apno,
  //     resReciever: senderName,
  //   });
  //   socket?.emit("hello",{message:"Sup my G"});
  // };

  // const [open, setOpen] = useState(false);
  // const handleRead=()=>{
  //   setEntries([]);
  //   setOpen(false);
  // }

  const inputEvent = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setVals((preValue) => {
      if (name === 'apno') {
        return {
          apno: value,
          name: preValue.name,
        };
      } else {
        return {
          apno: preValue.apno,
          name: value,
        };
      }
    });
    // console.log(name,value);
  };
  // console.log(entries);

  // useEffect(() => {
  //   setFlag(false)
  // }, [])

  const [flag,setFlag]=useState(true);
  return (
    <Container fluid className="container">
      {val.apno ? (
      //   <Container className="entrance">
      //     {/* <NavBar /> */}
      //     {/* <AuthGoogle auth={firebase.auth()} /> */}
      //     <Card>
      //     <div className="icon" onClick={() => setOpen(!open)}>
      //     <img src={Notification} className="iconImg" alt="" />
      //     {
      //       entries.length >0 &&
      //       <div className="counter">{entries.length}</div>
      //     }
      //   </div>
      //   </Card>
      //   {open && (
      //   <Container className="notifications">
      //      <Card>{entries.map((n) => displayEntries(n))};</Card>
      //     <Button variant="Primary" className="nButton" onClick={handleRead}> Mark as read</Button>
      //   </Container>
      // )}
      //   </Container>
      // <div> 
      <Container>
      <br></br>  
      <br></br>  
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <AuthGoogle auth={firebase.auth()} /> 
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      {/* setFlag(false); */}
      
      <Card className="bg-dark text-white">
        <Card.Title>{val.apno}</Card.Title>
        <Card.Body>Hello {val.name} please chat with person requesting for entry </Card.Body>
      </Card>
       {socket ? (
        <div className="chat-container">
          <Messages socket={socket} />
          <MessageInput socket={socket} />
        </div>
      ) : (
        <div>Not Connected</div>
      )
} 
      </Container>
      ) : (
        <Container className="entrance">
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <Card>
          <Card.Title>Please Fill Your Details</Card.Title>  
          {/* <NavBar /> */}
          <Col>
            <Stack gap={3}>
              <input
                type="text"
                name="apno"
                placeholder="Please enter your apartment no"
                onChange={inputEvent}
                value={vals.apno}
                autoComplete="Off"
              />
              <input
                type="text"
                name="name"
                placeholder="Please enter your name"
                onChange={inputEvent}
                value={vals.name}
                autoComplete="Off"
              />
            </Stack>
            <Button
              variant="primary"
              type="submit"
              onClick={() => {
                setVal(vals);
                // usehandleThis();
              }}
            >
              Submit
            </Button>
          </Col>
          </Card>
        </Container>
      )}
    </Container>
  );
}
export default Homeowner;
