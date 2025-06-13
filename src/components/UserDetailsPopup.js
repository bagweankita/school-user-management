import React from "react";
import { Tag } from "primereact/tag";
import { Divider } from "primereact/divider";

export default function UserDetailsPopup({ user }) {
  return (
    <div className="p-2">
      <div className="mb-3">
        <h3 className="text-primary">👤 {user.username}</h3>
        <p className="text-sm text-color-secondary m-0">{user.email}</p>
      </div>

      <Divider />

      <div className="mb-2">
        <strong>🎓 Standard:</strong> <span className="ml-2">{user.standard}</span>
      </div>
      <div className="mb-2">
        <strong>🗣 Language:</strong> <span className="ml-2">{user.language}</span>
      </div>
      <div className="mb-2">
        <strong>🏠 Address:</strong> <span className="ml-2">{user.address}</span>
      </div>
      <div className="mb-2">
        <strong>📘 Subjects:</strong>
        <div className="mt-1 flex flex-wrap gap-2">
          {user.subjects.map((subject, index) => (
            <Tag key={index} value={subject} severity="info" rounded />
          ))}
        </div>
      </div>
    </div>
  );
}
