

import React from "react"
import { Sidebar } from "./Sidebar"
import { Outlet } from "react-router-dom"
export const Body=()=>{
    return(
        <>
          <div className="flex gap-20">
          <Sidebar/>
          <Outlet/>
          </div>
       
        </>
    )
}