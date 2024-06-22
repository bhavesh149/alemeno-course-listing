import React, { useState, useEffect } from 'react';
import Hero from "../components/Hero";
import CoursesList from "../components/CourseList"
import CategoriesList from "../components/CategoriesList";
import Navbar from "../components/Navbar";
import { useCoursesContext } from '../context/courses_context';
import Footer from '../components/Footer';

const HomePage = () => {
  const { courses } = useCoursesContext();
  const [filteredCourses, setFilteredCourses] = useState(courses);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    if (searchTerm) {
      const lowerCaseTerm = searchTerm.toLowerCase();
      const filtered = courses.filter(course => 
        course.course_name.toLowerCase().includes(lowerCaseTerm) ||
        course.creator.toLowerCase().includes(lowerCaseTerm)
      );
      setFilteredCourses(filtered);
    } else {
      setFilteredCourses(courses);
    }
  }, [searchTerm, courses]);

  return (
    <div className='holder'>
      <Navbar onSearch={setSearchTerm} />
      <Hero />
      <CoursesList courses={filteredCourses} />
      <CategoriesList />
      <Footer />
    </div>
  );
}

export default HomePage;
