import React from 'react'
import TuneIcon from '@material-ui/icons/Tune'
import './SearchPage.css'
import ChannelRow from './ChannelRow'
import VideoRow from './VideoRow'

const SearchPage = () => {
  return (
    <div className="searchPage">
      <div className="searchPage__filter">
        <TuneIcon className="searchPage__icon" />
        <h2>FILTER</h2>
      </div>
      <hr />
      <ChannelRow 
        image="https://yt3.ggpht.com/a/AATXAJz_1LNSmWZByLTTniC6ghw-l8AfD0P6W5j_sB3f=s900-c-k-c0xffffffff-no-rj-mo"
        channel="Hajime"
        verified
        subs="1.99M"
        noOfVideos={131}
        description="HAJIME RECORDS."
      />
      <hr />
      <VideoRow 
        image="https://im0-tub-by.yandex.net/i?id=2f9efecc0420e1835452963f52b06c82&n=13"
        title="Miygi & Andy Panda - Там Ревели Горы (Mood Video)"
        channel="Hajime"
        verified
        views="102K Views"
        timestamp="1 month ago"
        description="https://yamakasi2020.com Miyagi & Andy Panda - Там Ревели Горы Produced by FMT Jetlag (https://www.instagram.com/fmt.jetlag)"
      />
      <VideoRow 
        image="https://im0-tub-by.yandex.net/i?id=2f9efecc0420e1835452963f52b06c82&n=13"
        title="Miygi & Andy Panda - Там Ревели Горы (Mood Video)"
        channel="Hajime"
        verified
        views="102K Views"
        timestamp="1 month ago"
        description="https://yamakasi2020.com Miyagi & Andy Panda - Там Ревели Горы Produced by FMT Jetlag (https://www.instagram.com/fmt.jetlag)"
      />
      <VideoRow 
        image="https://im0-tub-by.yandex.net/i?id=2f9efecc0420e1835452963f52b06c82&n=13"
        title="Miygi & Andy Panda - Там Ревели Горы (Mood Video)"
        channel="Hajime"
        verified
        views="102K Views"
        timestamp="1 month ago"
        description="https://yamakasi2020.com Miyagi & Andy Panda - Там Ревели Горы Produced by FMT Jetlag (https://www.instagram.com/fmt.jetlag)"
      />
      <VideoRow 
        image="https://im0-tub-by.yandex.net/i?id=2f9efecc0420e1835452963f52b06c82&n=13"
        title="Miygi & Andy Panda - Там Ревели Горы (Mood Video)"
        channel="Hajime"
        verified
        views="102K Views"
        timestamp="1 month ago"
        description="https://yamakasi2020.com Miyagi & Andy Panda - Там Ревели Горы Produced by FMT Jetlag (https://www.instagram.com/fmt.jetlag)"
      />
      <VideoRow 
        image="https://im0-tub-by.yandex.net/i?id=2f9efecc0420e1835452963f52b06c82&n=13"
        title="Miygi & Andy Panda - Там Ревели Горы (Mood Video)"
        channel="Hajime"
        verified
        views="102K Views"
        timestamp="1 month ago"
        description="https://yamakasi2020.com Miyagi & Andy Panda - Там Ревели Горы Produced by FMT Jetlag (https://www.instagram.com/fmt.jetlag)"
      />
      <VideoRow 
        image="https://im0-tub-by.yandex.net/i?id=2f9efecc0420e1835452963f52b06c82&n=13"
        title="Miygi & Andy Panda - Там Ревели Горы (Mood Video)"
        channel="Hajime"
        verified
        views="102K Views"
        timestamp="1 month ago"
        description="https://yamakasi2020.com Miyagi & Andy Panda - Там Ревели Горы Produced by FMT Jetlag (https://www.instagram.com/fmt.jetlag)"
      />
      <VideoRow 
        image="https://im0-tub-by.yandex.net/i?id=2f9efecc0420e1835452963f52b06c82&n=13"
        title="Miygi & Andy Panda - Там Ревели Горы (Mood Video)"
        channel="Hajime"
        verified
        views="102K Views"
        timestamp="1 month ago"
        description="https://yamakasi2020.com Miyagi & Andy Panda - Там Ревели Горы Produced by FMT Jetlag (https://www.instagram.com/fmt.jetlag)"
      />
    </div>
  )
}

export default SearchPage
