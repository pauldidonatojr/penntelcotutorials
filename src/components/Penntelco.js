import React, { useState } from 'react'
import styled from 'styled-components'
import { links, social } from '../utils/data'
const DownloadLink = styled.a`
 cursor: pointer;
 font-size: 2rem;

 @media only screen and (max-width: 576px) {
  font-size: 1.25rem;
 }
`

const Overlay2 = styled.div`
 position: fixed;
 top: 0;
 left: 0;
 width: 100%;
 height: 100%;
 background-color: rgba(0, 0, 0, 0.5);
 display: flex;
 justify-content: center;
 align-items: center;
`

const Modal = styled.div`
 background-color: white;
 padding: 20px;
`

const Overlay = styled.div`
 position: fixed;
 top: 0;
 left: 0;
 bottom: 0;
 right: 0;
 z-index: 9999;
 background-color: rgba(0, 0, 0, 0.5);
`

const PdfContainer = styled.div`
 position: absolute;
 top: 50%;
 left: 50%;
 transform: translate(-50%, -50%);
 width: 80%;
 height: 80%;
 background-color: white;
 padding: 2rem;
 overflow-y: auto;
`

const CloseButton = styled.button`
 position: absolute;
 top: 1rem;
 right: 1rem;
`

const Link = styled.a`
 cursor: pointer;
 font-size: 2rem;
 @media only screen and (max-width: 576px) {
  font-size: 1.2rem;
 }
`

