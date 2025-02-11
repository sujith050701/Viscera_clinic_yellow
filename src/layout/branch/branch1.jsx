import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
  Card,
  CardContent,
  Typography,
  Grid,
  Button,
  Container,
  Box,
  Divider,
} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";

const branches = [
  {
    id: 1,
    name: "Madurai Branch",
    address: "No.29Aa, Vaithiyanathapuram, Ellis Nagar, SS colony, Madurai, Tamil Nadu, India - 625016",
    timings: "10 AM to 8 PM",
    days: "Monday, Tuesday, Thursday, Friday (All weeks)",
  },
  {
    id: 4,
    name: "Chennai Branch",
    address: "Golden Jubilee Flats, 162/9, Padikuppam Road, Annanagar West, Chennai, Tamil Nadu, India - 600040",
    timings: "10 AM to 8 PM",
    days: "Saturday and Sunday",
  },
  {
    id: 2,
    name: "Trichy Branch",
    address: "Kalpana Lodge, Central Bus Stand Opp., Trichy, Tamil Nadu, India - 620001",
    timings: "10 AM to 8 PM",
    days: "Wednesday (All weeks)",
  },
  {
    id: 3,
    name: "Coimbatore Branch",
    address: "Haripriya Hotel, Railway Junction Opp., Coimbatore, Tamil Nadu, India - 641018",
    timings: "10 AM to 8 PM",
    days: "Wednesday (Alternate weeks)",
  },
  {
    id: 5,
    name: "Kerala Branch",
    address: "Specific location not provided",
    timings: "10 AM to 8 PM",
    days: "Saturday and Sunday (Alternate weeks)",
  },
];

const HospitalBranches = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const handleContactClick = (branchId) => {
    // Use a single phone number for all branches
    const phoneNumber = "+918925168697"; // Updated to a single number
    window.location.href = `tel:${phoneNumber}`; // This should open the dialer with the number
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>

      {/* Page Header */}
      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Box textAlign="center" mb={6}>
          <Typography
            variant="h3"
            component="h1"
            gutterBottom
            sx={{
              fontWeight: "bold",
              background: "linear-gradient(rgba(206, 197, 22, 0.7), rgba(190, 182, 47, 0.85))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Our Clinic Branches
          </Typography>
          <Typography variant="h6" color="text.secondary" sx={{ maxWidth: "700px", mx: "auto" }}>
            Experience quality healthcare services at multiple locations tailored to your needs.
          </Typography>
        </Box>

        {/* Branch Details */}
        <Grid container spacing={4}>
          {branches.map((branch) => (
            <Grid item xs={12} sm={6} md={4} key={branch.id}>
              <Card
                sx={{
                  height: '400px',
                  border: "1px solid rgba(39, 84, 142, 0.4)",
                  borderRadius: 2,
                  boxShadow: "none",
                  transition: "0.3s",
                  "&:hover": {
                    boxShadow: 6,
                    transform: "translateY(-5px)",
                  },
                }}
              >
                <CardContent>
                  {/* Branch Name */}
                  <Typography
                    variant="h5"
                    component="h2"
                    sx={{
                      fontWeight: "bold",
                      color: "rgba(39, 84, 142, 0.9)",
                      mb: 2,
                    }}
                  >
                    {branch.name}
                  </Typography>

                  {/* Address Section */}
                  <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                    <LocationOnIcon sx={{ mr: 1, color: "rgba(39, 84, 142, 0.9)" }} />
                    <Typography variant="body2" color="text.secondary">
                      {branch.address}
                    </Typography>
                  </Box>

                  <Divider sx={{ my: 2 }} />

                  {/* Timings Section */}
                  <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                    <AccessTimeIcon sx={{ mr: 1, color: "rgba(39, 84, 142, 0.9)" }} />
                    <Typography variant="body2" color="text.secondary">
                      <strong>Timings:</strong> {branch.timings}
                    </Typography>
                  </Box>

                  <Divider sx={{ my: 2 }} />

                  {/* Days Section */}
                  <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                    <CalendarTodayIcon sx={{ mr: 1, color: "rgba(39, 84, 142, 0.9)" }} />
                    <Typography variant="body2" color="text.secondary">
                      <strong>Available:</strong> {branch.days}
                    </Typography>
                  </Box>

                  {/* Contact Button */}
                  <Button
                    variant="contained"
                    fullWidth
                    sx={{
                      mt: 3,
                      background: "linear-gradient(rgba(206, 197, 22, 0.7), rgba(190, 182, 47, 0.85))",
                      color: "white",
                      "&:hover": {
                        background: "rgba(39, 84, 142, 0.9)",
                      },
                    }}
                    onClick={() => handleContactClick(branch.id)}
                  >
                    Contact Branch
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default HospitalBranches;
