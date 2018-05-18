/*
Navicat MySQL Data Transfer

Source Server         : 本机
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : tonesat

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2018-05-18 08:56:03
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for cp
-- ----------------------------
DROP TABLE IF EXISTS `cp`;
CREATE TABLE `cp` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `neibie` varchar(255) DEFAULT NULL,
  `miaoshu` varchar(255) DEFAULT NULL,
  `time` varchar(20) DEFAULT NULL,
  `tedian` varchar(255) DEFAULT NULL,
  `changjing` varchar(255) DEFAULT NULL,
  `xingneng` varchar(255) DEFAULT NULL,
  `imgurl` varchar(255) DEFAULT NULL,
  `bianhao` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=38 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of cp
-- ----------------------------
INSERT INTO `cp` VALUES ('1', '0.6m动中通卫通天线', '动中通卫通天线', '等效口径 0.6米和 0.9米系列动中通 卫通天线，是同星通信公司专为 Ku和 Ka频段 VSAT系统研制的卫通终端天线。本系列天线采用波导结构平面阵列和切角赋形反射面天线标准化设计，引进多重伺服稳定技术，外形轮廓低、辐射效率高、姿态变化响应速度快，能在剧烈抖动环境正常锁星。可装载于车辆、轮船、飞机等移动终端站，实现与其它移动终端或固定终端的实时双向宽带通信；也可直接或通过 wifi接入互联网，在地面通信网络失效、不健全环境提供通信和娱乐服务。', 'd', '天线收 / 通道独立，辐射效率高，波束指向精准；\r\n\r\n模糊伺服控制技术，路况适应性强；\r\n\r\n多种组合工作模式，支持静默跟踪，增强设备的可靠性和抗干扰能力；\r\n\r\n动态电子极化补偿，响应速度快，接收信号灵敏度高；\r\n\r\n发射功率谱密度自适应控制，避免邻星干扰，保障卫通网络正常的工作环境。', '适用于政府、军队、国家安全部门处置突发事件，银行、飞机、高铁、消防、电网电力、渔政渔业、水利和国土资源、森林防火等行业专用网络的互联互通、应急救灾通信、实时监控信息 /数据传送和上网需求，各企事业机构建立统筹管理及移动办公平台等场合。\r\n\r\nKa/Ku双频卫通天线。用于车载和近海船载地球终端站，一副天线支持 Ka和 Ku两个频段卫通系统，减少用户设备数量。', 'dsdsd', '/images/cp_cn_1.jpg', 'C0612');
INSERT INTO `cp` VALUES ('35', 'sdad', '动中通卫通天线', 'sdad', null, 'sdad', 'dsdsdsa', null, '/uploads/cp_cn_2.jpg', null);
INSERT INTO `cp` VALUES ('36', 'sdsd', '动中通卫通天线', 'sdsad', null, 'sdassd', 'sdasd', null, '/uploads/222.jpg', null);
INSERT INTO `cp` VALUES ('32', 'sdsadsd', '静中通卫通天线', 'sdsadsd', null, 'sdsadsd', 'dsd', null, '/uploads/cp_cn_4.jpg', null);
INSERT INTO `cp` VALUES ('31', 'sdsd', '动中通卫通天线', 'sdsd', null, 'dsdsad', 'dsdsd', null, '/uploads/cp_cn_3.jpg', null);

-- ----------------------------
-- Table structure for liuyan
-- ----------------------------
DROP TABLE IF EXISTS `liuyan`;
CREATE TABLE `liuyan` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `email` varchar(255) NOT NULL,
  `dianhua` varchar(255) DEFAULT NULL,
  `neirong` varchar(255) DEFAULT NULL,
  `time` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=14 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of liuyan
-- ----------------------------
INSERT INTO `liuyan` VALUES ('5', 'ssssss@111.com', 'sssssssss', '（23号大院）4025号航运综合楼1栋七层B031', '2018-04-28,9:40:46');
INSERT INTO `liuyan` VALUES ('7', 'sdsdsadsad@163.com', 'sdsdsad', '同星通信总部“东莞同济大学研究院”是东莞市人民政府和同济大学联合创办的开放式产学研平台，也是光科学前沿研究、新材料和通信技术领域高端技术研发与产业化基地。2015年被认定为广东省新型研发机构，并获批广东省超材料工程技术研究中心。', '2018-05-11,16:48:29');
INSERT INTO `liuyan` VALUES ('8', 'sdsdsadsad@163.com', 'sdsdsad', '合创办的开放式产学研平台，也是光科学前沿研究、新材料和通信技术领域高端技术研发与产业化基地。2015年被认定为广东省新型研发机构，并获批广东省超材料工程技术研究中心。', '2018-05-11,16:57:51');
INSERT INTO `liuyan` VALUES ('9', 'sdsdsadsad@163.com', 'sdsdsad', '合创办的开放式产学研平台，也是光科学前沿研究、新材料和通信技术领域高端技术研发与产业化基地。2015年被认定为广东省新型研发机构，并获批广东省超材料工程技术研究中心。', '2018-05-11,16:57:56');
INSERT INTO `liuyan` VALUES ('10', 'sdsdsadsad@163.com', 'sdsdsad', '与支持，综合实力上新台阶，产品拓展能力显著提升。业务层面', '2018-05-11,16:58:13');
INSERT INTO `liuyan` VALUES ('11', '221@22.com', '11111111', '静中通天线适用于地面机动或固定卫星通信站，静止状态下通过卫星接入主网络，实现与各卫星站点之间的互联互通需求。天线设备可置于车辆顶部，到达指定地点驻车加电即自动完成通信链接；或由人工背负搬运至特定位置，即时建立一个通信终端站。静中通站点具有机动灵活、不受时间和地点限制，以及操作简单、工作稳定可靠等特点，已成为抢险救灾现场通信快速恢复，边远地区实行远程医疗、教育和会议通信，野外科考或探险队伍信息交流，提供 移动运营商 数据回传关键链路，新闻采访、赛事直播等场合的重要手段。', '2018-05-11,16:58:36');
INSERT INTO `liuyan` VALUES ('13', 'sdsdsadsad@163.com', 'sdad', 'sdadsdsad', '2018-05-17,15:45:5');

-- ----------------------------
-- Table structure for news
-- ----------------------------
DROP TABLE IF EXISTS `news`;
CREATE TABLE `news` (
  `id` int(20) NOT NULL AUTO_INCREMENT,
  `biaoti` varchar(255) DEFAULT NULL,
  `neirong` text,
  `time` varchar(255) DEFAULT NULL,
  `user` varchar(255) DEFAULT NULL,
  `biaoqian` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=15 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of news
-- ----------------------------
INSERT INTO `news` VALUES ('1', '双频段共用天线面卫星通信车载静中通', '随着社会的发展，国家对应急救援工作越来越重视，应急救援工作展开的同时，对应急减灾的硬件设施也在一步步提高，全面走向自动化，智能化。在应急救援工作中，通信工具是必不可少的，能将现场实况实时的传输到指挥大厅，是展开应急救援工作的关键，只有全面了解了应急现场状况才能够做出及时准确的应对措施，才能够保证应急救援工作迅速快捷，落到实处，减少减缓灾情，防止恶化。\r\n\r\n\r\n陕西欧赛通信科技有限公司是一家专业从事卫星通信设备天线生产的厂家，同时提供系统集成以及技术支持和服务。我公司是国家认定的高新企业，同时也是应急减灾协会的会员，公司产品广泛应用于部队，公安、消防、环保、气象、地震、人防工程、森林防火、新闻采集等国家政府应急指挥系统，因公司高质量的产品和雄厚的技术实力，多个项目获得用户的高度评价。\r\n\r\n\r\nC/Ku双频段静中通车载站\r\n\r\n\r\n型号\r\n\r\nOS-SA218V3型-------1.8米C、Ku双频段共用天线面偏馈静中通天伺系统\r\n\r\n功能\r\n\r\nu 自动展开/收藏；\r\n\r\nu 自动定wei；\r\n\r\nu 自动捕获卫星；\r\n\r\nu 自动跟踪（步进跟踪），跟踪精度优于1/10接收波束宽度；\r\n\r\nu C、Ku频段电动切换；\r\n\r\nu 在雨区实施全天候不间断的卫星通信；\r\n\r\n特点\r\n\r\nu 符合CCIR580-4，通过国际卫星、欧洲卫星组织、亚洲卫星公司、东方卫星公司入网要求；\r\n\r\nu 3分钟完成自动展开、自动定wei并自动捕获卫星；\r\n\r\nu 信标接收机采用双锁相环技术窄带捕获；\r\n\r\nu 电动极化控制；\r\n\r\nu 控制系统功能强大，体积小；\r\n\r\nu C、Ku频段馈源、上、下行信号均电动切换；\r\n\r\nu C、Ku频段馈源置于共用天线面，不影响天线效益。', '2018-05-14,9:22:46', 'ts123', '幻神');
INSERT INTO `news` VALUES ('4', '双频段共用天线面卫星通信车载静中通', 'Ku频段馈源置于共用天线面', '2018-05-14,16:2:22', 'ts123', '幻神');

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
) ENGINE=MyISAM AUTO_INCREMENT=33 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of tongji
-- ----------------------------
INSERT INTO `tongji` VALUES ('8', '127.0.0.1', 'sds', 'localhost', '2018-05-11,15:20:24');
INSERT INTO `tongji` VALUES ('2', '127.0.0.1', 'sds', 'localhost', '2018-05-07,17:14:40');
INSERT INTO `tongji` VALUES ('3', '127.0.0.1', 'sds', 'localhost', '2018-05-07,17:15:53');
INSERT INTO `tongji` VALUES ('4', '127.0.0.1', 'sds', 'localhost', '2018-05-07,17:16:56');
INSERT INTO `tongji` VALUES ('5', '127.0.0.1', 'sds', 'localhost', '2018-05-08,13:46:23');
INSERT INTO `tongji` VALUES ('6', '127.0.0.1', 'sds', 'localhost', '2018-05-08,14:29:6');
INSERT INTO `tongji` VALUES ('7', '127.0.0.1', 'sds', 'localhost', '2018-05-09,9:21:19');
INSERT INTO `tongji` VALUES ('9', '127.0.0.1', 'sds', '127.0.0.1', '2018-05-11,15:26:45');
INSERT INTO `tongji` VALUES ('10', '127.0.0.1', 'sds', 'localhost', '2018-05-11,15:58:40');
INSERT INTO `tongji` VALUES ('11', '192.168.10.99', 'sds', '192.168.10.99', '2018-05-11,17:9:1');
INSERT INTO `tongji` VALUES ('12', '192.168.10.31', 'sds', '192.168.10.99', '2018-05-11,17:15:55');
INSERT INTO `tongji` VALUES ('13', '192.168.10.14', 'sds', '192.168.10.99', '2018-05-11,17:17:33');
INSERT INTO `tongji` VALUES ('14', '192.168.10.14', 'sds', '192.168.10.99', '2018-05-11,17:17:37');
INSERT INTO `tongji` VALUES ('15', '192.168.10.25', 'sds', '192.168.10.99', '2018-05-11,17:18:46');
INSERT INTO `tongji` VALUES ('16', '192.168.10.25', 'sds', '192.168.10.99', '2018-05-11,17:18:51');
INSERT INTO `tongji` VALUES ('17', '192.168.10.25', 'sds', '192.168.10.99', '2018-05-11,17:20:59');
INSERT INTO `tongji` VALUES ('18', '127.0.0.1', 'sds', 'localhost', '2018-05-14,9:19:26');
INSERT INTO `tongji` VALUES ('19', '127.0.0.1', 'sds', 'localhost', '2018-05-15,8:49:4');
INSERT INTO `tongji` VALUES ('20', '192.168.10.33', 'sds', '192.168.10.99', '2018-05-15,15:12:45');
INSERT INTO `tongji` VALUES ('21', '127.0.0.1', 'sds', 'localhost', '2018-05-16,9:26:31');
INSERT INTO `tongji` VALUES ('22', '127.0.0.1', 'sds', 'localhost', '2018-05-16,13:26:25');
INSERT INTO `tongji` VALUES ('23', '127.0.0.1', 'sds', 'localhost', '2018-05-16,15:57:38');
INSERT INTO `tongji` VALUES ('24', '127.0.0.1', 'sds', 'localhost', '2018-05-17,9:57:35');
INSERT INTO `tongji` VALUES ('25', '127.0.0.1', 'sds', 'localhost', '2018-05-17,10:14:45');
INSERT INTO `tongji` VALUES ('26', '127.0.0.1', 'sds', 'localhost', '2018-05-17,11:24:50');
INSERT INTO `tongji` VALUES ('27', '127.0.0.1', 'sds', 'localhost', '2018-05-17,11:33:6');
INSERT INTO `tongji` VALUES ('28', '127.0.0.1', 'sds', 'localhost', '2018-05-17,11:34:29');
INSERT INTO `tongji` VALUES ('29', '127.0.0.1', 'sds', 'localhost', '2018-05-17,15:27:24');
INSERT INTO `tongji` VALUES ('30', '127.0.0.1', 'sds', 'localhost', '2018-05-17,15:43:4');
INSERT INTO `tongji` VALUES ('31', '192.168.10.33', 'sds', '192.168.10.99', '2018-05-17,15:47:45');
INSERT INTO `tongji` VALUES ('32', '192.168.10.33', 'sds', '192.168.10.99', '2018-05-17,15:49:52');

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
  `lv` int(10) unsigned NOT NULL,
  `imgurl` text,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=46 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of yuangong
-- ----------------------------
INSERT INTO `yuangong` VALUES ('张三', '领导', '五虎上将', '1', 'ts123', '123', '10', null);
INSERT INTO `yuangong` VALUES ('湿哒哒2', '幻神', '剑道联盟', '2', 'ts125', '123456', '1', null);
INSERT INTO `yuangong` VALUES ('李是的撒', '幻神', '剑道联盟', '3', 'ts124', '123456', '1', null);
INSERT INTO `yuangong` VALUES ('达到', '下水道', '尼姑联盟', '45', '是的撒', '123456', '1', null);
