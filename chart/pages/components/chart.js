import styles from '../../styles/Chart.module.scss'

const Chart = () => {
  return ( 
    <div className={styles.Chart} >
      <div className={styles.last_7_days} >
        Spending - Last 7 days
      </div>
      <div className={styles.statistics}>
        <div className={styles.data} >
          <div className={styles.data_block + " " + styles.mon}></div>
          <div>mon</div>
        </div>
        <div className={styles.data} >
          <div className={styles.data_block + " " + styles.tue}></div>
          <div>tue</div>
        </div>
        <div className={styles.data}> 
          <div className={styles.data_block + " " + styles.wed}></div>
          <div>wed</div>
        </div>
        <div className={styles.data} >
          <div className={styles.data_block + " " + styles.thu}></div>
          <div>thu</div>
        </div>
        <div className={styles.data} >
          <div className={styles.data_block + " " + styles.fri}></div>
          <div>fri</div>
        </div>
        <div className={styles.data} >
          <div className={styles.data_block + " " + styles.sat}></div>
          <div>sat</div>
        </div>
        <div className={styles.data} >
          <div className={styles.data_block + " " + styles.sun}></div>
          <div>sun</div>
        </div>
        
      </div>
      <div>
        <hr/>
      </div>
      
      <div className={styles.month}>
        <div className={styles.month_data}>
          <div>
            Total this month
          </div>
          <div className={styles.month_total} >
            $478.33
          </div>
        </div>
        <div className={styles.profit_margin}>
          <div className={styles.percentage}>
            +2.4%
          </div>
          <div>
            from last month
          </div>
        </div>
      </div>

    </div>
   );
}
 
export default Chart;
