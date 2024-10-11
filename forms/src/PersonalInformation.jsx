import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import Grid from '@mui/material/Grid2';
import OutlinedInput from '@mui/material/OutlinedInput';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { styled } from '@mui/system';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import FormHelperText from '@mui/material/FormHelperText';

const FormGrid = styled(Grid)(() => ({
    display: 'flex',
    flexDirection: 'column',
}));

const steps = ['Shipping address', 'Payment details', 'Review your order'];

export default function PersonalInformation() {
    const [activeStep, setActiveStep] = useState(0);

    const location = useLocation();

    const initialPersonalInfo = {
        firstName: '',
        lastName: '',
        gender: '',
        birthday: '',
        address: '',
        city: '',
        province: '',
        zip: '',
        country: '',
        elementarySchoolName: '',
        elementarySchoolAddress: '',
        highschoolName: '',
        highschoolAddress: '',
        collegeName: '',
        collegeAddress: '',
        skill1: '',
        skill2: '',
        skill3: '',
        training1: '',
        training2: '',
        training3: ''
    };

    const [personalInfo, setPersonalInfo] = useState(
        location.state ?? initialPersonalInfo
    );

    const [errors, setErrors] = useState({});

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setPersonalInfo({
            ...personalInfo,
            [name]: value
        });
        setErrors({
            ...errors,
            [name]: !value ? 'This field is required' : ''
        });
    };

    const validateFields = () => {
        const newErrors = {};
        {/* Required fields */ }
        const requiredFields = [
            'firstName', 'lastName', 'gender', 'birthday', 'address', 
            'city', 'province', 'zip', 'country'
        ];
        requiredFields.forEach((key) => {
            if (!personalInfo[key]) {
                newErrors[key] = 'This field is required';
            }
        });
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    let v = useNavigate();

    const handleNext = () => {
        if (validateFields()) {
            v("/educbg", { state: personalInfo });
        }
    };

    return (
        <>
            <Grid container spacing={3} sx={{ textAlign: 'left' }}>
                <FormGrid size={{ xs: 12 }}><h1>Personal Information</h1></FormGrid>
                <FormGrid size={{ xs: 12, md: 6 }}>
                    <FormLabel htmlFor="first-name" required>
                        First name
                    </FormLabel>
                    <OutlinedInput
                        id="first-name"
                        name="firstName"
                        type="text"
                        placeholder="Eugene"
                        required
                        size="small"
                        value={personalInfo.firstName}
                        onChange={handleInputChange}
                        error={!!errors.firstName}
                    />
                    {errors.firstName && <FormHelperText error>{errors.firstName}</FormHelperText>}
                </FormGrid>
                <FormGrid size={{ xs: 12, md: 6 }}>
                    <FormLabel htmlFor="last-name" required>
                        Last name
                    </FormLabel>
                    <OutlinedInput
                        id="last-name"
                        name="lastName"
                        type="text"
                        placeholder="Busico"
                        required
                        size="small"
                        value={personalInfo.lastName}
                        onChange={handleInputChange}
                        error={!!errors.lastName}
                    />
                    {errors.lastName && <FormHelperText error>{errors.lastName}</FormHelperText>}
                </FormGrid>
                <FormGrid size={{ xs: 12, md: 6 }}>
                    <FormLabel htmlFor="gender" required>
                        Gender
                    </FormLabel>
                    <RadioGroup
                        sx={{ marginLeft: '2rem' }}
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="gender"
                        value={personalInfo.gender}
                        onChange={handleInputChange}
                    >
                        <FormControlLabel value="female" control={<Radio />} label="Female" />
                        <FormControlLabel value="male" control={<Radio />} label="Male" />
                        <FormControlLabel value="other" control={<Radio />} label="Other" />
                    </RadioGroup>
                    {errors.gender && <FormHelperText error>{errors.gender}</FormHelperText>}
                </FormGrid>
                <FormGrid size={{ xs: 12, md: 6 }}>
                    <FormLabel htmlFor="birthday" required>
                        Birthday
                    </FormLabel>
                    <OutlinedInput
                        id="birthday"
                        name="birthday"
                        type="text"
                        placeholder="mm/dd/yyyy"
                        required
                        size="small"
                        value={personalInfo.birthday}
                        onChange={handleInputChange}
                        error={!!errors.birthday}
                    />
                    {errors.birthday && <FormHelperText error>{errors.birthday}</FormHelperText>}
                </FormGrid>
                <FormGrid size={{ xs: 12 }}>
                    <FormLabel htmlFor="address" required>
                        Address
                    </FormLabel>
                    <OutlinedInput
                        id="address"
                        name="address"
                        type="text"
                        placeholder="Street/Sitio and Number"
                        required
                        size="small"
                        value={personalInfo.address}
                        onChange={handleInputChange}
                        error={!!errors.address}
                    />
                    {errors.address && <FormHelperText error>{errors.address}</FormHelperText>}
                </FormGrid>
                <FormGrid size={{ xs: 6 }}>
                    <FormLabel htmlFor="city" required>
                        City
                    </FormLabel>
                    <OutlinedInput
                        id="city"
                        name="city"
                        type="text"
                        placeholder="Cebu"
                        required
                        size="small"
                        value={personalInfo.city}
                        onChange={handleInputChange}
                        error={!!errors.city}
                    />
                    {errors.city && <FormHelperText error>{errors.city}</FormHelperText>}
                </FormGrid>
                <FormGrid size={{ xs: 6 }}>
                    <FormLabel htmlFor="province" required>
                        Province
                    </FormLabel>
                    <OutlinedInput
                        id="province"
                        name="province"
                        type="text"
                        placeholder="Cebu"
                        required
                        size="small"
                        value={personalInfo.province}
                        onChange={handleInputChange}
                        error={!!errors.province}
                    />
                    {errors.province && <FormHelperText error>{errors.province}</FormHelperText>}
                </FormGrid>
                <FormGrid size={{ xs: 6 }}>
                    <FormLabel htmlFor="zip" required>
                        Zip / Postal code
                    </FormLabel>
                    <OutlinedInput
                        id="zip"
                        name="zip"
                        type="text"
                        placeholder="6000"
                        required
                        size="small"
                        value={personalInfo.zip}
                        onChange={handleInputChange}
                        error={!!errors.zip}
                    />
                    {errors.zip && <FormHelperText error>{errors.zip}</FormHelperText>}
                </FormGrid>
                <FormGrid size={{ xs: 6 }}>
                    <FormLabel htmlFor="country" required>
                        Country
                    </FormLabel>
                    <OutlinedInput
                        id="country"
                        name="country"
                        type="text"
                        placeholder="Philippines"
                        required
                        size="small"
                        value={personalInfo.country}
                        onChange={handleInputChange}
                        error={!!errors.country}
                    />
                    {errors.country && <FormHelperText error>{errors.country}</FormHelperText>}
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
                    activeStep !== 0
                        ? { justifyContent: 'space-between' }
                        : { justifyContent: 'flex-end' },
                ]}
            >
                {/* If the activeStep is not 0, display the back button */}
                <Button
                    variant="contained"
                    sx={{ width: { xs: '50%' } }}
                    onClick={handleNext}
                >
                    {activeStep === steps.length - 1 ? 'Place order' : 'Next'}
                </Button>
            </Box>
        </>
    );
}