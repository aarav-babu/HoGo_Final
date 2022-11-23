import React from 'react';
import { useEffect, useState } from 'react';
import { Container, Col, Stack, Button,Card } from 'react-bootstrap';
// import './Gateentry.css';
// import NavBar from './components/navbar/navbar';
import Plate from './Plate';
import { io } from 'socket.io-client';
import Notification from './notification.svg'
import Messages from '../Messages';
import MessageInput from '../MessageInput';

function Gateentry() {
  const [vals, setVals] = useState({
    ename: "",
    agency: "",
    purpose: "",
    houseno: "",
  });
  const [val, setVal] = useState({
    ename: "",
    agency: "",
    purpose: "",
    houseno: "",
  });

  const [socket, setSocket] = useState(null);
  useEffect(() => {
    const newSocket = io(`http://${window.location.hostname}:3001`);
    setSocket(newSocket);
    return () => newSocket.close();
  }, [setSocket]);
  
  // useEffect(() => {
  //   setSocket(io('http://localhost:3001'));
  //   console.log(socket);
  // }, [val.ename]);

  // useEffect(() => {
  //   socket?.emit('newUser', val.ename);
  //   socket?.emit("hello",{message:"New user from gateentry"});
  // }, [socket, val.ename]);

  // const onSubmits = () => {
  //   socket?.emit('sendHome', {
  //     senderName: val.ename,
  //     senderAgency: val.agency,
  //     senderPurpose: val.purpose,
  //     senderHno: val.houseno,
  //   });
  //   socket?.emit("hello",{message:` Hey ${val.ename} from ${val.agency} `});
  // };

  // const [response, setResponse] = useState([]);

  // useEffect(() => {
  //   socket?.on('recieveAns', (data) => {
  //     setResponse((prev) => [...prev, data]);
  //   });
  // }, [socket]);

  // const displayAord = ({ resReceiver, resAnswer, resApartno }) => {
  //   if(resReceiver===val.ename){
  //   if (resAnswer === 'accept') {
  //     return (
  //       <span>
  //         `Hey ${val.ename} you have been granted permission to enter by owner
  //         of flatno:${resApartno}`
  //       </span>
  //     );
  //   } else {
  //     return (
  //       <span> `Hey the owner of flatno:${resApartno} has denied your entry`</span>
  //     );
  //   }
  // }
  // };

  const inputEvent = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setVals((preValue) => {
      if (name === 'ename') {
        return {
          ename: value,
          agency: preValue.agency,
          purpose: preValue.purpose,
          houseno: preValue.houseno,
        };
      } else if (name === 'agency') {
        return {
          ename: preValue.ename,
          agency: value,
          purpose: preValue.purpose,
          houseno: preValue.houseno,
        };
      } else if (name === 'purpose') {
        return {
          ename: preValue.ename,
          agency: preValue.agency,
          purpose: value,
          houseno: preValue.houseno,
        };
      } else {
        return {
          ename: preValue.ename,
          agency: preValue.agency,
          purpose: preValue.purpose,
          houseno: value,
        };
      }
    });
  };

  // const [open, setOpen] = useState(false);

  // const handleRead=()=>{
  //   setResponse([]);
  //   setOpen(false);
  // }

  return (
    <Container fluid className="container">
      {val.ename ? (
        <Container>
          {/* <NavBar /> */}
          <Plate dataFromParent={val.ename} />
         {/* <Card>
          <div className="icon" onClick={() => setOpen(!open)}>
          <img src={Notification} className="iconImg" alt="" />
          {
            response.length >0 &&
            <div className="counter">{response.length}</div>
          }
        </div>
        </Card>
        {open && (
        <Container className="notifications">
           <Card>{response.map((n) => displayAord(n))};</Card>
          <Button variant="Primary" className="nButton" onClick={handleRead}> Mark as read</Button>
        </Container>
      )} */}
      <br></br>
      <br></br>
      <br></br>
      <Card className="bg-dark text-white">
        <Card.Title>{val.ename}</Card.Title>
        <Card.Body>Hello {val.ename} please chat with owner of {val.houseno}</Card.Body> 
        </Card>  
       { socket ? (
        <div className="chat-container">
          <Messages socket={socket} />
          <MessageInput socket={socket} />
        </div>
      ) : (
        <div>Not Connected</div>
      )}
     
        </Container>
      ) : (
        <Container fluid className="entrance" sm={{ span: 10, offset: 1 }}>
          
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <Card>
          <Card.Title>Hello Please Enter Your Details</Card.Title>  
          <Col>
            {/* <NavBar /> */}
            <Stack gap={3}>
              <input
                type="text"
                name="ename"
                placeholder="Enter Your Name"
                onChange={inputEvent}
                value={vals.ename}
                autoComplete="off"
              />
              <input
                type="text"
                name="agency"
                placeholder="Enter Your Agency"
                onChange={inputEvent}
                value={vals.agency}
                autoComplete="off"
              />
              <input
                type="text"
                name="purpose"
                placeholder="Enter Your Purpose"
                onChange={inputEvent}
                value={vals.purpose}
                autoComplete="off"
              />
              {/* <input
                type="text"
                name="houseno"
                placeholder="Enter Your Houseno"
                onChange={inputEvent}
                value={vals.houseno}
                autoComplete="off"
              /> */}
               <select placeholder='Please enter your House no' name="houseno" onChange={inputEvent}>
               <option value="44A">44A</option> 
               <option value="44B">44B</option> 
               <option value="34A">34A</option> 
               <option value="34B">34B</option> 
               <option value="24A">24A</option> 
               <option value="24B">24B</option> 
              </select>
            </Stack>
            <Button
              variant="primary"
              type="submit"
              onClick={() => {
                setVal(vals);
                // onSubmits();
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
export default Gateentry;
