import Mountain1 from "../assets/5.jpg"
import Mountain2 from "../assets/6.jpg"
import Mountain3 from "../assets/7.jpg"
import Mountain4 from "../assets/8.jpg"
import DestinationData from "./DestinationData"
import "./DestinationStyle.css"

const Destination = () => {
    return (
        <>
            <div className="destination">
                <h1>Popular Destinations</h1>
                <p>Tours give you the opportunity to see alot</p>
                <DestinationData
                className="first-des"
                heading="Tal Volcano, Batangas"
                text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus ipsum voluptatum culpa, beatae voluptatibus obcaecati asperiores quidem ipsa laboriosam quis consequatur quos ullam est similique ea dolor odit nisi. Eius perferendis consequuntur ad eum nulla, deserunt vero sint tempore adipisci reprehenderit ipsa rem quis et aliquid dolorem reiciendis ut suscipit doloremque explicabo eligendi quo recusandae molestias. Sint temporibus quas cum?"
                img1={Mountain1}
                img2={Mountain2}
                />
                <DestinationData
                className="first-des-reverse"
                heading="Mt. Daguldal, Batangas"
                text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus ipsum voluptatum culpa, beatae voluptatibus obcaecati asperiores quidem ipsa laboriosam quis consequatur quos ullam est similique ea dolor odit nisi. Eius perferendis consequuntur ad eum nulla, deserunt vero sint tempore adipisci reprehenderit ipsa rem quis et aliquid dolorem reiciendis ut suscipit doloremque explicabo eligendi quo recusandae molestias. Sint temporibus quas cum?"
                img1={Mountain3}
                img2={Mountain4}
                />
            
            </div>
        </>
    )
}

export default Destination