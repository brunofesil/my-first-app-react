import React, {Fragment} from "react";

const DescriptionLink = (props) => {
  if (!props.description) {
    return null;
  }

  if (props.link) {
    return (
      <Fragment>
        <p>{props.description}</p>
        <div>
        <a href={props.link}>{props.link}</a>
        </div>
      </Fragment>
    )
  } else {
    return (
      <Fragment>
        <p><u>{props.description}</u></p>
      </Fragment>
    )
  }
  
}

export default DescriptionLink;