import React, { useState } from "react";
import CrudPageLayout from "@/shared/components/crud/CrudPageLayout";
import CrudToolbar from "@/shared/components/crud/CrudToolbar";

import RoomTable from "../components/RoomTable";
import { useRooms } from "../hooks/useRooms";

const RoomsPage = () => {
  const { data, isLoading } = useRooms();

  const [selectedRoom, setSelectedRoom] = useState(null);

  const handleView = (room) => {
    setSelectedRoom(room);
    console.log("View", room);
  };

  const handleEdit = (room) => {
    setSelectedRoom(room);
    console.log("Edit", room);
  };

  const handleDelete = (room) => {
    setSelectedRoom(room);
    console.log("Delete", room);
  };

  return (
    <CrudPageLayout
      title="Rooms"
      subtitle="Manage hotel rooms"
    >
      <CrudToolbar />

      <RoomTable
        rooms={data?.data ?? []}
        loading={isLoading}
        onView={handleView}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </CrudPageLayout>
  );
};

export default RoomsPage;