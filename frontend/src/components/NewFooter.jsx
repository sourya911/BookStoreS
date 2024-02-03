import React from 'react'
import { Footer } from 'flowbite-react';
import { BsFacebook,BsDribbble, BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs';

const NewFooter = () => {
  return (
    <Footer bgDark>
    <div className="w-full">
      <div className="grid w-full grid-cols-2 gap-8 px-6 py-8 md:grid-cols-4">
        <div>
          <Footer.Title title="Company" />
          <Footer.LinkGroup col>
            <Footer.Link href="#">
              About
            </Footer.Link>
            <Footer.Link href="#">
              Sell Your Book
            </Footer.Link>
            
          </Footer.LinkGroup>
        </div>
        <div>
          <Footer.Title title="Contact Us" />
          <Footer.LinkGroup col>
            <Footer.Link href="">
              Linkedin
            </Footer.Link>
            <Footer.Link href="#">
              Twitter
            </Footer.Link>
            <Footer.Link href="#">
              Instagram
            </Footer.Link>
            
          </Footer.LinkGroup>
        </div>
      
       
      </div>
      <div className="w-full bg-gray-700 px-4 py-6 sm:flex sm:items-center sm:justify-between">
        <Footer.Copyright
          by="Flowbite™"
          href="#"
          year={2022}
        />
        <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
          <Footer.Icon
            href="#"
            icon={BsFacebook}
          />
          <Footer.Icon
            href="#"
            icon={BsInstagram}
          />
          <Footer.Icon
            href="#"
            icon={BsTwitter}
          />
          <Footer.Icon
            href="#"
            icon={BsGithub}
          />
          <Footer.Icon
            href="#"
            icon={BsDribbble}
          />
        </div>
      </div>
    </div>
  </Footer>
  )
}

export default NewFooter