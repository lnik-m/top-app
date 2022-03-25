import { SidebarProps } from './Sidebar.props';
import styles from './Sidebar.module.scss';
import cn from 'classnames';
import { Menu } from '../Menu/Menu';
import LogoIcon from '../logo.svg';
import SearchIcon from './search.svg';

export const Sidebar = ( {className, ...props }: SidebarProps): JSX.Element => {

	return(
		<div className={cn(className, styles.sidebar)} {...props}>
			<LogoIcon />
			<div className={styles.search}>
				<span>Поиск...</span>
				<div className={styles.icon}><SearchIcon /></div>
			</div>
			<Menu />
		</div>
	);
};

