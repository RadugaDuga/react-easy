
import React from "react";
import s from "./UserInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";

const UserInfo = (props) => {

	if (!props.profile) {
		return <Preloader/>
	}
	return (
		<div className={s.container}>
			<div className={s.info_wrapper}>
				<div className={s.user_name}>
					<p>  	{props.profile.fullName}     <span className={s.status}>online</span></p>
					<p>
						{props.profile.aboutMe}
					</p>
				</div>
				<div className={s.about_user}>
					<p> День рождения:      </p><a><span>26 августа </span></a> 
					<p> Город:              </p><a><span>Новосибирск</span></a> 
					<p> Семейное положение: </p><a><span>влюблен    </span></a> 
				</div>
				<button className={s.more_button}>Показать подробную информацию..</button>
			</div>
			<div className={s.user_stats}>
				<p>54<span>друга</span></p>
				<p>38<span>подписчиков</span></p>
				<p>4<span>фотографии</span></p>
				<p>2<span>отметки</span></p>
				<p>36<span>видеозаписей</span></p>
			</div>
		</div>
	);
};

export default UserInfo;


// Георгий Букиа <span>&#128123;</span> 