"use client"

// const Seat = ({ seatName, status, selectedSeat, setSelectedSeat }: any) => {
    const Seat = ({ seatName, status,selectedSeat, handleSeatBooking }: any) => {

    console.log(selectedSeat, 'hjhhh')
    return (
        <>
            {status === "BOOKED" ?
                <div className="w-10 h-10 bg-gray-300 m-2 ">
                    <p className="text-white text-center ">{seatName}</p>
                </div>
                :
                selectedSeat.includes(seatName) ?
                    <div className="w-10 h-10 m-2 bg-green-900" onClick={() => handleSeatBooking(seatName)} >
                        <p className="text-white text-center ">{seatName}</p>
                    </div> :
                    <div className="w-10 h-10   bg-green-500 m-2" onClick={() => handleSeatBooking(seatName)}>
                        <p className="text-white text-center ">{seatName}</p>
                    </div>
            }
        </>
    )
}

export default Seat