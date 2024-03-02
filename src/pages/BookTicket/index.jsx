import Chair from "views/booking/Chair";
import CoupleChair from "views/booking/CoupleChair";

import React from 'react'
import { useState } from 'react'

const data = [
    {
        idCinema: 'Cinema1',
        logo: "https://s3-alpha-sig.figma.com/img/3112/bfa1/a3a4337c36f6bd2bfc476abff4da69e0?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jfakF-eyeLPlbEPkD3mfULTmahHGxH4-5TSFTO8Fsxg0OOatiLpIPWeISIi4kqlD5mKz22eYvzwem0SzFyhRP5O0jRJ~bkPZJ0vkVfaq~ivM4ktjp-WDpNIbuh29IV4L6ydoJdGi3nLWqVQ4xNpIABkdDb9mcnT2~jfynH7IQl1~HjErXEZWvjU996gLbBhT1TgPuffnY5r0afYRNBFSI93qB~L6ukwsskwZ0Bq653-6LQvTbtWtNHaBJwAEXPR5ShQhx9J4RHAmEf3UaOSv25F4Ncz4RcnGdPsQwfICU1LY9SieQq-gCky-6fMVMnrttV64NfenwebqfQCjGnAjQw__",
        NameCinema: 'CGV Vincom Trần Duy Hưng'
    },
    {
        idFilm: 'Film1',
        NameFilm: 'Xứ sở các nguyên tố',
        ImgFilm: "https://s3-alpha-sig.figma.com/img/9ac3/e245/56a81bb7940147701a3fc5172296b0a7?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lz2zlEhgTnG9LdpF-zmN6ApYpxJLFS-dvCnqjlLmhBgGy4ansd4AxRaSobFV-yts0pbroQeVeGGA8lyXiyF~XaMo61syaJNKE5LCtTHMQdrhYdyzjE4Um8mlShIpIi6JMzOO5s50dz-yrT-PPqQ34D~0CVBjzix~joAsAIvd8FetoGLvqih6CGycafZbHTHmx2SPT0kPOoIXPkna8IOmelb3BQLCIgNDxjfUGOS-2joy4uSWTBohASEBJ3ZdWvt4IF6o87MNbt0RRcduqv0tGT9Po1WLlrzbVQY6Ae5DQeRCqqIPWSKoPyButr6uzpeP1Gbujh6yx3yULf3bP4hcEg__",
        CategoryFilm: 'Gia đình , Hoạt hình',
        TimeFilm: '109',
        ShowDate: '15/02/2024',
        ScreeningRate: '19:00',
        Room: 'P1'
    },
    {
        Chairs: [
            {
                idChair: 'A1',
                isChecked: false,
                priceChair: '100.000'
            },
            {
                idChair: 'A2',
                isChecked: false,
                priceChair: '100.000'
            },
            {
                idChair: 'A3',
                isChecked: false,
                priceChair: '100.000'
            },
            {
                idChair: 'A4',
                isChecked: false,
                priceChair: '100.000'
            },
            {
                idChair: 'A5',
                isChecked: false,
                priceChair: '100.000'
            },
            {
                idChair: 'A6',
                isChecked: false,
                priceChair: '100.000'
            },
            {
                idChair: 'A7',
                isChecked: false,
                priceChair: '100.000'
            },
            {
                idChair: 'A8',
                isChecked: false,
                priceChair: '100.000'
            },
            {
                idChair: 'A9',
                isChecked: false,
                priceChair: '100.000'
            },
            {
                idChair: 'A10',
                isChecked: false,
                priceChair: '100.000'
            },
            {
                idChair: 'A11',
                isChecked: false,
                priceChair: '100.000'
            },
            {
                idChair: 'A12',
                isChecked: false,
                priceChair: '100.000'
            },
            {
                idChair: 'A13',
                isChecked: false,
                priceChair: '100.000'
            },
            {
                idChair: 'A14',
                isChecked: false,
                priceChair: '100.000'
            },
            {
                idChair: 'A15',
                isChecked: false,
                priceChair: '100.000'
            },
            {
                idChair: 'B1',
                isChecked: false,
                priceChair: '100.000'
            },
            {
                idChair: 'B2',
                isChecked: false,
                priceChair: '100.000'
            },
            {
                idChair: 'B3',
                isChecked: false,
                priceChair: '100.000'
            },
            {
                idChair: 'B4',
                isChecked: false,
                priceChair: '100.000'
            },
            {
                idChair: 'B5',
                isChecked: true,
                priceChair: '100.000'
            },
            {
                idChair: 'B6',
                isChecked: false,
                priceChair: '100.000'
            },
            {
                idChair: 'B7',
                isChecked: false,
                priceChair: '100.000'
            },
            {
                idChair: 'B8',
                isChecked: false,
                priceChair: '100.000'
            },
            {
                idChair: 'B9',
                isChecked: false,
                priceChair: '100.000'
            },
            {
                idChair: 'B10',
                isChecked: false,
                priceChair: '100.000'
            },
            {
                idChair: 'B11',
                isChecked: false,
                priceChair: '100.000'
            },
            {
                idChair: 'B12',
                isChecked: false,
                priceChair: '100.000'
            },
            {
                idChair: 'B13',
                isChecked: false,
                priceChair: '100.000'
            },
            {
                idChair: 'B14',
                isChecked: false,
                priceChair: '100.000'
            },
            {
                idChair: 'B15',
                isChecked: false,
                priceChair: '100.000'
            },
            {
                idChair: 'C1',
                isChecked: false,
                priceChair: '100.000'
            },
            {
                idChair: 'C2',
                isChecked: false,
                priceChair: '100.000'
            },
            {
                idChair: 'C3',
                isChecked: false,
                priceChair: '100.000'
            },
            {
                idChair: 'C4',
                isChecked: false,
                priceChair: '100.000'
            },
            {
                idChair: 'C5',
                isChecked: false,
                priceChair: '100.000'
            },
            {
                idChair: 'C6',
                isChecked: false,
                priceChair: '100.000'
            },
            {
                idChair: 'C7',
                isChecked: false,
                priceChair: '100.000'
            },
            {
                idChair: 'C8',
                isChecked: false,
                priceChair: '100.000'
            },
            {
                idChair: 'C9',
                isChecked: false,
                priceChair: '100.000'
            },
            {
                idChair: 'C10',
                isChecked: false,
                priceChair: '100.000'
            },
            {
                idChair: 'C11',
                isChecked: false,
                priceChair: '100.000'
            },
            {
                idChair: 'C12',
                isChecked: false,
                priceChair: '100.000'
            },
            {
                idChair: 'C13',
                isChecked: false,
                priceChair: '100.000'
            },
            {
                idChair: 'C14',
                isChecked: false,
                priceChair: '100.000'
            },
            {
                idChair: 'C15',
                isChecked: false,
                priceChair: '100.000'
            },
            {
                idChair: 'D1',
                isChecked: false,
                priceChair: '100.000'
            },
            {
                idChair: 'D2',
                isChecked: false,
                priceChair: '100.000'
            },
            {
                idChair: 'D3',
                isChecked: false,
                priceChair: '100.000'
            },
            {
                idChair: 'D4',
                isChecked: false,
                priceChair: '100.000'
            },
            {
                idChair: 'D5',
                isChecked: false,
                priceChair: '100.000'
            },
            {
                idChair: 'D6',
                isChecked: false,
                priceChair: '100.000'
            },
            {
                idChair: 'D7',
                isChecked: false,
                priceChair: '100.000'
            },
            {
                idChair: 'D8',
                isChecked: false,
                priceChair: '100.000'
            },
            {
                idChair: 'D9',
                isChecked: false,
                priceChair: '100.000'
            },
            {
                idChair: 'D10',
                isChecked: false,
                priceChair: '100.000'
            },
            {
                idChair: 'D11',
                isChecked: false,
                priceChair: '100.000'
            },
            {
                idChair: 'D12',
                isChecked: false,
                priceChair: '100.000'
            },
            {
                idChair: 'D13',
                isChecked: false,
                priceChair: '100.000'
            },
            {
                idChair: 'D14',
                isChecked: false,
                priceChair: '100.000'
            },
            {
                idChair: 'D15',
                isChecked: false,
                priceChair: '100.000'
            }
        ],
        ChairVip: [
            {
                idChair: 'E1',
                isChecked: false,
                priceChair: '200.000'
            },
            {
                idChair: 'E2',
                isChecked: false,
                priceChair: '200.000'
            },
            {
                idChair: 'E3',
                isChecked: false,
                priceChair: '200.000'
            },
            {
                idChair: 'E4',
                isChecked: false,
                priceChair: '200.000'
            },
            {
                idChair: 'E5',
                isChecked: false,
                priceChair: '200.000'
            },
            {
                idChair: 'E6',
                isChecked: false,
                priceChair: '200.000'
            },
            {
                idChair: 'E7',
                isChecked: false,
                priceChair: '200.000'
            },
            {
                idChair: 'E8',
                isChecked: false,
                priceChair: '200.000'
            },
            {
                idChair: 'E9',
                isChecked: false,
                priceChair: '200.000'
            },
            {
                idChair: 'E10',
                isChecked: false,
                priceChair: '200.000'
            },
            {
                idChair: 'E11',
                isChecked: false,
                priceChair: '200.000'
            },
            {
                idChair: 'E12',
                isChecked: false,
                priceChair: '200.000'
            },
            {
                idChair: 'E13',
                isChecked: false,
                priceChair: '200.000'
            },
            {
                idChair: 'E14',
                isChecked: false,
                priceChair: '200.000'
            },
            {
                idChair: 'E15',
                isChecked: false,
                priceChair: '200.000'
            },
            {
                idChair: 'F1',
                isChecked: false,
                priceChair: '200.000'
            },
            {
                idChair: 'F2',
                isChecked: false,
                priceChair: '200.000'
            },
            {
                idChair: 'F3',
                isChecked: false,
                priceChair: '200.000'
            },
            {
                idChair: 'F4',
                isChecked: false,
                priceChair: '200.000'
            },
            {
                idChair: 'F5',
                isChecked: false,
                priceChair: '200.000'
            },
            {
                idChair: 'F6',
                isChecked: false,
                priceChair: '200.000'
            },
            {
                idChair: 'F7',
                isChecked: false,
                priceChair: '200.000'
            },
            {
                idChair: 'F8',
                isChecked: false,
                priceChair: '200.000'
            },
            {
                idChair: 'F9',
                isChecked: false,
                priceChair: '200.000'
            },
            {
                idChair: 'F10',
                isChecked: false,
                priceChair: '200.000'
            },
            {
                idChair: 'F11',
                isChecked: false,
                priceChair: '200.000'
            },
            {
                idChair: 'F12',
                isChecked: false,
                priceChair: '200.000'
            },
            {
                idChair: 'F13',
                isChecked: false,
                priceChair: '200.000'
            },
            {
                idChair: 'F14',
                isChecked: false,
                priceChair: '200.000'
            },
            {
                idChair: 'F15',
                isChecked: false,
                priceChair: '200.000'
            },
            {
                idChair: 'G1',
                isChecked: false,
                priceChair: '200.000'
            },
            {
                idChair: 'G2',
                isChecked: false,
                priceChair: '200.000'
            },
            {
                idChair: 'G3',
                isChecked: false,
                priceChair: '200.000'
            },
            {
                idChair: 'G4',
                isChecked: false,
                priceChair: '200.000'
            },
            {
                idChair: 'G5',
                isChecked: false,
                priceChair: '200.000'
            },
            {
                idChair: 'G6',
                isChecked: false,
                priceChair: '200.000'
            },
            {
                idChair: 'G7',
                isChecked: false,
                priceChair: '200.000'
            },
            {
                idChair: 'G8',
                isChecked: false,
                priceChair: '200.000'
            },
            {
                idChair: 'G9',
                isChecked: false,
                priceChair: '200.000'
            },
            {
                idChair: 'G10',
                isChecked: false,
                priceChair: '200.000'
            },
            {
                idChair: 'G11',
                isChecked: false,
                priceChair: '200.000'
            },
            {
                idChair: 'G12',
                isChecked: false,
                priceChair: '200.000'
            },
            {
                idChair: 'G13',
                isChecked: false,
                priceChair: '200.000'
            },
            {
                idChair: 'G14',
                isChecked: false,
                priceChair: '200.000'
            },
            {
                idChair: 'G15',
                isChecked: false,
                priceChair: '200.000'
            },
            {
                idChair: 'H1',
                isChecked: false,
                priceChair: '200.000'
            },
            {
                idChair: 'H2',
                isChecked: false,
                priceChair: '200.000'
            },
            {
                idChair: 'H3',
                isChecked: false,
                priceChair: '200.000'
            },
            {
                idChair: 'H4',
                isChecked: false,
                priceChair: '200.000'
            },
            {
                idChair: 'H5',
                isChecked: false,
                priceChair: '200.000'
            },
            {
                idChair: 'H6',
                isChecked: false,
                priceChair: '200.000'
            },
            {
                idChair: 'H7',
                isChecked: false,
                priceChair: '200.000'
            },
            {
                idChair: 'H8',
                isChecked: false,
                priceChair: '200.000'
            },
            {
                idChair: 'H9',
                isChecked: false,
                priceChair: '200.000'
            },
            {
                idChair: 'H10',
                isChecked: false,
                priceChair: '200.000'
            },
            {
                idChair: 'H11',
                isChecked: false,
                priceChair: '200.000'
            },
            {
                idChair: 'H12',
                isChecked: false,
                priceChair: '200.000'
            },
            {
                idChair: 'H13',
                isChecked: false,
                priceChair: '200.000'
            },
            {
                idChair: 'H14',
                isChecked: false,
                priceChair: '200.000'
            },
            {
                idChair: 'H15',
                isChecked: false,
                priceChair: '200.000'
            }
        ],
        CoupleChair: [
            {
                idChair: 'J1,J2',
                isChecked: false,
                priceChair: '300.000'
            },
            {
                idChair: 'J3,J4',
                isChecked: false,
                priceChair: '300.000'
            },
            {
                idChair: 'J5,J6',
                isChecked: false,
                priceChair: '300.000'
            },
            {
                idChair: 'J7,J8',
                isChecked: false,
                priceChair: '300.000'
            },
            {
                idChair: 'J9,J10',
                isChecked: false,
                priceChair: '300.000'
            },
            {
                idChair: 'J11,J12',
                isChecked: false,
                priceChair: '300.000'
            },
            {
                idChair: 'J13,J14',
                isChecked: false,
                priceChair: '300.000'
            }
        ]
    }
]



