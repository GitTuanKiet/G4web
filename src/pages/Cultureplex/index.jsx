import { Link } from 'react-router-dom';
import React from 'react';
import Gift from 'views/cultureplex/gift';

const data = [
    {
        url: 'https://www.cgv.vn/media/cinemas/cms//1/_/1_cgv_tet.png',
        title: 'year of the dragon',
        img: [
            {
                title: 'anh1',
                img_url: 'https://www.cgv.vn/media/cinemas/cms//1/_/1_cgv_tet.png'
            }
            ,
            {
                title: 'anh2',
                img_url: 'https://www.cgv.vn/media/cinemas/cms//3/_/3_dragon.png'
            },
            {
                title: 'anh3',
                img_url: 'https://www.cgv.vn/media/cinemas/cms//2/_/2_tet_2024.png'
            }
        ]
    },
    {
        url: 'https://www.cgv.vn/media/cinemas/cms//t/h/thank_you_3-1.jpg',
        title: 'thank you',
        img: [
            {
                title: 'anh4',
                img_url: 'https://www.cgv.vn/media/cinemas/cms//t/h/thank_you_3-1.jpg'
            },
            {
                title: 'anh5',
                img_url: 'https://www.cgv.vn/media/cinemas/cms//t/h/thank_you_4-1.jpg'
            }
        ]
    }
    ,
    {
        url: 'https://www.cgv.vn/media/cinemas/cms//b/i/birthday_2-1.jpg',
        title: 'birthday',
        img: [
            {
                title: 'anh6',
                img_url: 'https://www.cgv.vn/media/cinemas/cms//b/i/birthday_2-1.jpg'
            },
            {
                title: 'anh7',
                img_url: 'https://www.cgv.vn/media/cinemas/cms//b/i/birthday_4-1.jpg'
            }
        ]
    },
    {
        url: 'https://www.cgv.vn/media/cinemas/cms//a/u/autumn_2.jpg',
        title: "FALL-ING FOR YOU",
        img: [
            {
                title: 'anh8',
                img_url: 'https://www.cgv.vn/media/cinemas/cms//a/u/autumn_2.jpg'
            },
            {
                title: 'anh9',
                img_url: 'https://www.cgv.vn/media/cinemas/cms//a/u/autumn_1.jpg'
            }
        ]
    }
    ,
    {
        url: 'https://www.cgv.vn/media/cinemas/cms//c/i/cine_5-1.jpg',
        title: "CINE",
        img: [
            {
                title: 'anh10',
                img_url: 'https://www.cgv.vn/media/cinemas/cms//c/i/cine_5-1.jpg'
            },
            {
                title: 'anh11',
                img_url: 'https://www.cgv.vn/media/cinemas/cms//c/i/cine_3-1.jpg'
            },
            {
                title: 'anh12',
                img_url: 'https://www.cgv.vn/media/cinemas/cms//c/i/cine_1-1.jpg'
            }
        ]
    }
]

const Choose = () => {
    return (
        <>
            <p className='text-[30px] my-5'>Bạn chưa có thẻ quà tặng nào </p>
            <button className='uppercase bg-red-500 p-2 text-white border rounded-xl text-[14px] font-bold mb-16'>Thêm thẻ mới</button>


            <div className="w-[70rem] flex flex-col">
                {/* Lấy các dữ liệu */}
                {
                    data.map((item, index) => (
                        <>
                            <hr className="border-t-2 border-gray-400 mb-3" />
                            <div>
                                <div className='flex justify-between'>
                                    <div className='flex'>
                                    <a href={`gift/detail/${index}`}><img src={item.url} alt="" className='w-[50px] h-[50px] object-cover border rounded-3xl'/></a>
                                    <h1 className='uppercase ml-5 text-[20px] my-auto'>{item.title}</h1>
                                    </div>
                                    <div>
                                        <Link to={`detail/${index}`}>
                                        <button className='uppercase font-bold text-red-500 border-red-500 px-4 py-2 border rounded-xl ' >
                                            Tất cả
                                        </button>
                                        </Link>
                                        
                                    </div>
                                </div>

                                <div className='flex flex-row gap-4 my-4'>
                                    {
                                        item.img.map((imgItem, imgIndex) => (
                                            <Gift  title={imgItem.title} img_url={imgItem.img_url} />
                                        ))
                                    }
                                </div>
                            </div>
                        </>
                    ))
                }

            </div>
        </>
    )
}
export default Choose