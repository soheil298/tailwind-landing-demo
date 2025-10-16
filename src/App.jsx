
// alert box
// import { FaCircleInfo } from "react-icons/fa6";
// import { FaEye } from "react-icons/fa6";
// const App = () => {

//   return(
//    <section className="text-blue-800 border border-blue-300 rounded-lg bg-blue-50 p-12 mb-2">
//     <header className="flex items-center">
//       <FaCircleInfo className="mr-2"/>
//       <h3 className="text-lg font-medium">This is a info alert</h3>
//     </header>
//     <div className="mt-2 mb-4 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor totam magni, fugiat minima nihil voluptatibus cumque placeat, dolorem praesentium delectus veritatis obcaecati perspiciatis quam, nulla est corporis iure hic explicabo.</div>


//        <div className="flex">
//       <button className="flex text-white bg-blue-800 rounded-lg px-3 py-1.5 text-center hover:bg-blue-900 focus:ring-4 focus:outline-none focus:ring-blue-200 font-medium text-xs">
//        <FaEye className="mr-2 mt-0.5"/>
//        View more
//       </button>
//       <button className=" ml-3 text-blue-800 bg-transparent border border-blue-800 hover:bg-blue-900 hover:text-white rounded-lg px-3 text-xs focus:ring-4 focus:outline-none focus:ring-blue-200">Dismiss</button>
//       </div>
//     </section>
//   )
// }

// export default App;






// module

// import { FaLongArrowAltRight } from "react-icons/fa";
// const App = () =>{
//   return(
   
//     <section>
//       <article className="max-w-sm bg-white border border-gray-200 rounded-lg shadow">
//         <a href="#">
//           <img src="https://toplearn.com/img/course/%D8%A2%D9%85%D9%88%D8%B2%D8%B4_%D9%BE%D8%B1%D9%88%DA%98%D9%87_%D9%85%D8%AD%D9%88%D8%B1_tailwindcss.jpg" alt="" className="rounded-t-lg"></img>
//         </a>
//         <div className="p-5">
//           <a href="#">
//             <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Lorem ipsum dolor sit amet.</h5>
//           </a>
//           <p className="mb-3 font-normal text-gray-700">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, libero?</p>
          
//           <div className="flex">
//            <a href="#" className="bg-blue-700 rounded-lg text-white px-6 py-1 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-200 relative">Read more</a>
//            <FaLongArrowAltRight className="mt-3 -ml-5 z-10 text-white"/>
//           </div>
//         </div>
//       </article>
//     </section>

//   )
// }

// export default App;



// navbar

// import { RxHamburgerMenu } from "react-icons/rx";
// import { FaBars, FaTimes } from 'react-icons/fa';
// import { useState } from "react";


// const App = () => {

//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   return(
//     <>
//      <nav className="bg-white shadow-lg">
//       <div className="max-w-6xl mx-auto px-4">
//         <div className="flex justify-between">
//           <div className="flex space-x-7">
//            <div>
//             <a href="#" className="flex items-center py-4 px-2">
//               <span className="font-semibold text-rose-500 text-3xl">TopLearn</span>
//             </a>
//           </div>
//           <div className="items-center hidden md:flex">
//             <a href="#" className="py-4 px-2 text-rose-500 border-b-4 border-rose-500 font-semibold">Home</a>
//             <a href="#" className="py-4 px-2 text-gray-500  border-rose-500 font-semibold hover:text-rose-500 transition duration-300">Services</a>
//             <a href="#" className="py-4 px-2 text-gray-500  border-rose-500 font-semibold hover:text-rose-500 transition duration-300">About</a>
//             <a href="#" className="py-4 px-2 text-gray-500  border-rose-500 font-semibold hover:text-rose-500 transition duration-300">Contact Us</a>
//           </div>
//           </div>
//           <div className="hidden md:flex items-center space-x-3">
//             <a href="#" className="py-2 px-2 font-medium text-gray-500 rounded hover:bg-rose-500 hover:text-white transition duration-300">Log In</a>
//             <a href="#" className="py-2 px-2 font-medium  rounded bg-rose-500 hover:bg-rose-400 text-white transition duration-300">Sign Up</a>
//           </div>
//         <div className="md:hidden flex items-center">
//         <button className="show-btn" onClick={() => setIsMenuOpen(!isMenuOpen)}>
//                 {
//                   isMenuOpen ? <FaTimes /> : <FaBars />
//                 }
//           </button>
//         </div>
//         </div>
//       </div>
//     </nav>
    
//       {isMenuOpen && (

//      <div className="mobile-menu">
//       <ul>
//         <li><a href="#" className="block text-sm px-2 py-4 text-white bg-rose-500 font-semibold">Home</a></li>
//         <li><a href="#" className="block text-sm px-2 py-4 hover:text-white hover:bg-rose-500 transition duration-300 font-semibold">Services</a></li>
//         <li><a href="#" className="block text-sm px-2 py-4 hover:text-white hover:bg-rose-500 transition duration-300 font-semibold">About</a></li>
//         <li><a href="#" className="block text-sm px-2 py-4 hover:text-white hover:bg-rose-500 transition duration-300 font-semibold">Contact Us</a></li>
//         <li></li>
//         <li></li>
//       </ul>
//     </div>

//     )}
//     </>
   
//   )
// }


// export default App;




// DarkMode



// import userImage from './assets/userlogin.jpg';
// function App() {
//   return (
//     <>
    
//     <article className=' bg-white border border-gray-200 max-w-sm rounded-lg shadow-lg mx-auto relative top-52 dark:bg-gray-800 dark:border-gray-700'>
//       <div className='flex flex-col justify-center items-center'>
//         <img src={userImage} alt='عکس' className='w-24 h-24 rounded-full shadow-lg ml-4'></img>
//         <h5 className='text-xl font font-normal text-gray-900 mb-1 dark:text-white'>Soheil Sinai</h5>
//         <h6 className='text-sm text-gray-500 dark:text-gray-400'>Programmer & Developer</h6>
      
//       <div className='mt-3 mb-2 space-x-3'>
//         <button className='px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300'>Add Friend</button>
//         <button className='px-4 py-2 ml-2 text-sm font-medium border border-gray-300 text-center text-white bg-gray-200 rounded-lg hover:bg-gray-300 focus:ring-4 focus:outline-none focus:ring-gray-300 dark:bg-gray-600 dark:text-white dark:border-gray-900 dark:hover:bg-gray-700'>Message</button>
//       </div>
//       </div>
//     </article>
    
//     </>
//   )
// }

// export default App




// طراحی واکنشگرا




// function App() {
//   return (
//     <>
    
//     <header className="bg-amber-400 p-5">
//       <h1 className="text-2xl md:text-4xl">header</h1>
//     </header>


//     <section className="bg-white my-4 space-y-4 md:space-y-0 md:space-x-4 flex flex-col md:flex-row">
//       <main className="bg-sky-300 px-5 py-40 md:w-2/3">
//         <h1 className="text-2xl md:text-4xl">Main Content</h1>
//       </main>

//       <aside className="bg-green-300 px-5 py-40 md:w-1/3">
//         <h1 className="text-2xl md:text-4xl">Sidebar</h1>
//       </aside>
//     </section>

