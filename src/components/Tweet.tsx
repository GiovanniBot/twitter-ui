interface TweetProps {
  user: string;
  content: string;
  likes?: number;
}

// const tweetStyles = {
//   borderRadius: 8
// }

export function Tweet(props: TweetProps) {
  return (
    <div className="tweet" style={{ borderRadius: 8 }}>
      <strong>{props.user}</strong>
      <p>{props.content}</p>
      <button>Like {props.likes ?? 0 }</button>  
    </div>
  )
}