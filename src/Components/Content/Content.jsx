import { data } from "./ContentData"
import Navbar from "../Navbar/Navbar"
import './Content.css'
import { useState } from "react"
const Content = ({searchTerm}) => {
    // const [filteredanime, setFilteredanime] = useState(data)

    //     const filteredItems = data.filter((animeData) =>
    //         animeData.Title.toLowerCase().includes(searchTerm.toLowerCase()));


    return (
        <div className="container" >

            {data.map((Animedata, id) => (
                <div key={id} className="ContentData">
                    <div>
                        {Animedata.Title}
                    </div>
                    <div>{Animedata.Description}</div>
                </div>
            ))}
        </div>
    )

}

export default Content