import './directory-item.styles.scss'

const DirectoryItem = ({ category }) => {
    const {imageUrl, title} = category

    return(
        <div className="directory-item-container">
          <div className="background-image" style={{backgroundImage: `url(${imageUrl})`}} />    {/**adding imageURL as background of this div*/}
          <div className="directory-body-container">
            <h2>{title}</h2>
            <p>Shop Now</p>
          </div>
      </div>
    );

}

export default DirectoryItem;