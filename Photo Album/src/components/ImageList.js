import React from "react";
import Image from "./Image";

export default class ImageList extends React.Component {
  // Create Lifecycle method to prevent re render of the list if some spaces are present.
  // Use the shouldComponentUpdate lifecycle method here
  // Step1: Ensure valid images are at least 5 characters long and have no leading/trailing spaces
  // Step2: Only re-render if all images are valid
  shouldComponentUpdate(nextProps){
    const imagesLength = nextProps.images.length;
    
    if (nextProps.images.length > 0) {
    const lastImageUrl = nextProps.images[imagesLength - 1];
    
    if (lastImageUrl.length <= 5 || lastImageUrl.indexOf(" ") >= 0) {
      return false;
    }
    
    }
    return true;

  }

  
  render() {
    return (
      <div className="image-list">
        {this.props.images.map((image, index) => {
          return <Image key={index} image={image} />;
        })}
      </div>
    );
  }
}
