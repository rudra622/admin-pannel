import { useState } from "react";
import MainContant from "./component/main-contant/MainContant";
import Sidebar from "./component/sidebar/Sidebar";

import { FullScreen, useFullScreenHandle } from "react-full-screen";

function App() {
  const [show ,setShow]=useState(false)

  const handleSideBar=()=>{
    setShow(!show)
  }
  
  const handle = useFullScreenHandle();
  return (
    <>
    <FullScreen handle={handle} className="bg-white">
      <div className="d-flex">
        <Sidebar show={show}/>
        <MainContant handleSideBar={handleSideBar} className='col' handle={handle}/>
      </div>
    </FullScreen>
    </>
  );
}

export default App;
