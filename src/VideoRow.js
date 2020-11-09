import React from 'react'
import VerifiedIcon from '@material-ui/icons/CheckCircleOutlined'
import './VideoRow.css'

const VideoRow = ({views, verified, description, timestamp, channel, title, image}) => {
  return (
    <div className="videoRow">
      <img src={image} alt={title} />
      <div className="videoRow__text">
        <h4>{title}</h4>
        <p className="videoRow__headline">
          {channel} {verified && <VerifiedIcon className="videoRow__verified" />} {views} ° {timestamp}
        </p>
        <p className="videoRow__description">{description}</p>
      </div>
    </div>
  )
}

export default VideoRow
