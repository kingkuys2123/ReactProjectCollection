import FormLabel from '@mui/material/FormLabel';
import Grid from '@mui/material/Grid2';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormHelperText from '@mui/material/FormHelperText';
import { styled } from '@mui/system';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const FormGrid = styled(Grid)(() => ({
    display: 'flex',
    flexDirection: 'column',
}));

const steps = ['Shipping address', 'Payment details', 'Review your order'];

export default function SkillsAndTrainings() {
    const location = useLocation();
    const [personalInfo, setPersonalInfo] = useState(location.state);
    const [errors, setErrors] = useState({});
    const [activeStep, setActiveStep] = useState(1);
    const navigate = useNavigate();

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

    const validateFields = () => {
        const newErrors = {};
        ['skill1', 'skill2', 'skill3', 'training1', 'training2', 'training3'].forEach((field) => {
            if (!personalInfo[field]) {
                newErrors[field] = 'This field is required';
            }
        });
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleNext = () => {
        if (validateFields()) {
            navigate("/summaryinfo", { state: personalInfo });
        }
    };

    const handlePrevious = () => {
        navigate("/educbg", { state: personalInfo });
    };

    return (
        <>
            <Grid container spacing={3} sx={{ textAlign: 'left' }}>
                <FormGrid size={{ xs: 12 }}><h1>Skills and Trainings</h1></FormGrid>
                <FormGrid size={{ xs: 12, md: 12 }}><h2>Skills (Max of 3)</h2></FormGrid>
                <FormGrid size={{ xs: 12 }}>
                    <FormLabel htmlFor="skill1" required>
                        Skill 1
                    </FormLabel>
                    <OutlinedInput
                        id="skill1"
                        name="skill1"
                        type="text"
                        placeholder="Skill 1"
                        required
                        size="small"
                        value={personalInfo.skill1}
                        onChange={handleInputChange}
                        error={!!errors.skill1}
                    />
                    {errors.skill1 && <FormHelperText error>{errors.skill1}</FormHelperText>}
                </FormGrid>
                <FormGrid size={{ xs: 12 }}>
                    <FormLabel htmlFor="skill2" required>
                        Skill 2
                    </FormLabel>
                    <OutlinedInput
                        id="skill2"
                        name="skill2"
                        type="text"
                        placeholder="Skill 2"
                        required
                        size="small"
                        value={personalInfo.skill2}
                        onChange={handleInputChange}
                        error={!!errors.skill2}
                    />
                    {errors.skill2 && <FormHelperText error>{errors.skill2}</FormHelperText>}
                </FormGrid>
                <FormGrid size={{ xs: 12 }}>
                    <FormLabel htmlFor="skill3" required>
                        Skill 3
                    </FormLabel>
                    <OutlinedInput
                        id="skill3"
                        name="skill3"
                        type="text"
                        placeholder="Skill 3"
                        required
                        size="small"
                        value={personalInfo.skill3}
                        onChange={handleInputChange}
                        error={!!errors.skill3}
                    />
                    {errors.skill3 && <FormHelperText error>{errors.skill3}</FormHelperText>}
                </FormGrid>

                <FormGrid size={{ xs: 12, md: 12 }}><h2>Trainings (Max of 3)</h2></FormGrid>
                <FormGrid size={{ xs: 12 }}>
                    <FormLabel htmlFor="training1" required>
                        Training 1
                    </FormLabel>
                    <OutlinedInput
                        id="training1"
                        name="training1"
                        type="text"
                        placeholder="Training 1"
                        required
                        size="small"
                        value={personalInfo.training1}
                        onChange={handleInputChange}
                        error={!!errors.training1}
                    />
                    {errors.training1 && <FormHelperText error>{errors.training1}</FormHelperText>}
                </FormGrid>
                <FormGrid size={{ xs: 12 }}>
                    <FormLabel htmlFor="training2" required>
                        Training 2
                    </FormLabel>
                    <OutlinedInput
                        id="training2"
                        name="training2"
                        type="text"
                        placeholder="Training 2"
                        required
                        size="small"
                        value={personalInfo.training2}
                        onChange={handleInputChange}
                        error={!!errors.training2}
                    />
                    {errors.training2 && <FormHelperText error>{errors.training2}</FormHelperText>}
                </FormGrid>
                <FormGrid size={{ xs: 12 }}>
                    <FormLabel htmlFor="training3" required>
                        Training 3
                    </FormLabel>
                    <OutlinedInput
                        id="training3"
                        name="training3"
                        type="text"
                        placeholder="Training 3"
                        required
                        size="small"
                        value={personalInfo.training3}
                        onChange={handleInputChange}
                        error={!!errors.training3}
                    />
                    {errors.training3 && <FormHelperText error>{errors.training3}</FormHelperText>}
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
                {activeStep !== 0 && (
                    <Button
                        variant="text"
                        sx={{ display: { xs: 'none', sm: 'flex' } }}
                        onClick={handlePrevious}
                    >
                        Previous
                    </Button>
                )}
                {activeStep !== 0 && (
                    <Button
                        variant="outlined"
                        fullWidth
                        sx={{ display: { xs: 'flex', sm: 'none' } }}
                        onClick={handlePrevious}
                    >
                        Previous
                    </Button>
                )}
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