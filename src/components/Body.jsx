

import React from "react"
import { Sidebar } from "./Sidebar"
import { Outlet } from "react-router-dom"
export const Body=()=>{
    return(
        <>
          <section className="grid grid-cols-12 ">
          <div className="col-span-1"><Sidebar/></div>
          <div className="col-span-10 ">    <Outlet/></div>
          </section>
       
        </>
    )
}