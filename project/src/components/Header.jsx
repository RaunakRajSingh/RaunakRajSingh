import { useState } from "react";
// import '../assets/logo.jpg';

const Header = () => {
    const[ menuLinks, setMenulinks] =useState([
            {
            title: "About Us",
            link: "/About Us",
            id: 1,
            },
            {
                title: "Services",
                link: "/Services",
                id: 2,
                },
                {
                    title: "Our Work",
                    link: "/Our Work",
                    id: 3,
                    },
                    {
                        title: "Awards",
                        link: "/Awards",
                        id: 1,
                        },
                        {
                            title: "Clients",
                            link: "/Clients",
                            id: 2,
                            },
                            {
                                title: "Our Team",
                                link: "/Our Team",
                                id: 3,
                                },
                                {
            title: "Careers",
            link: "/Careers",
            id: 1,
            },
                {
                    title: "Contact Us",
                    link: "/Contact Us",
                    id: 3,
                    },
                    
        ]);

       return(
        <>
        <div className="h-28 main flex justify-between items-center px-12 bg-white">
            <div className="h-62 w-60 ">
        <img src="src\assets\logo.jpg"/>  
        </div>
        <div className="space-x-6 text-black " >

        {menuLinks.map((link)=>(
            <a key={link.id} href={link.link} className="hover:text-green-600" >
            {link.title}
            </a>
        ))}
        {/* <a href="#" className="hover:text-green-600" >About Us</a>

        <a href="#" className="hover:text-green-600">Services</a>

        <a href="#" className="hover:text-green-600">Our work</a> 
        <a href="#" className="hover:text-green-600">Awards</a>
        <a href="#" className="hover:text-green-600">Clients</a>
        <a href="#" className="hover:text-green-600">Our Team</a> 
        <a href="#" className="hover:text-green-600">Careers</a>
        <a href="#" className="hover:text-green-600">Contact Us</a>   */}

        </div>
        </div>
        </>
    )
}
export default Header;