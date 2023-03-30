import React from "react";
import { FcLike,FcLikePlaceholder } from "react-icons/fc";
import { toast } from "react-toastify";

function Card(props) {
  let course = props.course;
  let likedCourses=props.likedCourses;
  let setLikedCourses=props.setLikedCourses;

function clickHandler()
{
  //logic
  if(likedCourses.includes(course.id))
  {
    //pehle se like hua pada hai
    setLikedCourses( (prev)=>prev.filter( (cid)=>(cid!==course.id)));
    toast.warning("like removed");
  }
  else{
    //course pehle se unliked h
    //insert the course into liked course
    if(likedCourses.length===0)
    {
      setLikedCourses([course.id]);
    }
    else{
      //non empty pehle se
      setLikedCourses( (prev)=>[...prev,course.id]);
    }
    toast.success("Liked successfully")
  }
}

  return (
    <div
      className="w-[300px] bg-bgDark 
    rounded-md bg-opacity-80 overflow-hidden "
    >
      <div className="relative ">
        <img src={course.image.url} alt={`Course Thumbnail`} />

        <div
          className="rounded-full bg-white w-[40px] h-[40px] 
        flex justify-center items-center absolute right-2 -bottom-1"
        >
          <button onClick={clickHandler}>
            {likedCourses.includes(course.id) ? (
              <FcLike fontSize="1.75rem" />
            ) : (
              <FcLikePlaceholder fontSize="1.75rem" />
            )}
          </button>
        </div>
      </div>
      <div className="px-3 my-2">
        <p className="text-white font-semibold text-lg leading-6">
          {course.title}
        </p>
        <p className="mt-2 text-white">
        {
          course.description.length>100 ? 
          (course.description.substr(0,100))+"..." :
          (course.description)

        }</p>
      </div>
    </div>
  );
}

export default Card;