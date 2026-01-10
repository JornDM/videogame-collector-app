import styles from './LoadingSpinner.module.scss'

type LoadingSpinnerProps = {
  size?: number;
};

const LoadingSpinner = ({ size = 40 }: LoadingSpinnerProps) => {
  return (
    <div
      className={styles['loading-spinner']}
      style={{ width: size, height: size }}
      aria-label="Loading"
    />
  );
};

export default LoadingSpinner;
