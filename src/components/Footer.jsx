import styles from "../style";
import { logo } from "../assets";
import { footerLinks, socialMedia,licencePartner, extraFooterLinks,} from "../constants";

const Footer = () => (
  <section className={`${styles.flexCenter} ${styles.paddingY}  items-start flex-col bg-primary rounded-[10px] gap-[8] grid`} >
    <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
      <div className="flex-[1] flex flex-col justify-start mr-10">
        <img
          src={logo}
          alt="Emali Inc"
          className="w-[200px] h-[75.14px] object-contain md:cursor-pointer h-20 "
        />
        <p className={`${styles.paragraph} mt-4 max-w-[312px]`}>
         Binded to the laws of land.Your data is safe with us.Our platform provides a reliable 
         and highly Secure environment for your valuable information.
        </p>
        <div className="flex flex-row md:mt-0 mt-6">
        {licencePartner.map((licence, index) => (
          <img
            key={licence.id}
            src={licence.icon}
            alt={licence.id}
            className={`w-[80px] h-[100wpx] object-contain cursor-pointer ${
              index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
            }`}
            onClick={() => window.open(licence.link)}
          />
        ))}
      </div>
      </div>

      <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
        {footerLinks.map((footerlink) => (
          <div key={footerlink.title} className={`flex flex-col ss:my-0 my-4 min-w-[150px]`}>
            <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white">
              {footerlink.title}
            </h4>
            <ul className="list-none mt-4">
              {footerlink.links.map((link, index) => (
                <li
                  key={link.name}
                  className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer ${
                    index !== footerlink.links.length - 1 ? "mb-4" : "mb-0"
                  }`}
                >
                  {link.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>

    <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
      <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white">
        Copyright Ⓒ 2024 Emali Cloud. All Rights Reserved.
      </p>
      <div className="flex flex-row md:mt-0 mt-6">
        {extraFooterLinks.map((footer, index) => (
          <a
            key={footer.id}
            href={footer.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`cursor-pointer ${
            index !== extraFooterLinks.length - 1 ? "mr-6" : "mr-0"
             } font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer`}
          >
            {footer.name}
          </a>
  ))}
</div>

      <div className="flex flex-row md:mt-0 mt-6">
        {socialMedia.map((social, index) => (
          <img
            key={social.id}
            src={social.icon}
            alt={social.id}
            className={`w-[21px] h-[21px] object-contain cursor-pointer ${
              index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
            }`}
            onClick={() => window.open(social.link)}
          />
        ))}
      </div>
    </div>
  </section>
);

export default Footer;