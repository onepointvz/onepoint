/**
 * 
 */
Ext.define('wallet.controller.VZWalletController',{
	extend: 'Ext.app.Controller',
	views: ['LoginView', 'DecisionView', 'CashView','AddPayeeView'],
	refs:[{
		ref: 'loginview',
		selector: 'loginview'
		
	},{
		ref: 'decisionview',
		selector: 'decisionview'
		
	},{
		ref: 'cashview',
		selector: 'cashview'
		
	},{
		ref: 'addpayeeview',
		selector: 'addpayeeview'
		
	}],
	init: function() {
		this.control({
			'textfield[itemId=mdnText]': {
				'change': function(field, newVal, oldVal) {
					//this.getLoginview().down('[itemId=okBtn]').setDisabled(Ext.isEmpty(newVal));
					if (!Ext.isEmpty(newVal) && newVal.length === 10 ) {
						var existingUser = false, newUser = true;
						if (existingUser) {
							field.up('[itemId=loginview]').down('[itemId=pinCnt]').show();
							field.up('[itemId=loginview]').down('[itemId=okBtn]').setText('Login');
						} else if ( newUser ) {
							field.up('[itemId=loginview]').down('[itemId=pinCnt]').show();
							field.up('[itemId=loginview]').down('[itemId=rePinCnt]').show();
							field.up('[itemId=loginview]').down('[itemId=okBtn]').setText('Register');
						}
						/*Ext.Ajax.request({
							url: '',
							params: {},
							success: function(response) {
									
							},
							failure: function() {
								var existingUser = true, newUser = false;
								if (existingUser) {
									field.up('[itemId=loginview]').down('[itemId=pinCnt]').show();
									field.up('[itemId=loginview]').down('[itemId=okBtn]').setText('Login');
								} else if ( newUser ) {
									field.up('[itemId=loginview]').down('[itemId=pinCnt]').show();
									field.up('[itemId=loginview]').down('[itemId=rePinCnt]').show();
									field.up('[itemId=loginview]').down('[itemId=okBtn]').setText('Register');
								}
							}
						});*/
					}
				}
			},
			'button[itemId=okBtn]': {
				'click': function(btn) {
					this.hideAllViews();
					this.getDecisionview().show();
				}			
			},
			'decisionview': {
				'afterrender': function(view) {
					Ext.get('loadCash').on('click', function() {
						this.hideAllViews();
						this.getCashview().show();
					}, this);
					Ext.get('addPayee').on('click', function() {
						this.hideAllViews();
						this.getAddpayeeview().show();
					}, this);
				}
			},
			'button[itemId=cashGoBack]': {
				'click': function(){
					this.hideAllViews();
					this.getDecisionview().show();
				}
			},
			'cashview radiofield': {
				'change': function(field, newVal, oldVal) {
					if (newVal) {
						this.hideAllPayments();
					}
					if (field.itemId === 'creditRadio' && newVal) {
						this.getCashview().down('[itemId=creditCardCnt]').show();
					} else if (field.itemId === 'debitRadio' && newVal) {
						this.getCashview().down('[itemId=debitCardCnt]').show();
					} else if (field.itemId === 'netBankingRadio' && newVal) {
						this.getCashview().down('[itemId=netBankingCnt]').show();
					}
				}				
			}
		});
	},
	hideAllViews: function() {
		this.getLoginview().hide();
		this.getDecisionview().hide();
	},
	hideAllPayments: function() {
		this.getCashview().down('[itemId=creditCardCnt]').hide();
		this.getCashview().down('[itemId=debitCardCnt]').hide();
		this.getCashview().down('[itemId=netBankingCnt]').hide();
	}
});
