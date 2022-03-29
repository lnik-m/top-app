import { TagProps } from './Tag.props';
import styles from './Tag.module.scss';
import cn from 'classnames';

export const Tag = ({ size='s', children, href, color='ghost', className, ...props }: TagProps): JSX.Element => {
	return(
		<div
			className={cn(styles.tag, className, {
				[styles.small]: size=='s',
				[styles.medium]: size=='m'
			},
			{
				[styles.ghost]: color=='ghost',
				[styles.primary]: color=='primary',
				[styles.red]: color=='red',
				[styles.green]: color=='green',
				[styles.lblue]: color=='l-blue'
			})}
				{...props}
		>
		{
			href
			? <a href={href}>{children}</a>
			: <>{children}</>
		}
		</div>
	);
};

