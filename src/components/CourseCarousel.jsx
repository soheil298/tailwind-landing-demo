// src/components/CourseCarousel.jsx
import { useEffect, useRef } from 'react';
import $ from 'jquery';

const CourseCarousel = ({ courses }) => {
  const carouselRef = useRef(null);

  useEffect(() => {
    if (carouselRef.current) {
      $(carouselRef.current).owlCarousel({
        loop: false,
        margin: 16,
        nav: true,
        dots: false,
        rtl: true, // مهم برای فارسی!
        responsive: {
          0: {
            items: 1
          },
          640: {
            items: 2
          },
          1024: {
            items: 3
          },
          1280: {
            items: 4
          }
        }
      });
    }

    return () => {
      if (carouselRef.current) {
        try {
          $(carouselRef.current).trigger('destroy.owl.carousel');
        } catch (e) {}
      }
    };
  }, [courses]);

  return (
    <div className="owl-carousel owl-theme" ref={carouselRef}>
      {courses.map((course, index) => (
        <div key={index} className="item">
          <article className='border border-slate-200 rounded-md shadow-sm'>
            <img src={course.img} alt={course.title} className='w-full' />
            <div className='text-black py-5 px-3 space-y-3'>
              <p>{course.title}</p>
              <div className='flex border-b-2 border-b-slate-200 pb-2'>
                <VscAccount className='text-slate-400 ml-1' />
                <a href='#' className='text-slate-500 text-sm'>{course.teacher}</a>
              </div>
            </div>
            <footer className='text-black flex justify-between pb-3 px-3'>
              <div className='flex items-center space-x-2 space-x-reverse'>
                <BiAlarm className='text-base mb-1 text-sky-400' />
                <p>{course.duration}</p>
              </div>
              <div>
                <h6 className='text-green-600 text-lg'>{course.price}</h6>
              </div>
            </footer>
          </article>
        </div>
      ))}
    </div>
  );
};

export default CourseCarousel;