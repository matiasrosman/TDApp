"use client"

import * as React from "react"
import { Calendar } from "./_components/Calendar"

export default function CalendarDemo() {
  const [date, setDate] = React.useState<Date | undefined>(new Date())
  return (
    
        <div className="Calendario">
          <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      className="rounded-md border"
      />
        </div>
      
  )
}
