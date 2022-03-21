import { FooterProps } from './Footer.props';
import styles from './Footer.module.scss';
import cn from 'classnames';

export const Footer = ({ className, ...props }: FooterProps): JSX.Element => {

	return(
		<div className={cn(className, styles.footer)} {...props}>
			Footer
		</div>
	);
};