const Wrapper = styled.div`
 background: none repeat scroll 0 0 #ffffff;
 box-shadow: 0 5px 5px 5px #cccccc;

 .box {
  height: 100vh;
 }

 .content {
  p {
   font-size: 15px;
   line-height: 1.5;
   color: #333333;
   margin-bottom: 1em;
  }
 }

 /* Small devices (phones, 576px and below) */
 @media only screen and (max-width: 576px) {
  .box {
   transition: var(--transition);
   font-size: 1.2rem;
   height: 800px;
   width: 355px;
   max-width: 800px;
   font-weight: 500px;
   margin: 0 auto;
   text-align: center;
   position: relative;
   display: grid;
   overflow: hidden;
   justify-content: center;
   align-items: center;
  }

  .content {
   p {
    font-size: 12px;
    line-height: 2.2;
   }
  }
 }

 /* Medium devices (tablets, 768px and below) */
 @media only screen and (min-width: 577px) and (max-width: 768px) {
  .box {
  }

  .content {
   p {
    font-size: 16px;
   }
  }
 }

 /* Large devices (desktops, 992px and below) */
 @media only screen and (min-width: 769px) and (max-width: 992px) {
  .box {
   display: grid;
   justify-content: center;
   align-items: center;
   text-align: center;
  }

  .content {
   p {
    font-size: 18px;
   }
  }
 }

 /* Extra large devices (large desktops, 1200px and below) */
 @media only screen and (min-width: 993px) {
  .box {
   display: grid;
   justify-content: center;
   align-items: center;
   text-align: center;
  }

  .content {
   p {
    font-size: 20px;
   }
  }
 }
`
function PennTelco() {
 const [showOverlay, setShowOverlay] = useState(false)
 const [showOverlay2, setShowOverlay2] = useState(false)
 const [pdfUrl, setPdfUrl] = useState('')

 const handleClick = (e) => {
  e.preventDefault()
  setShowOverlay(true)
  setPdfUrl(e.target.href)
 }
 const handleDownloadClick = () => {
  setShowOverlay2(true)
 }
 const handleConfirmDownload = () => {
  window.location.href =
   'https://github.com/sangoma/desktop-softphone/releases/download/v3.9.1/Sangoma-Phone-3.9.1-win-x64.exe'
  setShowOverlay2(false)
 }

 const handleCancelDownload = () => {
  setShowOverlay2(false)
 }
 return (
  <>
   <Wrapper>
    <div class="box">
     <div class="content">
      <h2 style={{ textDecoration: 'underline' }}>Tutorials</h2>
      <p>
       Explore all the resources you need to learn about PennTelco products.
       Below, you will find a list of tutorials tailored to the specific product
       you have set up with PennTelco. For instance, if you require assistance
       with setting up your Sangoma Softphone, you can access a comprehensive
       video tutorial that will guide you through every step of the installation
       process and help you log in.
      </p>{' '}
      <p>
       If you need any further assistance beyond our tutorials, please don't
       hesitate to contact us at <b>support@penntelco.com</b>. We strive to
       respond quickly to our customers, and we'll make sure to address any
       issues immediately upon receiving your message. Thank you for choosing
       PennTelco – we're here to help you every step of the way
      </p>
     </div>
     {showOverlay && (
      <Overlay>
       <PdfContainer>
        <CloseButton onClick={() => setShowOverlay(false)}>Close</CloseButton>
        <iframe src={pdfUrl} width="100%" height="100%" title="pdf-iframe" />
       </PdfContainer>
      </Overlay>
     )}
     <p>
      <DownloadLink onClick={handleDownloadClick}>
       Download Softphone
      </DownloadLink>
      {showOverlay2 && (
       <Overlay2>
        <Modal>
         <p>You are about to download Sangoma Desktop Softphone</p>
         <button onClick={handleConfirmDownload}>Download</button>
         <button onClick={handleCancelDownload}>Cancel</button>
        </Modal>
       </Overlay2>
      )}
      <br />
      <Link
       href="https://www.penntelco.com/downloads/How%20to%20install%20Sangoma%20Connect%20Mobile.pdf"
       onClick={handleClick}
      >
       Installing Sangoma Phone (mobile)
      </Link>
      <br />
      <Link
       href="https://www.penntelco.com/downloads/How%20to%20install%20Sangoma%20Connect%20Desktop.pdf"
       onClick={handleClick}
      >
       Installing Sangoma Phone (desktop)
      </Link>
      <br />
      <Link
       href="https://www.penntelco.com/downloads/How%20To%20Call%20Internationally.pdf"
       onClick={handleClick}
      >
       Calling Internationally
      </Link>
      <Link
       href=" https://www.penntelco.com/downloads/sangomavid.webm"
       onClick={handleClick}
      >
       {' '}
       <br />
       Video for Sangoma Phone Desktop
      </Link>

      <br />
     </p>
    </div>

    <div id="footer">
     <div class="footer-content">
      <div class="footer-box">
       <h4>Quick Links</h4>

       <ul>
        <li>Service pricing</li>
        <li>
         <a href="tos.html">Terms of Service</a>
        </li>
       </ul>
      </div>

      <div class="footer-box">
       <h4>Partner sites</h4>
       <ul>
        <li>
         <a href="http://www.richmondcomputer.com">Richmond Computer</a>
        </li>
        <li>
         <a
          href="http://www.grandstream.com"
          title="Grandstream VOIP phones"
          target="_blank"
         >
          Grandstream Telephones
         </a>
        </li>
        <li>
         <a
          href="http://www.yealink.com"
          title="Yealink voip equipment hardware"
          target="_blank"
         >
          Yealink Telephones
         </a>
        </li>
        <li>
         <a
          href="http://www.fast.com"
          title="test your network speed"
          target="_blank"
         >
          Test your network speed
         </a>
        </li>
       </ul>
      </div>

      <div class="footer-box end-footer-box">
       <h4>Contact Us</h4>
       <p>
        1515 Market Street
        <br />
        Suite 1200
        <br />
        Philadelphia, PA 19102
        <br />
        215.634.2997
        <br />
        Bucks County: 215.359.4160
        <br />
        Lancaster County: 717.316.TECH
        <br />
        Toll Free: 866.TAP.0.PTC (866.827.0782)
        <br />
        sales@penntelco.com
       </p>
      </div>

      <div class="clear"></div>
     </div>
     <div id="footer-links">
      <p>&copy; JAWK Enterprises, LLC 2020.</p>{' '}
     </div>
    </div>
   </Wrapper>
  </>
 )
}

export default PennTelco
