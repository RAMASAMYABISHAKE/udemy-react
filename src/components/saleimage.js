
import saleimage from "../asset/images/sale image.jpg"
function Saleimage(){
    return(<div className="saleimage">
    <img src={saleimage} alt="sale image"></img>
    <div className="saleimage__box"> </div>
    <div className="saleimage__offer">
        <h2>Udemy Flash Sale 24 hours to save.</h2>
        <p>Get the top courses for just 499.Just one day to save but lifetime to learn </p>
    </div>
</div>)
}
export default Saleimage