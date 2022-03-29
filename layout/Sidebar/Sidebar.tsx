import { SidebarProps } from './Sidebar.props';
import styles from './Sidebar.module.scss';
import cn from 'classnames';
import { Menu } from '../Menu/Menu';
import LogoIcon from '../logo.svg';
import SearchIcon from './search.svg';
import { Search } from '../../components';

export const Sidebar = ( {className, ...props }: SidebarProps): JSX.Element => {

	return(
		<div className={cn(className, styles.sidebar)} {...props}>
			<LogoIcon />
			<Search />
			<Menu />
		</div>
	);
};

