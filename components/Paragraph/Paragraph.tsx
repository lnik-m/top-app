import { ParagraphProps } from './Paragraph.props';
import styles from './Paragraph.module.scss';
import cn from 'classnames';

export const Paragraph = ({ size='m', children, className, ...props }: ParagraphProps): JSX.Element => {
	return(
		<p
			className={cn(styles.p, className, {
				[styles.small]: size=='s',
				[styles.medium]: size=='m',
				[styles.big]: size=='b'
			})}
				{...props}
		>
			{children}
		</p>
	);
};

