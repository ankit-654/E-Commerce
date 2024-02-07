import { useState } from 'react';
import React from 'react';
import Header from '../../Header'
import './Contact.css'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Layout from '../../Layout';
// import { Button, Col, ,Modal, Row } from "react-bootstrap";
export default function Contact(){
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 300,
        bgcolor: 'white',
        border: '.2px solid #000',
        borderRadius:2,
        boxShadow: 10,
        textAlign:"center",
        p: 2,
      };
    return(
        <>
        <Header/>
        <div className="container">
            <div className="container-grid">
                <div className='cn-grid-1'>
                  <div className='form-container'>
                    <label >FIRST NAME *<br/><input type="text" className='form-input-1'/></label>
                    <label >LAST NAME *<br/><input type="text"  className='form-input-1'/></label>
                  </div>
                  <div className='form-con-2' >
                     <label >EMAIL *<br/><input type="text"   className='form-input-2'/></label>
                  </div>
                  <div className='form-con-2' >
                     <label >MESSAGE *<br/><input type="text" className='form-input-2' /></label>
                  </div>
                  <div className='form-con-2'>
                     <label >ADDITIONAL DETAILS * <br/><textarea placeholder=' Please tell us....'></textarea></label>
                  </div>
                  <br/>
                  <div>
                     <button className='form-con-button' onClick={handleOpen}>SUBMIT</button>
                    
                  </div>
                </div>
                <div className='cn-grid-2'>
                    <div style={{margin:"0px 15px 15px"}}>
                        <h2> How Can We Help ?      </h2>
                            <p className='gd-2-para'>Please select a topic below related to your enquiry . If you dont find what you need , fill out our contact form.</p>
                        <label>Book a Demo</label>
                            <p>Request a demo from our conversation specialist. </p>
                        <label>Book a Demo</label>
                            <p>Request a demo from our conversation specialist. </p>
                        <label>Book a Demo</label>
                            <p>Request a demo from our conversation specialist. </p>
                    </div>
                </div>
               
            </div>
        </div>
        
        <div>
      {/* <button onClick={handleOpen}>Open modal</button> */}
      <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={style}>
          {/* <Typography id="keep-mounted-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography> */}
          <Typography id="keep-mounted-modal-description" sx={{ mt: 2 }}>
           Do You Want To Submit Your Query ?
           <button className='form-con-button'>Yes</button>
          </Typography>
        </Box>
      </Modal>
    </div>
    <Layout/>
        </>
    )
}