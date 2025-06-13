import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { InputText } from "primereact/inputtext";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import UserDetailsPopup from "./UserDetailsPopup";

export default function AdminDashboard({ users, onLogout }) {
  const navigate = useNavigate();
  const students = users.filter((u) => u.userType === "student");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedUser, setSelectedUser] = useState(null);

  const filtered = students.filter(
    (u) =>
      u.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
      u.subjects.join(",").toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleLogout = () => {
    onLogout();
    navigate("/");
  };

  const actionBodyTemplate = (rowData) => (
    <Button
      icon="pi pi-eye"
      label="View"
      className="p-button-sm p-button-outlined p-button-info"
      onClick={() => setSelectedUser(rowData)}
    />
  );

  const header = (
    <div className="flex justify-content-between align-items-center">
      <h2 className="m-0 text-primary">📚 Admin Dashboard</h2>
      <div className="flex gap-2 align-items-center">
        <span className="p-input-icon-left input-search mr-2">
          <i className="pi pi-search" />
          <InputText
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search"
            className="p-inputtext-sm"
          />
        </span>
        <Button
          icon="pi pi-sign-out"
          label="Logout"
          className="p-button-sm p-button-danger"
          onClick={handleLogout}
        />
      </div>
    </div>
  );

  const subjectBodyTemplate = (rowData) => (
    <div>
      {rowData.subjects.map((subj, i) => (
        <span key={i} className="p-tag p-tag-rounded p-tag-secondary mr-1 mb-1">
          {subj}
        </span>
      ))}
    </div>
  );

  return (
    <div className="p-4 surface-ground min-h-screen">
      <div className="card shadow-3 border-round-xl p-4">
        {header}

        <DataTable
          value={filtered}
          paginator
          rows={5}
          className="mt-4"
          emptyMessage="No students found."
          responsiveLayout="scroll"
        >
          <Column field="username" header="👤 Name" sortable />
          <Column field="email" header="📧 Email" sortable />
          <Column header="📘 Subjects" body={subjectBodyTemplate} />
          <Column header="🔍 Details" body={actionBodyTemplate} />
        </DataTable>
      </div>

      <Dialog
        header="👨‍🎓 Student Details"
        visible={!!selectedUser}
        onHide={() => setSelectedUser(null)}
        style={{ width: "400px" }}
        className="p-fluid"
        modal
      >
        {selectedUser && <UserDetailsPopup user={selectedUser} />}
      </Dialog>
    </div>
  );
}
