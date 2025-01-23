import "./Star.css"
function Star() {
    const starImage = "https://seeklogo.com/images/R/red-star-logo-2D3327A276-seeklogo.com.png";
    return(
        <img className="star" src={starImage} alt="icon star" />
    )
};
export default Star;