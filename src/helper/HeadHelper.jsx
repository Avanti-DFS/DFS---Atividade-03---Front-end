import React from 'react'

const HeadHelper = (props) => {
    React.useEffect(() => {
        document.title = props.title + " | Eventos";
        document
          .querySelector("meta[name='description']")
          .setAttribute("content", props.description || "");
      }, [props]);
    
      return <></>;
}

export default HeadHelper