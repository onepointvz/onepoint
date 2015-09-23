/**
 * 
 */
Ext.define('wallet.controller.VZWalletController',{
	extend: 'Ext.app.Controller',
	views: ['LoginView', 'DecisionView', 'CashView'],
	refs:[{
		ref: 'loginview',
		selector: 'loginview'
		
	},{
		ref: 'decisionview',
		selector: 'decisionview'
		
	},{
		ref: 'cashview',
		selector: 'cashview'
		
	}],
	init: function() {
		this.control({
			'textfield[itemId=mdnText]': {
				'change': function(field, newVal, oldVal) {
					this.getLoginview().down('[itemId=okBtn]').setDisabled(Ext.isEmpty(newVal));						
				}
			},
			'button[itemId=okBtn]': {
				'click': function() {
					/*Ext.getCmp('viewport').removeAll();
					Ext.getCmp('viewport').add(this.getDecisionview());*/
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
				}
			},
			'button[itemId=cashGoBack]': {
				'click': function(){
					this.hideAllViews();
					this.getDecisionview().show();
				}
			}
		});
	},
	hideAllViews: function() {
		this.getLoginview().hide();
		this.getDecisionview().hide();
	}
});
