/**
 * 
 */
Ext.define('wallet.view.DecisionView',{
	alias: 'widget.decisionview',
	extend: 'Ext.container.Container',
	height: '100%',
	layout: 'border',
	style: 'background-color: #FFFFFF;background: url(res/images/Verizon_Logo.jpg)',
	items:[{
		xtype: 'container',
		region: 'north',
		height: '20%'
	},{
		xtype: 'container',
		region: 'south',
		height: '20%'
	},{
		xtype: 'container',
		region: 'east',
		width: '20%'
	},{
		xtype: 'container',
		region: 'west',
		width: '20%'
	},{
		xtype: 'panel',
		title: '<div class="redFont">Actions</div>',
		region: 'center',
		tools: [{
			type: 'mytool',
			width: 'auto',
			renderTpl: [
				'<img id="" src="res/images/Logout.png" role="presentation" height="15" width="15"/>'
			],
			handler: function() {
			}
		}],
//		style: 'border:2px solid rgb(17,88,130);border-radius: 15px;',
		bodyPadding: '20 20 20 40',
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
				html: '<img src="./res/images/Load_Cash.jpg" height="50" width="50"/>'
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
				html: '<img src="./res/images/Payee.jpg" height="50" width="50"/>'
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
				html: '<img src="./res/images/Money_Transfer.jpg" height="50" width="50"/>'
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
				html: '<img src="./res/images/Loyalty_Offers.jpg" height="50" width="50"/>'
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