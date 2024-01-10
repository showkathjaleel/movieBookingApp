"use client"
import React, { useState } from 'react'
import Seat from "@/components/Seat"


export default function Home() {
  const [selectedSeat, setSelectedSeat] = useState([])
  const [selectedSeatPrice, setSelectedSeatPrice] = useState(0)
  const handleSeatBooking = (seatNumber: string, seatPrice: any) => {
    console.log(seatNumber, 'seatNumberrr', seatPrice, 'seatPrice')
    console.log(selectedSeat, 'selectedSeat11111111111111')
    if (selectedSeat.includes(seatNumber)) {
      const updatedSelectedSeat = selectedSeat.filter((seat) => seat !== seatNumber);
      setSelectedSeat(updatedSelectedSeat);
    } else {
      setSelectedSeat([
        ...selectedSeat,
        seatNumber
      ])

      setSelectedSeatPrice(seatPrice)

    }
  }
  const seatArrangement = [
    {
      groupName: 'business', price: '250',
      rowDetails: [
        { rowNumber: 'A', seats: [{ seatName: 'A1', status: 'AVAILABLE' }, { seatName: 'A2', status: 'BOOKED' }, { seatName: 'A3', status: 'BOOKED' }, { seatName: 'A4', status: 'AVAILABLE' }, { seatName: 'A5', status: 'AVAILABLE' }] },
        { rowNumber: 'B', seats: [{ seatName: 'B1', status: 'BOOKED' }, { seatName: 'B2', status: 'BOOKED' }, { seatName: 'B3', status: 'BOOKED' }, { seatName: 'B4', status: 'AVAILABLE' }, { seatName: 'B5', status: 'AVAILABLE' }] }
      ]
    },
    {
      groupName: 'executive', price: '200',
      rowDetails: [
        { rowNumber: 'C', seats: [{ seatName: 'C1', status: 'AVAILABLE' }, { seatName: 'C2', status: 'BOOKED' }, { seatName: 'C3', status: 'BOOKED' }, { seatName: 'C4', status: 'AVAILABLE' }, { seatName: 'A5', status: 'AVAILABLE' }] },
        { rowNumber: 'D', seats: [{ seatName: 'D1', status: 'AVAILABLE' }, { seatName: 'D2', status: 'BOOKED' }, { seatName: 'D3', status: 'BOOKED' }, { seatName: 'D4', status: 'AVAILABLE' }, { seatName: 'A5', status: 'AVAILABLE' }] }
      ]
    }]
  return (
    <div className="p-2">
      {seatArrangement.map((group) => {
        console.log(group, 'rows')
        return (
          <div className="">
            <p className="font-bold">group: {group.groupName}</p>
            <p className="font-semibold">price:{group.price}</p>

            {group.rowDetails.map((row) => {
              console.log(row, 'row')
              return (
                <div className="flex">
                  <p className="m-2">{row.rowNumber}</p>
                  {row.seats.map((seat) => (
                    <Seat {...seat} selectedSeat={selectedSeat} handleSeatBooking={(seatNumber: any) => handleSeatBooking(seatNumber, group.price)} />
                  ))}
                </div>
              )
            })}


          </div>
        )
      })}

      {selectedSeat.length > 0 &&
        <button className='bg-pink-700'> Pay Rs{selectedSeatPrice}</button>}

    </div>

  )
}
