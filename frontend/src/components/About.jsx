import React from "react";

const About = () => {
  return (
    <div className="h-screen bg-blue-200 flex items-center flex-col ">
      <div className="  text-5xl font-bold z-10 mt-20"> About Section</div>
      
      <ul className="mt-4 text-2xl py-3 px-4">
        <li>Welcome to Book Haven, where the world of literature comes to life. Since 1995, we've been your gateway to a universe of stories, knowledge, and imagination</li>
        <li> What started as a small, cozy shop has grown into the literary treasure trove you see today. Our journey has been a delightful adventure, filled with the joy of sharing remarkable stories with our community.</li>
        <li>At Book Haven, we curate an eclectic collection of books spanning every genre and interest. Whether you're a fan of thrilling mysteries, heartwarming romances, thought-provoking non-fiction, or enchanting children's tales, we have a book that's just waiting to become your new favorite.</li>
      </ul>
    </div>
  );
};

export default About;
