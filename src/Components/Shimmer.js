import { ShimmerSimpleGallery } from "react-shimmer-effects";

const Shimmer = ()=>{
    return (
        <div className="shimmer-container">
             <ShimmerSimpleGallery row={5} imageHeight={200} caption />
        </div>
    )
};

export default Shimmer;