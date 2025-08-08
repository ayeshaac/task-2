import React from "react";
import { Box } from "@mui/material";
import Sidebar from "../components/Sidebar";
import LeadsTable from "../components/LeadsTable";
import leadsData from "../data/leads.json";

const LeadsPage = () => {
  return (
    <Box display="flex" height="100vh">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <Box flex={1} p={4}  bgcolor="#fafafa">
        <h2>Leads</h2>
        <LeadsTable data={leadsData} />
      </Box>
    </Box>
  );
};

export default LeadsPage;
