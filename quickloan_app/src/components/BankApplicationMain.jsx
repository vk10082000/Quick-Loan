import React, { useEffect, useState } from 'react'
import { ChakraProvider, useToast } from '@chakra-ui/react'
import { Box, Center, Stepper, Step, StepIndicator, StepStatus, StepIcon, StepNumber, StepTitle, StepDescription, StepSeparator } from '@chakra-ui/react';
import { LoanSpecificationsStep } from './LoanSpecificationsStep';
import { SupportingDocsStep } from './SupportingDocsStep';
import { EmploymentDetailsStep } from './EmploymentDetailsStep';
import { PersonalInfoStep } from './PersonalInfoStep';
import { FinancialInfoStep } from './FinancialInfoStep';
import { useDispatch, useSelector } from 'react-redux';
import { getAllUsers, getBankData, getCurrentUser, getLoanData, handleLoanDataSubmit } from '../redux/BankApplication/action';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import axios from 'axios';


export const BankApplicationMain = () => {

    const currentUser = useSelector(store => store.AuthReducer.currentUser);
    console.log('currentUser:', currentUser)

    const loans = useSelector(store => store.bankApplicationReducer.loans);
    console.log('loans:', loans)

    const dispatch = useDispatch();
    const toast = useToast();
    const location = useLocation();
    const {id}=useParams();
    // const id = new URLSearchParams(location.search).get('id');
    const [alert, setAlert] = useState()

    const[bankData,setBankData]=useState({});

    useEffect(() => {
        // dispatch(getBankData(id))
        dispatch(getLoanData(currentUser.id))
        dispatch(getCurrentUser(currentUser.id))
        getBankData(id)
    }, [])


    function getBankData(id){
        axios.get(`https://sour-snowy-purpose.glitch.me/banks/${id}`)
        .then((res)=>{
            setBankData(res.data)
        })
        .catch((err)=>{
            console.log('err:', err)
        })
    }
   

    const currentUserbyId = useSelector(store => store.bankApplicationReducer.currentUserbyId);
    // const bankData = useSelector(store =>{
    //     console.log('bankData:', store.bankApplicationReducer.bankData)
    //     return store.bankApplicationReducer.bankData
    // });
    console.log("currentUserbyId", currentUserbyId);

    const initialUserInfo = {
        id: `${Math.floor(Math.random() * (100 - 1 + 1)) + 1}`,
        fullname: currentUserbyId?.fullname || currentUser.firstname || "",
        contact: currentUserbyId?.contact || currentUser?.contact || '',
        email: currentUserbyId?.email || currentUser?.email || '',
        address: currentUserbyId?.address || currentUser?.address || '',
        employer: '',
        jobTitle: '',
        yearsOfEmployment: '',
        monthlyIncome: '',
        monthlyExpenses: '',
        savingsInvestments: '',
        outstandingLoansDebt: '',
        assets: '',
        identificationProof: '',
        incomeProof: '',
        addressProof: '',
        loanType: bankData.category,
        loanAmount: '',
        loanTerm: '',
        loanPurpose: '',
        bankname: bankData.name,
        bankImg: bankData.image ,
        status: 'pending'
    };

    const steps = [
        { title: 'First', description: 'Personal Information' },
        { title: 'Second', description: 'Employment Details' },
        { title: 'Third', description: 'Financial Information' },
        { title: 'Forth', description: 'Supporting Documents' },
        { title: 'Fifth', description: 'Loan Specifications' },
    ]
    const [activeStep, setActiveStep] = useState(0);
    const [userInfo, setUserInfo] = useState(initialUserInfo);
    const navigate = useNavigate()

    const handleNextStep = () => {
        setActiveStep((prevStep) => prevStep + 1);
    };

    const handlePreviousStep = () => {
        setActiveStep((prevStep) => prevStep - 1);
    };


    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserInfo({ ...userInfo, [name]: value });
    };

    const handleFileChange = (e) => {
        const { name, files } = e.target;
        const file = files[0];

        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setUserInfo((prevUserInfo) => ({ ...prevUserInfo, [name]: reader.result }));
            };
            reader.readAsDataURL(file);
        }
    };



    const handleSubmit = (e) => {
        e.preventDefault()
        if (!userInfo.employer || !userInfo.jobTitle || !userInfo.yearsOfEmployment || !userInfo.monthlyIncome || !userInfo.monthlyExpenses || !userInfo.savingsInvestments || !userInfo.outstandingLoansDebt || !userInfo.assets || !userInfo.loanType || !userInfo.loanAmount || !userInfo.loanTerm || !userInfo.loanPurpose) {
            return toast({
                title: 'Submission Failed!',
                description: "Please fill all form details before submiting. ",
                status: 'error',
                duration: 3000,
                isClosable: true,
                position: "top"
            })
        }
        else {
            dispatch(handleLoanDataSubmit(currentUser.id,loans, userInfo)).then(() => {
                console.log("UserInformation",userInfo)
                setUserInfo(initialUserInfo)
                
                // toast({
                //     title: 'Success',
                //     description: 'Application Request Successful',
                //     status: 'success',
                //     position: 'top',
                //     duration: 4000,
                //     isClosable: true,
                // })
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Your loan application has been submitted successfully.',
                    showConfirmButton: false,
                    timer: 5000,
                })
                navigate("/profile")

            })
        }
    }


    return (


        <Box display={{ base: "block", sm: "block", md: "flex", lg: "flex", xl: "flex", "2xl": "flex" }} mt="50px" ml={{ base: "50px", sm: "20px", md: "50px", lg: "100px", xl: "100px" }} mb={"50px"}>

            <Box w={{ base: "200px", sm: "200px", md: "300px", lg: "300px", lg: "300px", xl: "300px" }}>
                <Box mb="20px" >
                    <img src={bankData.image} alt={bankData.name} />
                </Box>

                <Stepper index={activeStep} orientation="vertical" height="400px" gap="0" colorScheme='green' >
                    {steps.map((step, index) => (
                        <Step key={index} w={"300px"}>
                            <StepIndicator>
                                <StepStatus
                                    complete={<StepIcon />}
                                    incomplete={<StepNumber />}
                                    active={<StepNumber />}
                                />
                            </StepIndicator>

                            <Box flexShrink="0">
                                <StepTitle>{step.description}</StepTitle>
                                <StepDescription>{activeStep <= index ? "Incomplete" : "Completed"}</StepDescription>
                            </Box>

                            <StepSeparator />

                        </Step>
                    ))}
                </Stepper>
            </Box>
            <Box mt={"20px"} ml={{ base: "10px", sm: "10px", md: "20px", lg: "100px", xl: "100px" }}>

                {activeStep === 0 ? (
                    <PersonalInfoStep
                        userInfo={userInfo}
                        handleChange={handleChange}
                        onNext={handleNextStep}
                    />
                ) :
                    activeStep === 1 ? (
                        <EmploymentDetailsStep
                            userInfo={userInfo}
                            handleChange={handleChange}
                            onNext={handleNextStep} onPrevious={handlePreviousStep}
                        />
                    ) :
                        activeStep === 2 ? (
                            <FinancialInfoStep userInfo={userInfo} handleChange={handleChange}
                                onNext={handleNextStep} onPrevious={handlePreviousStep}
                            />
                        ) :
                            activeStep === 3 ? (
                                <SupportingDocsStep
                                    userInfo={userInfo}
                                    handleFileChange={handleFileChange}
                                    handleChange={handleChange}
                                    onNext={handleNextStep} onPrevious={handlePreviousStep}
                                />
                            ) :
                                activeStep === 4 && (
                                    <LoanSpecificationsStep
                                        alert={alert}
                                        userInfo={userInfo}
                                        handleChange={handleChange}
                                        onPrevious={handlePreviousStep}
                                        handleSubmit={handleSubmit}
                                    />
                                )}

            </Box>
        </Box >



    )
}

