import React, { useState } from "react";
import {
  Box,
  TextField,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Pagination,
} from "@mui/material";



const LeadsTable = ({ data }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [page, setPage] = useState(1);

  const rowsPerPage = 6; // ✅ Now shows 6 rows per page

  const filteredLeads = data.filter((lead) => {
    const matchesSearch =
      lead.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lead.country.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus =
      statusFilter === "All" || lead.status.toLowerCase() === statusFilter.toLowerCase();

    return matchesSearch && matchesStatus;
  });

  const pageCount = Math.ceil(filteredLeads.length / rowsPerPage);
  const paginatedLeads = filteredLeads.slice(
    (page - 1) * rowsPerPage,
    page * rowsPerPage
  );

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  return (
    <Box>
      {/* Filters */}
      <Box
        display="flex"
        justifyContent="flex-start"
        alignItems="center"
        gap={2}
        mb={2}
      >
        <TextField
          label="Search"
          variant="outlined"
          size="small"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setPage(1);
          }}
        />

        <FormControl variant="outlined" size="small" sx={{ minWidth: 150 }}>
          <InputLabel>Status</InputLabel>
          <Select
            value={statusFilter}
            onChange={(e) => {
              setStatusFilter(e.target.value);
              setPage(1);
            }}
            label="Status"
          >
            <MenuItem value="All">All</MenuItem>
            <MenuItem value="Pending">Pending</MenuItem>
            <MenuItem value="Reached Out">Reached Out</MenuItem>
          </Select>
        </FormControl>
      </Box>

      {/* Table */}
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell><strong>Name <i className="ri-arrow-down-line" style={{ fontSize: '14px', verticalAlign: 'middle' }}></i></strong></TableCell>
              <TableCell><strong>Submitted<i className="ri-arrow-down-line" style={{ fontSize: '14px', verticalAlign: 'middle' }}></i></strong></TableCell>
              <TableCell><strong>Status<i className="ri-arrow-down-line" style={{ fontSize: '14px', verticalAlign: 'middle' }}></i></strong></TableCell>
              <TableCell><strong>Country<i className="ri-arrow-down-line" style={{ fontSize: '14px', verticalAlign: 'middle' }}></i> </strong></TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {paginatedLeads.length > 0 ? (
              paginatedLeads.map((lead, index) => (
                <TableRow key={index}>
                  <TableCell>{lead.name}</TableCell>
                  <TableCell>{lead.submitted}</TableCell>
                  <TableCell>{lead.status}</TableCell>
                  <TableCell>{lead.country}</TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={4} align="center">
                  No results found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>

   {pageCount > 1 && (
  <Box display="flex" justifyContent="flex-end" mt={2}>
    <Pagination
      count={pageCount}
      page={page}
      onChange={handlePageChange}
      
      size="small"
      sx={{
        '& .Mui-selected': {
          border: '2px solid black',
           // only selected item gets black border
               borderRadius: 0, // make it square
          backgroundColor: 'white',  // optional: background white
          color: 'black',           
        },
      }}
    />
  </Box>
)}


      <br />
    </Box>
    
  );
};

export default LeadsTable;
