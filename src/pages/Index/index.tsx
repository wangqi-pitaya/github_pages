import React from 'react';
import { Link } from 'react-router-dom';

export default function Index() {
  return (
    <div>
      <div
        style={{
          width: '100vw',
          height: '100vh',
          backgroundColor: '#000',
          color: '#fff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
        }}
      >
        <p>王琦的小世界</p>
        <p>欢迎来到我的小世界，记录、分享一些有趣的东西，跟随我一起进入我的小世界去看看吧！</p>
        <Link to='/entry'>进入小站</Link>       
      </div>
    </div>
  )
}
