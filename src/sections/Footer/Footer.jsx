import styles from './FooterStyles.module.css';

function Footer() {
  return (
    <section id="footer" className="bg-[#111827] flex flex-row align-center justify-center">
      <p style={{color:"white"}}>
        &copy; 2024 Hein Htut Aung. <br />
        All rights reserved.
      </p>
    </section>
  );
}

export default Footer;
