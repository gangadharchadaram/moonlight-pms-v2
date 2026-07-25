import { useState, useEffect } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Tabs,
  Tab,
  Box,
} from "@mui/material";

import PersonalTab from "./PersonalTab";
import ContactTab from "./ContactTab";
import AddressTab from "./AddressTab";
import IdentityTab from "./IdentityTab";
import PreferenceTab from "./PreferenceTab";

const initialForm = {
  guestCode: "",
firstName: "",
middleName: "",
lastName: "",
gender: "",
birthDate: "",
age: "",
tag: "",
source: "",

phone: "",
alternatePhone: "",
email: "",

emergencyContactName: "",
emergencyContactPhone: "",

address: "",
city: "",
state: "",
zip: "",
country: "",

idType: "",
idNumber: "",
idExpiry: "",
nationality: "",

otaBookingNumber: "",
loyaltyNumber: "",

vip: false,
repeatGuest: false,

notes: "",
};

export default function GuestDialog({
  open,
  onClose,
  onSubmit,
  guest = null,
}) {
  const [tab, setTab] = useState(0);
  const [formData, setFormData] = useState(initialForm);

  useEffect(() => {
    if (guest) {
      setFormData({
        ...initialForm,
        ...guest,
      });
    } else {
      setFormData(initialForm);
    }

    setTab(0);
  }, [guest, open]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSave = () => {
    onSubmit(formData);
  };

  const nextTab = () => {
    if (tab < 4) setTab(tab + 1);
  };

  const previousTab = () => {
    if (tab > 0) setTab(tab - 1);
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="lg"
      fullWidth
    >
      <DialogTitle>
        {guest ? "Edit Guest" : "Add New Guest"}
      </DialogTitle>

      <Tabs
        value={tab}
        onChange={(e, value) => setTab(value)}
        variant="scrollable"
      >
        <Tab label="Personal" />
        <Tab label="Contact" />
        <Tab label="Address" />
        <Tab label="Identity" />
        <Tab label="Preferences" />
      </Tabs>

      <DialogContent dividers>
        <Box sx={{ mt: 2 }}>
          {tab === 0 && (
            <PersonalTab
              formData={formData}
              handleChange={handleChange}
            />
          )}

          {tab === 1 && (
            <ContactTab
              formData={formData}
              handleChange={handleChange}
            />
          )}

          {tab === 2 && (
            <AddressTab
              formData={formData}
              handleChange={handleChange}
            />
          )}

          {tab === 3 && (
            <IdentityTab
              formData={formData}
              handleChange={handleChange}
            />
          )}

          {tab === 4 && (
            <PreferenceTab
              formData={formData}
              handleChange={handleChange}
            />
          )}
        </Box>
      </DialogContent>

      <DialogActions>
        <Button onClick={onClose}>
          Cancel
        </Button>

        {tab > 0 && (
          <Button onClick={previousTab}>
            Previous
          </Button>
        )}

        {tab < 4 ? (
          <Button
            variant="contained"
            onClick={nextTab}
          >
            Next
          </Button>
        ) : (
          <Button
            variant="contained"
            onClick={handleSave}
          >
            {guest ? "Update Guest" : "Save Guest"}
          </Button>
        )}
      </DialogActions>
    </Dialog>
  );
}