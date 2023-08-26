import {
    Accordion,
    AccordionButton,
    AccordionIcon,
    AccordionItem,
    AccordionPanel,
    Box,
    Button,
    Card,
    CardBody,
   
    Flex,
    Grid,
    GridItem,
    Heading,
    Highlight,
    HStack,
    Image,
    List,
    ListIcon,
    ListItem,
    Stack,
    Step,
    StepDescription,
    StepIcon,
    StepIndicator,
    StepNumber,
    Stepper,
    StepSeparator,
    StepStatus,
    StepTitle,
    Text,
    useSteps,
    VStack,
  } from "@chakra-ui/react";
  import React, { useEffect } from "react";
  import purplebg from "../Images/purplebg.jpg";
  import "aos/dist/aos.css";
  import Aos from "aos";
  import { GiReceiveMoney } from "react-icons/gi";
  
  import styled, { keyframes } from "styled-components";
  import { BsFillCheckCircleFill } from "react-icons/bs";
  import { IoIosCall } from "react-icons/io";
  import { MdOutlineEmail } from "react-icons/md";
  import { Link } from "react-router-dom";
  import "react-alice-carousel/lib/alice-carousel.css";
  import dena_bank from "../Images/dena_bank.jpg";
  import federal_bank from "../Images/federal_bank.png";
  import hdfc from "../Images/hdfc.jpg";
  import hsbc from "../Images/hsbc.png";
  import ICICI from "../Images/ICICI.jpg";
  import idbi from "../Images/idbi.jpg";
  import indian_bank from "../Images/indian_bank.jpg";
  import indusind from "../Images/indusind.png";
  import karnataka_bank from "../Images/karnataka_bank.jpg";
  import kotak from "../Images/kotak.png";
