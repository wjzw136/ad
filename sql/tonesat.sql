/*
Navicat MySQL Data Transfer

Source Server         : 本机
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : tonesat

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2018-04-27 17:20:36
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for liuyan
-- ----------------------------
DROP TABLE IF EXISTS `liuyan`;
CREATE TABLE `liuyan` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `email` varchar(255) NOT NULL,
  `dianhua` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of liuyan
-- ----------------------------

-- ----------------------------
-- Table structure for tongji
-- ----------------------------
DROP TABLE IF EXISTS `tongji`;
CREATE TABLE `tongji` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `ip` varchar(255) NOT NULL,
  `diyu` varchar(255) DEFAULT NULL,
  `wangzhi` varchar(255) DEFAULT NULL,
  `time` varchar(30) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of tongji
-- ----------------------------
INSERT INTO `tongji` VALUES ('1', '127.0.0.1', '深圳市', 'localhost', '14:45');

-- ----------------------------
-- Table structure for xiangmu
-- ----------------------------
DROP TABLE IF EXISTS `xiangmu`;
CREATE TABLE `xiangmu` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `jindu` varchar(255) NOT NULL,
  `guli` varchar(255) NOT NULL,
  `chanzong` varchar(255) NOT NULL,
  `chengyuan` varchar(255) NOT NULL,
  `bianhao` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of xiangmu
-- ----------------------------
INSERT INTO `xiangmu` VALUES ('1', 'xxx天线', '50', '张三', '张三', '张三,李四,王五', 'xxx');

-- ----------------------------
-- Table structure for yuangong
-- ----------------------------
DROP TABLE IF EXISTS `yuangong`;
CREATE TABLE `yuangong` (
  `name` varchar(255) NOT NULL,
  `zhiwei` varchar(255) NOT NULL,
  `bumen` varchar(255) DEFAULT NULL,
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `zhanghao` varchar(10) NOT NULL,
  `mima` varchar(10) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=27 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of yuangong
-- ----------------------------
INSERT INTO `yuangong` VALUES ('张三', '领导', '五虎上将', '1', 'ts123', '123');
INSERT INTO `yuangong` VALUES ('李四', '员工', '员工', '2', 'ts124', '123');
INSERT INTO `yuangong` VALUES ('王五', '员工', '员工', '3', 'ts125', '123');
INSERT INTO `yuangong` VALUES ('sss', 'ssss', 'sss', '4', 'ssss', '张三');
INSERT INTO `yuangong` VALUES ('222', '222', '222', '5', '222', '222');
INSERT INTO `yuangong` VALUES ('222', '222', '222', '6', '222', '222');
INSERT INTO `yuangong` VALUES ('222', '222', '222', '7', '222', '222');
INSERT INTO `yuangong` VALUES ('222', '222', '222', '8', '222', '222');
INSERT INTO `yuangong` VALUES ('222', '222', '222', '9', '222', '222');
INSERT INTO `yuangong` VALUES ('222', '222', '222', '10', '222', '222');
INSERT INTO `yuangong` VALUES ('222', '222', '222', '11', '222', '222');
INSERT INTO `yuangong` VALUES ('222', '222', '222', '12', '222', '222');
INSERT INTO `yuangong` VALUES ('222', '222', '222', '13', '222', '222');
INSERT INTO `yuangong` VALUES ('222', '222', '222', '14', '222', '222');
INSERT INTO `yuangong` VALUES ('222', '222', '222', '15', '222', '222');
INSERT INTO `yuangong` VALUES ('222', '222', '222', '16', '222', '222');
INSERT INTO `yuangong` VALUES ('222', '222', '222', '17', '222', '222');
INSERT INTO `yuangong` VALUES ('222', '222', '222', '18', '222', '222');
INSERT INTO `yuangong` VALUES ('222', '222', '222', '19', '222', '222');
INSERT INTO `yuangong` VALUES ('222', '222', '222', '20', '222', '222');
INSERT INTO `yuangong` VALUES ('222', '222', '222', '21', '222', '222');
INSERT INTO `yuangong` VALUES ('222', '222', '222', '22', '222', '222');
INSERT INTO `yuangong` VALUES ('222', '222', '222', '23', '222', '222');
INSERT INTO `yuangong` VALUES ('222', '222', '222', '24', '222', '222');
INSERT INTO `yuangong` VALUES ('222', '222', '222', '25', '222', '222');
INSERT INTO `yuangong` VALUES ('222', '222', '222', '26', '222', '222');
