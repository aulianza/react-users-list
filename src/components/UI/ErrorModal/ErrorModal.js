import React from "react";
import Button from "../Button/Button";
import Card from "../Card/Card";
import style from "./ErrorModal.module.css";

const ErrorModal = (props) => {
	const handleCloseModal = () => props.onClickCloseModal();

	return (
		<>
			<div className={style.backdrop} onClick={handleCloseModal}>
				<Card className={style.modal}>
					<header className={style.header}>
						<h2>{props.title}</h2>
					</header>
					<div className={style.content}>
						<p>{props.message}</p>
					</div>
					<footer className={style.actions}>
						<Button onClick={handleCloseModal}>Close</Button>
					</footer>
				</Card>
			</div>
		</>
	);
};

export default ErrorModal;
