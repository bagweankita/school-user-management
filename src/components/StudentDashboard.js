import React from "react";
import { Card } from "primereact/card";
import { Tag } from "primereact/tag";
import { Avatar } from "primereact/avatar";
import { Divider } from "primereact/divider";
import { Button } from "primereact/button";
import { FaUser, FaEnvelope, FaGraduationCap, FaBook, FaSignOutAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function StudentDashboard({ user,onLogout }) {

  const navigate = useNavigate();


  const handleLogout = () => {
    onLogout();
    navigate("/");
  };

  return (
    <div className="flex justify-content-center mt-5">
      <Card className="w-full sm:w-30rem shadow-3 border-round-2xl">
        <div className="flex flex-column align-items-center text-center gap-3">
          <Avatar
            label={user.username.charAt(0).toUpperCase()}
            size="xlarge"
            className="bg-primary text-white"
          />
          <h2 className="mt-2">Welcome, {user.username}!</h2>
        </div>

        <Divider />

        <div className="p-3">
          <p className="mb-3 flex align-items-center gap-2">
            <FaUser className="text-primary" />
            <strong>Name:</strong> {user.username}
          </p>
          <p className="mb-3 flex align-items-center gap-2">
            <FaEnvelope className="text-primary" />
            <strong>Email:</strong> {user.email}
          </p>
          <p className="mb-3 flex align-items-center gap-2">
            <FaGraduationCap className="text-primary" />
            <strong>Standard:</strong> {user.standard}
          </p>
          <p className="mb-2 flex align-items-center gap-2">
            <FaBook className="text-primary" />
            <strong>Subjects:</strong>
          </p>
          <div className="flex flex-wrap gap-2 mt-1 mb-4">
            {user.subjects.map((subject, index) => (
              <Tag key={index} value={subject} severity="info" className="text-sm" />
            ))}
          </div>

          <Button
            label="Logout"
            icon={<FaSignOutAlt />}
            className="p-button-danger p-button-sm w-full"
            onClick={handleLogout}
          />
        </div>
      </Card>
    </div>
  );
}
