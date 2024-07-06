import "./footer.scss";
import image from "../../assets/footer/Rectangle 2.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <h2>наши бренды</h2>
        <div className="footer__img">
          <img src={image} alt="" />
          <img src={image} alt="" />
          <img src={image} alt="" />
          <img src={image} alt="" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
