import React, { useEffect, useState } from "react";
import s from "./ProfileStatus.module.css";

const ProfileStatusWithHooks = (props) => {
	let [editMode, setEditMode] = useState(false);

	const toggleEditMode = () => {
		if (editMode) {
			setEditMode(false);
			props.updateStatus(status);
		} else {
			setEditMode(true);
		}
	};

	let [status, setStatus] = useState(props.status);

	const onStatusChange = (e) => {
		setStatus(e.currentTarget.value);
	};

	useEffect(() => {
		setStatus(props.status);
	}, [props.status]);

	return (
		<section>
			{editMode ? (
				<div className={s.input_status_wrapper}>
					<input
						value={status}
						onChange={onStatusChange}
						onBlur={toggleEditMode}
						className={s.inputStatus}
						autoFocus={true}
					></input>
				</div>
			) : (
				<div onClick={toggleEditMode} className={s.status}>
					{props.status || <div className={s.no_status}>yстановить статус</div>}
				</div>
			)}
		</section>
	);
};

export default ProfileStatusWithHooks;