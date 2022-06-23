import styles from './Header.module.css' 

export function Header () {
	return (
		<header className={styles.header}>
			<div className={styles.container}>
				<div className={styles.wrapper}>
					<img 
						src="https://cdnportal.mobalytics.gg/production/2021/06/64779e0a-league-of-legends-game-bg.png" 
						alt="League of legends background"
					/>
					<div className={styles.logo__wrapper}>
						<img src="/images/league-of-legends-logo.svg" alt="" />
					</div>
				</div>
				<div className={styles.wrapper}>
					<img 
						src="https://cdnportal.mobalytics.gg/production/2021/06/b7a64706-teamfight-tactics-game-bg.png" 
						alt="Teamfight Tatics background" 
					/>
					<div className={styles.logo__wrapper}>
						<img src="/images/teamfight-tatics-logo.svg" alt="" />
						</div>
				</div>
			</div>
		</header>
	)
}