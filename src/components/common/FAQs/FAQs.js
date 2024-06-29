import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import './FAQs.css'
export default function FAQs() {
    return (
        <div className='faqs_wrapper'>
            <h1>Explore options near me</h1>
            <Accordion className='accordion'>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                >
                    <h2>  Popular cuisines near me</h2>
                </AccordionSummary>
                <AccordionDetails>
                    <p>
                        • Bakery food near me
                        • Beverages food near me
                        • Biryani food near me
                        • Burger food near me
                        • Chinese food near me
                        • Coffee food near me
                        • Continental food near me
                        • Desserts food near me
                        • Kebab food near me
                        • Momos food near me
                        • Mughlai food near me
                        • North Indian food near me
                        • Pasta food near me
                        • Pizza food near me
                        • Rolls food near me
                        • Sandwich food near me
                        • Shake food near me
                        • South Indian food near me
                        • Street food near me
                        • Tea food near me
                    </p>

                </AccordionDetails>
            </Accordion>
            <Accordion className='accordion'>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"

                >
                    <h2>  Popular restaurant types near me</h2>
                </AccordionSummary>
                <AccordionDetails>
                    <p>
                        • Bakeries near me
                        • Bars near me
                        • Beverage Shops near me
                        • Bhojanalya near me
                        • Cafés near me
                        • Casual Dining near me
                        • Clubs near me
                        • Cocktail Bars near me
                        • Confectioneries near me
                        • Dessert Parlors near me
                        • Dhabas near me
                        • Fine Dining near me
                        • Food Courts near me
                        • Food Trucks near me
                        • Kiosks near me
                        • Lounges near me
                        • Microbreweries near me
                        • Quick Bites near me
                        • Sweet Shops near me
                    </p>


                </AccordionDetails>
            </Accordion>
            <Accordion className='accordion'>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"

                >
                    <h2>  Top Restaurant Chains</h2>
                </AccordionSummary>
                <AccordionDetails>
                    <div className='resto_name'>
                        <p>

                            <ul>
                                <li>Burger King Burger</li>
                                <li>Pizza Hut </li>
                            </ul>
                            <ul>
                                <li>Burger Singh </li>
                                <li> WOW! Momo </li>
                            </ul>
                            <ul>
                                <li>Haldiram's </li>

                            </ul>
                            <ul>
                                <li> KFC </li>
                            </ul>
                            <ul>
                                <li> McDonald's </li>
                            </ul>
                        </p>
                    </div>


                </AccordionDetails>
            </Accordion>
            <Accordion className='accordion'>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"

                >
                    <h2> Cities We Deliver To</h2>
                </AccordionSummary>
                <AccordionDetails>
                    <div class="cities">
                        <p>
                            <ul>
                                <li>Delhi NCR</li>
                                <li>Kolkata</li>
                                <li>Mumbai</li>
                                <li>Bengaluru</li>
                                <li>Pune</li>
                                <li>Hyderabad</li>
                                <li>Chennai</li>
                                <li>Lucknow</li>
                                <li>Kochi</li>
                                <li>Jaipur</li>
                                <li>Ahmedabad</li>
                                <li>Chandigarh</li>
                            </ul>
                        </p>
                        <p>
                            <ul>
                                <li>Goa</li>
                                <li>Indore</li>
                                <li>Gangtok</li>
                                <li>Nashik</li>
                                <li>Ooty</li>
                                <li>Shimla</li>
                                <li>Ludhiana</li>
                                <li>Guwahati</li>
                                <li>Amritsar</li>
                                <li>Kanpur</li>
                                <li>Allahabad</li>
                                <li>Aurangabad</li>
                            </ul>
                        </p>
                        <p>
                            <ul>
                                <li>Bhopal</li>
                                <li>Ranchi</li>
                                <li>Visakhapatnam</li>
                                <li>Bhubaneswar</li>
                                <li>Coimbatore</li>
                                <li>Mangalore</li>
                                <li>Vadodara</li>
                                <li>Nagpur</li>
                                <li>Agra</li>
                                <li>Dehradun</li>
                                <li>Mysore</li>
                                <li>Puducherry</li>
                            </ul>
                        </p>
                        <p>
                            <ul>
                                <li>Surat</li>
                                <li>Varanasi</li>
                                <li>Patna</li>
                                <li>Udaipur</li>
                                <li>Srinagar</li>
                                <li>Khajuraho</li>
                                <li>Neemrana</li>
                                <li>Cuttack</li>
                                <li>Trivandrum</li>
                                <li>Haridwar</li>
                                <li>Leh</li>
                                <li>Pushkar</li>
                            </ul>
                        </p>
                        <p>
                            <ul>
                                <li>Rajkot</li>
                                <li>Madurai</li>
                                <li>Kozhikode</li>
                                <li>Alappuzha</li>
                                <li>Thrissur</li>
                                <li>Manipal</li>
                                <li>Vijayawada</li>
                                <li>Jodhpur</li>
                                <li>Kota</li>
                                <li>Ajmer</li>
                                <li>Mussoorie</li>
                                <li>Rishikesh</li>
                            </ul>
                        </p>
                        <p>
                            <ul>
                                <li>Jalandhar</li>
                                <li>Jammu</li>
                                <li>Manali</li>
                            </ul>
                        </p>
                    </div>




                </AccordionDetails>
            </Accordion>

        </div>
    );
}
