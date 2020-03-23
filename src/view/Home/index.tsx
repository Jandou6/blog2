import * as React from 'react';
import { useEffect } from 'react';
import { Button } from 'antd';
import { Link } from 'react-router-dom';
const styles = require('./style.scss');

export default () => {
  return (
    <div className={styles.homePage}>
      <div>
        <Button type="primary">
          <Link to='/editor'>新增文章</Link>
        </Button>
      </div>
    </div>
  )
}