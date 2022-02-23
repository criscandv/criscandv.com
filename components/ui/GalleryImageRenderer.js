import React from "react";
import styled from "@emotion/styled";

function GalleryImageRenderer({className, photo, ...props}){
  return (
    <div className={className}>
      <img alt="photo.title" {...photo}/>
      <span>
        {photo.title}
        {photo.link?
          <a href={photo.link} target="_blank"><i className="fas fa-external-link-alt"/></a> :
          ''
        }
      </span>
    </div>
  )
}

export default styled(GalleryImageRenderer)`
  background: transparent;
  overflow: hidden;
  position: absolute;
  left: ${({left}) => left}px;
  top: ${({top}) => top}px;
  margin: ${({margin}) => margin};
  height: ${({photo}) => photo.height}px;
  width: ${({photo}) => photo.width}px;
  padding: 10px 10px 50px 10px;
  
  img {
    cursor: pointer;
    width: 100%;
    height: 100%;
  }
  
  span {
    background-color: #efefef;
    color: #1f1f1f;
    display: block;
    padding: 10px;
    text-transform: uppercase;
    font-size: 16px;
    line-height: 1.6;
    font-weight: 600;
    
    a {
      margin-left: 15px;
    }
  }
`;