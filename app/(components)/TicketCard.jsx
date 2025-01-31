import React from 'react'
import DeleteBlock from './DeleteBlock'
import PriorityDisplay from './PriorityDisplay'
import ProgressDisplay from './ProgressDisplay'
import StatusDisplay from './StatusDisplay'

function TicketCard() {
  return (
      <div className="flex flex-col bg-card hover:bg-card-hover rounded-md p-3 shadow-lg m-2">
          <div className="flex mb-3 flex-row justify-between items-center">
              <PriorityDisplay />
              <div className="ml-auto">
              <DeleteBlock />
              </div>
          </div>
          <h4>Ticket Title</h4>
          <hr className="h-px border-0 bg-page mb-2" />
          <p className="whitespace-pre-wrap">This is the description of the ticket</p>
          <div className="flex-grow"></div>
          <div className="flex mt-2">
          <div className="flex flex-col">
            <p className="text-xs my-1">08/31/23 10:43 PM</p>
                  <ProgressDisplay />
              </div>
              <div className="ml-auto flex items-end">
                  <StatusDisplay />
                  </div>
              </div>
    </div>
  )
}

export default TicketCard
