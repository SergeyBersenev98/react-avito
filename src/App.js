import React, { useState } from "react";
import './App.css';
import bg from './media/bg.jpeg'
function App() {

  const [file, setFile] = useState(null);
  const fileHandler = event => {
    console.log(event.target.files[0]);
    let reader = new FileReader();
    reader.onload = function(e) {
      setFile(e.target.result);
    };
    reader.readAsDataURL(event.target.files[0]);
  };

  function addHttpPicture () {
  setFile(document.getElementById('addHttp').value)
}
  
  function deletePicture () {
    const pic = document.getElementById('pic')
    pic.setAttribute('src', "")
    setFile(undefined)
    }
  
  function copyAsHtml () {
    let text = document.getElementById("textarea")
  
  function copyToClipboard() {
   let copytext = document.createElement('input')
   copytext.value = '<div style="background-color: #838383; text-align: center; padding-bottom: 3vh;"><h1 style="background-color: #300035; color: white;"><font size="6" color="white" face="Tahoma">Banner from Avito</font></h1><div style="margin-bottom: 3vh"><img src="https://clck.ru/UE2en" style="width: 30%"></img></div><div style="border: 1px #6d6d6d; color: white; solid; background-color: #6d6d6d; border-top: 0px; margin-bottom: 3vh; width: 30%; height: 55px; resize:none; height: 80px; margin-left: auto; margin-right: auto;"><font size="5" color="white" face="Tahoma">' + text.value + '</font></div></div>'
   document.body.appendChild(copytext)
   copytext.select()
   document.execCommand('copy')
   document.body.removeChild(copytext)
    }
    copyToClipboard(text.value)
  }
  
  function copyAsJson () {
    let text = document.getElementById("textarea")
    let arr = {
      pic: file,
      txt: text.value,
    }
  
  function copyToClipboard() {
   let copytext = document.createElement('input')
   copytext.value = JSON.stringify(arr)
   document.body.appendChild(copytext)
   copytext.select()
   document.execCommand('copy')
   document.body.removeChild(copytext)
    }
    copyToClipboard(text.value)  

  }
  return (
    <div className="App">
      <div className="bannerPage">
        <img src={bg} id="imgInp" className="back" alt="back"></img>
          <div className="banner">
            <div className="bannerHeader">
              Banner editor
            </div>
            <div className="actionsWithBanner">
              <div className="bannerButtons">
                <button><a href={file} download={file}>Copy png</a></button>
                <button onClick={copyAsHtml}>Copy as HTML</button>
                <button onClick={copyAsJson}>Copy as JSON</button>
              </div>
              <div className="previev">
                <div>
                  {file 
                  ? <div className="pictureAlreadyDownload">
                      <div>
                        <a className="lake" href="#" title="" alt="Click here to change" onClick={deletePicture}>
                        <img src={file} alt={""} id="pic"/></a>
                      </div>
                        <div className="block">fgdnfngf
                        </div>
                      </div>
                  : <div className="downloadPicture">
                      <input type="file" onChange={fileHandler} id="in"/>
                      <p>
                        Click on camera or paste URL:
                      </p>
                      <p>    
                        for exaple https://clck.ru/UE2en
                      </p>
                    <div className="string">
                      <input type="text" placeholder="Add URL here" id='addHttp'/>
                      <button className="addHttpPicture" onClick={addHttpPicture}>OK</button>
                    </div>
                  </div>}
                </div> 
                <textarea className="textarea" row="3" id="textarea" placeholder="Write here some text"></textarea>
              </div>  
            </div>
          </div>
        </div>
      </div>
    );
  }

export default App;
