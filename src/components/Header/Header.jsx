import React, { useState } from "react";
import s from "./Header.module.css";
import logo from "../../images/vk2.svg";
import { NavLink } from "react-router-dom";
import LogoutBar from "./LogoutBar/LogoutBar";
import { useSelector } from 'react-redux';

const Header = (props) => {
	let [logoutBar, setLogoutBar] = useState(false);
	const toggleLogoutBar = () => {
		logoutBar ? setLogoutBar(false) : setLogoutBar(true);
	};

	const userPhoto = useSelector( state => state.profilePage.profile.photos.large)
	return (
		<header className={s.header}>
			<img src={logo} className={s.logo} alt="" />
			<input className={s.search} placeholder="Поиск" />
			<button className={s.notify_btn}></button>
			<button className={s.music_btn}></button>
			<div className={s.loginBlock}>
				{props.isAuth ? (
					<div onClick={toggleLogoutBar} className={s.info}>
						<p className={s.name}>{props.login.split("_")[0]}</p>
						<img
							src={userPhoto}
							className={s.image}
							alt="^__^"
						/>
						<div className={s.more_button}></div>
						{logoutBar && (
							<LogoutBar userPhoto={userPhoto} login={props.login} logout={props.logout}/>
						)}
					</div>
				) : (
					<NavLink className={s.login} to={"/login"}>
						Вход
					</NavLink>
				)}
			</div>
		</header>
	);
};

export default Header;
