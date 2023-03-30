import React from 'react'
import Card from './Card';
import { useState } from 'react';
function Cards(props) {
    let courses=props.courses;
    let category=props.category;
    const [likedCourses,setLikedCourses]=useState([]);

    // console.log("printing courses data"); 
    // console.log(courses);
    function getCourses() {
        if(category==="All")
        {
            let allCourses = [];
            Object.values(courses).forEach(array => {
              array.forEach((courseData) => {
                allCourses.push(courseData);
              })
            });
            console.log("returning all courses")
            return allCourses;
        }
        else{
            //main sirf specific category ka data array krunga
            return courses[category];
        }

    }
  return (
    <div className="flex flex-wrap justify-center gap-4 mb-4">
      {getCourses().map((course) => {
        return (
          <Card
            key={course.id}
            course={course}
            likedCourses={likedCourses}
            setLikedCourses={setLikedCourses}
          />
        );
      })}
    </div>
  );}
export default Cards
