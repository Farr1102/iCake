DROP TABLE IF EXISTS `chichu`;
CREATE TABLE `chichu` (
  `cid` int(11) NOT NULL auto_increment,
  `img` varchar(128) default NULL,
  `title` varchar(64) default NULL,
  `href` varchar(128) default NULL,
--   PRIMARY KEY  (`cid`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8;

-- 轮播图
-- ----------------------------
INSERT INTO `xz_index_carousel` VALUES ('9', 'img/index/banner1.png', '轮播广告商品1', 'product_details.html?lid=28');
INSERT INTO `xz_index_carousel` VALUES ('10', 'img/index/banner2.png', '轮播广告商品2', 'product_details.html?lid=19');
INSERT INTO `xz_index_carousel` VALUES ('11', 'img/index/banner3.png', '轮播广告商品3', 'lookforward.html');
INSERT INTO `xz_index_carousel` VALUES ('12', 'img/index/banner4.png', '轮播广告商品4', 'lookforward.html');
