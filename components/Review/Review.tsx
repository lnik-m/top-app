import { ReviewProps } from './Review.props';
import styles from './Review.module.scss';
import cn from 'classnames';
import UserIcon from './User.svg';
import { format } from 'date-fns';
import { Rating } from '../Rating/Rating';

export const Review = ({ review, className, ...props }: ReviewProps): JSX.Element => {
    const { name, title, description, createdAt, rating } = review;
    return (
        <div className={cn(styles.review, className)}
            {...props}
        >
            <UserIcon className={styles.user} />
            <div>
                <span className={styles.name}>{name}: </span>
                <span>{title}</span>
            </div>
            <div className={styles.date}>
                {format(new Date(createdAt), 'dd MMMM yyyy')}
            </div>
            <Rating rating={rating} />
            <div className={styles.description}>
                {description}
            </div>
        </div>
    );
};