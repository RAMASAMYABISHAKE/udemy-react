import one from "../asset/images/recomendation 1.jpg"
import two from "../asset/images/recomendation 2.jpg"
import three from "../asset/images/recomendation 3.jpg"
import four from "../asset/images/recomendation 4.jpg"

function Popular() {
    return (<div className="recomendation">
        <h1 className="recomendation__title">Most Popular</h1>
        <p>Pick the best fit</p>
        <div className="recomendation__container">
            <div className="course-card"><img src={one}></img>
                <h3>2023 Python dataVisualization Masterclass</h3>

                <p>Col Steele</p>
                <p>4.8 ⭐⭐</p>
                <p>449 <del>1999</del></p>
            </div>
            <div className="course-card"><img src={two}></img>
                <h3>Web Development Boot camp 2023</h3>

                <p>Col Steele</p>
                <p>4.8 ⭐⭐⭐</p>
                <p>449 <del>1999</del></p>
            </div>
            <div className="course-card"><img src={three}></img>
                <h3>Master UI/UX Designing with Figma</h3>

                <p>Col Steele</p>
                <p>4.8 ⭐⭐</p>
                <p>449 <del>1999</del></p>
            </div>
            <div className="course-card"><img src={four}></img>
                <h3>Basic to Advance Java Core Training</h3>

                <p>Col Steele</p>
                <p>4.8 ⭐⭐⭐</p>
                <p>449 <del>1999</del></p>
            </div>
            <div className="course-card"><img src={four}></img>
                <h3>Basic to Advance Java Core Training</h3>

                <p>Col Steele</p>
                <p>4.8 ⭐⭐⭐</p>
                <p>449 <del>1999</del></p>
            </div>
            <div className="course-card"><img src={three}></img>
                <h3>Master UI/UX Designing with Figma</h3>

                <p>Col Steele</p>
                <p>4.8 ⭐⭐</p>
                <p>449 <del>1999</del></p>
            </div>
            <div className="course-card"><img src={two}></img>
                <h3>Web Development Boot camp 2023</h3>

                <p>Col Steele</p>
                <p>4.8 ⭐⭐⭐</p>
                <p>449 <del>1999</del></p>
            </div>
            <div className="course-card"><img src={one}></img>
                <h3>2023 Python dataVisualization Masterclass</h3>

                <p>Col Steele</p>
                <p>4.8 ⭐⭐</p>
                <p>449 <del>1999</del></p>
            </div>
        </div></div>)
}
export default Popular