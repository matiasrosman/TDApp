"use client"

import * as React from "react"
import { Calendar } from "./_components/Calendar"
import "../styles/globals.css";

export default function CalendarDemo() {
  const [date, setDate] = React.useState<Date | undefined>(new Date())
  return (
    <html lang="en" >
       
     
       <body> 
        <header >
       <title> Calendario </title>
       <h1 className="titulo"> Calendario </h1>
       </header>
        <div className="Calendario">
          <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      className="rounded-md border"
      />
        </div>
      
    </body>   
    </html>
   
  
  )
}