//     <footer className="bg-slate-800 p-5 md:h-48">
//       <h1 className="text-2xl text-white md:text-4xl">Footer</h1>
//     </footer>
    
    
    
//     </>
//   )
// }

// export default App





// Grid



// import Image1 from './assets/1.jpg';
// import Image2 from './assets/2.jpg';
// import Image3 from './assets/3.jpg';
// import Image4 from './assets/4.jpg';
// function App() {
//   return (
//     <>
//     <section className='p-10 grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
//          <section className="border border-gray-100 shadow-lg">
//       <div>
//         <img src={Image1} className='rounded-md'></img>
//       </div>

//       <div>
//         <h2 className="text-xl font-medium ml-2 mt-2">Mountain</h2>
//         <p className="text-sm text-gray-800 m-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, suscipit consectetur dicta dignissimos quam optio pariatur modi hic deleniti excepturi enim sequi blanditiis eaque numquam non animi. Est, necessitatibus similique?</p>
//       </div>

//       <div className='space-x-1'>
//         <span className='bg-gray-300 hover:bg-gray-400 rounded-full px-2 text-sm cursor-pointer'>#LoremSade</span>
//         <span className='bg-gray-300 hover:bg-gray-400 rounded-full px-2 text-sm cursor-pointer'>#HTML</span>
//         <span className='bg-gray-300 hover:bg-gray-400 rounded-full px-2 text-sm cursor-pointer'>#TailWind</span>
//       </div>
//     </section>
//     <section className="border border-gray-100 shadow-lg">
//       <div>
//         <img src={Image2} className='runded-md'></img>
//       </div>

//       <div>
//         <h2 className="text-xl font-medium ml-2 mt-2">Mountain</h2>
//         <p className="text-sm text-gray-800 m-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, suscipit consectetur dicta dignissimos quam optio pariatur modi hic deleniti excepturi enim sequi blanditiis eaque numquam non animi. Est, necessitatibus similique?</p>
//       </div>

//       <div className='space-x-1'>
//         <span className='bg-gray-300 hover:bg-gray-400 rounded-full px-2 text-sm cursor-pointer'>#LoremSade</span>
//         <span className='bg-gray-300 hover:bg-gray-400 rounded-full px-2 text-sm cursor-pointer'>#HTML</span>
//         <span className='bg-gray-300 hover:bg-gray-400 rounded-full px-2 text-sm cursor-pointer'>#TailWind</span>
//       </div>
//     </section>
//     <section className="border border-gray-100 shadow-lg">
//       <div>
//         <img src={Image3} className='rounded-md'></img>
//       </div>

//       <div>
//         <h2 className="text-xl font-medium ml-2 mt-2">Mountain</h2>
//         <p className="text-sm text-gray-800 m-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, suscipit consectetur dicta dignissimos quam optio pariatur modi hic deleniti excepturi enim sequi blanditiis eaque numquam non animi. Est, necessitatibus similique?</p>
//       </div>

//       <div className='space-x-1'>
//         <span className='bg-gray-300 hover:bg-gray-400 rounded-full px-2 text-sm cursor-pointer'>#LoremSade</span>
//         <span className='bg-gray-300 hover:bg-gray-400 rounded-full px-2 text-sm cursor-pointer'>#HTML</span>
//         <span className='bg-gray-300 hover:bg-gray-400 rounded-full px-2 text-sm cursor-pointer'>#TailWind</span>
//       </div>
//     </section>
//     <section className="border border-gray-100 shadow-lg">
//       <div>
//         <img src={Image4} className='rounded-md'></img>
//       </div>

//       <div>
//         <h2 className="text-xl font-medium ml-2 mt-2">Mountain</h2>
//         <p className="text-sm text-gray-800 m-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, suscipit consectetur dicta dignissimos quam optio pariatur modi hic deleniti excepturi enim sequi blanditiis eaque numquam non animi. Est, necessitatibus similique?</p>
//       </div>

//       <div className='space-x-1'>
//         <span className='bg-gray-300 hover:bg-gray-400 rounded-full px-2 text-sm cursor-pointer'>#LoremSade</span>
//         <span className='bg-gray-300 hover:bg-gray-400 rounded-full px-2 text-sm cursor-pointer'>#HTML</span>
//         <span className='bg-gray-300 hover:bg-gray-400 rounded-full px-2 text-sm cursor-pointer'>#TailWind</span>
//       </div>
//     </section>
//     </section>

    
//     </>
//   )
// }

// export default App





// Float Placeholder


// function App() {
//   return (
//     <>
//     <div className="relative">
//       <input type="twxt" placeholder="Enter Your Name" className="peer w-full h-16 p-3 pt-4 placeholder-transparent border rounded-lg focus:outline-none focus:border-gray-500 focus:shadow-lg"></input>
//       <label for="" className="absolute top-0 left-0 h-full px-4 py-5 text-sm transition-all duration-200 ease-out origin-left transform opacity-75 peer-focus:opacity-75 peer-focus:scale-75 peer-focus:-translate-y-3 peer-focus:-translate-x-3 ">Enter Your Name</label>
//     </div>
//     </>
//   )
// }

// export default App







// پروژه طراحی صفحه اول سایت تاپ لرن



