/**
 * 
 */
Ext.define('wallet.view.DecisionView',{
	alias: 'widget.decisionview',
	extend: 'Ext.container.Container',
	height: '100%',
	layout: 'border',
	style: 'background-color: #FFFFFF;background:url(res/images/vz_logo.jpg)',
	items:[{
		xtype: 'container',
		region: 'north',
		height: '37%'
	},{
		xtype: 'container',
		region: 'south',
		height: '30%'
	},{
		xtype: 'container',
		region: 'east',
		width: '37%'
	},{
		xtype: 'container',
		region: 'west',
		width: '40%'
	},{
		xtype: 'panel',
		title: 'Actions',
		region: 'center',
//		style: 'border:2px solid rgb(17,88,130);border-radius: 15px;',
		bodyPadding: '20 20 20 20',
		width: '100%',
//		padding: '10% 10% 10% 10%',
		height: '100%',
		layout: {
			type: 'vbox',
			pack: 'center'
		},
		defaults:{
			padding: '0 0 10 20'
		},
		items: [{
			xtype: 'container',
			width: '100%',
			layout: {
				type: 'table',
				columns: 3
			},
			items:[{
				xtype: 'container',
				html: '<img src="/vzwallet/res/images/Load_Cash.jpg" height="50" width="50"/>'
			},{
				xtype: 'tbspacer',
				width: 10
			},{
				xtype: 'container',
				height: '100%',
				width: '100%',
				html: '<b><a href="javascript:void(0);" id="loadCash">Load Cash</a></b>'
			}]
		},{
			xtype: 'container',
			width: '100%',
			layout: {
				type: 'table',
				columns: 3
			},
			items:[{
				xtype: 'container',
				html: '<img src="/vzwallet/res/images/Payee.jpg" height="50" width="50"/>'
			},{
				xtype: 'tbspacer',
				width: 10
			},{
				xtype: 'container',
				height: '100%',
				width: '100%',
				html: '<b>Register Payee</b>'
			}]
		},{
			xtype: 'container',
			width: '100%',
			layout: {
				type: 'table',
				columns: 3
			},
			items:[{
				xtype: 'container',
				html: '<img src="/vzwallet/res/images/Money_Transfer.jpg" height="50" width="50"/>'
			},{
				xtype: 'tbspacer',
				width: 10
			},{
				xtype: 'container',
				height: '100%',
				width: '100%',
				html: '<b>Transfer Money /Bill Pay</b>'
			}]
		},{
			xtype: 'container',
			width: '100%',
			layout: {
				type: 'table',
				columns: 3
			},
			items:[{
				xtype: 'container',
				html: '<img src="/vzwallet/res/images/Loyalty_Offers.jpg" height="50" width="50"/>'
			},{
				xtype: 'tbspacer',
				width: 10
			},{
				xtype: 'container',
				height: '100%',
				width: '100%',
				html: '<b>Loyalty Offers</b>'
			}]
		}]
	}]
});