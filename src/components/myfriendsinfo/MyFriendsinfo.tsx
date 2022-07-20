import "./MyFriendsinfo.css";


export default function MyFriendsinfo(props : any) {
    const { title, name, howwemet, quality1, quality2 } = props.MyFriendsinfo;
    return (
        <div className="my-friends_info">
            <div className="my-friends_top">
                <span>{title} </span>
                <span> {name}</span>
            </div>
            <div className="my-friends_bottom">
                <span> {howwemet} </span>
                <span>-</span>
                <span> {quality1} </span>
                <span>-</span>
                <span> {quality2} </span>
            </div>
        </div>
    );
}

