import React  from 'react';
import s from "./Users.module.css";

let Users =(props)=> {

    let pagesCount = Math.ceil(props.usersTotalCount / props.pageSize);
		let pages = [];
		for (let i = 1; i <= pagesCount; i++) {
			pages.push(i)
		}

    return(
        <div className={s.content}>
				<div>
					{pages.map( p => {
						return (
							<button
								onClick={()=>{props.onPageChanged(p)}}
								className={props.currentPage === p && s.activePage}
							>
								{p}
							</button>
						);
					})}
				</div>
				<div className={s.users_wrapper}>
					{props.users.map( u => (
						<div key={u.id} className={s.user_wrapper}>
							<div>
								<img
									className={s.avatar}
									src={
										u.photos
											? u.photos
											: "https://okeygeek.ru/wp-content/uploads/2017/09/1435667734_jh-6i8w73xg.jpg"
									}
									alt=""
								/>
							</div>
							<div className={s.information}>
								<a href="#"> {u.name} </a>
								<p> {u.status} </p>
							</div>
							{u.followed ? (
								<button
									onClick={() => props.unfollow(u.id)}
									className={s.unfollow}
								>
									Вы подписаны
								</button>
							) : (
								<button
									onClick={() => props.follow(u.id)}
									className={s.follow}
								>
									Подписаться
								</button>
							)}
						</div>
					))}
				</div>
				<div className={s.sidebar}></div>
			</div>
		
    )
}

export default Users;