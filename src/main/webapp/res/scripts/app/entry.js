Ext.application({
	name: 'wallet',
	appFolder: 'res/scripts/app',
	requires: ['wallet.view.LoginView', 'wallet.view.DecisionView', 'wallet.view.CashView'],
	controllers: ['VZWalletController'],
	launch: function() {
		Ext.create('Ext.container.Viewport',{
			renderTo: Ext.getBody(),
			id: 'viewport',
			layout: 'fit',
			items:[{
				xtype: 'loginview'
			},
			{
				xtype: 'decisionview',
				hidden: true
			},{
				xtype: 'cashview',
				hidden: true
			}]
		});
	}
});