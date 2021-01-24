/*
 * @Author: your name
 * @Date: 2021-01-23 14:29:43
 * @LastEditTime: 2021-01-24 13:00:04
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /h5-kaoyan/src/config/tabbar-config.js
 */
const homeSrc = require('../assets/tmp/img/icon_home@2x.png');
const homeCurSrc = require('../assets/tmp/img/icon_home_focus@2x.png');
const courseSrc = require('../assets/tmp/img/icon_course@2x.png');
const courseCurSrc = require('../assets/tmp/img/icon_course_focus@2x.png');
const newsSrc = require('../assets/tmp/img/icon_news@2x.png');
const newsCurSrc = require('../assets/tmp/img/icon_news_focus@2x.png');
const mineSrc = require('../assets/tmp/img/icon_mine@2x.png');
const mineCurSrc = require('../assets/tmp/img/icon_mine_focus@2x.png');

const tabbarConfig = [
  {
    id: 1,
    tabbbarName: '首页',
    imgSrc: homeSrc,
    currentImg: homeCurSrc,
  },
  {
    id: 2,
    tabbbarName: '课程',
    imgSrc: courseSrc,
    currentImg: courseCurSrc,
  },
  {
    id: 3,
    tabbbarName: '资讯',
    imgSrc: newsSrc,
    currentImg: newsCurSrc,
  },
  {
    id: 4,
    tabbbarName: '我的',
    imgSrc: mineSrc,
    currentImg: mineCurSrc,
  },
];

module.exports = tabbarConfig;
