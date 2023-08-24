import "../styles/SocialLink.css";

const SocialLink = ({ anchorLink, src, name }) => {
  return (
    <a href={anchorLink} target="_blank" className="imgContainer">
      <img className="socialImage" src={src} alt={name}></img>
    </a>
  );
};

export default SocialLink;