import logo from './assets/logo.png';
import image1 from './assets/986c7398-4e80-4bbc-b502-90953b618378.jpg'
import image2 from './assets/b6e5037b-7285-43da-ab8c-e7fbee955912.jpg'
import img1 from './assets/1.jpg'
import img2 from './assets/2.jpg'
import img3 from './assets/3.jpg'
import logo1 from './assets/logo (1).png'
import logo2 from './assets/logo (2).png'
import blog from './assets/blog.jpg'
import { BiAlarm } from "react-icons/bi";
import gold from './assets/goldVip.png'
import teacher from './assets/stat-teacher.png'
import student from './assets/stat-student.png'
import time from './assets/stat-time.png'
import { GoArrowLeft } from "react-icons/go";
import { IoMenu } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
import { VscAccount } from "react-icons/vsc";
import { FaEye } from "react-icons/fa";
import { SlEnvolopeLetter } from "react-icons/sl";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { FaInstagram } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
const App = () =>{

  const courses = [
    { id: 1, img: img1, title: "آموزش Tailwind", teacher: "سهیل سینایی", duration: "23:34:36", price: "رایگان" },
    { id: 1, img: img1, title: "آموزش Tailwind", teacher: "سهیل سینایی", duration: "23:34:36", price: "رایگان" },
    { id: 1, img: img3, title: "آموزش Tailwind", teacher: "سهیل سینایی", duration: "23:34:36", price: "رایگان" },
    { id: 2, img: img2, title: "React پروژه‌محور", teacher: "علی رضایی", duration: "18:22:10", price: "رایگان" },
    { id: 2, img: img2, title: "React پروژه‌محور", teacher: "علی رضایی", duration: "18:22:10", price: "رایگان" },
    { id: 2, img: img3, title: "React پروژه‌محور", teacher: "علی رضایی", duration: "18:22:10", price: "رایگان" },
  ];


  return(
    <>
   <header className='bg-[url("./assets/landing.jpg")] bg-cover'>
    <section className='container px-5 flex justify-start py-3 items-center text-white lg:justify-between'>
      <div className='flex items-center space-x-3 space-x-reverse divide-x-2 divide-slate-200 lg:divide-none'>
        <img src={logo} alt='' className='w-20 h-16'/>
        <div className='pe-3'>
        <IoMenu className='lg:hidden'/> 
        </div>
      </div>
      <div className='px-4 lg:hidden'>
        <IoIosSearch />
      </div>
      {/* menu */}
      <nav className='hidden space-x-4 space-x-reverse lg:flex'>
        <a href='#'>آخرین دوره ها</a>
        <a href='#'>تخفیفات روزانه</a>
        <a href='#'>بلاگ</a>
        <a href='#'>فرصت های شغلی</a>
        <a href='#'>همکاری با تاپ لرن</a>
        <a href='#'>مشاوره و رفع اشکال</a>
      </nav>
       <div className='flex space-x-2 space-x-reverse'>
        <VscAccount />
        <a href="" className="after:content-['_/'] text-sm">ورود</a>
        <a href='' className='text-sm'>ثبت نام</a>
      </div>
    </section>
    <section className='text-white text-center container pt-6 px-8 flex justify-center items-center'>
      <div>
        <h1 className='text-xl leading-10'>خودآموزی، کسب تجربه، ورود به بازار کار با تاپ لرن با کمترین هزینه خودت حرفه ای یاد بگیر</h1>
      </div>
    </section>

    <section className="relative flex justify-center items-center pb-28 text-center">
    <div className="relative w-4/5 lg:w-2/5">
    <input
      type="text"
      placeholder="چی میخوای یاد بگیری؟"
      className="w-full h-12 rounded-3xl px-10 pr-5 shadow-2xl focus:ring-8 focus:ring-slate-300/20 outline-none bg-white"
    />
    <IoIosSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-sky-500 text-xl" />
    </div>
    </section>

    <section className=' hidden lg:flex lg:justify-center lg:items-center lg:text-center lg:pb-14 lg:space-x-20 lg:flex-row-reverse'>
        <article className='text-white'>
          <img src={time} alt='' className='w-32 h-32'/>
          <div>514,303</div>
          <div>دقیقه آموزش</div>
        </article>
        <article className='text-white'>
          <img src={teacher} alt='' className='w-32 h-32'/>
          <div>210</div>
          <div>مدرس مجرب</div>
        </article>
        <article className='text-white'>
          <img src={student} alt='' className='w-32 h-32'/>
          <div>444,812</div>
          <div>نفر دانشجو</div>
        </article>
    </section>
   </header>

   <main>
    <section className='hidden lg:block pb-6 pt-5 shadow-md'>
      <div className='container flex justify-between mb-3'>
       <nav className='flex items-center space-x-5 space-x-reverse text-black'>
        <a href='#'>برنامه نویسی و طراحی وب</a>
        <a href='#'>آموزش برنامه نویسی به کودکان</a>
        <a href='#'>آموزش ورود به دنیای برنامه نویسی</a>
        <a href='#'>دوره های مخصوص ناشنوایان</a>
       </nav>
       <div className='flex items-center'>
        <img src={gold} className='w-10 h-10'/>
        <a href='#' className='text-sky-400 text-sm'>مخصوص اعضای ویژه</a>
       </div>
      </div>
    </section>

    
    {/* slider */}
    <section className='container mt-3 w-5/6 lg:w-2/3 mb-7'>
      <div className="carousel w-full rounded-lg shadow-lg">
   <div id="slide1" className="carousel-item relative w-full">
    <img
      src= {image1}
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide2" className="btn btn-circle">❮</a>
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide2" className="carousel-item relative w-full">
    <img
      src={image2}
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide1" className="btn btn-circle">❮</a>
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
  </div>
    </section>

    {/* last course */}
    <section>
      <header className='container flex flex-col space-y-4 lg:flex-row lg:space-y-0 lg:justify-between'>
        <div className="ps-10 relative">
        <h3 className="font-medium text-black text-lg relative inline-block before:absolute before:top-1/2 before:-translate-y-4 before:translate-x-44  before:left-0 before:rotate-90 before:me-1 before:w-1 before:h-8 before:bg-blue-500 before:rounded-full">
           آخرین دوره‌های تاپلرن
        </h3>
       </div>
        <div className='text-black font-medium flex items-center space-x-2 space-x-reverse ps-10'>
          <h6>
            مشاهده همه دوره ها
          </h6>
          <GoArrowLeft className='text-xl text-sky-500'/>
        </div>
      </header>

      <section className='container'>
        <header className='ps-5 sm:ps-0'>
          <h6 className='border-b-4 text-black text-xs md:text-sm lg:text-lg md:w-40 lg:w-52 border-sky-500 w-32 pt-6 pb-2'>برنامه نویسی و طراحی وب</h6>
        </header>
        <div className='flex flex-wrap space-y-4 space-y-reverse px-2 mt-10'>
          <div className='w-full md:w-1/2 lg:w-1/3 xl:w-1/4'>
            <article className='border border-slate-200 rounded-md shadow-sm m-2'>
              <img src={img1} className='w-full'/>
              <div className='text-black py-5 px-3 space-y-3'>
                <p>آموزش ساخت سایت با Tailwimd</p>
                <div className='flex border-b-2 border-b-slate-200 pb-2 '>
                  <VscAccount className='text-slate-400 ml-1'/>
                  <a href='#' className='text-slate-500 text-sm'>سهیل سینایی</a>
                </div>
              </div>
              <footer className='text-black flex justify-between pb-3 '>
                <div className='flex items-center mx-3 space-x-2 space-x-reverse'>
                 <BiAlarm className='text-base mb-1 text-sky-400'/>
                <p>23:34:36</p>
                </div>
                <div className='mx-3'>
                  <h6 className='text-green-600 text-lg'>رایگان</h6>
                </div>
              </footer>
            </article>
          </div>
          <div className='w-full md:w-1/2 lg:w-1/3 xl:w-1/4'>
            <article className='border border-slate-200 rounded-md shadow-sm m-2'>
              <img src={img1} className='w-full'/>
              <div className='text-black py-5 px-3 space-y-3'>
                <p>آموزش ساخت سایت با Tailwimd</p>
                <div className='flex border-b-2 border-b-slate-200 pb-2 '>
                  <VscAccount className='text-slate-400 ml-1'/>
                  <a href='#' className='text-slate-500 text-sm'>سهیل سینایی</a>
                </div>
              </div>
              <footer className='text-black flex justify-between pb-3 '>
                <div className='flex items-center mx-3 space-x-2 space-x-reverse'>
                 <BiAlarm className='text-base mb-1 text-sky-400'/>
                <p>23:34:36</p>
                </div>
                <div className='mx-3'>
                  <h6 className='text-green-600 text-lg'>رایگان</h6>
                </div>
              </footer>
            </article>
          </div>
          <div className='w-full md:w-1/2 lg:w-1/3 xl:w-1/4'>
            <article className='border border-slate-200 rounded-md shadow-sm m-2'>
              <img src={img1} className='w-full'/>
              <div className='text-black py-5 px-3 space-y-3'>
                <p>آموزش ساخت سایت با Tailwimd</p>
                <div className='flex border-b-2 border-b-slate-200 pb-2 '>
                  <VscAccount className='text-slate-400 ml-1'/>
                  <a href='#' className='text-slate-500 text-sm'>سهیل سینایی</a>
                </div>
              </div>
              <footer className='text-black flex justify-between pb-3 '>
                <div className='flex items-center mx-3 space-x-2 space-x-reverse'>
                 <BiAlarm className='text-base mb-1 text-sky-400'/>
                <p>23:34:36</p>
                </div>
                <div className='mx-3'>
                  <h6 className='text-green-600 text-lg'>رایگان</h6>
                </div>
              </footer>
            </article>
          </div>
          <div className='w-full md:w-1/2 lg:w-1/3 xl:w-1/4'>
            <article className='border border-slate-200 rounded-md shadow-sm m-2'>
              <img src={img1} className='w-full'/>
              <div className='text-black py-5 px-3 space-y-3'>
                <p>آموزش ساخت سایت با Tailwimd</p>
                <div className='flex border-b-2 border-b-slate-200 pb-2 '>
                  <VscAccount className='text-slate-400 ml-1'/>
                  <a href='#' className='text-slate-500 text-sm'>سهیل سینایی</a>
                </div>
              </div>
              <footer className='text-black flex justify-between pb-3 '>
                <div className='flex items-center mx-3 space-x-2 space-x-reverse'>
                 <BiAlarm className='text-base mb-1 text-sky-400'/>
                <p>23:34:36</p>
                </div>
                <div className='mx-3'>
                  <h6 className='text-green-600 text-lg'>رایگان</h6>
                </div>
              </footer>
            </article>
          </div>
          <div className='w-full md:w-1/2 lg:w-1/3 xl:w-1/4'>
            <article className='border border-slate-200 rounded-md shadow-sm m-2'>
              <img src={img1} className='w-full'/>
              <div className='text-black py-5 px-3 space-y-3'>
                <p>آموزش ساخت سایت با Tailwimd</p>
                <div className='flex border-b-2 border-b-slate-200 pb-2 '>
                  <VscAccount className='text-slate-400 ml-1'/>
                  <a href='#' className='text-slate-500 text-sm'>سهیل سینایی</a>
                </div>
              </div>
              <footer className='text-black flex justify-between pb-3 '>
                <div className='flex items-center mx-3 space-x-2 space-x-reverse'>
                 <BiAlarm className='text-base mb-1 text-sky-400'/>
                <p>23:34:36</p>
                </div>
                <div className='mx-3'>
                  <h6 className='text-green-600 text-lg'>رایگان</h6>
                </div>
              </footer>
            </article>
          </div>
          <div className='w-full md:w-1/2 lg:w-1/3 xl:w-1/4'>
            <article className='border border-slate-200 rounded-md shadow-sm m-2'>
              <img src={img1} className='w-full'/>
              <div className='text-black py-5 px-3 space-y-3'>
                <p>آموزش ساخت سایت با Tailwimd</p>
                <div className='flex border-b-2 border-b-slate-200 pb-2 '>
                  <VscAccount className='text-slate-400 ml-1'/>
                  <a href='#' className='text-slate-500 text-sm'>سهیل سینایی</a>
                </div>
              </div>
              <footer className='text-black flex justify-between pb-3 '>
                <div className='flex items-center mx-3 space-x-2 space-x-reverse'>
                 <BiAlarm className='text-base mb-1 text-sky-400'/>
                <p>23:34:36</p>
                </div>
                <div className='mx-3'>
                  <h6 className='text-green-600 text-lg'>رایگان</h6>
                </div>
              </footer>
            </article>
          </div>
          <div className='w-full md:w-1/2 lg:w-1/3 xl:w-1/4'>
            <article className='border border-slate-200 rounded-md shadow-sm m-2'>
              <img src={img1} className='w-full'/>
              <div className='text-black py-5 px-3 space-y-3'>
                <p>آموزش ساخت سایت با Tailwimd</p>
                <div className='flex border-b-2 border-b-slate-200 pb-2 '>
                  <VscAccount className='text-slate-400 ml-1'/>
                  <a href='#' className='text-slate-500 text-sm'>سهیل سینایی</a>
                </div>
              </div>
              <footer className='text-black flex justify-between pb-3 '>
                <div className='flex items-center mx-3 space-x-2 space-x-reverse'>
                 <BiAlarm className='text-base mb-1 text-sky-400'/>
                <p>23:34:36</p>
                </div>
                <div className='mx-3'>
                  <h6 className='text-green-600 text-lg'>رایگان</h6>
                </div>
              </footer>
            </article>
          </div>
          <div className='w-full md:w-1/2 lg:w-1/3 xl:w-1/4'>
            <article className='border border-slate-200 rounded-md shadow-sm m-2'>
              <img src={img1} className='w-full'/>
              <div className='text-black py-5 px-3 space-y-3'>
                <p>آموزش ساخت سایت با Tailwimd</p>
                <div className='flex border-b-2 border-b-slate-200 pb-2 '>
                  <VscAccount className='text-slate-400 ml-1'/>
                  <a href='#' className='text-slate-500 text-sm'>سهیل سینایی</a>
                </div>
              </div>
              <footer className='text-black flex justify-between pb-3 '>
                <div className='flex items-center mx-3 space-x-2 space-x-reverse'>
                 <BiAlarm className='text-base mb-1 text-sky-400'/>
                <p>23:34:36</p>
                </div>
                <div className='mx-3'>
                  <h6 className='text-green-600 text-lg'>رایگان</h6>
                </div>
              </footer>
            </article>
          </div>
          <div className='w-full md:w-1/2 lg:w-1/3 xl:w-1/4'>
            <article className='border border-slate-200 rounded-md shadow-sm m-2'>
              <img src={img1} className='w-full'/>
              <div className='text-black py-5 px-3 space-y-3'>
                <p>آموزش ساخت سایت با Tailwimd</p>
                <div className='flex border-b-2 border-b-slate-200 pb-2 '>
                  <VscAccount className='text-slate-400 ml-1'/>
                  <a href='#' className='text-slate-500 text-sm'>سهیل سینایی</a>
                </div>
              </div>
              <footer className='text-black flex justify-between pb-3 '>
                <div className='flex items-center mx-3 space-x-2 space-x-reverse'>
                 <BiAlarm className='text-base mb-1 text-sky-400'/>
                <p>23:34:36</p>
                </div>
                <div className='mx-3'>
                  <h6 className='text-green-600 text-lg'>رایگان</h6>
                </div>
              </footer>
            </article>
          </div>
          <div className='w-full md:w-1/2 lg:w-1/3 xl:w-1/4'>
            <article className='border border-slate-200 rounded-md shadow-sm m-2'>
              <img src={img1} className='w-full'/>
              <div className='text-black py-5 px-3 space-y-3'>
                <p>آموزش ساخت سایت با Tailwimd</p>
                <div className='flex border-b-2 border-b-slate-200 pb-2 '>
                  <VscAccount className='text-slate-400 ml-1'/>
                  <a href='#' className='text-slate-500 text-sm'>سهیل سینایی</a>
                </div>
              </div>
              <footer className='text-black flex justify-between pb-3 '>
                <div className='flex items-center mx-3 space-x-2 space-x-reverse'>
                 <BiAlarm className='text-base mb-1 text-sky-400'/>
                <p>23:34:36</p>
                </div>
                <div className='mx-3'>
                  <h6 className='text-green-600 text-lg'>رایگان</h6>
                </div>
              </footer>
            </article>
          </div>
          <div className='w-full md:w-1/2 lg:w-1/3 xl:w-1/4'>
            <article className='border border-slate-200 rounded-md shadow-sm m-2'>
              <img src={img1} className='w-full'/>
              <div className='text-black py-5 px-3 space-y-3'>
                <p>آموزش ساخت سایت با Tailwimd</p>
                <div className='flex border-b-2 border-b-slate-200 pb-2 '>
                  <VscAccount className='text-slate-400 ml-1'/>
                  <a href='#' className='text-slate-500 text-sm'>سهیل سینایی</a>
                </div>
              </div>
              <footer className='text-black flex justify-between pb-3 '>
                <div className='flex items-center mx-3 space-x-2 space-x-reverse'>
                 <BiAlarm className='text-base mb-1 text-sky-400'/>
                <p>23:34:36</p>
                </div>
                <div className='mx-3'>
                  <h6 className='text-green-600 text-lg'>رایگان</h6>
                </div>
              </footer>
            </article>
          </div>
          <div className='w-full md:w-1/2 lg:w-1/3 xl:w-1/4'>
            <article className='border border-slate-200 rounded-md shadow-sm m-2'>
              <img src={img1} className='w-full'/>
              <div className='text-black py-5 px-3 space-y-3'>
                <p>آموزش ساخت سایت با Tailwimd</p>
                <div className='flex border-b-2 border-b-slate-200 pb-2 '>
                  <VscAccount className='text-slate-400 ml-1'/>
                  <a href='#' className='text-slate-500 text-sm'>سهیل سینایی</a>
                </div>
              </div>
              <footer className='text-black flex justify-between pb-3 '>
                <div className='flex items-center mx-3 space-x-2 space-x-reverse'>
                 <BiAlarm className='text-base mb-1 text-sky-400'/>
                <p>23:34:36</p>
                </div>
                <div className='mx-3'>
                  <h6 className='text-green-600 text-lg'>رایگان</h6>
                </div>
              </footer>
            </article>
          </div>
          <div className='w-full md:w-1/2 lg:w-1/3 xl:w-1/4'>
            <article className='border border-slate-200 rounded-md shadow-sm m-2'>
              <img src={img1} className='w-full'/>
              <div className='text-black py-5 px-3 space-y-3'>
                <p>آموزش ساخت سایت با Tailwimd</p>
                <div className='flex border-b-2 border-b-slate-200 pb-2 '>
                  <VscAccount className='text-slate-400 ml-1'/>
                  <a href='#' className='text-slate-500 text-sm'>سهیل سینایی</a>
                </div>
              </div>
              <footer className='text-black flex justify-between pb-3 '>
                <div className='flex items-center mx-3 space-x-2 space-x-reverse'>
                 <BiAlarm className='text-base mb-1 text-sky-400'/>
                <p>23:34:36</p>
                </div>
                <div className='mx-3'>
                  <h6 className='text-green-600 text-lg'>رایگان</h6>
                </div>
              </footer>
            </article>
          </div>
          <div className='w-full md:w-1/2 lg:w-1/3 xl:w-1/4'>
            <article className='border border-slate-200 rounded-md shadow-sm m-2'>
              <img src={img1} className='w-full'/>
              <div className='text-black py-5 px-3 space-y-3'>
                <p>آموزش ساخت سایت با Tailwimd</p>
                <div className='flex border-b-2 border-b-slate-200 pb-2 '>
                  <VscAccount className='text-slate-400 ml-1'/>
                  <a href='#' className='text-slate-500 text-sm'>سهیل سینایی</a>
                </div>
              </div>
              <footer className='text-black flex justify-between pb-3 '>
                <div className='flex items-center mx-3 space-x-2 space-x-reverse'>
                 <BiAlarm className='text-base mb-1 text-sky-400'/>
                <p>23:34:36</p>
                </div>
                <div className='mx-3'>
                  <h6 className='text-green-600 text-lg'>رایگان</h6>
                </div>
              </footer>
            </article>
          </div>
          <div className='w-full md:w-1/2 lg:w-1/3 xl:w-1/4'>
            <article className='border border-slate-200 rounded-md shadow-sm m-2'>
              <img src={img1} className='w-full'/>
              <div className='text-black py-5 px-3 space-y-3'>
                <p>آموزش ساخت سایت با Tailwimd</p>
                <div className='flex border-b-2 border-b-slate-200 pb-2 '>
                  <VscAccount className='text-slate-400 ml-1'/>
                  <a href='#' className='text-slate-500 text-sm'>سهیل سینایی</a>
                </div>
              </div>
              <footer className='text-black flex justify-between pb-3 '>
                <div className='flex items-center mx-3 space-x-2 space-x-reverse'>
                 <BiAlarm className='text-base mb-1 text-sky-400'/>
                <p>23:34:36</p>
                </div>
                <div className='mx-3'>
                  <h6 className='text-green-600 text-lg'>رایگان</h6>
                </div>
              </footer>
            </article>
          </div>
          <div className='w-full md:w-1/2 lg:w-1/3 xl:w-1/4'>
            <article className='border border-slate-200 rounded-md shadow-sm m-2'>
              <img src={img1} className='w-full'/>
              <div className='text-black py-5 px-3 space-y-3'>
                <p>آموزش ساخت سایت با Tailwimd</p>
                <div className='flex border-b-2 border-b-slate-200 pb-2 '>
                  <VscAccount className='text-slate-400 ml-1'/>
                  <a href='#' className='text-slate-500 text-sm'>سهیل سینایی</a>
                </div>
              </div>
              <footer className='text-black flex justify-between pb-3 '>
                <div className='flex items-center mx-3 space-x-2 space-x-reverse'>
                 <BiAlarm className='text-base mb-1 text-sky-400'/>
                <p>23:34:36</p>
                </div>
                <div className='mx-3'>
                  <h6 className='text-green-600 text-lg'>رایگان</h6>
                </div>
              </footer>
            </article>
          </div>
        </div>
      </section>
    </section>
     


     {/* Offer course */}
       
     <section className="mt-4">
      <header className="container relative flex flex-col lg:flex-row lg:justify-between ps-10">
        <h3 className="font-medium text-black text-lg relative ps-6 before:absolute before:left-80 before:lg:left-48 before:lg:ml-2 ml-2 before:top-1/2 before:-translate-y-1/2 before:rotate-90 before:w-1 before:h-8  before:bg-blue-500 before:rounded-full">
          دوره‌های پیشنهادی تاپلرن
        </h3>
        <div className="text-black font-medium flex items-center space-x-2 space-x-reverse ps-10">
          <span>مشاهده همه دوره‌ها</span>
          <GoArrowLeft className="text-xl text-sky-500" />
        </div>
      </header>

      <div className="container mt-6 ps-5">
        <Swiper
          modules={[Navigation]}
          navigation
          spaceBetween={16}
          slidesPerView={1}
          dir="rtl" // برای فارسی
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 }
          }}
        >
          {courses.map((course) => (
            <SwiperSlide key={course.id}>
              <article className="border border-slate-200 rounded-md shadow-sm">
                <img src={course.img} alt={course.title} className="w-full" />
                <div className="text-black py-5 px-3 space-y-3">
                  <p>{course.title}</p>
                  <div className="flex border-b-2 border-b-slate-200 pb-2">
                    <VscAccount className="text-slate-400 ml-1" />
                    <a href="#" className="text-slate-500 text-sm">{course.teacher}</a>
                  </div>
                </div>
                <footer className="text-black flex justify-between pb-3 px-3">
                  <div className="flex items-center space-x-2 space-x-reverse">
                    <BiAlarm className="text-base mb-1 text-sky-400" />
                    <p>{course.duration}</p>
                  </div>
                  <h6 className="text-green-600 text-lg">{course.price}</h6>
                </footer>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>



    {/* pupolar course */}
    <section className='mt-4'>
      <header className='container flex flex-col space-y-4 lg:flex-row lg:space-y-0 lg:justify-between'>
        <div className="ps-14 relative">
        <h3 className="font-medium text-black text-lg relative inline-block before:absolute before:top-1/2 before:-translate-y-4 before:translate-x-44  before:left-0 before:rotate-90 before:me-2 before:w-1 before:h-8 before:bg-blue-500 before:rounded-full">
           دوره‌های محبوب تاپلرن
        </h3>
       </div>
      </header>

      <section className='container'>
        <div className='flex flex-wrap space-y-4 space-y-reverse px-2 mt-10'>
          <div className='w-full md:w-1/2 lg:w-1/3 xl:w-1/4'>
            <article className='border border-slate-200 rounded-md shadow-sm m-2'>
              <img src={img1} className='w-full'/>
              <div className='text-black py-5 px-3 space-y-3'>
                <p>آموزش ساخت سایت با Tailwimd</p>
                <div className='flex border-b-2 border-b-slate-200 pb-2 '>
                  <VscAccount className='text-slate-400 ml-1'/>
                  <a href='#' className='text-slate-500 text-sm'>سهیل سینایی</a>
                </div>
              </div>
              <footer className='text-black flex justify-between pb-3 '>
                <div className='flex items-center mx-3 space-x-2 space-x-reverse'>
                 <BiAlarm className='text-base mb-1 text-sky-400'/>
                <p>23:34:36</p>
                </div>
                <div className='mx-3'>
                  <h6 className='text-green-600 text-lg'>رایگان</h6>
                </div>
              </footer>
            </article>
          </div>
          <div className='w-full md:w-1/2 lg:w-1/3 xl:w-1/4'>
            <article className='border border-slate-200 rounded-md shadow-sm m-2'>
              <img src={img1} className='w-full'/>
              <div className='text-black py-5 px-3 space-y-3'>
                <p>آموزش ساخت سایت با Tailwimd</p>
                <div className='flex border-b-2 border-b-slate-200 pb-2 '>
                  <VscAccount className='text-slate-400 ml-1'/>
                  <a href='#' className='text-slate-500 text-sm'>سهیل سینایی</a>
                </div>
              </div>
              <footer className='text-black flex justify-between pb-3 '>
                <div className='flex items-center mx-3 space-x-2 space-x-reverse'>
                 <BiAlarm className='text-base mb-1 text-sky-400'/>
                <p>23:34:36</p>
                </div>
                <div className='mx-3'>
                  <h6 className='text-green-600 text-lg'>رایگان</h6>
                </div>
              </footer>
            </article>
          </div>
          <div className='w-full md:w-1/2 lg:w-1/3 xl:w-1/4'>
            <article className='border border-slate-200 rounded-md shadow-sm m-2'>
              <img src={img1} className='w-full'/>
              <div className='text-black py-5 px-3 space-y-3'>
                <p>آموزش ساخت سایت با Tailwimd</p>
                <div className='flex border-b-2 border-b-slate-200 pb-2 '>
                  <VscAccount className='text-slate-400 ml-1'/>
                  <a href='#' className='text-slate-500 text-sm'>سهیل سینایی</a>
                </div>
              </div>
              <footer className='text-black flex justify-between pb-3 '>
                <div className='flex items-center mx-3 space-x-2 space-x-reverse'>
                 <BiAlarm className='text-base mb-1 text-sky-400'/>
                <p>23:34:36</p>
                </div>
                <div className='mx-3'>
                  <h6 className='text-green-600 text-lg'>رایگان</h6>
                </div>
              </footer>
            </article>
          </div>
          <div className='w-full md:w-1/2 lg:w-1/3 xl:w-1/4'>
            <article className='border border-slate-200 rounded-md shadow-sm m-2'>
              <img src={img1} className='w-full'/>
              <div className='text-black py-5 px-3 space-y-3'>
                <p>آموزش ساخت سایت با Tailwimd</p>
                <div className='flex border-b-2 border-b-slate-200 pb-2 '>
                  <VscAccount className='text-slate-400 ml-1'/>
                  <a href='#' className='text-slate-500 text-sm'>سهیل سینایی</a>
                </div>
              </div>
              <footer className='text-black flex justify-between pb-3 '>
                <div className='flex items-center mx-3 space-x-2 space-x-reverse'>
                 <BiAlarm className='text-base mb-1 text-sky-400'/>
                <p>23:34:36</p>
                </div>
                <div className='mx-3'>
                  <h6 className='text-green-600 text-lg'>رایگان</h6>
                </div>
              </footer>
            </article>
          </div>
          <div className='w-full md:w-1/2 lg:w-1/3 xl:w-1/4'>
            <article className='border border-slate-200 rounded-md shadow-sm m-2'>
              <img src={img1} className='w-full'/>
              <div className='text-black py-5 px-3 space-y-3'>
                <p>آموزش ساخت سایت با Tailwimd</p>
                <div className='flex border-b-2 border-b-slate-200 pb-2 '>
                  <VscAccount className='text-slate-400 ml-1'/>
                  <a href='#' className='text-slate-500 text-sm'>سهیل سینایی</a>
                </div>
              </div>
              <footer className='text-black flex justify-between pb-3 '>
                <div className='flex items-center mx-3 space-x-2 space-x-reverse'>
                 <BiAlarm className='text-base mb-1 text-sky-400'/>
                <p>23:34:36</p>
                </div>
                <div className='mx-3'>
                  <h6 className='text-green-600 text-lg'>رایگان</h6>
                </div>
              </footer>
            </article>
          </div>
          <div className='w-full md:w-1/2 lg:w-1/3 xl:w-1/4'>
            <article className='border border-slate-200 rounded-md shadow-sm m-2'>
              <img src={img1} className='w-full'/>
              <div className='text-black py-5 px-3 space-y-3'>
                <p>آموزش ساخت سایت با Tailwimd</p>
                <div className='flex border-b-2 border-b-slate-200 pb-2 '>
                  <VscAccount className='text-slate-400 ml-1'/>
                  <a href='#' className='text-slate-500 text-sm'>سهیل سینایی</a>
                </div>
              </div>
              <footer className='text-black flex justify-between pb-3 '>
                <div className='flex items-center mx-3 space-x-2 space-x-reverse'>
                 <BiAlarm className='text-base mb-1 text-sky-400'/>
                <p>23:34:36</p>
                </div>
                <div className='mx-3'>
                  <h6 className='text-green-600 text-lg'>رایگان</h6>
                </div>
              </footer>
            </article>
          </div>
          <div className='w-full md:w-1/2 lg:w-1/3 xl:w-1/4'>
            <article className='border border-slate-200 rounded-md shadow-sm m-2'>
              <img src={img1} className='w-full'/>
              <div className='text-black py-5 px-3 space-y-3'>
                <p>آموزش ساخت سایت با Tailwimd</p>
                <div className='flex border-b-2 border-b-slate-200 pb-2 '>
                  <VscAccount className='text-slate-400 ml-1'/>
                  <a href='#' className='text-slate-500 text-sm'>سهیل سینایی</a>
                </div>
              </div>
              <footer className='text-black flex justify-between pb-3 '>
                <div className='flex items-center mx-3 space-x-2 space-x-reverse'>
                 <BiAlarm className='text-base mb-1 text-sky-400'/>
                <p>23:34:36</p>
                </div>
                <div className='mx-3'>
                  <h6 className='text-green-600 text-lg'>رایگان</h6>
                </div>
              </footer>
            </article>
          </div>
          <div className='w-full md:w-1/2 lg:w-1/3 xl:w-1/4'>
            <article className='border border-slate-200 rounded-md shadow-sm m-2'>
              <img src={img1} className='w-full'/>
              <div className='text-black py-5 px-3 space-y-3'>
                <p>آموزش ساخت سایت با Tailwimd</p>
                <div className='flex border-b-2 border-b-slate-200 pb-2 '>
                  <VscAccount className='text-slate-400 ml-1'/>
                  <a href='#' className='text-slate-500 text-sm'>سهیل سینایی</a>
                </div>
              </div>
              <footer className='text-black flex justify-between pb-3 '>
                <div className='flex items-center mx-3 space-x-2 space-x-reverse'>
                 <BiAlarm className='text-base mb-1 text-sky-400'/>
                <p>23:34:36</p>
                </div>
                <div className='mx-3'>
                  <h6 className='text-green-600 text-lg'>رایگان</h6>
                </div>
              </footer>
            </article>
          </div>
        </div>
      </section>
    </section>


    {/* Articles */}

    <section className='mb-1 py-10'>
      <header className='container flex flex-col space-y-4 lg:flex-row lg:space-y-0 lg:justify-between'>
        <div className="ps-16 relative">
        <h3 className="font-medium text-black text-lg relative inline-block before:absolute before:top-1/2 before:-translate-y-4 before:translate-x-40  before:left-0 before:rotate-90 before:me-1 before:w-1 before:h-8 before:bg-blue-500 before:rounded-full">
           آخرین مقالات تاپلرن
        </h3>
       </div>
        <div className='text-black font-medium flex items-center space-x-2 space-x-reverse ps-16'>
          <h6>
            مشاهده همه مقالات
          </h6>
          <GoArrowLeft className='text-xl text-sky-500'/>
        </div>
      </header>

      <section className='container'>
        <div className='flex flex-wrap space-y-4 space-y-reverse px-2 mt-10'>
          <div className='w-full md:w-1/2 lg:w-1/3'>
            <article className='border border-slate-200 rounded-md shadow-sm m-2'>
              <img src={blog} className='rounded-md'/>
              <div className='p-5 text-black'>
                <a href='#' className='mb-3 text-sm'>چگونه آموزش ببینیم؟</a>
                <p className='text-sm'>همانطور که از عنوان مقاله مشخص است، صحبت ما روی آموزش یک موضوع خاص مثل آموزش از کتاب، ویدئو یا هر آنچه که برای</p>
              </div>
              <footer className='p-5 border-t text-black flex justify-between'>
                <section className='flex space-x-3 space-x-reverse'>
                <div className='flex items-center text-sm space-x-2 space-x-reverse '>
                  <FaEye className='text-sm text-slate-400 mb-1'/>
                  <p>53</p>
                </div>
                <div className='flex items-center text-sm space-x-2 space-x-reverse '>
                  <SlEnvolopeLetter className='text-sm text-slate-400 mb-1'/>
                  <p>535</p>
                </div>
                </section>
                <section>
                <div className='flex items-center space-x-2 space-x-reverse'>
                <VscAccount className='text-sm text-sky-500'/>
                <p className='text-sm text-sky-500 font-light'>سهیل سینایی</p>
                </div>
                </section>
              </footer>
            </article>
          </div>
          <div className='w-full md:w-1/2 lg:w-1/3'>
            <article className='border border-slate-200 rounded-md shadow-sm m-2'>
              <img src={blog} className='rounded-md'/>
              <div className='p-5 text-black'>
                <a href='#' className='mb-3 text-sm'>چگونه آموزش ببینیم؟</a>
                <p className='text-sm'>همانطور که از عنوان مقاله مشخص است، صحبت ما روی آموزش یک موضوع خاص مثل آموزش از کتاب، ویدئو یا هر آنچه که برای</p>
              </div>
              <footer className='p-5 border-t text-black flex justify-between'>
                <section className='flex space-x-3 space-x-reverse'>
                <div className='flex items-center text-sm space-x-2 space-x-reverse '>
                  <FaEye className='text-sm text-slate-400 mb-1'/>
                  <p>53</p>
                </div>
                <div className='flex items-center text-sm space-x-2 space-x-reverse '>
                  <SlEnvolopeLetter className='text-sm text-slate-400 mb-1'/>
                  <p>535</p>
                </div>
                </section>
                <section>
                <div className='flex items-center space-x-2 space-x-reverse'>
                <VscAccount className='text-sm text-sky-500'/>
                <p className='text-sm text-sky-500 font-light'>سهیل سینایی</p>
                </div>
                </section>
              </footer>
            </article>
          </div>
          <div className='w-full md:w-1/2 lg:w-1/3'>
            <article className='border border-slate-200 rounded-md shadow-sm m-2'>
              <img src={blog} className='rounded-md'/>
              <div className='p-5 text-black'>
                <a href='#' className='mb-3 text-sm'>چگونه آموزش ببینیم؟</a>
                <p className='text-sm'>همانطور که از عنوان مقاله مشخص است، صحبت ما روی آموزش یک موضوع خاص مثل آموزش از کتاب، ویدئو یا هر آنچه که برای</p>
              </div>
              <footer className='p-5 border-t text-black flex justify-between'>
                <section className='flex space-x-3 space-x-reverse'>
                <div className='flex items-center text-sm space-x-2 space-x-reverse '>
                  <FaEye className='text-sm text-slate-400 mb-1'/>
                  <p>53</p>
                </div>
                <div className='flex items-center text-sm space-x-2 space-x-reverse '>
                  <SlEnvolopeLetter className='text-sm text-slate-400 mb-1'/>
                  <p>535</p>
                </div>
                </section>
                <section>
                <div className='flex items-center space-x-2 space-x-reverse'>
                <VscAccount className='text-sm text-sky-500'/>
                <p className='text-sm text-sky-500 font-light'>سهیل سینایی</p>
                </div>
                </section>
              </footer>
            </article>
          </div>
          <div className='w-full md:w-1/2 lg:w-1/3'>
            <article className='border border-slate-200 rounded-md shadow-sm m-2'>
              <img src={blog} className='rounded-md'/>
              <div className='p-5 text-black'>
                <a href='#' className='mb-3 text-sm'>چگونه آموزش ببینیم؟</a>
                <p className='text-sm'>همانطور که از عنوان مقاله مشخص است، صحبت ما روی آموزش یک موضوع خاص مثل آموزش از کتاب، ویدئو یا هر آنچه که برای</p>
              </div>
              <footer className='p-5 border-t text-black flex justify-between'>
                <section className='flex space-x-3 space-x-reverse'>
                <div className='flex items-center text-sm space-x-2 space-x-reverse '>
                  <FaEye className='text-sm text-slate-400 mb-1'/>
                  <p>53</p>
                </div>
                <div className='flex items-center text-sm space-x-2 space-x-reverse '>
                  <SlEnvolopeLetter className='text-sm text-slate-400 mb-1'/>
                  <p>535</p>
                </div>
                </section>
                <section>
                <div className='flex items-center space-x-2 space-x-reverse'>
                <VscAccount className='text-sm text-sky-500'/>
                <p className='text-sm text-sky-500 font-light'>سهیل سینایی</p>
                </div>
                </section>
              </footer>
            </article>
          </div>
          <div className='w-full md:w-1/2 lg:w-1/3'>
            <article className='border border-slate-200 rounded-md shadow-sm m-2'>
              <img src={blog} className='rounded-md'/>
              <div className='p-5 text-black'>
                <a href='#' className='mb-3 text-sm'>چگونه آموزش ببینیم؟</a>
                <p className='text-sm'>همانطور که از عنوان مقاله مشخص است، صحبت ما روی آموزش یک موضوع خاص مثل آموزش از کتاب، ویدئو یا هر آنچه که برای</p>
              </div>
              <footer className='p-5 border-t text-black flex justify-between'>
                <section className='flex space-x-3 space-x-reverse'>
                <div className='flex items-center text-sm space-x-2 space-x-reverse '>
                  <FaEye className='text-sm text-slate-400 mb-1'/>
                  <p>53</p>
                </div>
                <div className='flex items-center text-sm space-x-2 space-x-reverse '>
                  <SlEnvolopeLetter className='text-sm text-slate-400 mb-1'/>
                  <p>535</p>
                </div>
                </section>
                <section>
                <div className='flex items-center space-x-2 space-x-reverse'>
                <VscAccount className='text-sm text-sky-500'/>
                <p className='text-sm text-sky-500 font-light'>سهیل سینایی</p>
                </div>
                </section>
              </footer>
            </article>
          </div>
          <div className='w-full md:w-1/2 lg:w-1/3'>
            <article className='border border-slate-200 rounded-md shadow-sm m-2'>
              <img src={blog} className='rounded-md'/>
              <div className='p-5 text-black'>
                <a href='#' className='mb-3 text-sm'>چگونه آموزش ببینیم؟</a>
                <p className='text-sm'>همانطور که از عنوان مقاله مشخص است، صحبت ما روی آموزش یک موضوع خاص مثل آموزش از کتاب، ویدئو یا هر آنچه که برای</p>
              </div>
              <footer className='p-5 border-t text-black flex justify-between'>
                <section className='flex space-x-3 space-x-reverse'>
                <div className='flex items-center text-sm space-x-2 space-x-reverse '>
                  <FaEye className='text-sm text-slate-400 mb-1'/>
                  <p>53</p>
                </div>
                <div className='flex items-center text-sm space-x-2 space-x-reverse '>
                  <SlEnvolopeLetter className='text-sm text-slate-400 mb-1'/>
                  <p>535</p>
                </div>
                </section>
                <section>
                <div className='flex items-center space-x-2 space-x-reverse'>
                <VscAccount className='text-sm text-sky-500'/>
                <p className='text-sm text-sky-500 font-light'>سهیل سینایی</p>
                </div>
                </section>
              </footer>
            </article>
          </div>
        </div>
      </section>
    </section>
   </main>








   <footer className='bg-sky-800 mb-1'>
    
     <section>
  <div className="lg:flex lg:justify-between items-start px-4 lg:px-28 pt-2 pb-6">

    {/* جستجو (فقط در دسکتاپ) */}
    <div className="hidden lg:flex items-center w-full pe-20 pt-2 space-x-1 space-x-reverse">
      <input
        type="text"
        placeholder="شماره موبایل شما"
        className="w-full px-3 py-2 text-sm text-gray-800 rounded-lg bg-white outline-none focus:ring-2 focus:ring-blue-500"
        aria-label="شماره موبایل شما"
      />
      <input
        type="text"
        placeholder="پست الکترونیکی شما"
        className="w-full px-3 py-2 text-sm text-gray-800 rounded-lg bg-white outline-none focus:ring-2 focus:ring-blue-500"
        aria-label="پست الکترونیکی شما"
      />
      <button 
        className="bg-sky-600 hover:bg-sky-700 text-white px-4 rounded-lg transition"
        aria-label="جستجو"
      >
        جستجو
      </button>
    </div>
    {/* لوگوها */}
    <div className="flex justify-center space-x-4 space-x-reverse mb-6 lg:mb-0 cursor-pointer">
      <img 
        src={logo1} 
        className="h-16 w-16 object-contain bg-white rounded-lg" 
        alt="لوگوی سایت ۱" 
      />
      <img 
        src={logo2} 
        className="h-16 w-16 object-contain bg-white rounded-lg" 
        alt="لوگوی سایت ۲" 
      />
    </div>

    
  </div>
</section>

    <section className='lg:flex justify-between items-start pb-6'>
      <div dir='rtl' className='text-xs hover:text-sky-700 mb-4'>
        <div dir="rtl" className="p-4">
    <ul className="flex flex-wrap gap-3 lg:gap-0 ">
    {[
      "موتور جست و جو",
      "لرن بای",
      "مرجع تخصصی برنامه نویسان",
      "آموزشگاه برنامه نویسان",
      "قالب رایگان",
      "سفارش پروژه",
      "گت ورک و کسب درآمد",
      "قوانین سایت",
      "درباره ما",
      "سوالات متداول",
      "فاماسرور"
    ].map((item, index) => (
      <li key={index} className="flex items-center px-4  min-w-[140px] space-x-1 space-x-reverse">
        <span className="w-3 h-3 bg-blue-500  rounded-full flex-shrink-0"></span>
        <span className="text-gray-800 text-sm font-medium whitespace-nowrap hover:text-white cursor-pointer transition-all duration-200">
          {item}
        </span>
      </li>
    ))}
  </ul>
        </div>
        </div>
       <div className=' flex items-center justify-center text-white text-2xl space-x-5 pt-2  space-x-reverse lg:pe-28 cursor-pointer'>
        <FaInstagram className='bg-slate-500 rounded-full'/>
        <FaTelegramPlane className='bg-slate-500 rounded-full'/>
      </div>
    </section>
    
   </footer>
   <section className='text-black text-xs top-0 lg:text-center lg:top-1'>
     <div>تمامی حقوق مادی و معنوی این سایت متعلق به تاپ لرن می باشد و هرگونه کپی برداری غیرقانونی محسوب خواهد شد</div>
    </section>
     
    
    </>

  )
}


export default App;