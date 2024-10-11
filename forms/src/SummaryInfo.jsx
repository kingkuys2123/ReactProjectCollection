import Grid from '@mui/material/Grid2';
import { styled } from '@mui/system';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import React, { useState } from 'react';

const FormGrid = styled(Grid)(() => ({
    display: 'flex',
    flexDirection: 'column',
}));

export default function SummaryInfo() {
    const location = useLocation();
    const [personalInfo, setPersonalInfo] = useState(location.state);

    let v = useNavigate();
    return (
        <>
            <Grid container spacing={3} sx={{ textAlign: 'left' }}>
                <FormGrid size={{ xs: 12, md: 12 }}>
                    <Typography variant="h4" gutterBottom>
                        Personal Information
                    </Typography>
                </FormGrid>
                <Grid item xs={12} md={6}>
                    <Typography variant="body1"><strong>Name:</strong> {personalInfo.firstName} {personalInfo.lastName}</Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Typography variant="body1"><strong>Gender:</strong> {personalInfo.gender}</Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Typography variant="body1"><strong>Birthday:</strong> {personalInfo.birthday}</Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Typography variant="body1"><strong>Address:</strong> {personalInfo.address}</Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Typography variant="body1"><strong>Zipcode:</strong> {personalInfo.zip}</Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Typography variant="body1"><strong>City:</strong> {personalInfo.city}</Typography>
                </Grid>

                <FormGrid size={{ xs: 12, md: 12 }}>
                    <Typography variant="h4" gutterBottom>
                        Educational Background
                    </Typography>
                </FormGrid>
                <Grid item xs={12} md={6}>
                    <Typography variant="body1"><strong>Elementary School:</strong> {personalInfo.elementarySchoolName}</Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Typography variant="body1"><strong>Address:</strong> {personalInfo.elementarySchoolAddress}</Typography>
                </Grid>
                <Box sx={{ width: '100%' }} />
                <Grid item xs={12} md={6}>
                    <Typography variant="body1"><strong>Highschool:</strong> {personalInfo.highschoolName}</Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Typography variant="body1"><strong>Address:</strong> {personalInfo.highschoolAddress}</Typography>
                </Grid>
                <Box sx={{ width: '100%' }} />
                <Grid item xs={12} md={6}>
                    <Typography variant="body1"><strong>College:</strong> {personalInfo.collegeName}</Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Typography variant="body1"><strong>Address:</strong> {personalInfo.collegeAddress}</Typography>
                </Grid>
                <Box sx={{ width: '100%' }} />

                <FormGrid size={{ xs: 12, md: 12 }}>
                    <Typography variant="h4" gutterBottom>
                        Skills and Training
                    </Typography>
                </FormGrid>
                <Grid item xs={12} md={6}>
                    <Typography variant="body1"><strong>Skill One:</strong> {personalInfo.skill1}</Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Typography variant="body1"><strong>Skill Two:</strong> {personalInfo.skill2}</Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Typography variant="body1"><strong>Skill Three:</strong> {personalInfo.skill3}</Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Typography variant="body1"><strong>Training One:</strong> {personalInfo.training1}</Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Typography variant="body1"><strong>Training Two:</strong> {personalInfo.training2}</Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Typography variant="body1"><strong>Training Three:</strong> {personalInfo.training3}</Typography>
                </Grid>
            </Grid>

            <br />
            <br />
            <Box
                sx={[
                    {
                        display: 'flex',
                        flexDirection: { xs: 'column-reverse', sm: 'row' },
                        alignItems: 'end',
                        flexGrow: 1,
                        gap: 1,
                        pb: { xs: 12, sm: 0 },
                        mt: { xs: 2, sm: 0 },
                        mb: '60px',
                    },
                ]}
            >
                <Button
                    variant="text"
                    sx={{ display: { xs: 'none', sm: 'flex' } }}
                    onClick={() => {
                        v("/skilltr", { state: personalInfo });
                    }}
                >
                    Previous
                </Button>
            </Box>
        </>
    );
}