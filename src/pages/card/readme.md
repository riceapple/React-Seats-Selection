券未使用 status = 2-已绑定 , 点击， 只能呈现 充值页面

券已使用 status = 3-已使用, 点击 ，展示不同的tab  
1. ele.coupon_type = 6
        展示  盎司会员tab
2. ele.coupon_type != 6 and  ele.exchangeData.productType = 1        
        展示  商品直冲tab
        充值成功 ele.exchangeData.third_recharge_status
3. ele.coupon_type != 6 and  ele.exchangeData.productType = 2
        展示  卡密tab
        充值成功 ele.exchangeData.third_recharge_status


  `coupon_type`  '1-满减券、2-折扣券、3-商品兑换券、4-月月换券、5-套餐券、6-会员券',
  `third_recharge_status` int(1) DEFAULT NULL COMMENT '兑换的产品充值状态 1-充值中，2-充值成功，3-充值失败',
1. ele.coupon_type = 6
	展示  盎司会员tab
2. ele.coupon_type != 6 and  ele.exchangeData.productType = 1	
	展示  商品直冲tab
	充值成功 ele.exchangeData.third_recharge_status
3. ele.coupon_type != 6 and  ele.exchangeData.productType = 2
	展示  卡密tab
	充值成功 ele.exchangeData.third_recharge_status

`status` '卡券状态：1-未绑定，2-已绑定，3-已使用，4-已过期，5-已销毁',
`third_recharge_status` '兑换的产品充值状态 1-充值中，2-充值成功，3-充值失败',


情况1
coupon_type = 6 盎司会员tab 
兑换
ele.exchangeData.productType = 0
ele.exchangeData.thirdRechargeStatus = 0
ele.status = 0


情况2 
ele.exchangeData.productType = 2  卡密
复制
couponType = 0
ele.exchangeData.thirdRechargeStatus = 0
ele.status = 0


status = 2


情况3 
ele.exchangeData.productType = 1  直冲
充值成功/失败/支付中

couponType = 0
ele.exchangeData.thirdRechargeStatus = 0
ele.status = 0

情况3-1
ele.status = 2已绑定 , 点击， 只能呈现 充值页面
couponType = 0
ele.exchangeData.thirdRechargeStatus = 0

情况3-2
ele.status = 3已使用
couponType = 0
ele.exchangeData.thirdRechargeStatus = 1 充值中

情况3-3
ele.status = 3已使用
couponType = 0
ele.exchangeData.thirdRechargeStatus = 2 充值成功

情况3-3
ele.status = 3已使用
couponType = 0
ele.exchangeData.thirdRechargeStatus = 3 充值失败