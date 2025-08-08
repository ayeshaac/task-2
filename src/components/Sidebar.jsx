import React from "react";
import { Box, Typography, List, ListItem, ListItemText, Avatar } from "@mui/material";

const Sidebar = () => {
  return (
    <Box
      width="220px"
      height="100vh"
      bgcolor="#f7f7f7"
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      px={2}
      py={3}
      boxShadow="2px 0 5px rgba(0,0,0,0.05)"
    >
        

      {/* Top Section */}
      <Box>
        <Typography variant="h5" fontWeight="bold" mb={9}  style={{ marginLeft: '10px', fontSize: '2rem' }}>
          almà
        </Typography>

        <List>
          <ListItem button>
            <ListItemText primary="Leads" 
              primaryTypographyProps={{ fontWeight: 'bold' }}
            />
             
          </ListItem>
          <ListItem button>
            <ListItemText primary="Settings" />
          </ListItem>
        </List>
      </Box>

      {/* Bottom Section */}
      <Box display="flex" alignItems="center" gap={1}>
        <Avatar 
  style={{ marginTop: '-100px', color: '#000' }} 
  sx={{ bgcolor: 'lightgray' }}
>
  A
</Avatar>
       <Typography style={{ marginTop: '-100px' }}>Admin</Typography>

      </Box>
    </Box>
  );
};

export default Sidebar;
