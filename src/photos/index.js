import React, { useEffect } from "react";

const Photos = () => {
    useEffect(() => {
        document.title = "Photos"
    }, []);
    return (
        <div>
            <img src="./images/Portraits_0021.jpg" width="50%" className="img-fluid" />
            <br />
            <br />
            <img src="./images/Portraits_0008.jpg" width="50%" className="img-fluid" />
            <br />
            <br />
            <img src="./images/Portraits_0012.jpg" width="50%" className="img-fluid" />
            <br />
            <br />
            <img src="./images/Portraits_0017.jpg" width="50%" className="img-fluid" />
            <br />
            <br />
            <img src="./images/Portraits_0037.jpg" width="50%" className="img-fluid" />
            <br />
            <br />
            <img src="./images/Portraits_0038.jpg" width="50%" className="img-fluid" />
        </div>
    )
}

export default Photos;