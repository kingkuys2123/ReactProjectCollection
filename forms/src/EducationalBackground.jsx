import FormLabel from '@mui/material/FormLabel';
import Grid from '@mui/material/Grid2';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormHelperText from '@mui/material/FormHelperText';

import { styled } from '@mui/system';
import React, { useState } from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

import { useLocation } from 'react-router-dom';

const FormGrid = styled(Grid)(() => ({
    display: 'flex',
    flexDirection: 'column',
}));

const steps = ['Shipping address', 'Payment details', 'Review your order'];

export default function EducationalBackground() {
    const location = useLocation();

    const [personalInfo, setPersonalInfo] = useState(location.state);

    const [errors, setErrors] = useState({});

    let navigate = useNavigate();

    const [activeStep, setActiveStep] = useState(1);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setPersonalInfo({
            ...personalInfo,
            [name]: value,
        });
        setErrors({
            ...errors,
            [name]: value ? '' : 'This field is required',
        });
    };

    const validateInputs = () => {
        const newErrors = {};
        const requiredFields = [
            'elementarySchoolName',
            'elementarySchoolAddress',
            'highschoolName',
            'highschoolAddress',
            'collegeName',
            'collegeAddress',
        ];

        requiredFields.forEach((field) => {
            if (!personalInfo[field]) {
                newErrors[field] = 'This field is required';
            }
        });

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleNextClick = () => {
        if (validateInputs()) {
            navigate("/skilltr", { state: personalInfo });
        }
    };

    return (
        <>
            <Grid container spacing={3} sx={{ textAlign: 'left' }}>
                <FormGrid size={{ xs: 12 }}>
                    <h1>Educational Background</h1>
                </FormGrid>
                
                <FormGrid size={{ xs: 12, md: 12 }}>
                    <h2>Elementary</h2>
                </FormGrid>
                <FormGrid size={{ xs: 12, md: 6 }}>
                    <FormLabel htmlFor="elementary" required>
                        School Name
                    </FormLabel>
                    <OutlinedInput
                        id="elementary"
                        name="elementarySchoolName"
                        type="text"
                        placeholder="School Name"
                        required
                        size="small"
                        value={personalInfo.elementarySchoolName}
                        onChange={handleInputChange}
                        error={!!errors.elementarySchoolName}
                    />
                    {errors.elementarySchoolName && (
                        <FormHelperText error>{errors.elementarySchoolName}</FormHelperText>
                    )}
                </FormGrid>
                <FormGrid size={{ xs: 12, md: 6 }}>
                    <FormLabel htmlFor="elem-address" required>
                        Address
                    </FormLabel>
                    <OutlinedInput
                        id="elem-address"
                        name="elementarySchoolAddress"
                        type="text"
                        placeholder="Address"
                        required
                        size="small"
                        value={personalInfo.elementarySchoolAddress}
                        onChange={handleInputChange}
                        error={!!errors.elementarySchoolAddress}
                    />
                    {errors.elementarySchoolAddress && (
                        <FormHelperText error>{errors.elementarySchoolAddress}</FormHelperText>
                    )}
                </FormGrid>

                <FormGrid size={{ xs: 12, md: 12 }}>
                    <h2>High School</h2>
                </FormGrid>
                <FormGrid size={{ xs: 12, md: 6 }}>
                    <FormLabel htmlFor="high-school" required>
                        School Name
                    </FormLabel>
                    <OutlinedInput
                        id="high-school"
                        name="highschoolName"
                        type="text"
                        placeholder="School Name"
                        required
                        size="small"
                        value={personalInfo.highschoolName}
                        onChange={handleInputChange}
                        error={!!errors.highschoolName}
                    />
                    {errors.highschoolName && (
                        <FormHelperText error>{errors.highschoolName}</FormHelperText>
                    )}
                </FormGrid>
                <FormGrid size={{ xs: 12, md: 6 }}>
                    <FormLabel htmlFor="hs-address" required>
                        Address
                    </FormLabel>
                    <OutlinedInput
                        id="hs-address"
                        name="highschoolAddress"
                        type="text"
                        placeholder="Address"
                        required
                        size="small"
                        value={personalInfo.highschoolAddress}
                        onChange={handleInputChange}
                        error={!!errors.highschoolAddress}
                    />
                    {errors.highschoolAddress && (
                        <FormHelperText error>{errors.highschoolAddress}</FormHelperText>
                    )}
                </FormGrid>

                <FormGrid size={{ xs: 12, md: 12 }}>
                    <h2>College</h2>
                </FormGrid>
                <FormGrid size={{ xs: 12, md: 6 }}>
                    <FormLabel htmlFor="college" required>
                        School Name
                    </FormLabel>
                    <OutlinedInput
                        id="college"
                        name="collegeName"
                        type="text"
                        placeholder="School Name"
                        required
                        size="small"
                        value={personalInfo.collegeName}
                        onChange={handleInputChange}
                        error={!!errors.collegeName}
                    />
                    {errors.collegeName && (
                        <FormHelperText error>{errors.collegeName}</FormHelperText>
                    )}
                </FormGrid>
                <FormGrid size={{ xs: 12, md: 6 }}>
                    <FormLabel htmlFor="college-address" required>
                        Address
                    </FormLabel>
                    <OutlinedInput
                        id="college-address"
                        name="collegeAddress"
                        type="text"
                        placeholder="Address"
                        required
                        size="small"
                        value={personalInfo.collegeAddress}
                        onChange={handleInputChange}
                        error={!!errors.collegeAddress}
                    />
                    {errors.collegeAddress && (
                        <FormHelperText error>{errors.collegeAddress}</FormHelperText>
                    )}
                </FormGrid>
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
                    activeStep !== 0 ? { justifyContent: 'space-between' } : { justifyContent: 'flex-end' },
                ]}
            >
                {activeStep !== 0 && (
                    <Button
                        variant="text"
                        sx={{ display: { xs: 'none', sm: 'flex' } }}
                        onClick={() => {
                            navigate("/perinfo", { state: personalInfo });
                        }}
                    >
                        Previous
                    </Button>
                )}
                {activeStep !== 0 && (
                    <Button
                        variant="outlined"
                        fullWidth
                        sx={{ display: { xs: 'flex', sm: 'none' } }}
                        // onClick to navigate to the previous page and pass the personalInfo data as a location.state to the previous page
                        onClick={() => {
                            navigate("/perinfo", { state: personalInfo });
                        }}
                    >
                        Previous
                    </Button>
                )}
                <Button
                    variant="contained"
                    sx={{ width: { xs: '50%' } }}
                    // onClick to navigate to the next page and pass the personalInfo data as a location.state to the next page
                    onClick={handleNextClick}
                >
                    {activeStep === steps.length - 1 ? 'Place order' : 'Next'}
                </Button>
            </Box>
        </>
    );
}