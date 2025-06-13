import React from 'react';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import SchoolLogo from '../Logo/School_logo_img.png'
import SchoolBackgroundImg from '../Logo/school_background_img.png'
import { useNavigate } from 'react-router-dom';
export default function LandingPage() {
  const navigate = useNavigate();
  return (
    <div className="surface-ground min-h-screen flex flex-column justify-content-between"  style={{
        backgroundImage: `url(${SchoolBackgroundImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}>
 
      <div className="p-3 flex align-items-center justify-content-between" style={{ backgroundColor: "#e0f2fe" }}>
        <div className="flex align-items-center">
          <img src={SchoolLogo}alt="School Logo" style={{ height: "50px", marginRight: "1rem" }} />
          <h2 className="m-0 text-primary">School Data Management</h2>
        </div>
        <Button label="Login" icon="pi pi-sign-in" className="p-button-sm p-button-primary" onClick={() => navigate("/login")} />
      </div>

   
      <div className="p-6 flex flex-column align-items-center justify-content-center text-center" style={{ background: 'linear-gradient(120deg, #dbeafe, #bfdbfe)' }}>
        <h1 className="text-5xl font-bold text-primary mb-3">Welcome to Your School System</h1>
        <p className="text-lg text-secondary mb-4">Manage student data, admin access, and subjects with ease.</p>
        <Button label="Get Started" icon="pi pi-arrow-right" className="p-button-lg p-button-secondary" onClick={() => navigate("/login")} />
      </div>

   
      <div className="p-5 grid grid-nogutter justify-content-center">
        <div className="col-12 md:col-4 p-3">
          <Card title="Role-based Access" className="shadow-2">
            <p>Admins and students get personalized access to features.</p>
          </Card>
        </div>
        <div className="col-12 md:col-4 p-3">
          <Card title="Student Records" className="shadow-2">
            <p>View subjects, academic details, and status in real-time.</p>
          </Card>
        </div>
        <div className="col-12 md:col-4 p-3">
          <Card title="Admin Tools" className="shadow-2">
            <p>Search, update, and monitor student details quickly.</p>
          </Card>
        </div>
      </div>

   
      <div className="p-3 bg-primary text-white text-sm text-center">
        © {new Date().getFullYear()} School Data Management System. All rights reserved.
      </div>
    </div>
  );
}
