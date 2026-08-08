import "./TripStyle.css"
import TripData from "./TripData";
import Trip1 from "../assets/9.jpg"
import Trip2 from "../assets/10.jpg"
import Trip3 from "../assets/11.jpg"

function Trip(){
    return(
<div className="trip">
    <h1>Recent Trips</h1>
    <p>You can discover unique Destinations using google Maps</p>
    <div className="tripcard">
        <TripData
        image={Trip1}
        heading="Trip in Indonesia"
        text="Indonesia, officially the Republic of Indonesia, is the world's largest island country and archipelagic state, located in Southeast Asia and Oceania between the Indian and Pacific oceans. It has a population of over 288 million people, making it the fourth most populous nation globally, with Jakarta as its capital"      
        />
         <TripData
        image={Trip2}
        heading="Trip in Malaysia"
        text="Malaysia, officially the Republic of Malaysia, is the world's largest island country and archipelagic state, located in Southeast Asia and Oceania between the Indian and Pacific oceans. It has a population of over 288 million people, making it the fourth most populous nation globally, with Jakarta as its capital"      
        />
         <TripData
        image={Trip3}
        heading="Trip in France"
        text="France, officially the Republic of France, is the world's largest island country and archipelagic state, located in Southeast Asia and Oceania between the Indian and Pacific oceans. It has a population of over 288 million people, making it the fourth most populous nation globally, with Jakarta as its capital"      
        />
    </div>
</div>
    )
}

export default Trip;