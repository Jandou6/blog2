import * as React from 'react';
import { useLive2d } from '@hook/live2d';

export default () => {
  useLive2d();
  return (
    <div>欢迎来到小工具</div>
  )
};