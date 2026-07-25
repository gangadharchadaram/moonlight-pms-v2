import PageHeader from "@/shared/components/common/PageHeader";
import GuestStats from "../components/GuestStats";
import GuestToolbar from "../components/GuestToolbar";
import GuestTable from "../components/GuestTable";
import { useGuests } from "../hooks/useGuests";
import { useCreateGuest } from "../hooks/useCreateGuest";
import GuestViewDrawer from "../components/GuestViewDrawer";
import { useUpdateGuest } from "../hooks/useUpdateGuest";
import { useState } from "react";
import GuestDialog from "@/modules/guests/dialog/GuestDialog";

export default function GuestListPage() {

    
  const {
    data,
    isLoading,
  } = useGuests();

  const rows = data ?? [];
  const [openDialog, setOpenDialog] = useState(false);
const [selectedGuest, setSelectedGuest] = useState(null);
const createGuest = useCreateGuest();
const updateGuest = useUpdateGuest();

const [drawerOpen, setDrawerOpen] = useState(false);



const handleSubmit = async (formData) => {
  try {
    if (selectedGuest) {
      await updateGuest.mutateAsync({
        id: selectedGuest.id,
        payload: formData,
      });
    } else {
      await createGuest.mutateAsync(formData);
    }

    setOpenDialog(false);
    setSelectedGuest(null);
  } catch (error) {
    console.error(error);
  }
};

const handleView = (guest) => {
  setSelectedGuest(guest);
  setDrawerOpen(true);
};

  const handleEdit = (guest) => {
    console.log("Edit", guest);
  };

  const handleDelete = (guest) => {
    console.log("Delete", guest);
  };

  return (
    <>
      <PageHeader
        title="Guest Management"
        subtitle="Manage all hotel guests"
      />

      <GuestStats />

<GuestToolbar
    onAddGuest={() => {
        setSelectedGuest(null);
        setOpenDialog(true);
    }}
/>

<GuestDialog
  open={openDialog}
  guest={selectedGuest}
  onClose={() => setOpenDialog(false)}
  onSubmit={handleSubmit}
/>
      <GuestTable
        rows={rows}
        loading={isLoading}
        onView={handleView}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
      <GuestViewDrawer
    open={drawerOpen}
    guest={selectedGuest}
    onClose={() => setDrawerOpen(false)}
/>
    </>
  );
}