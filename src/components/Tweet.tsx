import { ArrowsClockwise, ChatCircle, Heart } from 'phosphor-react'
import './Tweet.css'

export function Tweet() {
  return (
    <a href="#" className="tweet">
      <img src="https://github.com/GiovanniBot.png" alt="Profile Image" />

      <div className="tweet-content">
        <div className="tweet-content-header">
          <strong>Giovanni Almeida</strong>
          <span>@alho_e_odio</span>
        </div>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. <br/>
          Omnis officia eligendi totam. Molestias deleniti ab suscipit <br/>
          quaerat iste, reprehenderit perspiciatis molestiae debitis <br/>
          eligendi doloremque sed.
        </p>

        <div className="tweet-content-footer">
          <button type="button">
            <ChatCircle />
            20
          </button>
          <button type="button">
            <ArrowsClockwise />
            20
          </button>
          <button type="button">
            <Heart />
            20
          </button>
        </div>
      </div>
      
    </a>
  )
}