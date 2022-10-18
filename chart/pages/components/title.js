import styles from '../../styles/Title.module.scss'

const Title = () => {
  return ( 
    <div className={styles.title}>
        <div className={styles.data} >
          <div >my balance</div>
          <div className={styles.total} >$921.48</div>
        </div>
        <div className={styles.decoration}>
          <span className={styles.circle_empty} > 
          </span>
          <span className={styles.circle_full} >
          </span>
        </div>
    </div>
   );
}
 
export default Title;