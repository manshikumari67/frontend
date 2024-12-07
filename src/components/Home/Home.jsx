
import {  NavLink } from 'react-router-dom';

export default function Home() {
    return (
        <div>
            <aside className="relative overflow-hidden text-white max-h-full h-[500px] object-cover  mt-5">
                 <div className="relative z-10 max-w-screen-xl px-4  pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8">
                     <div className="max-w-xl sm:mt-20 mt-80 space-y-8 text-center sm:text-right sm:ml-auto">
                         <h2 className="text-4xl font-bold sm:text-4xl text-gray ">
                         Water is a precious gift of nature. We should not waste it.
                             <span className="hidden sm:block text-4xl"></span>
                         </h2>

                         <NavLink
                             className="inline-flex text-white items-center px-6 py-3 font-medium bg-orange-700 rounded-lg hover:opacity-75"                           
                              to="/Add Question">
                             
                             Ask a Question
                         </NavLink>
                    </div>
                 </div>
                    
                <div className="absolute inset-0 w-full  h-[500px] object-cover">
                     <img className="w-full" src="https://plus.unsplash.com/premium_photo-1691086683862-66e8e0c5038a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmVhdXRpZnVsJTIwd2F0ZXJ8ZW58MHx8MHx8fDA%3D" alt="image1" />
                </div>
             </aside>

             <div className=' h-4'></div>


             <aside className="relative overflow-hidden text-black  h-[480px] object-cover ">
                 <div className="relative z-10 max-w-screen-xl px-4  pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8">
                     <div className="max-w-sm  text-right border-2 sm:text-right sm:ml-auto mr-10 mt-2 ">
                         <h5 className="text-xl  sm:text-xl text-gray ">
                         A partnership that mobilizes action by communities, civil society organizations, governments, and key industries to combat nature crime – including illegal harvest and trade of fish, timber and wildlife, as well as illegal deforestation to produce commodities – and associated violations of laws a
                             <span className="hidden sm:block text-4xl"></span>
                         </h5>

                        
                    </div>
                 </div>

                <div className="absolute inset-0 w-[750px]  h-[570px] object-cover">
                     <img className="w-full" src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGZvcmVzdCUyMHdhdGVyfGVufDB8fDB8fHww" alt="image2" />
                </div>
             </aside>

             <div className=' bg-black h-4'></div>

             <aside className="relative overflow-hidden text-black  h-[150px] object-cover border-2 ">
                    <div className=" text-left border-2 sm:text-left sm:ml-auto max-w-screen-lg  mr-32 mt-10 ">
                         <h5 className="text-xl  sm:text-xl text-gray mt-[-10px] pt-2 ">
                         A partnership that mobilizes action by communities, civil society organizations, governments, and key industries to combat nature crime – including illegal harvest and trade of fish, timber and wildlife, as well as illegal deforestation to produce commodities – and associated violations of laws a
                             <span className="hidden sm:block text-4xl"></span>
                         </h5>
                </div>
            </aside>

             <div className=' bg-black h-4'></div>

             <div className="grid border-2 place-items-center  h-96">
                <img className=" w-96 h-80 border-2" src="https://images.unsplash.com/photo-1473448912268-2022ce9509d8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHdhdGVyJTIwZm9yZXN0fGVufDB8fDB8fHww" alt="image2" />
            </div>

            <h1 className="text-center text-2xl sm:text-1xl py-10 font-medium">WRI is a trusted partner for change. Using research-based approaches, we work globally and in focus countries to meet people’s essential needs; to protect and restore nature; and to stabilize the climate and build more resilient communities. We aim to fundamentally transform the way the world produces food, uses energy and designs its cities to create a better future for all. We work across several topics affecting people, nature and the climate:</h1>

        <div className=' bg-black h-4'></div>


        <div className='w-96 h-80 border-2'>
            <img className='w-full h-full' src="https://www.consultancy-me.com/illustrations/news/detail/2023-09-05-100122749-Global_Water_scarcity.jpg" alt="" />
        </div>
           
             
        </div>
    );
}