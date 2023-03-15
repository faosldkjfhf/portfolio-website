import React, { useEffect } from "react";

const Photos = () => {
    useEffect(() => {
        document.title = "Photos"
    }, []);
    return (
        <div>
            <img src="./images/Portraits_0021.jpg" width="50%" className="img-fluid" />
        </div>
    )
}

export default Photos;