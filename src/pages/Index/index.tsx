import React from 'react';
import {Link} from 'react-router-dom';

export default function Index() {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: '#000',
        color: '#fff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
      }}
    >
      <h2>王琦的小世界</h2>
      <p>欢迎来到我的小世界，记录、分享一些有趣的东西，跟随我一起进入我的小世界去看看吧！</p>
      <button><Link to='/entry'>进入小站</Link></button>
    </div>
  );
}