const Booking = () => {
    const NameFilm = data[1]?.NameFilm;
    const NameCinema = data[0]?.NameCinema;
    const LogoCinema = data[0]?.logo;
    const ImgFilm = data[1]?.ImgFilm;
    const CategoryFilm = data[1]?.CategoryFilm;
    const Time = data[1]?.TimeFilm;
    const ShowDate = data[1]?.ShowDate;
    const ScreeningRate = data[1]?.ScreeningRate;
    const Room = data[1]?.Room;


    const handleChairClick = (chairId, isSelected) => {
        if (isSelected) {
            setSelectedChairs((prevSelectedChairs) => [...prevSelectedChairs, chairId]);
        } else {
            setSelectedChairs((prevSelectedChairs) => prevSelectedChairs.filter((id) => id !== chairId));
        }
        alert('Xin chào'); 
    };
    return (
        <>
            <div className="w-100%">
                <div className="py-10 flex">
                    <div className="flex-col">
                        <div className="pb-2 flex items-center justify-center">
                            <img src="https://s3-alpha-sig.figma.com/img/7b3a/b285/c1b0431a99d8d024da6ca3827bc37327?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Eb9Bwl6qemoNjU8NoBkJIi4kaZ4syys5QdNgEbhJ~CehueXGMb0LJOsX2o6DZ4Y4AzgTiEdljF8TBrDeRtwMAZHpS7Oot7yT4mhI3GpMBqg8ldj7gnvBOA19LiDG9tzkbe4yRx78rJRbQSbhHIFRcVzhvWkHj616~GHG7TRQpKPmTMt200rVFbfJ8M3lavXNOdbVcSjUy3RBPSxdGxR4quhFD7OIFDbypYoTk66pr3-uxm5DQEWRPqUFT6Do9WmUOmGlmFII4shhF98IRFRDqW2wfqisMjdya114NHXAwjWb4KIf-omQOTq7xLiZMuFuLcJp7XyoS2R4vKgfcZkvvw__" alt="Màn hình chính" className="w-[700px]" />
                        </div>
                        <div>
                            {data.map((item) => (
                                <>
                                    <div className="grid grid-cols-15 gap-2">
                                        {item.Chairs?.map((content) => (
                                            <Chair key={content.idChair}
                                                id={content.idChair}
                                                checked={content.isChecked}
                                                vip={content.priceChair}
                                                onChairClick={handleChairClick}
                                            />
                                        ))}
                                    </div>
                                    <div className="grid grid-cols-15 gap-2 mt-2">
                                        {item.ChairVip?.map((content) => (
                                            <Chair key={content.idChair}
                                                id={content.idChair}
                                                checked={content.isChecked}
                                                vip={content.priceChair}
                                                onChairClick={handleChairClick}
                                            />
                                        ))}
                                    </div>
                                    <div className="mt-2 grid grid-cols-7 justify-items-center">
                                        {item.CoupleChair?.map((content) => (
                                            <CoupleChair key={content.idChair}
                                                id={content.idChair}
                                                checked={content.isChecked}
                                            
                                            />
                                        ))}
                                    </div>
                                </>
                            ))}
                        </div>
                        <div className="px-4 py-2 bg-[#AAAAAA1A] mt-3 text-gray-500 text-[10px] grid grid-cols-4 justify-items-center">
                            <div className="flex gap-2">
                                <div className="w-8 h-8 rounded-xl bg-[#AAAAAA99] flex items-center justify-center">
                                    A1
                                </div>
                                <p className="my-auto">Ghế đã đặt</p>
                            </div>
                            <div className="flex gap-2">
                                <div className="w-8 h-8 rounded-xl bg-[#20CF68] flex items-center justify-center">
                                    A1
                                </div>
                                <p className="my-auto">Ghế thường</p>
                            </div>
                            <div className="flex gap-2">
                                <div className="w-8 h-8 rounded-xl bg-[#F3D71E] flex items-center justify-center">
                                    A1
                                </div>
                                <p className="my-auto">Ghế vip</p>
                            </div>
                            <div className="flex gap-2">
                                <div className="w-16 h-8 rounded-xl bg-[#FC0909CC] flex items-center justify-center text-white">
                                    A1, A1
                                </div>
                                <p className="my-auto">Ghế đôi</p>
                            </div>
                        </div>
                    </div>
                    <div className="border ml-10 w-[244px] rounded-xl bg-[#FAEBE9] ">
                        <div className="p-4 text-[15px]">
                            <div className="flex gap-2">
                                <img src={LogoCinema} alt="Cinema-logo" className="w-[45px]" />
                                <p className="text-[16px]">{NameCinema}</p>
                            </div>
                            <hr className="border-t border-dashed border-black my-4" />
                            <div className="flex gap-2">
                                <img src={ImgFilm} alt="Img-film" className="w-[111px] rounded-xl" />
                                <p className="uppercase ">{NameFilm}</p>
                            </div>
                            <div className="mt-4 text-gray-500">
                                <p className="mt-1">Thể loại :     {CategoryFilm}</p>
                                <p className="mt-1">Thời lượng :    {Time} phút</p>
                                <p className="mt-1">Ngày chiếu :    {ShowDate}</p>
                                <p className="mt-1">Suất chiếu :    {ScreeningRate}</p>
                                <p className="mt-1">Phòng chiếu :   {Room}</p>
                                <p className="mt-1">Số lượng vé :   vé</p>
                                <p className="mt-1">Số ghế :    </p>
                                {
                                    
                                }

                            </div>
                            <hr className="border-t border-dashed border-black my-4" />
                            <div className="mt-2 flex text-[14px]">
                                <p className="text-gray-500">Tổng tiền thanh toán</p>
                                <div className="flex-c">
                                    <p className="text-blue-500 text-[14px]"> VNĐ</p>
                                    <p className="text-gray-500 text-[12px]">Đã bao gồm VAT</p>
                                </div>

                            </div>
                            <button className="py-2 px-16 rounded-xl bg-red-500 text-white block mx-auto mt-4 ">Tiếp tục</button>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}
export default Booking;