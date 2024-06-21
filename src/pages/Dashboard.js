import React, { useState } from "react";
import styled from "styled-components";
import { useCartContext } from "../context/cart_context";
import Course from "../components/Course"; // Make sure to adjust the import path if necessary
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Dashboard = () => {
  const { cart } = useCartContext();
  const [completedCourses, setCompletedCourses] = useState([]);

  const handleCompleteCourse = (id) => {
    setCompletedCourses([...completedCourses, id]);
  };

  return (
    <>
      <Navbar />
      <DashboardWrapper>
        <div className="container">
          <h2>User Dashboard</h2>

          <div className="section">
            <h3>Purchased Courses</h3>
          </div>

          <div className="section">
            {cart.length > 0 ? (
              <div className="courses">
                {cart.map((item) => (
                  <Course
                    key={item.id}
                    {...item}
                    isCompleted={completedCourses.includes(item.id)}
                    onCompleteCourse={handleCompleteCourse}
                    isDashboard={true}
                  />
                ))}
              </div>
            ) : (
              <p>No items in the cart.</p>
            )}
          </div>
        </div>
      </DashboardWrapper>
      <Footer />
    </>
  );
};

const DashboardWrapper = styled.div`
  padding: 40px 0;

  .container {
    width: 80%;
    margin: 0 auto;
    
  }

  h2 {
    text-align: center;
    margin-bottom: 20px;
  }

  .section {
    margin-bottom: 40px;
  }

  h3 {
    margin-bottom: 10px;
  }

  .courses {
    display: grid;
    gap: 26px;
    grid-template-columns: repeat(1, 1fr);

    @media screen and (min-width: 600px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media screen and (min-width: 992px) {
      grid-template-columns: repeat(3, 1fr);
    }

    @media screen and (min-width: 1400px) {
      grid-template-columns: repeat(4, 1fr);
    }
  }
`;

export default Dashboard;