import ImageScroller from "../components/ImageScroller";
 
  
  
  
  const steps = [
    { title: "Apply free of charge & without obligation", description: " " },
    { title: "Compare The Offer You Choose on Platformond", description: "" },
    { title: "Choose The Best Offer That You Need", description: "" },
  ];
  
  const Homepage = () => {
    useEffect(() => {
      Aos.init();
    }, []);
  
    const { activeStep } = useSteps({
      index: 1,
      count: steps.length,
    });

  
    return (
      <Box>
        
        {/* Part-1 -------------------------------------------------------------------- */}
        <Flex
          p="20px"
          bgImage={purplebg}
          h={"600px"}
          align={"center"}
          m="auto"
          justify="space-around"
          flexDirection={{
            base: "column",
            sm: "column",
            md: "row",
            lg: "row",
            xl: "row",
          }}
          
        >
            
          <VStack
            p="20px"
            w={{
              base: "300px",
              sm: "300px",
              md: "600px",
              lg: "600px",
              xl: "600px",
            }}
            textAlign={"justify"}
            spacing="30px"
          >
           
            <Heading
              textAlign={{
                base: "center",
                sm: "center",
                md: "left",
                lg: "left",
                xl: "left",
              }}
              fontSize={{
                base: "25px",
                sm: "25px",
                md: "30px",
                lg: "40px",
                xl: "50px",
              }}
              color={"white"}
            >
              Compare Loans From Several Banks Find The Cheapest Loan
            </Heading>
            <Link to="/login">
              <Button
                rightIcon={<GiReceiveMoney size="25px" />}
                colorScheme={"pink"}
                borderRadius={"20px"}
                size={{ base: "md", sm: "md", md: "lg", lg: "lg", xl: "lg" }}
              >
                Apply Now
              </Button>
            </Link>
          </VStack>
  
          <Box
            w={{
              base: "300px",
              sm: "300px",
              md: "500px",
              lg: "600px",
              xl: "600px",
            }}
            data-aos="fade-left"
          >
            <FloatingImage  src={"https://images.assettype.com/fortuneindia%2F2022-06%2F1fa744fc-adb4-48fd-a40e-54e45a7edc8b%2FGettyImages_955530262.jpg?rect=0,66,2129,1198&w=1250&q=60"} />
          </Box>
         
        </Flex>
        {/* part-2 ---------------- */}
       
        <VStack
          w={{
            base: "300px",
            sm: "300px",
            md: "500px",
            lg: "500px",
            xl: "500px",
          }}
          m="auto"
          mt={"50px"}
          
        >
          <Heading data-aos="zoom-in-up" size="md" color={"orange"}>
            How It Works
          </Heading>
          <Heading
            data-aos="zoom-in-up"
            fontSize={{
              base: "28px",
              sm: "35px",
              md: "40px",
              lg: "40px",
              xl: "40px",
            }}
            color="black"
          >
            <Highlight
              query={["The", "Cheapest"]}
              styles={{
                px: "2",
                py: "1",
                color: "purple",
              }}
            >
              We Help You to Find The Cheapest Loan
            </Highlight>
          </Heading>
        </VStack>
  
        <Flex
          p="20px"
          justifyContent={{
            base: "center",
            sm: "center",
            md: "center",
            lg: "space-evenly",
            xl: "space-evenly",
          }}
          flex
          m="auto"
          align={"center"}
          flexDirection={{
            base: "column",
            sm: "column",
            md: "column",
            lg: "row",
            xl: "row",
          }}
          
        >
          <Stepper
            data-aos="zoom-in-right"
            colorScheme={"purple"}
            size={"lg"}
            fontSize={{
              base: "25px",
              sm: "25px",
              md: "25px",
              lg: "25px",
              xl: "30px",
            }}
            index={activeStep}
            orientation="vertical"
            height="400px"
            gap="0"
          >
            {steps.map((step, index) => (
              <Step key={index}>
                <StepIndicator size="lg">
                  <StepStatus
                    complete={<StepIcon />}
                    incomplete={<StepNumber />}
                    active={<StepNumber />}
                  />
                </StepIndicator>
  
                <Box
                  flexShrink="0"
                  w={{
                    base: "230px",
                    sm: "290px",
                    md: "450px",
                    lg: "350px",
                    xl: "400px",
                  }}
                >
                  <StepTitle
                    textAlign="left"
                    fontSize={{
                      base: "21px",
                      sm: "21px",
                      md: "30px",
                      lg: "25px",
                      xl: "30px",
                    }}
                  >
                    {step.title}
                  </StepTitle>
                  <StepDescription>{step.description}</StepDescription>
                </Box>
  
                <StepSeparator />
              </Step>
            ))}
          </Stepper>
  
          <Box
            mt="20px"
            w={{
              base: "300px",
              sm: "300px",
              md: "600px",
              lg: "500px",
              xl: "600px",
            }}
            borderRadius={"30px"}
            data-aos="fade-left"
          >
            <Image
              w="100%"
              borderRadius={"30px"}
              src={
                "https://i.pinimg.com/originals/e8/11/05/e811058549f7de3ab1b87d8ce59d94e2.gif"
              }
             
              alt="skeleton"
            />
          </Box>
         
        </Flex>
  
        {/* Part-3------ */}
        <ImageScroller/>
        <Box m="auto" mt="150px" bgColor={"#eff7f9"} p="10px" marginTop={"-10px"}>
          <Heading
            mb="70px"
            fontSize={{
              base: "30px",
              sm: "30px",
              md: "35px",
              lg: "35px",
              xl: "40px",
            }}
            data-aos="zoom-in"
            color="black"
          >
            We have Helped More Than 10,000 Users
          </Heading>
          {/* image-1---------*/}
          <Box
            data-aos="zoom-in"
            m="auto"
            w={{
              base: "500px",
              sm: "500px",
              md: "650px",
              lg: "800px",
              xl: "950px",
            }}
            display={{
              base: "none",
              sm: "none",
              md: "block",
              lg: "block",
              xl: "block",
            }}
            borderRadius={"20px"}
            boxShadow="rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px"
          >
            <Image
              borderRadius={"20px"}
              w="100%"
              src={"https://d1.awsstatic.com/industry-images-customer-references/GHF_AWS_case%20study-02.079ff0ab2728e91fc351eb6df1ea0836427de429.png"}
              alt="Happy family"
            />
          </Box>
  
          {/* image-2---- */}
  
          <Box
            data-aos="zoom-in"
            m="auto"
            w={{
              base: "300px",
              sm: "300px",
              // md: "650px",
              // lg: "800px",
              // xl: "950px",
            }}
            display={{
              base: "block",
              sm: "block",
              md: "none",
              lg: "none",
              xl: "none",
            }}
            borderRadius={"20px"}
            boxShadow="rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px"
          >
            <Image
              borderRadius={"20px"}
              w="100%"
            //   src={family_1}
              alt="Happy family"
            />
          </Box>
          <HStack
            data-aos="zoom-in"
            p="10px"
            m="auto"
            gap={{ base: "20px", sm: "20px", md: "40px", lg: "20px", xl: "20px" }}
            justifyContent={{
              base: "center",
              sm: "center",
              md: "space-around",
              lg: "space-evenly",
              xl: "space-evenly",
            }}
            flexDirection={{
              base: "column",
              sm: "column",
              md: "row",
              lg: "row",
              xl: "row",
            }}
            w="80%"
          >
            <Box
              padding="30px"
              borderRadius={"10px"}
              boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"}
              backgroundColor={"white"}
              left="200"
              display={{
                base: "flex",
                sm: "flex",
                md: "block",
                lg: "block",
                xl: "block",
              }}
              flexDirection={{
                base: "column",
                sm: "column",
                md: "row",
                lg: "row",
                xl: "row",
              }}
  
             
            >
              <List spacing={3} textAlign="left" fontSize={"16px"} color="gray">
                <ListItem>
                  <ListIcon
                    as={BsFillCheckCircleFill}
                    color="#6528F7"
                    fontSize={"20px"}
                  />
                  Offers from several banks
                </ListItem>
                <ListItem>
                  <ListIcon
                    as={BsFillCheckCircleFill}
                    color="#6528F7"
                    fontSize={"20px"}
                  />
                  Free & no obligation
                </ListItem>
                <ListItem>
                  <ListIcon
                    as={BsFillCheckCircleFill}
                    color="#6528F7"
                    fontSize={"20px"}
                  />
                  Compare safely and securely
                </ListItem>
                
                <ListItem>
                  <ListIcon
                    as={BsFillCheckCircleFill}
                    color="#6528F7"
                    fontSize={"20px"}
                  />
                  Offer within a few hours
                </ListItem>
              </List>
            </Box>
  
            <Box
              fontSize={{
                base: "15px",
                sm: "15px",
                md: "15px",
                lg: "17px",
                xl: "17px",
              }}
              w={{
                base: "300px",
                sm: "300px",
                md: "500px",
                lg: "550px",
                xl: "550px",
              }}
              textAlign={"left"}
              color="blackAlpha.700"
            >
              <Text>
                Compare multiple banks with just one non-binding application. We
                save you the hassle of checking the price at each bank.
              </Text>
              <br />
              <Text>
                It takes 2 min. To fill out the application, you immediately get
                quotes from banks and can choose the best quote.
              </Text>
              <br />
              <Text>
                We save you not only time, but in many cases also many thousands
                of kroner.
              </Text>
            </Box>
          </HStack>
        </Box>
  
        {/* part-4 Banks ------ */}
  
        <Box mt="150px" textAlign={"center"} bgColor={"#eff7f9"} p="20px" >
          <Heading color="black" data-aos="zoom-in-up">
            Money Mentor Cooperates With These Banks
          </Heading>
  
          <Text fontSize={"22px"} mb="50px" data-aos="zoom-in-up">
            {" "}
            <span style={{ fontSize: "25px", fontWeight: "bold" }}>
              100+ Banks
            </span>{" "}
            Trust Money Mentor to Offered{" "}
            <span style={{ fontSize: "25px", fontWeight: "bold" }}>
              Best Loans
            </span>
          </Text>
  
          <Grid
            templateColumns={{
              base: "repeat(2, 1fr)",
              sm: "repeat(2, 1fr)",
              md: "repeat(3, 1fr)",
              lg: "repeat(5, 1fr)",
              xl: "repeat(5, 1fr)",
            }}
            w="80%"
            m="auto"
            alignItems={"center"}
            placeItems="center"
            textAlign={"center"}
            justifyItems="center"
          >
            <Box w="150px" borderRadius="20px" data-aos="zoom-in-up">
              <Image
                src={karnataka_bank}
                role="presentation"
                w="100%"
                borderRadius="20px"
                data-aos="zoom-in-up"
              />
              ,
            </Box>
            ,
            <Box w="150px" borderRadius="20px" data-aos="zoom-in-up">
              <Image
                src={kotak}
                role="presentation"
                w="100%"
                borderRadius="20px"
                data-aos="zoom-in-up"
                objectFit={"cover"}
              />
            </Box>
            ,
            <Box w="150px" borderRadius="20px" data-aos="zoom-in-up">
              <Image
                src={indusind}
                role="presentation"
                w="100%"
                borderRadius="20px"
                data-aos="zoom-in-up"
              />
            </Box>
            ,
            <Box w="150px" borderRadius="20px" data-aos="zoom-in-up">
              <Image
                src={indian_bank}
                role="presentation"
                w="100%"
                borderRadius="20px"
                data-aos="zoom-in-up"
              />
            </Box>
            ,
            <Box w="150px" borderRadius="20px" data-aos="zoom-in-up">
              <Image
                src={idbi}
                role="presentation"
                w="100%"
                borderRadius="20px"
                data-aos="zoom-in-up"
              />
            </Box>
            ,
            <Box w="150px" borderRadius="20px" data-aos="zoom-in-up">
              <Image
                src={ICICI}
                role="presentation"
                w="100%"
                borderRadius="20px"
                data-aos="zoom-in-up"
              />
            </Box>
            ,
            <Box w="150px" borderRadius="20px" data-aos="zoom-in-up">
              <Image
                src={hsbc}
                role="presentation"
                w="100%"
                borderRadius="20px"
                data-aos="zoom-in-up"
              />
            </Box>
            ,
            <Box w="150px" borderRadius="20px" data-aos="zoom-in-up">
              <Image
                src={hdfc}
                role="presentation"
                w="100%"
                borderRadius="20px"
                data-aos="zoom-in-up"
              />
            </Box>
            ,
            <Box w="150px" borderRadius="20px" data-aos="zoom-in-up">
              <Image
                src={federal_bank}
                role="presentation"
                w="100%"
                borderRadius="20px"
                data-aos="zoom-in-up"
              />
            </Box>
            ,
            <Box w="150px" borderRadius="20px" data-aos="zoom-in-up">
              <Image
                src={dena_bank}
                role="presentation"
                w="100%"
                borderRadius="20px"
                data-aos="zoom-in-up"
              />
            </Box>
            ,
          </Grid>
        </Box>
  
        {/* Part-5 ---- */}
  
        <Box mt="150px" >
          <Heading data-aos="zoom-in-up" color={"black"} marginBottom={"50px"}>
            More About Finance & Loans
          </Heading>
  
          <Grid
            templateColumns={{
              base: "repeat(1, 1fr)",
              sm: "repeat(1, 1fr)",
              md: "repeat(2, 1fr)",
              lg: "repeat(4, 1fr)",
              xl: "repeat(4, 1fr)",
            }}
            justifyContent="center"
            gap="30px"
            w="80%"
            m="auto"
            alignItems={"center"}
          >
            <Card
              data-aos="fade-right"
              data-aos-duration="1500"
              _hover={{
                boxShadow:
                  "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px",
              }}
              className="card"
              boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
            >
              <CardBody align="center">
                <Image src={"https://www.nerdwallet.com/assets/blog/wp-content/uploads/2019/10/GettyImages-578269652.jpg"} alt="article_1" borderRadius="lg" />
                <Stack textAlign={"left"}>
                  <Heading textAlign={"left"} color={"black"} size="md">
                    Credit rating as a private customer
                  </Heading>
                  <Text color={"blackAlpha.700"}>📆 July 24, 2023</Text>
                </Stack>
              </CardBody>
            </Card>
  
            <Card
              data-aos="fade-right"
              data-aos-duration="1500"
              _hover={{
                boxShadow:
                  "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px",
              }}
              boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
            >
              <CardBody align="center">
                <Image src={"https://as1.ftcdn.net/v2/jpg/01/84/82/72/1000_F_184827281_NdcaA8bOLVaQwOBzrGbrP3kmiSJ2mtD0.jpg"} alt="article_2" borderRadius="lg" />
                <Stack textAlign={"left"}>
                  <Heading textAlign={"left"} color={"black"} size="md">
                    Get hold of your private loans with a promissory
                  </Heading>
                  <Text color={"blackAlpha.700"}>📆 July 24, 2023</Text>
                </Stack>
              </CardBody>
            </Card>
  
            <Card
              data-aos="fade-right"
              data-aos-duration="1500"
              _hover={{
                boxShadow:
                  "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px",
              }}
              boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
            >
              <CardBody align="center">
                <Image src={"https://media.istockphoto.com/id/153136893/photo/couple-meeting-with-financial-advisor.jpg?b=1&s=170667a&w=0&k=20&c=Vk2CkL2YUpfZM2HdrL_pAYsIqFhlqUdM5sFIx37ct8c="} alt="article_3" borderRadius="lg" />
                <Stack textAlign={"left"}>
                  <Heading textAlign={"left"} color={"black"} size="md">
                    What is APR and what can you actually use it?
                  </Heading>
                  <Text color={"blackAlpha.700"}>📆 July 24, 2023</Text>
                </Stack>
              </CardBody>
            </Card>
  
            <Card
              data-aos="fade-right"
              data-aos-duration="1500"
              _hover={{
                boxShadow:
                  "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px",
              }}
              boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
            >
              <CardBody align="center">
                <Image src={"https://media.istockphoto.com/id/1328126737/photo/sign-a-house-sale-agreement.jpg?s=612x612&w=0&k=20&c=Jk7YWa38JMJ5L5b3-U84m2T9_9TIsfIS30rjiGI8t3k="} alt="article_4" borderRadius="lg" />
                <Stack textAlign={"left"}>
                  <Heading textAlign={"left"} color={"black"} size="md">
                    Superfast loans for your dream home
                  </Heading>
                  <Text color={"blackAlpha.700"}>📆 July 24, 2023</Text>
                </Stack>
              </CardBody>
            </Card>
          </Grid>
        </Box>
  
        {/* Part-6----------- */}
  
        <Box mt="150px" bgColor={"#eff7f9"} p="30px" >
          <Flex
            m="auto"
           
            justifyContent={{
              base: "center",
              sm: "center",
              md: "center",
              lg: "space-evenly",
              xl: "space-evenly",
            }}
            placeItems="center"
            bgColor={"#eff7f9"}
            flexDirection={{
              base: "column",
              sm: "column",
              md: "column",
              lg: "row",
              xl: "row",
            }}
            gap="20px"
          >
            <Box
              w={{
                base: "300px",
                sm: "300px",
                md: "500px",
                lg: "500px",
                xl: "500px",
              }}
              
            >
              <Heading textAlign={"left"} data-aos="zoom-in">
                Our Advisors Are Ready To Help You
              </Heading>
  
              <Image
              data-aos="zoom-in-right"
                w={{
                  base: "300px",
                  sm: "300px",
                  md: "500px",
                  lg: "500px",
                  xl: "500px",
                }}
                src={"https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/179930863/original/f34cbc4acdebb9233cd7b78380ed02465174dabb/do-your-customer-service.jpg"}
                alt="women"
                borderRadius={"10px"}
              />
  
              <HStack
                flexDirection={{
                  base: "column",
                  sm: "column",
                  md: "row",
                  lg: "row",
                  xl: "row",
                }}
                mt="20px"
                spacing="30px"
                justifyContent={"center"}
                data-aos="zoom-in"
              >
                <Button
                  leftIcon={<IoIosCall />}
                  _hover={{ color: "white", backgroundColor: "#A555EC" }}
                  fontWeight={"bold"}
                  borderRadius="15px"
                  color="purple"
                >
                  01234-567890
                </Button>
  
                <Button
                  leftIcon={<MdOutlineEmail />}
                  _hover={{ color: "white", backgroundColor: "#A555EC" }}
                  fontWeight={"bold"}
                  borderRadius="15px"
                  color="purple"
                >
                  Info@moneymentor.com
                </Button>
              </HStack>
            </Box>
  
            <Box
              w={{
                base: "300px",
                sm: "300px",
                md: "600px",
                lg: "600px",
                xl: "600px",
              }}
              bgColor={"white"}
              p="20px"
              borderRadius={"20px"}
              mt="20px"
              data-aos="zoom-in"
            >
              <Accordion defaultIndex={[0]} allowMultiple>
                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box
                        as="span"
                        flex="1"
                        textAlign="left"
                        fontWeight={"bold"}
                        fontSize="18px"
                      >
                        How much can I borrow
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel>
                    The amount you can borrow depends on various factors,
                    including your income, credit score, existing debts, and the
                    lender's criteria. It's essential to consult with a financial
                    advisor or a loan officer to determine your borrowing capacity
                    accurately.
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
  
              <Accordion defaultIndex={[1]} allowMultiple>
                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box
                        as="span"
                        flex="1"
                        textAlign="left"
                        fontWeight={"bold"}
                        fontSize="18px"
                      >
                        What are the requirements to get a loan offer?
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel>
                    <ul>
                      <li> You must be at least 18 years old</li>
                      <li> You must have permanent residence in India </li>
                      <li>
                        You are not registered in the RKI / Debtor Register (DBR)
                      </li>
                    </ul>
                    The offers you receive are preliminary offers, which are
                    provided that the information you have entered, are correct.
                    At the same time, you must sign the loan offer with NemID
                    before the bank can pay out your loan.
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
  
              <Accordion defaultIndex={[2]} allowMultiple>
                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box
                        as="span"
                        flex="1"
                        textAlign="left"
                        fontWeight={"bold"}
                        fontSize="18px"
                      >
                        How can you reduce the cost of my loans?
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel>
                    Reducing the cost of your loans can save you money in the long
                    run and make repayment more manageable. Here are some
                    strategies to achieve that:
                    <ul>
                      <li>Shop Around for Competitive Rates</li>
                      <li>Improve Your Credit Score</li>
                      <li>Consider Refinancing</li>
                      <li>Make Larger Payments</li>
                      <li>Pay on Time</li>
                    </ul>
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
  
              <Accordion defaultIndex={[3]} allowMultiple>
                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box
                        as="span"
                        flex="1"
                        textAlign="left"
                        fontWeight={"bold"}
                        fontSize="18px"
                      >
                        What does it cost to use Banca?
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
                    ad saepe repellat assumenda nulla quibusdam maxime, reiciendis
                    aperiam? Dignissimos voluptas fugit tenetur id aliquid
                    eligendi amet dolorum ex repellendus ducimus?
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
  
              <Accordion defaultIndex={[4]} allowMultiple>
                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box
                        as="span"
                        flex="1"
                        textAlign="left"
                        fontWeight={"bold"}
                        fontSize="18px"
                      >
                        When is the loan paid out?
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel>
                    The amount you can borrow depends on various factors,
                    including your income, credit score, existing debts, and the
                    lender's criteria. It's essential to consult with a financial
                    advisor or a loan officer to determine your borrowing capacity
                    accurately.
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
  
              <Accordion defaultIndex={[5]} allowMultiple>
                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box
                        as="span"
                        flex="1"
                        textAlign="left"
                        fontWeight={"bold"}
                        fontSize="18px"
                      >
                        When is the loan paid out?
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel>
                    The amount you can borrow depends on various factors,
                    including your income, credit score, existing debts, and the
                    lender's criteria. It's essential to consult with a financial
                    advisor or a loan officer to determine your borrowing capacity
                    accurately.
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
  
              <Accordion defaultIndex={[6]} allowMultiple>
                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box
                        as="span"
                        flex="1"
                        textAlign="left"
                        fontWeight={"bold"}
                        fontSize="18px"
                      >
                        How long is the repayment period?
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel>
                    The amount you can borrow depends on various factors,
                    including your income, credit score, existing debts, and the
                    lender's criteria. It's essential to consult with a financial
                    advisor or a loan officer to determine your borrowing capacity
                    accurately.
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            </Box>
          </Flex>
        </Box>
  
      </Box>
    );
  };
  
  export default Homepage;
  
  const floatingAnimation = keyframes`
    0% {
      transform: translate(0, 0);
    }
    50% {
      transform: translate(0, 20px); 
    }
  `;
  const FloatingImage = styled.img`
    position: relative;
    border-radius: 10px;
    animation: ${floatingAnimation} 3s infinite ease-in-out;
    filter: drop-shadow(16px 16px 22px #000);
  `;