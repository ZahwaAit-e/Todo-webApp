import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import "./footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="social-links">
        <a
          href="https://twitter.com/your-twitter"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="icon">
            <LinkedInIcon></LinkedInIcon>
          </div>
        </a>
        <a
          href="https://facebook.com/your-facebook"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="icon">
            <GitHubIcon></GitHubIcon>
          </div>
        </a>
        <a
          href="https://instagram.com/your-instagram"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="icon">
            <TwitterIcon></TwitterIcon>
          </div>
        </a>
        <a
          href="https://instagram.com/your-instagram"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="icon">
            <InstagramIcon></InstagramIcon>
          </div>
        </a>
        <a
          href="https://instagram.com/your-instagram"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="icon">
            <FacebookIcon></FacebookIcon>
          </div>
        </a>
        {/* Add more social links as needed */}
      </div>
    </footer>
  );
};

export default Footer;
