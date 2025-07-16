import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { blog_data } from "../assets/assets";
import Navbar from "../components/Navbar";

const Blogs = () => {
  const { id } = useParams();
  const [data, setdata] = useState(null);
  const fetchBlogData = async () => {
    blog_data.find((item) => item._id === id);
    setdata(data);
  };
  useEffect(() => {
    fetchBlogData();
  }, []);
  return data ? (
    <div>
      <Navbar/>
      <div></div>
      <div></div>
    </div>
  ) : (
    <div>Loading...</div>
  );
};

export default Blogs;
